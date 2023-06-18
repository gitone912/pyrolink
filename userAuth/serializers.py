from rest_framework import serializers
from .models import MyUser


class UserSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(style={"input_type": "password"}, write_only=True, required=True)
    class Meta:
        model = MyUser
        fields = [ "email", "name","terms","password","confirmPassword"]
        extra_kwargs = {"password": {"write_only": True, "required": True}}

    def create(self, validated_data):
        user = MyUser.objects.create_user(**validated_data)
        return user