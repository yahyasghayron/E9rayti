from .models import Cours, Chapitre
from rest_framework import viewsets, permissions
from .serializers import CoursSerializer, ChapitreSerializer


# cours viewset
class CoursViewSet(viewsets.ModelViewSet):
    queryset = Cours.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = CoursSerializer


class ChapitreViewSet(viewsets.ModelViewSet):
    queryset = Chapitre.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ChapitreSerializer
