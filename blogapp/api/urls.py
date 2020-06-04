from django.urls import path, include
from . import views
urlpatterns = [
    path('<int:pk>/', views.Blog_Detail_View.as_view()),
    path('list/', views.Blog_List.as_view())
]
