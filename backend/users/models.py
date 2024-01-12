from django.db import models
import uuid
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.conf import settings

# Create your models here.
class UserAccountModel(AbstractBaseUser, PermissionsMixin):
    uid = models.UUIDField(default =uuid.uuid4, primary_key=True, editable=False, unique=True)