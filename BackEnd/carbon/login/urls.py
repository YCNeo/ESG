from django.urls import path
from . import views

urlpatterns = [
    path('', views.login_user, name="login"),
    path('revise_password', views.revise_password, name="revise_password"),
]
