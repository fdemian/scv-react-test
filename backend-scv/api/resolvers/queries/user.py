from sqlalchemy.orm.exc import MultipleResultsFound, NoResultFound
from api.models.models import User, db_session #, UserActivation
from os import path

def resolve_user(_, info, id):
     user = db_session.query(User).filter(User.id == id).one()
     if not user:
          raise Exception('Requested user does not exist.')
     else:
         return user
