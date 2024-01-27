from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
import uuid
from .manager import UserAccountManager
from account.model.roles import RoleModel

class UserAccountModel(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(default = uuid.uuid4, primary_key=True, editable= False, unique=True)
    email = models.EmailField(max_length=254, unique= True)
    username = models.CharField(verbose_name="Username", max_length=255, unique=True, blank=False, null=False)
    first_name = models.CharField(max_length=255)
    last_name =  models.CharField(max_length=255)
    phone =  models.IntegerField(default=0)
    role = models.ForeignKey(RoleModel, on_delete=models.CASCADE, null=True, blank=True, related_name="users", to_field='role_name')
  
    # Set the is_staff flag and is_superuser to control 
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    
    objects = UserAccountManager()  #User manager 
    USERNAME_FIELD = 'username'  #user identification field
    REQUIRED_FIELDS = ['email']  # required field
    
    class Meta:
        ordering = ['username']
        verbose_name= "User Account"
        db_table = "User"
        app_label = 'account'

    # Check the saved instance has a role 
    def save(self, *args, **kwargs):
        if self.role:
            self.role = self.role.role_name
            
        return super().save(*args, **kwargs)


    def __str__(self):
        return f"{self.username}"
    
    
    
    


