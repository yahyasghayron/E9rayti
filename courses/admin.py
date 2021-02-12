from django.contrib import admin
from .models import Chapitre, Cours
# Register your models here.
# admin.site.register(Cours)
# admin.site.register(Chapitre)


class InLineChapter(admin.StackedInline):
    model = Chapitre
    extra = 1


class CoursAdmin(admin.ModelAdmin):
    inlines = [InLineChapter]
    pass


admin.site.register(Cours, CoursAdmin)
