from django.db import models


class Setting(models.Model):
    key = models.TextField('Setting Key')
    value = models.TextField('Setting Value')
