import pymysql

def connect_to_database():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="#Derpboss89",
        database="rateadraftee"
    )
