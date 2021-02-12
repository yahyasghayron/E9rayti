from django.db import models
from django.contrib.auth.models import User

from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.


class Artical(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField(max_length=500, blank=True)
    content = RichTextUploadingField()
    author = models.ForeignKey(
        User, related_name="articals", on_delete=models.CASCADE, null=True)
    public = models.BooleanField(default=False)
    vote = models.IntegerField(default=0)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Comment(models.Model):
    artical = models.ForeignKey(
        Artical,  on_delete=models.CASCADE, related_name='comment_artical')
    content = models.TextField()
    author = models.ForeignKey(
        User, related_name="comments", on_delete=models.CASCADE, null=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return "[%s] %s" % (self.author, self.content)
