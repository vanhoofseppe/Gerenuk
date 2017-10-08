from django.db import models


class Setting(models.Model):
    key = models.TextField('Setting Key', primary_key=True)
    value = models.TextField('Setting Value')
