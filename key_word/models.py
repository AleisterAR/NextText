from django.db import models
from customer_site.models import CustomerSite
from user.models import User

# Create your models here.
class Keyword(models.Model):
    name = models.CharField("name", max_length=255)
    url = models.TextField("url")
    site_id = models.ForeignKey(CustomerSite, on_delete=models.CASCADE, db_column="site_id")
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user_id")

    class Meta:
        db_table = 'key_word'