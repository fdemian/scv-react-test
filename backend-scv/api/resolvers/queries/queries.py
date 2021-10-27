from ariadne import QueryType
from api.resolvers.queries.user import resolve_user
from api.resolvers.queries.stocks import resolve_stocks

queries = QueryType()
queries.set_field("getUser", resolve_user)
queries.set_field("getStocks", resolve_stocks)
