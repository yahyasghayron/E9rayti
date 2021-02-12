from .models import Artical, Comment
from rest_framework import viewsets, permissions
from .serializers import ArticalSerializer, CommentSerializer
from django.contrib.auth.models import User
from accounts.serializers import UserSerializer

# artical veiwset


class ArticalViewSet(viewsets.ModelViewSet):

    queryset = Artical.objects.all().order_by('-created_at')
    permission_classes = [
        permissions.AllowAny, ]
    serializer_class = ArticalSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().order_by('-created_at')
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = CommentSerializer

    def perform_create(self, serializer):

        serializer.save(author=self.request.user)
