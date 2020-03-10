class Config(object):
    DEBUG = True
    TESTING = True
    # SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://qseek_user:mypassword@192.168.99.100/qseek'
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://qseek_user:mypassword@127.0.0.1/qseek'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
