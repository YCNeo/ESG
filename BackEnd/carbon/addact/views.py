from django.shortcuts import render, render_to_response
from django.http import HttpResponse
import pymysql
from models import Act

# Create your views here.

def send(request):
	a=Act(act_id=1, act_name='test', category=1, type='T', act_hour=10)
	a.save()
