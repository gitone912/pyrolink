from rest_framework import serializers
from .models import MyUser
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    confirmPassword = serializers.CharField(style={"input_type": "password"}, write_only=True, required=True)
    class Meta:
        model = MyUser
        fields = [ "email", "name","terms","password","confirmPassword"]
        extra_kwargs = {"password": {"write_only": True, "required": True}}

    def create(self, validated_data):
        password = validated_data.get("password", None)
        confirmPassword = validated_data.get("confirmPassword", None)
        if password != confirmPassword:
            raise serializers.ValidationError({"password": "Password mismatch"})
        user = MyUser.objects.create_user(**validated_data)
        return user
    
class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ["email", "password"]
        extra_kwargs = {"password": {"write_only": True, "required": True}}
    
    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)
        user = authenticate(email=email, password=password)
        if user is None:
            raise serializers.ValidationError({"error": "Invalid email or password"})
        return {"email": user.email, "name": user.name, "token": user.token}