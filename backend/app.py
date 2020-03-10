from flask import Flask
from flask_cors import CORS

from api.api import api
from api.models import db
from api.config import Config


def register_extensions(app):
    api.init_app(app)
    db.init_app(app)
    db.create_all(app=app)


def create_app(config):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config)
    register_extensions(app)
    return app


# flask_app = create_app(Config)


# Run the application
if __name__ == '__main__':
    flask_app = create_app(Config)
    flask_app.run(host='127.0.0.1', port=8000, debug=True, threaded=True)
