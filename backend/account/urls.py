from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from account.views.roleRequestHandler import CreateRoleRequestHandler, GetRoleRequestHandler
from account.views.authRequestHandler import UserAuthRequestHandler, UserLogoutRequestHandler

urlpatterns = [
    path('login/', UserAuthRequestHandler.as_view()),
    path('logout/', UserLogoutRequestHandler.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('token/verify/', TokenVerifyView.as_view()),
    path('get_role/', GetRoleRequestHandler.as_view()),
    path('create_role/', CreateRoleRequestHandler.as_view()),
]