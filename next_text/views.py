from django.shortcuts import render


def home(request):
    return render(request, "dashboard/index.jinja")


def login(request):
    return render(request, "login/index.jinja")
