from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField("name", max_length=20, min=5)
    password = models.CharField("password", max_length=20, min=8)
    email = models.EmailField("email")
