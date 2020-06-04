from django.db import models
from django.contrib.auth import get_user_model
user = get_user_model()

class CommentBLog(models.Model):
    pass


class Blog(models.Model):
    heading = models.CharField(max_length=40)
    content = models.TextField()
    author = models.ForeignKey(user, on_delete=models.CASCADE)
    claps = models.IntegerField(default=0)
    #comments = models.ManyToManyField(user,related_name='comments',through='CommentBlog')
