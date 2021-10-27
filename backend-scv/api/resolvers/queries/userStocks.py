from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound
from api.models.models import UserStocks, Stock, db_session
from os import path

def resolve_user_stocks(_, info, id):
   user_stocks = db_session.query(UserStocks).filter(UserStocks.user_id == id)
   return user_stocks

def resolve_stock_detail(_, info, user, stock):
    try:
        user_stocks = db_session.query(UserStocks).filter(UserStocks.user_id == user, UserStocks.stock_id == stock).one()
        return user_stocks
    except Exception as e:
        stock = db_session.query(Stock).filter(Stock.id == stock).one()
        return {
          'stock': stock,
          'quantity': 0
        }
