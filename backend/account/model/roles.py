import uuid
from django.utils import timezone
from django.db import models


class RoleModel(models.Model):
    role_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False )
    role_name = models.CharField(verbose_name="Role", unique=True, max_length=50)
    role_created_at = models.DateTimeField(auto_now_add=True)
    role_modified_at = models.DateTimeField(auto_now=True)
 

    class Meta:
        db_table = "Role" 
        ordering = ['role_name']
        app_label = 'account'
        verbose_name = 'Role'
        verbose_name_plural = 'Roles'

    # def save(self, *args, **kwargs):
    #     from ..models import UserAccount
    #     is_new = self.pk is None  # Check if the instance is being created or updated
    #     super().save(*args, **kwargs)

    #     if not is_new:
    #         # Update UserAccount role when RoleModel role_name is updated
    #         UserAccount.objects.filter(role=self).update(role=self.role_name)

    def __str__(self):
        return f"{self.role_name}"
    