from django.contrib import admin
from .models import UserAccountModel
from account.model.roles import RoleModel
from account.model.groups import GroupModel

# Register your models here.
admin.site.register(UserAccountModel)
admin.site.register(RoleModel)
admin.site.register(GroupModel)
