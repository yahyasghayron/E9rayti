from django.contrib import admin
from .models import Quiz, Question, Response

# Register your models here.


class InLineResponse(admin.StackedInline):
    model = Response
    extra = 0


class InLineQuestion(admin.StackedInline):
    model = Question
    extra = 0


class QuizAdmin(admin.ModelAdmin):
    inlines = [InLineQuestion]
    pass


class QuestionAdmin(admin.ModelAdmin):
    inlines = [InLineResponse]
    pass


admin.site.register(Quiz, QuizAdmin)
admin.site.register(Question, QuestionAdmin)
