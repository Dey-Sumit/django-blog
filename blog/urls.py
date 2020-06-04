
from django.contrib import admin
from django.urls import path, include
from blogapp import views
urlpatterns = [
    path('', views.index, name="home"),
    path('admin/', admin.site.urls),
    path('api/blog/', include('blogapp.api.urls'))
]
