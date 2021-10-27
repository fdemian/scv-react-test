from ariadne import QueryType
from api.resolvers.queries.user import resolve_user
from api.resolvers.queries.stocks import resolve_stocks
from api.resolvers.queries.userStocks import (resolve_user_stocks, resolve_stock_detail)

queries = QueryType()
queries.set_field("getUser", resolve_user)
queries.set_field("getStocks", resolve_stocks)
queries.set_field("getUserStocks", resolve_user_stocks)
queries.set_field("getStockDetail", resolve_stock_detail)
