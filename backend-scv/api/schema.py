from ariadne import (
 graphql_sync,
 make_executable_schema,
 upload_scalar
)
#from api.resolvers.mutations.mutations import mutations
from api.resolvers.queries.queries import queries
from ariadne import load_schema_from_path

type_defs = load_schema_from_path("./api/schema.graphql")
graphl_schema = make_executable_schema(type_defs, [queries])
