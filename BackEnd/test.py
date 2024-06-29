from utils.db import conn

query = """
SELECT *
FROM users
"""

cursor = conn.cursor()
print(cursor.execute(query))