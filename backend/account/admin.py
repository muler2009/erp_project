from django.contrib import admin
from .models import UserAccountModel
from account.model.roles import RoleModel

# Register your models here.
admin.site.register(UserAccountModel)
admin.site.register(RoleModel)