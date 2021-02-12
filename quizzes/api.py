
from .models import Quiz, Question, Response
from rest_framework import viewsets, permissions
from .serializers import QuestionSerializer, QuizSerializer, ResponseSerializer



class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = QuizSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = QuestionSerializer


class ResponseViewSet(viewsets.ModelViewSet):
    queryset = Response.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ResponseSerializer
