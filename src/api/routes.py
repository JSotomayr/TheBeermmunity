"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Customer, Brewer, Brewerie, Beer, BrewerieReview, BeerReview, Event
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify({'error': 'Beers not found'}), 404


@api.route('/beer/<int:id>', methods=['GET'])
def beerDetail(id):
    beer = Beer.get_by_id(id)

    if beer:
        return jsonify(beer.to_dict()), 200

    return jsonify({'error': 'Beer not found'}), 404
