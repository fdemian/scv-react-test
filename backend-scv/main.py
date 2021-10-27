import json
from ariadne import QueryType, graphql_sync, combine_multipart_data
from api.schema import graphl_schema
from flask import Flask, request, jsonify
from os import path

app = Flask(__name__)

@app.route("/api/graphql", methods=["POST"])
def graphql_server():
   if request.content_type.startswith("multipart/form-data"):
      data = combine_multipart_data(
         json.loads(request.form.get("operations")),
         json.loads(request.form.get("map")),
         dict(request.files)
      )
   else:
       data = request.get_json()

   # Note: Passing the request to the context is optional.
   success, result = graphql_sync(
          graphl_schema,
          data,
          context_value=request,
          debug=app.debug
       )

   status_code = 200 if success else 400
   return jsonify(result), status_code


if __name__ == "__main__":
    app.run(debug=True)
