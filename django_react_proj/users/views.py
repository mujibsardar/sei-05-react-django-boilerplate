from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.permissions import AllowAny
from .serializers import CustomUserSerializer, UserLoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken 
from django.contrib.auth import authenticate


@api_view(['POST'])
@permission_classes([AllowAny])  # Allow unauthenticated users to register
def register_user(request):
    serializer = CustomUserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()  # Save the user object
        # Serialize the user data using your CustomUserSerializer
        user_data = CustomUserSerializer(user).data
        refresh = RefreshToken.for_user(user)  # Generate a token for the user
        access_token = str(refresh.access_token)
          # Include the serialized user data in the response
        response_data = {
            "access_token": access_token,
            "user": user_data,  # Include the serialized user data
        }
        return Response(response_data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])  # Allow unauthenticated users to login
def login_function(request):
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']

        user = authenticate(request, username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)  # Generate a token for the user
            access_token = str(refresh.access_token)
            # Serialize the user data using your CustomUserSerializer
            user_data = CustomUserSerializer(user).data
            # Include the serialized user data in the response
            response_data = {
                "access_token": access_token,
                "user": user_data,  # Include the serialized user data
            }
            return Response(response_data, status=status.HTTP_201_CREATED)

    return Response({"detail": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
