from django import forms
from .models import Artical
from ckeditor_uploader.widgets import CKEditorUploadingWidget


class ArticalForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget(
        attrs={
            'class': '',
            'style': "display : inlne ",
        }
    ))
    title = forms.CharField(widget=forms.TextInput(
        attrs={
            'class': 'form-control',
        }
    ))
    description = forms.CharField(widget=forms.TextInput(
        attrs={
            'class': 'form-control ',


        }
    ))

    class Meta:
        model = Artical
        fields = ('title', 'description',
                  'content')
