from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, "site/index.jinja")

def create(request):
    return render(request, "site/create.jinja")