from django.conf.urls import include, url
from django.urls import path
from . import views
from rest_framework import routers

from .api import CoursViewSet, ChapitreViewSet

router = routers.DefaultRouter()
router.register('api/courses', CoursViewSet)
router.register('api/chapters', ChapitreViewSet)

urlpatterns = [
    url("^", include(router.urls)),


]
