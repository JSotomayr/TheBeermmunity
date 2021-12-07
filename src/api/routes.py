"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Customer, Brewer, Brewerie, Beer, Review, Event
from api.utils import generate_sitemap, APIException
from datetime import timedelta, datetime
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS


from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from api.admin import setup_admin
from sqlalchemy import exc
from werkzeug.security import check_password_hash, generate_password_hash



api = Blueprint('api', __name__)


@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    username = request.json.get('username', None)
    password = request.json.get('password', None)


    if email and password:
        brewerie = Brewerie.get_by_email(email)

        if brewerie:
            """ password = Brewerie.get_by_password(password) """ 
            access_token = create_access_token(identity=brewerie.to_dict(), expires_delta=timedelta(days=30))
            return jsonify({'token': access_token}), 200
    
        return jsonify({'error': 'Invalid information'}), 400
    return jsonify({"msg": "Wrong info"})



@app.route('/customer', methods=['GET'])
def get_customer():
    customers = Customer.get_all()

    customers_list = [customer.to_dict() for customer in customers]

    return jsonify(customers_list), 200



@app.route('/customer/<int:id>', methods=['GET'])
def get_customer_by_id(id):
    customer = Customer.get_by_id(id)

    if customer:
        return jsonify(customer.to_dict()), 200

    return jsonify({'error': 'Customer is not found'}), 404




@app.route('/customer', methods=['POST'])
def create_customer():

    is_active = True
    new_email = request.json.get('email', None)
    new_username = request.json.get('username', None)
    new_password = request.json.get('password', None)
    new_country = request.json.get('country', None)
    new_city = request.json.get('city', None)
    new_description = request.json.get('description')
    new_image = request.json.get('image')

    if not (new_email and new_username and new_password):
        return jsonify({'error': 'Missing customer'}), 400

    customer_created = Customer(email=new_email, username=new_username, _password=generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),is_active = is_active) 

    try:
        customer_created.create()
    except exc.IntegrityError:
        return jsonify({'error': 'Fail in creating user'}), 400

    if new_customer:
        account = Customer.get_by_email(new_email)
        access_token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(days=30))
        return jsonify({'token': access_token}), 200


@api.route('/customer/<int:id>', methods=['GET'])
@jwt_required()
def get_by_id(id):
    print(get_jwt_identity())
    if not id == get_jwt_identity():
        return jsonify({'message': 'not authorized'}), 301
        
    customer = customer.get_by_id(id)
    if not (customer):
        return jsonify({'msg': 'Account not found'}),404
    return jsonify(customer.to_dict()),200           



@api.route('/customer/<int:id>', methods = ['DELETE'])
@jwt_required()
def delete_account(id):
    if not id == get_jwt_identity():
        return jsonify({'message': 'Not authorized'}), 301

    customer = Customer.get_by_id(id)
    if customer:
        customer.disable_customer()
        return jsonify({'message': 'Customer deleted'}, customer.to_dict())
    return jsonify({'message': 'Customer not found'}), 404



@app.route('/brewerie', methods=['GET'])
def get_brewerie():
    breweries = Brewerie.get_all()

    breweries_list = [brewerie.to_dict() for brewerie in breweries]

    return jsonify(breweries_list), 200





@app.route('/brewerie/<int:id>', methods=['GET'])
def get_brewerie_by_id(id):
    brewerie = Brewerie.get_by_id(id)

    if brewerie:
        return jsonify(brewerie.to_dict()), 200

    return jsonify({'error': 'Brewerie is not found'}), 404





