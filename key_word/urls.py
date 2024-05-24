from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="keyword.index"),
    path("create", views.create, name="keyword.create"),
]
