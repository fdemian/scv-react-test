# flask_sqlalchemy/models.py
from sqlalchemy import *
from sqlalchemy.orm import (
 scoped_session,
 sessionmaker,
 relationship,
 backref
)
from sqlalchemy.ext.declarative import declarative_base
from .sessionHelper import get_session
from os import path

config_file = '../../config.json'
config_file_path = path.join(path.dirname(__file__), config_file)

db_session = get_session(config_file_path)
Base = declarative_base()
Base.query = db_session.query_property()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, nullable=False)
    username = Column(Unicode(50), nullable=False)
    savings = Column(Integer, nullable=False)

    # Stocks
    stocks = relationship("Stock", back_populates='user')

class Stock(Base):
    __tablename__ = 'stocks'
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(Unicode(50), nullable=False)
    current_price = Column(Integer, nullable=False)

class UserStocks(Base):
    __tablename__ = 'user_stocks'
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    stock_id = Column(Integer, ForeignKey('stocks.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
