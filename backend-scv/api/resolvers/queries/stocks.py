from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound
from api.models.models import Stock, db_session
from os import path

def resolve_stocks(_, info):
     stocks = db_session.query(Stock).all()
     return stocks
