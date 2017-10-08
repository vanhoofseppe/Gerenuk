from django.db import models
import uuid


# Create your models here.
class Information(models.Model):
    id = models.UUIDField('id', primary_key=True, default=uuid.uuid4, editable=False)
    info = models.TextField('info')
