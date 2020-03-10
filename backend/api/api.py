from flask import jsonify
from flask_restful import (
    Api,
    Resource,
)

from .models import (
    to_dict,
    Tweet as TweetModel,
)


api = Api()


class Tweet(Resource):
    def get(self):
        return jsonify([to_dict(tweet) for tweet in TweetModel.query.all()])


api.add_resource(Tweet, '/')
