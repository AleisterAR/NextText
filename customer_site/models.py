from django.db import models
from user.models import User

# Create your models here.
class CustomerSite(models.Model):
    uri = models.CharField("uri", max_length=255)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user_id")

    class Meta:
        db_table = 'customer_site'