from ariadne import MutationType
from api.resolvers.mutations.stock_mutations import (buy_stock, sell_stock )

# Mutation fields.
mutations = MutationType()
mutations.set_field("buyStock", buy_stock)
mutations.set_field("sellStock", sell_stock)
