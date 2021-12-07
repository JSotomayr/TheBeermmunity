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
    

@api.route('/beer', methods=['GET'])
def getAllBeers():
    beers = Beer.get_all()

    if beers:
        beer_list = [beer.to_dict() for beer in beers]
        return jsonify(beer_list), 200

    return jsonify({'error': 'Beers not found'}), 404
