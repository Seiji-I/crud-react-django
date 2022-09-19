from django.db import models

# Create your models here.

class Item(models.Model):
  created = models.DateTimeField(auto_now_add=True)
  name = models.CharField(max_length=50)

  class Meta:
    ordering = ['created']