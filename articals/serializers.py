from rest_framework import serializers
from .models import Artical, Comment
from accounts.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    # author = UserSerializer()

    class Meta:
        model = Comment
        fields = '__all__'


class ArticalSerializer(serializers.ModelSerializer):
    author = serializers.StringRelatedField(read_only=True)
    # author = UserSerializer()

    class Meta:
        model = Artical
        fields = '__all__'
