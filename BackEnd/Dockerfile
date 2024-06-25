FROM python:3.9

WORKDIR /app

COPY requirements.txt /app/

RUN pip install -r requirements.txt --no-cache-dir

COPY . /app/

EXPOSE 8000

ENTRYPOINT [ "python" ]

CMD [ "manage.py", "runserver", "127.0.0.0:8000" ]