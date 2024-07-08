from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, update_session_auth_hash, logout
from django.contrib import messages
from django.contrib.auth.models import User

def login_user(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('hello')
        else:
            messages.success(request, ("There is an error logging in."))
            return redirect('login')
    
    
    else:
        return render(request, 'loginpage.html')

    

def revise_password(request):
    if request.method == 'POST':
        # username = request.POST['username']
        user = request.user
        old_password = request.POST['old_password']
        new_password1 = request.POST['new_password1']
        new_password2 = request.POST['new_password2']
        # try:
            # user = User.objects.get(username=username)
        if user.check_password(old_password):
            if new_password1 == new_password2:
                user.set_password(new_password2)
                user.save()
                logout(request)
                message = 'Revised password successfully. Please log in again.'
                messages.success(request, message)
                return redirect('login')
                #update_session_auth_hash(request, form.user)
            else:
                message = 'New passwords are not the same.'
                messages.success(request, message)
                return redirect('revise_password')
        else:
            message = 'Wrong password'
            messages.success(request, message)
            return redirect('revise_password')
        # except user.DoesNotExist:
        #     message = 'User does not exist.'
        #     messages.success(request, message)
        #     return redirect('login/revise_password')
    else:
        return render(request, 'revise_password.html')