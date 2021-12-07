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


class Customer(db.Model):
    __tablename__: 'customer'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(), unique=True, nullable=False)
    _password = db.Column(db.String(), unique=False, nullable=False)
    username = db.Column(db.String(), unique=True, nullable=False)
    country = db.Column(db.String(), unique=False, nullable=False)
    city = db.Column(db.String(), unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=True)
    image = db.Column(db.Text, unique=False, nullable=True)
    _is_active = db.Column(db.Boolean, unique=False, nullable=False, default=True)
    _is_brewerie = db.Column(db.Boolean, unique=False, nullable=False, default=False)
    _is_admin = db.Column(db.Boolean, unique=False, nullable=False, default=False)
    friend_id = db.Column(db.Integer, db.ForeignKey('customer.id'), unique=False, nullable=False )

    friend = db.relationship("Customer", lazy="joined", join_depth=2)

    has_brewer = db.relationship("Brewer", backref="customer")
    has_brewerie = db.relationship("Brewerie", backref="customer")


    def __repr__(self):
        return f'Customer has {self.id} and {self.username} with {self.email} living in {self.city}, {self.country}'

    def to_dict(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "country": self.country,
            "city": self.city,
            "description": self.description,
            "image": self.image,
        }

    
    def create(self):
       db.session.add(self)
       db.session.commit()


    @classmethod
    def get_by_email(cls, email):
        account = cls.query.filter_by(email=email).one_or_none()
        return account


    @classmethod
    def get_by_password(cls, password):
        secretPass = cls.query.filter_by(password=password).one_or_none()
        return secretPass

    @classmethod
    def get_all(cls):
        customers = cls.query.all()
        return customers
  
    @classmethod
    def get_by_id(cls, id):
        customer = cls.query.get(id)
        return customer

    def update(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)
        db.session.commit()
        return self

    def validate_password(self,password):
        is_valid = check_password_hash(self._password,password)
        print(is_valid)
        return is_valid

    def delete(self):
        self.is_active = False
        db.session.commit()



class Brewer(db.Model):
    __tablename__: 'brewer'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    lastname = db.Column(db.String(), unique=False, nullable=False)
    id_customer = db.Column(db.Integer, db.ForeignKey('customer.id'), unique=True, nullable=False)


    have_fav_beer = db.relationship("Beer", secondary=favourite_beer, back_populates="have_fav_beer_brewer")
    have_pend_beer = db.relationship("Beer", secondary=pending_beer, back_populates="have_pend_beer_brewer")
    have_wish_beer = db.relationship("Beer", secondary=wishlist_beer, back_populates="have_wish_beer_brewer")
    have_fav_brewerie = db.relationship("Brewerie", secondary=favourite_brewerie, back_populates="have_fav_brewerie_brewer")
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
    company_name = db.Column(db.String(), unique=False, nullable=False)
    address = db.Column(db.String(), unique=False, nullable=False)
    id_customer = db.Column(db.Integer, db.ForeignKey('customer.id'), unique=True, nullable=False)
    review_id = db.Column(db.Integer, db.ForeignKey('review.id'), unique=False, nullable=False)

    have_fav_brewerie_brewer = db.relationship("Brewer", secondary=favourite_brewerie, back_populates="have_fav_brewerie")


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

    
    def create(self):
       db.session.add(self)
       db.session.commit()


    @classmethod
    def get_all(cls):
        brewerie = cls.query.all()
        return breweries
  

    @classmethod
    def get_brewerie_by_id(cls, id):
        brewerie_id = cls.query.get(id)
        return brewerie_id


class Beer(db.Model):
    __tablename__: 'beer'

    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String(), unique=False, nullable=False)
    variety = db.Column(db.String(), unique=False, nullable=False)
    style = db.Column(db.Enum('Lager', 'Pilsen', 'Negra', 'IPA', 'Trigo', name='enum_style'), unique=False, nullable=False)
    origin = db.Column(db.Enum('España', 'Alemania', 'Francia', 'Italia', 'Portugal', 'Holanda', 'Bélgica', 'Polonia', 'USA', name='enum_origin'), unique=False, nullable=False)
    obv = db.Column(db.FLOAT(), unique=False, nullable=False)
    drinking_temperature = db.Column(db.FLOAT(), unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)
    image = db.Column(db.Text, unique=False, nullable=False)
    publishment_date = db.Column(db.DATE(), unique=False, nullable=True)
    review_id = db.Column(db.Integer, db.ForeignKey('review.id'), unique=False, nullable=False)

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
    publishment_date = db.Column(db.DATE(), unique=False, nullable=True)
    brewer_id = db.Column(db.Integer, db.ForeignKey('brewer.id'), unique=False, nullable=False)

    rate_beer = db.relationship("Beer", backref="review")
    rate_brewerie = db.relationship("Brewerie", backref="review")

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


    def create(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_all(cls):
        get_all_reviews = cls.query.all()
        return get_all_reviews


class Event(db.Model):
    __tablename__: 'event'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=False, nullable=False)
    description = db.Column(db.Text, unique=False, nullable=False)
    date = db.Column(db.DATE(), unique=False, nullable=True)
    country = db.Column(db.String(), unique=False, nullable=False)
    city = db.Column(db.String(), unique=False, nullable=False)
    address = db.Column(db.String(), unique=False, nullable=False)
    image = db.Column(db.Text, unique=False, nullable=False)
    brewerie_id = db.Column(db.Integer, db.ForeignKey('brewerie.id'), unique=True, nullable=False)

    go_to_event_brewer = db.relationship("Brewer", secondary=brewer_go_to_event, back_populates="go_to_event")



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




