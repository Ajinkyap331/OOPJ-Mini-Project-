from django.db import models
from jsonfield import JSONField


PRIORITIES = (
        (0, 'Is'),
        (1, 'Does'),
    )

class Question(models.Model):

    start = models.IntegerField(default=0, choices=PRIORITIES)
    quest = models.CharField(max_length=1000, null=False, blank=False)

    def __str__(self):
        return self.quest

class Character(models.Model):
    name = models.CharField(max_length=255, null=False, blank=False)
    imageurl = models.CharField(max_length=1000, null=True, blank=True)
    yes_no = JSONField()

    def __str__(self):
        return self.name