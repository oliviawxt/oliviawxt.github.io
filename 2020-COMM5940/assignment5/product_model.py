from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/assign5'
app.config['SECRET_KEY'] = "mysecret"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class shows(db.Model):
    __tablename__ = 'shows'
    showsID = db.Column(db.Integer, primary_key=True)
    音乐剧名称 = db.Column(db.String(20))
    类型 = db.Column(db.String(10))
    poster = db.Column(db.Integer)
    最新卡司 = db.Column(db.String(30))
    评价 = db.Column(db.Text)
