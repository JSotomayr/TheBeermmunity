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

    if not (new_email and new_username and new_password and new_country and new_city):
        return jsonify({'error': 'Missing customer'}), 400

    customer_created = Customer(
        email=new_email, 
        username=new_username, 
        country=new_country, 
        city=new_city, 
        description=new_description, 
        image=new_image, 
        _password=generate_password_hash(new_password, method='pbkdf2:sha256', 
        salt_length=16))

    try:
        customer_created.create()
    except exc.IntegrityError:
        return jsonify({'error': 'Fail in creating user'}), 400

    account = Customer.get_by_email(new_email)
 
    if account:
        token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(minutes=100))
        return({'token' : token}), 200

        
@api.route('/customer/<int:id>', methods = ['GET'])
def get_customer(id):
    one_customer = Customer.get_by_id_customer(id)

    if one_customer:
        
        return jsonify(one_customer.to_dict()), 200

    return jsonify({'msg' : 'Customer not foud'}), 404


@api.route('/beer', methods=['GET'])
def getAllBeers():
    beers = Beer.get_all()

    if beers:
        beer_list = [beer.to_dict() for beer in beers]
        return jsonify(beer_list), 200

    return jsonify({'error': 'Beers not found'}), 404


@api.route('/beer/<int:id>', methods=['GET'])
def beerDetail(id):
    beer = Beer.get_by_id(id)

    if beer:
        return jsonify(beer.to_dict()), 200

    return jsonify({'error': 'Beer not found'}), 404


@api.route('/brewer/<int:id>', methods = ['GET'])
def get_brewer(id):
    one_brewer = Brewer.get_by_id_brewer(id)

    if one_brewer:
        
        return jsonify(one_brewer.to_dict()), 200

    return jsonify({'msg' : 'Brewer not foud'}), 404


@api.route('/brewerie/<int:id>', methods = ['GET'])
def get_brewerie(id):
    one_brewerie = Brewerie.get_by_id(id)

    if one_brewerie:
        
        return jsonify(one_brewerie.to_dict()), 200

    return jsonify({'msg' : 'Brewerie not foud'}), 404