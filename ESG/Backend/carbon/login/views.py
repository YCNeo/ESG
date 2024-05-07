from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth

# Create your views here.
def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect('/hello')
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = auth.authenticate(username=username, password=password)
    if user is not None and user.is_active:
        auth.login(request, user)
        return HttpResponseRedirect('/hello')
    else:
        return render(request, 'loginpage.html', locals())