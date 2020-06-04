from django.shortcuts import render
from .models import Blog


def index(request):
    blogs = Blog.objects.all()
    print(blogs)
    return render(request, 'blog/home.html', {'blogs': blogs})
