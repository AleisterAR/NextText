from django.db import models

# Create your models here.
class Customer_Sites(models.Model):
    uri = models.CharField("name", max_length=20, min=5)
    user_id = models.ForeignKey("user.User", on_delete=models.CASCADE)