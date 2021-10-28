from ariadne import MutationType
from api.resolvers.mutations.stock_mutations import (
  buy_stock,
  sell_stock,
  load_stock_value,
  update_stock_value
)

# Mutation fields.
mutations = MutationType()
mutations.set_field("buyStock", buy_stock)
mutations.set_field("sellStock", sell_stock)
mutations.set_field("loadStockValue", load_stock_value)
mutations.set_field("updateStockValue", update_stock_value)
