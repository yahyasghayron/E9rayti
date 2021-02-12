from rest_framework import serializers
from .models import Quiz, Question, Response


class ResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Response
        fields = ('id', 'Question', 'is_correct', 'text')


class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ('id', 'quiz', 'responses', 'content')
        depth = 1


class QuizSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quiz
        fields = ('id', 'title', 'description', 'questions', 'chapitre')
        depth = 1
