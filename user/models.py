from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField("name", max_length=35)
    password = models.CharField("password", max_length=20)
    email = models.EmailField("email")

    class Meta:
        db_table = 'user'
