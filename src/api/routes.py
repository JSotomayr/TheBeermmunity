"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Customer, Brewer, Brewerie, Beer, Review, Event
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)

app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_KEY")
jwt = JWTManager(app)

@api.route('/admin', methods=['POST'])
def create_admin():
    new_email = request.json.get('email', None)
    new_password = request.json.get('password', None)
    new_username = request.json.get('username', None)
    new_country = request.json.get('country', None)
    new_city = request.json.get('city', None)
    new_description = request.json.get('description', None)
    new_image = request.json.get('image', None)


    if not (new_email and new_username and new_password and new_country and new_city):
        return jsonify({'error': 'Missing user'}), 400

    user_created = User(email=new_email, username=new_username, _password=new_password, country=new_country, city=new_city, description=new_description, image=new_image) 

    try:
        user_created.create()
    except exc.IntegrityError:
        return jsonify({'error': 'Fail in creating user'}), 400
    
    account = Customer.get_by_email(new_email)
    access_token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(days=30))
    return jsonify({'token': access_token}), 200


@api.route('/admin/new_beer', methods=['POST'])
def create_beer():
    admin  = request.json.get('is_admin', None)
    
    if admin == True:
        new_brand = request.json.get('brand', None)
        new_variety = request.json.get('variety', None)
        new_style = request.json.get('style', None)
        new_origin = request.json.get('origin', None)
        new_obv = request.json.get('obv', None)
        new_drinking_temperature = request.json.get('drinking_temperature', None)
        new_description = request.json.get('description', None)
        new_image = request.json.get('image', None)
        new_publishment_date = request.json.get('publishment_date', None)

        if not (new_brand and new_variety and new_style and new_origin and new_obv and new_drinking_temperature and new_description and new_image and new_publishment_date):
            return jsonify({'error': 'Missing beer'}), 400

        beer_created = User(brand=new_brand, variety=new_variety, style=newnew_style, origin=new_origin, obv=new_obv, drinking_temperature=new_drinking_temperature, description=new_description, image=new_image, publishment_date=new_publishment_date) 

        try:
            beer_created.create()
        except exc.IntegrityError:
            return jsonify({'error': 'Fail in creating beer'}), 400
    
    return jsonify({'Success': 'Beer created successfully'}), 200    
    