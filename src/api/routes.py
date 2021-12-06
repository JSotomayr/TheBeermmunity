"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Customer, Brewer, Brewerie, Beer, Review, Event
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/beer', methods=['GET'])
def getAllBeers():
    beers = Beer.get_all()

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200