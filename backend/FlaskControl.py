import json
from flask import Flask

app = Flask(__name__)



@app.route("/api/get_all_sightings")
def get_all_sightings():
    ## Didnt have time to actually implement with database
    # but would do something like
    # db = mongoclient
    # col = mongo collection storing sightings
    # mycol.find({"id": {"$exists": true}}) <- only return entries with valid ids
    with open("sightings.json", "r") as f:
        data = f.read()
    return data

@app.route("/api/get_sighting/<id>")
def get_sighting(id):
    ## Didnt have time to actually implement with database
    # but would do something like
    # db = mongoclient
    # col = mongo collection storing sightings
    # mycol.find_one({"id": id})
    with open("sightings.json", "r") as json_file:
        json_data = json.load(json_file)
        for data in json_data:
            if str(data["id"]) == str(id):
                print(data)
                return data
    return {"error": "failed to find sighting with that id"}


@app.route("/api/new_sighting", methods=["GET", "POST"])
def new_sighting():
    ## Didnt have time to actually implement
    # but would do something like
    # db = mongoclient  
    # col = mongo collection storing sightings
    # mycol.create_one({"id": id, #along with other data})
    return {"message": "created sucessfully"}

@app.route("/api/delete/<id>")
def delete_sighting(id):
    ## Didnt have time to actually implement
    # but would do something like
    # db = mongoclient
    # col = mongo collection storing sightings
    # mycol.delete_one({"id": id})
    return {"message": "deleted sucessfully"}

@app.route("/api/update/<id>")
def update_sighting(id):
    ## Didnt have time to actually implement
    # but would do something like
    # db = mongoclient
    # col = mongo collection storing sightings
    # mycol.update_one({"id": id}, {"$set": # put updated fields here })
    return {"message": "deleted sucessfully"}