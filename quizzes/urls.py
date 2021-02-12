from django.conf.urls import include, url
from django.urls import path
from . import views
from rest_framework import routers

from .api import QuizViewSet, QuestionViewSet, ResponseViewSet

router = routers.DefaultRouter()
router.register('api/quiz', QuizViewSet)
router.register('api/question', QuestionViewSet)
router.register('api/response', ResponseViewSet)


urlpatterns = [
    url("^", include(router.urls)),


]
