from rest_framework import serializers
from account.model.roles import RoleModel

class GetRoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoleModel
        fields = ['role_id', 'role_name', 'role_created_at', 'role_modified_at'] 


class CreateRoleSerializer(serializers.ModelSerializer):
       
    class Meta:
        model = RoleModel
        fields = ['role_id', 'role_name', 'role_created_at', 'role_modified_at'] 
        extra_kwargs = {
            'role_id': {'read_only': True},
            'role_created_at': {'read_only': True},
            'role_modified_at': {'read_only': True},      
        }
        
    def create(self, validated_data):
        role = RoleModel.objects.create(role_name = validated_data['role_name'])       
        return role