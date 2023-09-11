"""
URL configuration for django_react_proj project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from students import views as student_views
from users import urls as user_urls
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # Admin App
    path('admin/', admin.site.urls),
    # Accounts App TODO Needed?
    path('accounts/', include('django.contrib.auth.urls')), 
    # Students App TODO Factor this out
    re_path(r'^api/students/$', student_views.students_list),
    re_path(r'^api/students/([0-9])$', student_views.students_detail),
    # Token Authentication
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    # Users App
    path('api/users/', include(user_urls)),
]