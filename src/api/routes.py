"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Customer, Brewer, Brewerie, Beer, Review, Event
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200



@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if email and password:
        business = Brewerie.get_by_email(email)

        if user:
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
    new_email = request.json.get('email', None)
    new_username = request.json.get('username', None)
    new_password = request.json.get('password', None)

    if not (new_email and new_username and new_password):
        return jsonify({'error': 'Missing customer'}), 400

    customer_created = Customer(email=new_email, username=new_username, _password=new_password) 

    try:
        customer_created.create()
    except exc.IntegrityError:
        return jsonify({'error': 'Fail in creating user'}), 400
    
    account = Customer.get_by_email(new_email)
    access_token = create_access_token(identity=account.to_dict(), expires_delta=timedelta(days=30))
    return jsonify({'token': access_token}), 200

    def update(self, item):
        self.item=item
        db.session.commit()
        return self

    def delete(self):
        db.session.delete(self)
        db.session.commit()
        return self


@app.route('/customer/<int:id>/favourite', methods=['GET'])
@jwt_required
def get_fav(id):
    token_id = get_jwt_identity()

    if token_id == id:
        favourites = Favourite.get_all()
        return favourite

    return jsonify({'error': 'You are not authorized'})

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

