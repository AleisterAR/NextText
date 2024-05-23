from django.db import models

# Create your models here.
class Key_word(models.Model):
    name = models.CharField("name", max_length=255)
    url = models.TextField("url")
    site_id = models.ForeignKey("customer_site.CustomerSite", on_delete=models.CASCADE)
    user_id = models.ForeignKey("user.User", on_delete=models.CASCADE)