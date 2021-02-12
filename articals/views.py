from django.shortcuts import render
from .forms import ArticalForm
from .models import Artical
from django.views.generic import (
    DetailView,
)


# Create your views here.


def createPost(request):
    form = ArticalForm(request.POST or None)
    if form.is_valid():
        form.save()
        form = ArticalForm()

    context = {
        'form': form
    }
    return render(request, 'createPost.html', context)


class ArticalDetailView(DetailView):
    model = Artical
    template_name = "post.html"
    queryset = Artical.objects.all()
