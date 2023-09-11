from django.contrib.auth import get_user_model
from rest_framework import serializers

# Get the User model defined in your settings
User = get_user_model()

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

        # Extra keyword arguments for fields
        extra_kwargs = {
            'password': {'write_only': True},
        }

    # Override create method to handle password hashing
    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    class Meta:
        fields = ('username', 'password')