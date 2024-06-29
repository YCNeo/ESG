FROM mysql:8.0

ENV MYSQL_DATABASE = 'ESG_db'
ENV MYSQL_ROOT_PASSWORD = 'carbon2024'
ENV MYSQL_USER = 'user'
ENV MYSQL_PASSWORD = 'carbon2024'

ADD ./backend/scripts/backup.sql /docker-entrypoint-initdb.d

EXPOSE 3307
