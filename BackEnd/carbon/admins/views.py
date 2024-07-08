from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
import random, string
"""
def create_user(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            messages.success(request, ("Registration Successful"))
            return redirect('hello')
    else:
        form = UserCreationForm()

    return render(request, 'register.html', {'form':form}) 
"""

def create_user(request):
    if request.method == 'POST':
        username = request.POST["username"]

        digits = string.digits
        upper = string.ascii_uppercase
        lower = string.ascii_lowercase
        rdpassword = random.sample(digits, 3) + random.sample(upper, 3) + random.sample(lower, 4)
        random.shuffle(rdpassword)
        rdpassword = ''.join(rdpassword)

        user = User.objects.create_user(username, password="testpswd")
        message = "User Created\nUsername: " + username +"\nPassword: " + rdpassword
        messages.success(request, message)
    return render(request, 'create_user.html')