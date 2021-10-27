from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound
from api.models.models import UserStocks, Stock, db_session
from os import path

def buy_stock(_, info, user, stock, amount):
    try:

        stock = db_session.query(Stock).filter(Stock.id == stock).one()
        if stock is None:
            return {
              'ok': False,
              'message': "The stock you are trying to buy does not exist."
            }

        user_stock = db_session.query(UserStocks).filter(
           UserStocks.user_id == user and
           UserStocks.stock_id == stock
        ).one()

        if user_stock is None:
            if amount < 0:
                return {
                  'ok': False,
                  'message': "It is not possible to buy a negative amount."
                }
            else:
                userStock = UserStock()
                userStock.stock_id = stock
                userStock.user_id = user
                db_session.add(userStock)
                db_session.commit()

                return {
                 'ok': True,
                 'message': ''
                }
        else:
            user_stock = UserStock()
            user_stock.quantity = user_stock.quantity + amount
            db_session.add(userStock)
            db_session.commit()

    except:
        return {
          'ok': False,
          'message': 'Unknown error'
        }


def sell_stock(_, info, user, stock, amount):
    try:

        stock = db_session.query(Stock).filter(Stock.id == stock).one()
        if stock is None:
            return {
              'ok': False,
              'message': "The stock you are trying to sell does not exist."
            }

        user_stock = db_session.query(UserStocks).filter(
           UserStocks.user_id == user and
           UserStocks.stock_id == stock
        ).one()

        if user_stock is None:
            return {
              'ok': False,
              'message': "You can't sell a stock you haven't bought."
            }
        else:
           if user_stock.quantity - amount < 0:
               return {
                 'ok': False,
                 'message': "You can't sell an amount of stocks that leaves you with a negative balance."
               }
           else:
               user_stock.quantity = user_stock.quantity - amount
               db_session.add(user_stock)
               db_session.commit()
               return {
                 'ok': True,
                 'message': ""
               }
    except:
        return {
          'ok': False,
          'message': 'Unknown error'
        }
