import os
import pandas as pd
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Resources/cost_of_living.sqlite")
# reflect an existing database into a new model
# Base = automap_base()
# reflect the tables
# Base.prepare(engine, reflect=True)
# Save references to each table
# Cost_of_living = Base.classes.cost_of_living
#List_Data = Base.classes.list_data
#Dropdown = Base.classes.dropdow
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index2.html")

@app.route("/cost-of-living")
def Country():
    """Return a list of country names."""
 # Create our session (link) from Python to the DB
    # session = Session(engine)
# Use Pandas to perform the sql query
   # stmt = db.session.query(Cost_of_living).statement
    #df = pd.read_sql_query(stmt, db.session.bind)
        # Query all passengers
    # cost_of_living2022 = session.query(Cost_of_living.Country, Cost_of_living.Cost_of_Living_Index, Cost_of_living.Year).all()
    data = pd.read_sql("SELECT * FROM cost_of_living", engine)
    data = data.to_json(orient="records")
    # Return a list of the column names (sample names)
    return render_template("index2.html", data=data)
    

if __name__ == "__main__":
    app.run(debug=True)
