from django.db import models
from key_word.models import Keyword

# Create your models here.
class Component(models.Model):
    selector = models.CharField("selector", max_length=255)
    index = models.IntegerField("index")
    type = models.CharField("type", max_length=255)
    content = models.TextField("content")
    keyword_id = models.ForeignKey(Keyword, on_delete=models.CASCADE, db_column="keyword_id")

    class Meta:
        db_table = 'component'