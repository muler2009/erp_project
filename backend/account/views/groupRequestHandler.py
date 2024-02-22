from rest_framework import status, generics, views, serializers
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from django.core.exceptions import EmptyResultSet
from account.serializers.groupSerilizer import *
from account.model.groups import GroupModel, SubGroupModel


class CreateGroupRequestHandler(views.APIView):
    def post(self, request):
        serializer = CreateGroupSerializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)    
        except serializers.ValidationError as exc:
            return Response({'error': exc.detail}, status=status.HTTP_400_BAD_REQUEST)
        group_deserializer = serializer.create(serializer.validated_data)
        
        RESPONSE_ON_SUCCESS = {
            "status": status.HTTP_201_CREATED,
            "statusText": "Group created Successfully!",
            "data": GetGroupSerializer(group_deserializer).data
        }
        
        return Response(RESPONSE_ON_SUCCESS)
    

# request handler for pull/get the Group
class GetGroupRequestHandler(views.APIView):
    def get(self, request):
        try:
            groups = GroupModel.objects.all()
            if not groups:
                raise EmptyResultSet
            groups_serializer = GetGroupSerializer(groups, many=True)
            return Response(groups_serializer.data, status=status.HTTP_200_OK)
        except EmptyResultSet as exc:
            return Response({
                "status": status.HTTP_404_NOT_FOUND,
                "statusText": "No Data found"
            })
        except Exception as e: # If there is anykind of error occured
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        
            
class CreateSubGroupRequestHandler(views.APIView):
    def post(self, request):
        serializer = CreateSubGroupSerilizer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)    
        except serializers.ValidationError as exc:
            return Response({'error': exc.detail}, status=status.HTTP_400_BAD_REQUEST)
        subgroup_deserializer = serializer.create(serializer.validated_data)
        
        RESPONSE_ON_SUCCESS = {
            "status": status.HTTP_201_CREATED,
            "statusText": "Group created Successfully!",
            "data": GetSubGroupSerilizer(subgroup_deserializer).data
        }
        
        return Response(RESPONSE_ON_SUCCESS)          

class GetSubGroupRequestHandler(views.APIView):
    def get(self, request):
        try:
            groups = SubGroupModel.objects.all()
            if not groups:
                raise EmptyResultSet
            groups_serializer = GetSubGroupSerilizer(groups, many=True)
            return Response(groups_serializer.data, status=status.HTTP_200_OK)
        except EmptyResultSet as exc:
            return Response({
                "status": status.HTTP_404_NOT_FOUND,
                "statusText": "No Data found"
            })
        except Exception as e: # If there is anykind of error occured
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)