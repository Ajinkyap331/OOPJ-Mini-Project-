from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Question, Character
from .serializers import QuestionSerializer, CharacterSerializer

@api_view(['GET'])
def getQuestions(request):
    objs = Question.objects.all()
    serializer = QuestionSerializer(objs,many=True)
    return Response(serializer.data,status=200)


@api_view(['GET'])
def getCharacters(request):
    objs = Character.objects.all()
    serializer = CharacterSerializer(objs, many=True)
    return Response(serializer.data, status=200)