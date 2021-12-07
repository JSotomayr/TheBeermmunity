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
from api.models import db, Customer, Brewer, Brewerie, Beer, Review, Event

api = Blueprint('api', __name__)


@api.route('/login', methods=["POST"])
def login():
    email = request.json.get('email', None)
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not (email and password and username):
        return({'error':'Missing info'}), 400

    user = User.get_by_email(email)

    if user and check_password_hash(user.password, password) and user.is_active:
        token = create_access_token(identity=user.serialize(), expires_delta=timedelta(minutes=100))
        return({'token' : token}) , 200

    else:
        return({'error':'Some parameter is wrong'}), 400
        

@api.route('/beer', methods=['GET'])
def getAllBeers():
    beers = Beer.get_all()

    if beers:
        beer_list = [beer.to_dict() for beer in beers]
        return jsonify(beer_list), 200

    return jsonify({'error': 'Beers not found'}), 404
