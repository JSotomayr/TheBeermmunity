"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from datetime import timedelta, datetime

from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS


from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
from utils import APIException, generate_sitemap
from admin import setup_admin
from sqlalchemy import exc
from models import db, User, 

api = Blueprint('api', __name__)


@api.route('/login', methods=["POST"])
def login():
    email = request.json.get('email', None)
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if not (email and password and username):
        return({'error':'Missing info'}), 400

    user = User.get_by_email(email)

    if user and check_password_hash(user._password, password) and user._is_active:
        token = create_access_token(identity=user.serialize(), expires_delta=timedelta(minutes=100))
        return({'token' : token}) , 200

    else:
        return({'error':'Some parameter is wrong'}), 400