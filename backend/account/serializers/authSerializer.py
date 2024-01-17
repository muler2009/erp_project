from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


User = get_user_model()

class UserTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        if not user:
            error = {'error' : "User is not available"}
            return Response(error, status=status.HTTP_400_BAD_REQUEST)
        token = super().get_token(user)
        #claims added in the token
        token['username'] = user.username
        
        return token
        
        