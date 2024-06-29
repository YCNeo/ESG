FROM mysql:8.0

ENV MYSQL_DATABASE = 'ESG_db'
ENV MYSQL_ROOT_PASSWORD = ${MYSQL_ROOT_PASSWORD}
ENV MYSQL_USER = ${MYSQL_USER}
ENV MYSQL_PASSWORD = ${MYSQL_PASSWORD}

ADD ./backend/scripts/backup.sql /docker-entrypoint-initdb.d

EXPOSE 3307

CMD ["tail", "-f", "/dev/null"]