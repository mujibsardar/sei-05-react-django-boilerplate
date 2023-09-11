from django.urls import path
from .views import register_user, login_function

urlpatterns = [
    path('register/', register_user, name='register'),
    # path('login/', UserLogin.as_view(), name='login'),
    path('login/', login_function, name='login'),
    # Add a route for logout if needed
]
  