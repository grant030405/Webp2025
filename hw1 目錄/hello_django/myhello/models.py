from django.db import models

# Create your models here.
from django.db import models 
class Post(models.Model): 
    department = models.CharField(max_length=100, blank=True, default='') 
    coursetitle = models.CharField(max_length=100, blank=True, default='')
    instructor = models.CharField(max_length=100, blank=True, default='') 
    