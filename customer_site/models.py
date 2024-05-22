from django.db import models

# Create your models here.
class CustomerSite(models.Model):
    uri = models.CharField("uri")
    user_id = models.ForeignKey("user.User", on_delete=models.CASCADE)