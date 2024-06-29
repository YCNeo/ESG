import mysql.connector

conn = mysql.connector.connect(
    host = '127.0.0.1',
    port = 3307,
    user = "root",
    password = "carbon2024",
    database = "ESG_db"
)