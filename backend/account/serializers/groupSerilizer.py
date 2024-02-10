from rest_framework import serializers
from account.model.groups import GroupModel

class CreateGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupModel
        fields = "__all__"
        extra_kwargs = {
        'custom_group_id': {'read_only': True},
        }
        
    def create(self, validated_data):
        super().create(validated_data)
        group = GroupModel.objects.create(
            custom_group_name=validated_data['custom_group_name']
        )
        
        return group
    
class GetGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupModel
        fields = '__all__'
        