from django.db import models

# Create your models here.
class Component(models.Model):
    selector = models.CharField("selector")
    index = models.IntegerField("index")
    type = models.CharField("type")
    content = models.CharField("content")
    keyword_id = models.ForeignKey("key_word.Key_word", on_delete=models.CASCADE)