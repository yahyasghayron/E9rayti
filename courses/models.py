from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
# Create your models here.


class Cours(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField(max_length=500, blank=True)
    author = models.CharField(max_length=50, blank=True)
    vote = models.IntegerField(default=0)
    public = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['created_at', ]

        verbose_name_plural = "Courses"


class Chapitre(models.Model):
    title = models.CharField(max_length=500)
    content = RichTextUploadingField()
    cours = models.ForeignKey(Cours, on_delete=models.CASCADE)
    order = models.IntegerField()
    public = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
