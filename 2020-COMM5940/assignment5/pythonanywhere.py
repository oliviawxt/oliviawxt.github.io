############# Flask Modules Setup ##############

from flask import Flask, render_template, url_for, redirect, request, make_response, Response, jsonify
from flask_login import LoginManager, login_user, current_user, logout_user, login_required, UserMixin
#from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import requests
import jwt


############ Initialize Flask App ##############

app = Flask(__name__)
#CORS(app)

#### MySQL SQLAlchemy Object Relations Mapping #####

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://OliviaWangtt:olivia0424!@OliviaWangtt.mysql.pythonanywhere-services.com/OliviaWangtt$assign5'
app.config['SECRET_KEY'] = "mysecret"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Shows(db.Model):
    __tablename__ = 'shows'
    showsID = db.Column(db.Integer, primary_key=True)
    音乐剧名称 = db.Column(db.String(3))
    类型 = db.Column(db.String(30))
    poster = db.Column(db.Integer)
    最新卡司 = db.Column(db.String(50))
    评价 = db.Column(db.Integer)
    # description = db.Column(db.Text)

############## Login Manager Setup ###############

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
app.config['SECRET_KEY'] = "lkkajdghdadkglajkgah"


@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

class User(UserMixin):
  def __init__(self,id):
    self.id = id

############ Web Page Routes Setup ###############

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/login")
def login():
    if current_user.is_authenticated:
        return redirect(url_for("list_album"))
    message = 'Please login in first.'
    return render_template('login.html', message=message)

@app.route("/form_auth",methods=['POST'])
def form_auth():
    username = request.form['email']
    password = request.form['pwd']
    if username == "1155130054@link.cuhk.edu.hk" and password == "1234":
        login_user(User(1))
        # message = "Dear " + username + ", welcome to Olivia's pages. Your login has been granted."
        return redirect(url_for("list_album"))
    else:
        message = 'Wrong password!'
        return render_template('login.html',message=message)

@app.route("/list_album")
@login_required
def list_album():
    dataset = []
    show_list = Shows.query.all()
    for show in show_list:
        dataset.append({'showsID': show.showsID, '音乐剧名称': show.音乐剧名称, '类型': show.类型,
                       'poster': show.poster, '最新卡司':show.最新卡司,'评价': show.评价})
    return render_template('list_album2.html', entries=dataset)

@app.route('/album')
def album():
    page_num = 1
    shows = Shows.query.paginate(per_page=3, page=page_num, error_out=True)
    return render_template('show_paging.html', shows=shows)

@app.route('/album/<int:page_num>')
def album_paging(page_num):
    shows = Shows.query.paginate(per_page=3, page=page_num, error_out=True)
    return render_template('show_paging.html', shows=shows)

@app.route("/add_show",methods=['POST'])
@login_required
def add_show():
    音乐剧名称 = request.form['音乐剧名称']
    类型 = request.form['类型']
    最新卡司= request.form['最新卡司']
    评价= request.form['评价']
    show = Shows(音乐剧名称=音乐剧名称,类型=类型,最新卡司=最新卡司,评价=评价)
    db.session.add(show)
    db.session.commit()
    dataset = []
    show_list = Shows.query.all()
    for show in show_list:
        dataset.append({'showsID': show.showsID,'音乐剧名称': show.音乐剧名称, '类型': show.类型,
                        '最新卡司':show.最新卡司,'评价': show.评价})
    return render_template('list_album2.html', entries=dataset)

@app.route("/update_show",methods=['POST','PUT'])
@login_required
def update_show():
    record_id = request.form['record_id']
    show = Shows.query.filter_by(showsID=record_id).first()
    show.音乐剧名称 = request.form['音乐剧名称']
    show.类型 = request.form['类型']
    show.最新卡司 = request.form['最新卡司']
    show.评价 = request.form['评价']
    db.session.commit()
    dataset = []
    show_list = Shows.query.all()
    for show in show_list:
        dataset.append({'showsID': show.showsID, '音乐剧名称': show.音乐剧名称, '类型': show.类型,
                        '最新卡司':show.最新卡司,'评价': show.评价})
    return render_template('list_album2.html', entries=dataset)

@app.route("/delete_show",methods=['POST','DELETE'])
@login_required
def delete_show():
    record_id = request.form['record_id']
    show = Shows.query.filter_by(showsID=record_id).first()
    db.session.delete(show)
    db.session.commit()
    dataset = []
    show_list = Shows.query.all()
    for show in show_list:
        dataset.append({'showsID': show.showsID, '音乐剧名称': show.音乐剧名称, '类型': show.类型,
                     '最新卡司':show.最新卡司,'评价': show.评价})
    return render_template('list_album2.html', entries=dataset)


@app.route('/api')
def api():
    result = db.engine.execute('select * from shows')
    final_result = [list(i) for i in result]
    dataset=[]
    dict={}
    for i in final_result:
        dict['showsID'] = i[0]
        dict['音乐剧名称'] = i[1]
        dict['类型'] = i[2]
        dict['poster'] = i[3]
        dict['最新卡司'] = i[4]
        dict['评价'] = i[5]
        # print(i)
        # print(dict)
        dataset.append(dict.copy()) #markers.append(fld.copy())
    return jsonify({'Album': dataset})

@app.route('/logout/')
@login_required
def logout():
    logout_user()
    message = 'Thanks for logging out.'
    return render_template('login.html',message=message)

@app.errorhandler(500)
def internal_error(error):
    message = 'Wrong password!'
    return render_template('login.html',message=message),500

######### API Endpoints ##########


######### Run Flask Web App at Port 9030 ##########

if __name__ == '__main__':
     app.run(debug = True)