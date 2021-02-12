from django.db import models
from courses.models import Chapitre
# Create your models here.


class Quiz(models.Model):
    chapitre = models.ForeignKey(
        Chapitre, on_delete=models.CASCADE, related_name="quiz")
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=500, blank=True)

    def __str__(self):
        return self.title

    class Meta:

        verbose_name_plural = "Quizzes"


class Question(models.Model):
    quiz = models.ForeignKey(
        Quiz, on_delete=models.CASCADE, related_name="questions")
    content = models.TextField(max_length=500, blank=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.content


class Response(models.Model):
    Question = models.ForeignKey(
        Question,  on_delete=models.CASCADE,  related_name="responses")
    is_correct = models.BooleanField(default=False)
    text = models.TextField(max_length=500, blank=True)
