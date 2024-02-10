from django.db import models
import uuid

class GroupModel(models.Model):
    custom_group_id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    custom_group_name = models.CharField(max_length=255, null=False, blank=False)
    
    class Meta:
        ordering = ['custom_group_name']
        db_table = 'Group'
        app_label = 'account'
        
    def __str__(self) -> str:
        return f"{self.custom_group_name}"
    

class SubGroupModel(models.Model):
    pass
   
       
    class Meta:
        pass
    
    def save(self, *args, **kwargs):
        pass
    
    def __str__(self) -> str:
        return super().__str__()