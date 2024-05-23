from django.db import models

# Create your models here.
class Component(models.Model):
    selector = models.CharField("selector", max_length=255)
    index = models.IntegerField("index")
    type = models.CharField("type", max_length=255)
    content = models.TextField("content")
    keyword_id = models.ForeignKey("key_word.Key_word", on_delete=models.CASCADE)