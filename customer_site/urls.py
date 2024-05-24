from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="site.index"),
    path("create", views.create, name="site.create"),
]
