"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from datetime import timedelta, datetime

from flask import Flask, request, jsonify, url_for, Blueprint
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS


from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from api.utils import APIException, generate_sitemap
from api.admin import setup_admin
from sqlalchemy import exc
from werkzeug.security import check_password_hash, generate_password_hash
from api.models import db, Customer, Brewer, Brewerie, Beer, BrewerieReview, BeerReview, Event


app = Flask(__name__)


api = Blueprint('api', __name__)


#   CREATE NEW CUSTOMER
@api.route('/customer', methods=['POST'])
def create_customer():
    is_active = True
    new_email = request.json.get('email', None)
    new_username = request.json.get('username', None)
    new_password = request.json.get('password', None)
    new_country = request.json.get('country', None)
    new_city = request.json.get('city', None)
    new_description = request.json.get('description')
    new_image = request.json.get('image')
    user_type= request.json.get("userType")
    

    if not (new_email and new_username and new_password and new_country and new_city):
        return jsonify({'error': 'Missing parameters'}), 409

    customer_created = Customer(
        email=new_email, 
        username=new_username, 
        country=new_country, 
        city=new_city, 
        _password=generate_password_hash(new_password, method='pbkdf2:sha256', 
        salt_length=16),
        _is_active=True,
        _is_brewerie= True if user_type == "business" else False,
        _is_admin=False
    )
        

    try:
        customer_created.create()

        if customer_created._is_brewerie:
            new_address = request.json.get("address", None)
            new_company_name = request.json.get("company_name", None)

            if (new_address and new_company_name):
                brewerie_created = Brewerie(
                    company_name = new_company_name,  
                    address = new_address,
                    id_customer = customer_created.id 
                )
                try:
                    brewerie_created.create()
                except exc.IntegrityError:
                    return jsonify({'error': 'Fail in creating brewerie'}), 400
            
            else:
                return jsonify({'error': 'Missing information: new_address and new company_name'}), 400    
        else:
            new_name = request.json.get("name", None)
            new_lastname = request.json.get("lastname", None)

            if (new_name and new_lastname):
                brewer_created = Brewer(
                    name =  new_name,
                    lastname = new_lastname,
                    id_customer = customer_created.id    
                )

                try:
                    brewer_created.create()
                except exc.IntegrityError:
                    return jsonify({'error': 'Fail in creating brewer/user'}), 400
    
    except exc.IntegrityError:
        return jsonify({'error': 'Fail in creating user'}), 400
  
    token = create_access_token(identity=customer_created.to_dict(), expires_delta=timedelta(days=100))
    return({'token' : token}), 200


#   CUSTOMER LOG IN
@api.route('/login', methods=["POST"])
def login():
    email = request.json.get('email', None)
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    print("EMAIL", email)
    if not (email and username and password):
        return({'error':'Missing info'}), 400

    customer = Customer.get_by_email(email)   

    if customer and check_password_hash(customer._password, password) and customer._is_active:
        token = create_access_token(identity=customer.to_dict(), expires_delta=timedelta(days=100))
        return({'token' : token}) , 200

    else:
        return({'error':'Some parameter is wrong'}), 400
        
        
#   GET ONE CUSTOMER       
@api.route('/customer/<int:id>', methods=['GET'])
def get_customer(id):
    one_customer = Customer.get_by_id(id)
    
    if one_customer:
        return jsonify(one_customer.to_dict()), 200

    return jsonify({'msg' : 'Customer not foud'}), 404


#   GET ALL BEERS
@api.route('/beer', methods=['GET'])
def getAllBeers():
    beers = Beer.get_all()

    if beers:
        beer_list = [beer.to_dict() for beer in beers]
        return jsonify(beer_list), 200

    return jsonify({'error': 'Beers not found'}), 404


#   GET ONE BEER
@api.route('/beer/<int:id>', methods=['GET'])
def beerDetail(id):
    beer = Beer.get_by_id(id)

    if beer:
        return jsonify(beer.to_dict()), 200

    return jsonify({'error': 'Beer not found'}), 404


#   GET ONE BREWER
@api.route('/brewer/<int:id>', methods = ['GET'])
def get_brewer(id):
    one_brewer = Brewer.get_by_id(id)

    if one_brewer:
        
        return jsonify(one_brewer.to_dict()), 200

    return jsonify({'msg' : 'Brewer not foud'}), 404


# GET ONE BREWERIE
@api.route('/brewerie/<int:id>', methods = ['GET'])
def get_brewerie(id):
    one_brewerie = Brewerie.get_by_id(id)

    if one_brewerie:
        
        return jsonify(one_brewerie.to_dict()), 200

    return jsonify({'msg' : 'Brewerie not foud'}), 404



# POST FAVOURITE BEER
@api.route('/brewer/<int:id_brewer>/favourite-beer/<int:id_beer>', methods=['POST'])
@jwt_required()
def add_favbeer(id_brewer, id_beer):
    identity = get_jwt_identity()

    if identity.get("id") == id_brewer:
        brewer = Brewer.get_by_id(id_brewer)
        beer = Beer.get_by_id(id_beer) 
        fav_beers_id = list(map(lambda x:x.id, brewer.have_fav_beer))

        if brewer and beer and beer.id not in fav_beers_id:
            add_beer = brewer.add_fav_beer(beer)
            fav_beer = [beer.to_dict() for beer in add_beer]
            return jsonify(fav_beer),200

        elif beer.id in fav_beers_id:
            delete_beer = brewer.delete_fav_beer(beer)
            fav_beer = [beer.to_dict() for beer in delete_beer]
            return jsonify(fav_beer),200

    return jsonify({'error': 'Not favourites'}),404


