from django.db import models
import uuid

class GroupModel(models.Model):
    custom_group_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    custom_group_abbreviation = models.CharField(max_length=50, null=False, blank=False)
    custom_group_name = models.CharField(max_length=255, null=False, blank=False)
    has_sub_group = models.BooleanField(default=False)
   
    group_created_at = models.DateTimeField(auto_now_add=True)
    group_modified_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['custom_group_name']
        db_table = 'GroupModel'
        app_label = 'account'
        
    def __str__(self) -> str:
        return f"{self.custom_group_name}"
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.has_sub_group:
            SubGroupModel.objects.create(group=self)
    

class SubGroupModel(models.Model):
    sub_group_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    sub_group_abbreviation = models.CharField(max_length=50, null=False, blank=False)
    sub_group_name = models.CharField(max_length=255, null=False, blank=False)
    group = models.ForeignKey(GroupModel, on_delete=models.CASCADE, related_name='subgroups')
    
    class Meta:
        ordering = ['sub_group_name']
        db_table = 'SubGroupModel'
        app_label = 'account'
        
    def __str__(self) -> str:
        return f"{self.sub_group_name}"
    # pass