from django.conf.urls import include, url
from django.urls import path
from . import views
from rest_framework import routers

from .api import ArticalViewSet, CommentViewSet

router = routers.DefaultRouter()
router.register('api/articals', ArticalViewSet)
router.register('api/comments', CommentViewSet)

urlpatterns = [
    url("^", include(router.urls)),
    path('create/articals', views.createPost, name='create'),
    path('artical/<pk>/', views.ArticalDetailView.as_view(), name='post'),

]
