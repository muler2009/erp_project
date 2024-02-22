from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from account.views.roleRequestHandler import CreateRoleRequestHandler, GetRoleRequestHandler
from account.views.authRequestHandler import UserAuthRequestHandler, UserLogoutRequestHandler
from account.views.groupRequestHandler import *

urlpatterns = [
    path('login/', UserAuthRequestHandler.as_view()),
    path('logout/', UserLogoutRequestHandler.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('token/verify/', TokenVerifyView.as_view()),
    path('get_role/', GetRoleRequestHandler.as_view()),
    path('create_role/', CreateRoleRequestHandler.as_view()),
    # iam group related routing
    path('get_group/', GetGroupRequestHandler.as_view()),
    path('create_group/', CreateGroupRequestHandler.as_view()),
    path('get_subgroup/', GetSubGroupRequestHandler.as_view()),
    path('create_subgroup/', CreateSubGroupRequestHandler.as_view()),

]