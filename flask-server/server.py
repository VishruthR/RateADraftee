from flask import Flask, jsonify
from database import connect_to_database
from flask_cors import CORS
from tweet_scraper import find_tweets
from credentials.credentials import creds
import boto3
import json

app = Flask(__name__)

client = boto3.client('lambda',
                        region_name=creds["region"],
                        aws_access_key_id=creds["aws_access_key_id"],
                        aws_secret_access_key=creds["aws_secret_access_key"])

CORS(app) 

# Search empty player
@app.route("/search/", methods=['GET'])
def search_player_default():
    return search_player("")

# Search player
@app.route("/search/<player_name>", methods=['GET'])
def search_player(player_name):
    query = "SELECT * FROM players WHERE pfr_player_name LIKE '%{}%'".format(player_name)
    rows = None
    
    connection = connect_to_database()
    cursor = connection.cursor()
    cursor.execute(query)

    rows = cursor.fetchall()
    
    users = []
    for row in rows:
        users.append({
            "name" : row[0], 
            "season" : row[1],
            "round" : row[2],
            "pick" : row[3],
            "team" : row[4],
            "id" : row[5],
            "position" : row[6],
            "college" : row[7]
            })

    response = jsonify(users)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# Retrieve player information and rate player
@app.route("/player/<player_id>", methods=['GET'])
def rate_player(player_id):
    query = "SELECT * FROM players WHERE pfr_player_id LIKE '%{}%'".format(player_id)
    rows = None

    connection = connect_to_database()
    cursor = connection.cursor()
    cursor.execute(query)

    rows = cursor.fetchall()

    users = []
    for row in rows:
        users.append({
            "name" : row[0], 
            "season" : row[1],
            "round" : row[2],
            "pick" : row[3],
            "team" : row[4],
            "id" : row[5],
            "position" : row[6],
            "college" : row[7]
            })

    # Get tweets based on users[0].season
    # Add it as a rating to the users dict
    tweets = find_tweets(users[0]["name"], users[0]["season"])

    users[0]["tweets"] = tweets

    payload = {"tweets" : [tweet.content for tweet in tweets]}

    result = client.invoke(FunctionName='ServerlessHuggingFaceStack-sentiment2141F307-sXds0brGZ1mP',
                    InvocationType='RequestResponse',                                      
                    Payload=json.dumps(payload))

    ratings = json.loads(result['Payload'].read())

    # Get rating
    users[0]["ratings"] = ratings

    response = jsonify(users[0])
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response



if __name__ == "__main__":
    app.run(debug=True)