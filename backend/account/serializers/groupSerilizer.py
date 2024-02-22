from rest_framework import serializers
from account.model.groups import GroupModel, SubGroupModel

class CreateGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupModel
        fields = "__all__"
        extra_kwargs = {
        'custom_group_id': {'read_only': True},
        }
        
    def create(self, validated_data):
        # super().create(validated_data)
        group = GroupModel.objects.create(
            custom_group_abbreviation = validated_data['custom_group_abbreviation'],
            custom_group_name=validated_data['custom_group_name'],
            has_sub_group= validated_data['has_sub_group']
        )
        
        return group
    
class GetGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupModel
        fields = '__all__'
        

class CreateSubGroupSerilizer(serializers.ModelSerializer):
    class Meta:
        model = SubGroupModel
        fields = "__all__"
        extra_kwargs = {
            'sub_group_id': {
                'read_only': True
            }
        }
        
    def create(self, validated_data):
        subgroupData = validated_data.pop('group')
        subgroup = SubGroupModel.objects.create(
            group=subgroupData, **validated_data
        )
        return subgroup
    
class GetSubGroupSerilizer(serializers.ModelSerializer):
    class Meta:
        model = SubGroupModel
        fields = "__all__"