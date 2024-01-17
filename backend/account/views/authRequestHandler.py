from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt, csrf_protect
from django.utils.decorators import method_decorator
from rest_framework import views, generics, status, permissions
from rest_framework_simplejwt.views import TokenBlacklistView, TokenObtainPairView
from account.serializers.authSerializer import UserTokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response


@method_decorator(ensure_csrf_cookie, name='dispatch')
class UserAuthRequestHandler(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserTokenObtainPairSerializer
    
class UserLogoutRequestHandler(views.APIView):
    def post(self, request):
        refreshToken = request.data.get('refreshToken')
        if refreshToken:
            try:
                token = RefreshToken(refreshToken)
                token.blacklist()
                return Response({'message': "Logout Successfully!"}, status=status.HTTP_200_OK)
            except Exception as exception:
               return Response({'error': str(exception)}, status=status.HTTP_400_BAD_REQUEST)
        else:
               return Response({'error': 'Refresh token not provided.'}, status=status.HTTP_400_BAD_REQUEST)