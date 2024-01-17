from rest_framework import status, generics, serializers, views, permissions
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from django.core.exceptions import EmptyResultSet
from account.model.roles import RoleModel
from account.serializers.roleSerializer import CreateRoleSerializer, GetRoleSerializer

class GetRoleRequestHandler(views.APIView):
    def get(self, request: Request):
        try:
            serializer = RoleModel.objects.all()
            if not serializer:
                raise EmptyResultSet
            role_serializer = GetRoleSerializer(serializer, many=True)
            return Response(role_serializer.data, status=status.HTTP_200_OK)
        except EmptyResultSet:
            response_data = {
                "status": status.HTTP_404_NOT_FOUND,
                "statusText": "No Data found"
            }
            return Response(response_data)
        except Exception as e:
            return Response({"message": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CreateRoleRequestHandler(views.APIView):
    
    def post(self, request: Request):
        serilizer = CreateRoleSerializer(data=request.data)
        try:
           serilizer.is_valid(raise_exception=True)
        except serializers.ValidationError as exc:
            return Response({'error': exc.detail}, status=status.HTTP_400_BAD_REQUEST)
        role_serilizer = serilizer.create(serilizer.validated_data)
        response_data = {
            "status": status.HTTP_201_CREATED,
            "statusText": "Created Successfully",
            "data": GetRoleSerializer(role_serilizer).data
        }

        return Response(response_data)
            




