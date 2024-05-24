from django.shortcuts import render


def home(request):
    return render(request, "keyword/index.jinja")

def create(request):
    return render(request, "keyword/create.jinja")