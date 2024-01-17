from rest_framework import serializers
from account.model.roles import RoleModel

class GetRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoleModel
        fields = "__all__"


class CreateRoleSerializer(serializers.ModelSerializer):
   
    
    
    class Meta:
        model = RoleModel
        fields = ['role_id', 'role_name'] 
        
    def create(self, validated_data):
        role = RoleModel.objects.create(role_name = validated_data['role_name'])       
        return role