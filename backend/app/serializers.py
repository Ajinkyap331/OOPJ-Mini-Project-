from attr import fields
from rest_framework import serializers
from .models import Question, Character

class QuestionSerializer(serializers.ModelSerializer):
    class Meta():
        model = Question
        exclude = ['id']


class CharacterSerializer(serializers.ModelSerializer):
    class Meta():
        model = Character
        exclude = ['id']
        