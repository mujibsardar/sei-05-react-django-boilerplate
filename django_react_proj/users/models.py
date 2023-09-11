# users/models.py
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    # Add custom fields here
    # Example: profile_picture = models.ImageField(upload_to='profile_pictures/')
    pass