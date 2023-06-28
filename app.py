from flask import Flask, render_template, request, redirect
from psycopg2 import connect, extras
app = Flask(__name__)

@app.route('/')
def home():
    return render_template ("menu.html")

@app.route("/Templates/login")
def login():
    return render_template("login.html")











if Flask == ('__main__'):
    app.run(debug=True)