#   GET FAVOURITE LIST   
@api.route('/brewer/<int:id>/favourite-beer', methods = ['GET'])
@jwt_required()
def get_fav_beers(id):
    identity = get_jwt_identity()
    

    if identity.get("id") == id:
        brewer = Brewer.get_by_id(id)     
        return jsonify(list(map(lambda x:x.to_dict(), brewer.have_fav_beer))), 200

    return jsonify({'error': 'No favourite beers'}),404


#   POST TASTED BEER
@api.route('/brewer/<int:id_brewer>/tasted-beer/<int:id_beer>', methods=['POST'])
@jwt_required()
def add_tasted_beer(id_brewer, id_beer):
    identity = get_jwt_identity()

    if identity.get("id") == id_brewer:
        brewer = Brewer.get_by_id(id_brewer)
        beer = Beer.get_by_id(id_beer) 
        tasted_beers_id = list(map(lambda x:x.id, brewer.have_tasted_beer))

        if brewer and beer and beer.id not in tasted_beers_id:
            add_beer = brewer.add_tasted_beer(beer)
            tasted_beer = [beer.to_dict() for beer in add_beer]
            return jsonify(tasted_beer),200

        elif beer.id in tasted_beers_id:
            delete_beer = brewer.delete_tasted_beer(beer)
            tasted_beer = [beer.to_dict() for beer in delete_beer]
            return jsonify(tasted_beer),200

    return jsonify({'error': 'No Tasted beers'}),404


#   GET TASTED BEER
@api.route('/brewer/<int:id>/tasted-beer', methods = ['GET'])
@jwt_required()
def get_tasted_beers(id):
    identity = get_jwt_identity()
    
    if identity.get("id") == id: 
        brewer = Brewer.get_by_id(id)       
        return jsonify(list(map(lambda x:x.to_dict(), brewer.have_tasted_beer))), 200

    return jsonify({'error' : 'Tasted beers not found'}), 404


#   POST WISHED BEER
@api.route('/brewer/<int:id_brewer>/wish-beer/<int:id_beer>', methods=['POST'])
@jwt_required()
def add_wish_beer(id_brewer, id_beer):
    identity = get_jwt_identity()

    if identity.get("id") == id_brewer:
        brewer = Brewer.get_by_id(id_brewer)
        beer = Beer.get_by_id(id_beer) 
        wish_beers_id = list(map(lambda x:x.id, brewer.have_wish_beer))

        if brewer and beer and beer.id not in wish_beers_id:
            add_beer = brewer.add_wish_beer(beer)
            wish_beer = [beer.to_dict() for beer in add_beer]
            return jsonify(wish_beer),200

        elif beer.id in wish_beers_id:
            delete_beer = brewer.delete_wish_beer(beer)
            wish_beer = [beer.to_dict() for beer in delete_beer]
            return jsonify(wish_beer),200

    return jsonify({'error': 'Not favourites'}),404


#   GET WISHED BEER
@api.route('/brewer/<int:id>/wish-beer', methods = ['GET'])
@jwt_required()
def get_wish_beers(id):
    identity = get_jwt_identity()
    
    if identity.get("id") == id: 
        brewer = Brewer.get_by_id(id)       
        return jsonify(list(map(lambda x:x.to_dict(), brewer.have_wish_beer))), 200

    return jsonify({'error' : 'Wished beers not found'}), 404


@api.route('/brewerie', methods=['POST'])
def create_brewerie():

    is_active = True
    new_email = request.json.get('email', None, )
    new_username = request.json.get('username', None)
    new_password = request.json.get('password', None)
    new_country = request.json.get('country', None)
    new_city = request.json.get('city', None)
    new_description = request.json.get('description')
    new_image = request.json.get('image')

    if not (new_email and new_username and new_password and new_country and new_city):
        return jsonify({'error': 'Missing brewerie'}), 400

    brewerie_created = brewerie(
        email=new_email, 
        username=new_username, 
        country=new_country, 
        city=new_city, 
        description=new_description, 
        image=new_image, 
        _password=generate_password_hash(new_password, method='pbkdf2:sha256', 
        salt_length=16))
    

    try:
        brewerie_created.create()
    except exc.IntegrityError:
        return jsonify({'error': 'Fail in creating user'}), 400

    account = Brewerie.get_by_email(new_email)
 
    if account:
        token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(minutes=100))
        return({'token' : token}), 200


#   GET ALL BREWERIES
@api.route('/brewerie', methods=['GET'])
def get_all_breweries():
    brewerie_s = Brewerie.get_all()

    if brewerie_s:
        all_breweries = [brewerie.to_dict() for brewerie in brewerie_s]
        return jsonify(all_breweries), 200

    return jsonify({'error': 'Brewerie not found'}), 400


@api.route('/search', methods=['POST'])
def get_beer_bybrand():

    brand = request.json.get('brand', None)
    if brand:
        beers = Beer.query.filter(Beer.brand.ilike('%' + brand + '%'))

        beers = beers.order_by(Beer.brand).all()
        print(beers)
        print(list(map(lambda x: x.to_dict(),beers)))
        return jsonify({'response': list(map(lambda x: x.to_dict(),beers))})
    else:
        return jsnofy({'response':[]})
