from django.db import models
from .information import Information


class Facebook(models.Model):
    id = models.DecimalField('Facebook ID', primary_key=True, decimal_places=25, max_digits=35)


class FacebookInformation(Information):
    facebook = models.ForeignKey(Facebook, on_delete=models.CASCADE)
