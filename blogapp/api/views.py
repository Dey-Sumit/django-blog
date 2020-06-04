from rest_framework import mixins, generics, authentication
from rest_framework.response import Response
from ..models import Blog
from ..serializers import BlogSerializer


class Blog_List(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

    def perform_create(self, serializer):
        serializer.save()


class Blog_Detail_View(generics.RetrieveUpdateDestroyAPIView):
    # authentication_classes = (authentication.SessionAuthentication, authentication.BasicAuthentication, authentication.TokenAuthentication)
    # permission_classes=[permissions.IsAuthenticated]
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
