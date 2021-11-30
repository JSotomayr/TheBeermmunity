from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

favourite_beer = db.Table('favourite_beer',
    db.Column('brewer_id', db.Integer, db.ForeignKey('brewer.id'), primary_key=True),
    db.Column('beer_id', db.Integer, db.ForeignKey('beer.id'), primary_key=True))


pending_beer = db.Table('pending_beer',
    db.Column('brewer_id', db.Integer, db.ForeignKey('brewer.id'), primary_key=True),
    db.Column('beer_id', db.Integer, db.ForeignKey('beer.id'), primary_key=True))


wishlist_beer = db.Table('wishlist_beer',
    db.Column('brewer_id', db.Integer, db.ForeignKey('brewer.id'), primary_key=True),
    db.Column('beer_id', db.Integer, db.ForeignKey('beer.id'), primary_key=True))


favourite_brewerie = db.Table('favourite_brewerie',
    db.Column('brewer_id', db.Integer, db.ForeignKey('brewer.id'), primary_key=True),
    db.Column('brewerie_id', db.Integer, db.ForeignKey('brewerie.id'), primary_key=True))


brewer_go_to_event = db.Table('brewer_go_to_event',
    db.Column('brewer_id', db.Integer, db.ForeignKey('brewer.id'), primary_key=True),
    db.Column('event_id', db.Integer, db.ForeignKey('event.id'), primary_key=True))


brewerie_has_event = db.Table('brewerie_has_event',
    db.Column('brewerie_id', db.Integer, db.ForeignKey('brewerie.id'), primary_key=True),
    db.Column('event_id', db.Integer, db.ForeignKey('event.id'), primary_key=True))


class Customer(db.Model):
    __tablename__: 'customer'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(), unique=True, nullable=False)
    _password = db.Column(db.String(), unique=False, nullable=False)
    username = db.Column(db.String(), unique=True, nullable=False)
    _is_active = db.Column(db.Boolean, unique=False, nullable=False, default=True)
    _is_brewer = db.Column(db.Boolean, unique=False, nullable=False, default=False)
    _is_brewerie = db.Column(db.Boolean, unique=False, nullable=False, default=False)

    def __repr__(self):
        return f'User has {self.id}, {self.username} with {self.email}'

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username
        }


class Brewer(db.Model):
    __tablename__: 'brewer'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    lastname = db.Column(db.String(), unique=False, nullable=False)
    country = db.Column(db.String(), unique=False, nullable=False)
    city = db.Column(db.String(), unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=True)
    image = db.Column(db.Text, unique=False, nullable=True)
    id_customer = db.Column(db.Integer, db.ForeignKey('customer.id'), unique=True, nullable=False)

    have_fav_beer = db.relationship("Beer", secondary=favourite_beer, back_populates="have_fav_beer_brewer")
    have_pend_beer = db.relationship("Beer", secondary=pending_beer, back_populates="have_pend_beer_brewer")
    have_wish_beer = db.relationship("Beer", secondary=wishlist_beer, back_populates="have_wish_beer_brewer")
    have_fav_brew = db.relationship("Brewerie", secondary=favourite_brewerie, back_populates="have_fav_brew_brewer")
    go_to_event = db.relationship("Event", secondary=brewer_go_to_event, back_populates="go_to_event_brewer")

    def __repr__(self):
        return f"Brewer with id {self.id}, named {self.name} {self.lastname} in {self.city}, {self.country}."


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "country": self.country,
            "city": self.city,
            "description": self.description,
            "image": self.image
        }


class Brewerie(db.Model):
    __tablename__: 'brewerie'

    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(), unique=True, nullable=False)
    address = db.Column(db.String(), unique=False, nullable=False)
    country = db.Column(db.String(), unique=False, nullable=False)
    city = db.Column(db.String(), unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=True)
    image = db.Column(db.String(), unique=False, nullable=True)
    id_customer = db.Column(db.Integer, db.ForeignKey('customer.id'), unique=True, nullable=False)

    have_fav_brew_brewer = db.relationship("Brewerie", secondary=wishlist_beer, back_populates="have_fav_brew")
    makes_event = db.relationship("Event", secondary=brewerie_has_event, back_populates="event_has_brewerie")

    def __repr__(self):
        return f"Breweries with id {self.id}, named {self.company_name} in {self.address} in {self.city}, {self.country}."


    def to_dict(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "address": self.address,
            "country": self.country,
            "city": self.city,
            "description": self.description,
            "image": self.image
        }


class Beer(db.Model):
    __tablename__: 'table'

    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String(), unique=False, nullable=False)
    variety = db.Column(db.String(), unique=False, nullable=False)
    style = db.Column(db.String(), unique=False, nullable=False)
    origin = db.Column(db.String(), unique=False, nullable=False)
    obv = db.Column(db.FLOAT(), unique=False, nullable=False)
    drinking_temperature = db.Column(db.FLOAT(), unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)
    image = db.Column(db.String(), unique=False, nullable=False)
    publishment_date = db.Column(db.DATE(), unique=False, nullable=True)

    have_fav_beer_brewer = db.relationship("Brewer", secondary=favourite_beer, back_populates="have_fav_beer")
    have_pend_beer_brewer = db.relationship("Brewer", secondary=favourite_beer, back_populates="have_pend_beer")
    have_wish_beer_brewer = db.relationship("Brewer", secondary=wishlist_beer, back_populates="have_wish_beer")


    def __repr__(self):
        return f"Beers with id {self.id}, named {self.brand} {self.variety} with {self.style} from {self.origin}, with {self.obv} and a drinking termperature of {self.drinking_temperature}."


    def to_dict(self):
        return {
            "id": self.id,
            "brand": self.brand,
            "variety": self.variety,
            "style": self.style,
            "origin": self.origin,
            "obv": self.obv,
            "drinking_temperature": self.drinking_temperature,
            "description": self.description,
            "image": self.image,
            "publishment_date": self.publishment_date
        }


class Review(db.Model):
    __tablename__: 'review'

    id = db.Column(db.Integer, primary_key=True)
    review_content = db.Column(db.Text, unique=False, nullable=False)
    rating = db.Column(db.Integer, unique=False, nullable=False)
    brewer_id = db.Column(db.Integer, db.ForeignKey('brewer.id'), unique=False, nullable=False)
    beer_id = db.Column(db.Integer, db.ForeignKey('beer.id'), unique=False, nullable=False)
    brewerie_id = db.Column(db.Integer, db.ForeignKey('brewerie.id'), unique=False, nullable=False)


    def __repr__(self):
        return f"Review with id {self.id}."


    def to_dict(self):
        return {
            "id": self.id,
            "review_content": self.review_content,
            "rating": self.rating,
            "user_id": self.user_id,
            "beer_id": self.beer_id,
            "brewerie_id": self.brewerie_id
        }


class Event(db.Model):
    __tablename__: 'event'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)
    date = db.Column(db.DATE(), unique=False, nullable=True)
    location = db.Column(db.Text, unique=False, nullable=False)
    image = db.Column(db.Text, unique=False, nullable=False)

    go_to_event_brewer = db.relationship("Brewer", secondary=brewer_go_to_event, back_populates="go_to_event")
    event_has_brewerie = db.relationship("Brewerie", secondary=brewerie_has_event, back_populates="makes_event")



    def __repr__(self):
        return f"Event with id {self.id}, named {self.name} the {self.date} in {self.location}."


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "date": self.date,
            "location": self.location,
            "image": self.image
        }


# class Admin(db.Model):
#     __tablename__: 'admin'

#     id = db.Column(db.Integer, primary_key=True)
