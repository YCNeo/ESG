import utils.db as connector

query = """
SELECT *
FROM users
"""
conn = connector.get_connection()
cursor = conn.cursor()
cursor.execute(query)
row = cursor.fetchall()
print(row)
cursor.close()
conn.close()