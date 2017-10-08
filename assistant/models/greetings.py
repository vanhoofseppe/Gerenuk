from django.db import models
from .information import Information
import uuid


# Create your models here.
class Greeting(models.Model):
    id = models.UUIDField('id', primary_key=True, default=uuid.uuid4, editable=False)
    when = models.DateTimeField('date created', auto_now_add=True)


class GreetingQuestion(Information):
    question = models.ForeignKey(Greeting, on_delete=models.CASCADE)


class GreetingAnswer(Information):
    answer = models.ForeignKey(Greeting, on_delete=models.CASCADE)
