from django.db import models
from .information import Information


class Facebook(models.Model):
    id = models.DecimalField('Facebook ID', primary_key=True)


class FacebookInformation(Information):
    facebook = models.ForeignKey(Facebook, on_delete=models.CASCADE)
