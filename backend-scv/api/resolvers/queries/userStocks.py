from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound
from api.models.models import UserStocks, db_session #, UserActivation
from os import path

def resolve_user_stocks(_, info, id):
   user_stocks = db_session.query(UserStocks).filter(UserStocks.user_id == id)
   return user_stocks
