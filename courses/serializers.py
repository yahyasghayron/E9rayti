from rest_framework import serializers
from .models import Chapitre, Cours


class CoursSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cours
        fields = ('id', 'title', 'description', 'public',
                  'vote', 'author', 'created_at')


class ChapitreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chapitre
        fields = ('id', 'title', 'content', 'cours',
                  'order', 'quiz', 'created_at')
