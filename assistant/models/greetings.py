from django.db import models
from .information import Information


# Create your models here.
class Greeting(models.Model):
    when = models.DateTimeField('date created', auto_now_add=True)


class GreetingQuestion(Information):
    question = models.ForeignKey(Greeting, on_delete=models.CASCADE)


class GreetingAnswer(Information):
    answer = models.ForeignKey(Greeting, on_delete=models.CASCADE)
