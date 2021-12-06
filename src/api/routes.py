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
from api.models import db, User
from werkzeug.security import check_password_hash, generate_password_hash

api = Blueprint('api', __name__)


@api.route('/user', methods=['POST'])
def create_user(): 

    is_active = True
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    username = request.json.get("username", None)

    if not (email and password and username):
        return {"error":"Missing info"}, 400

    new_user = User(
        is_active = is_active,
        email=email,
        password = generate_password_hash(password, method='pbkdf2:sha256', salt_length=16),
        username=username
    )

    try:
        new_user.create()
    except exc.IntegrityError: 
        return {"error":"something went wrong"}, 409


    if new_user:
        token = create_access_token(identity=new_user.serialize(), expires_delta=timedelta(minutes=100))
        return({'token' : token}), 200



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