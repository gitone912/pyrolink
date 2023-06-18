from rest_framework import serializers
from .models import MyUser
from django.utils.encoding import smart_str , force_bytes , smart_bytes , DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode , urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator

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
    email = serializers.EmailField(max_length=255, min_length=3)
    class Meta:
        model = MyUser
        fields = ["email", "password"]

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = ["email", "name"]

class UserChangePasswordSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={"input_type": "password"}, write_only=True, required=True)
    confirmPassword = serializers.CharField(style={"input_type": "password"}, write_only=True, required=True)
    class Meta:
        model = MyUser
        fields = ["password", "confirmPassword"]

    def validate(self, attrs):
        password = attrs.get("password", None)
        confirmPassword = attrs.get("confirmPassword", None)
        user = self.context.get("user")
        if user is None:
            raise serializers.ValidationError({"user": "User not found"})
        if password != confirmPassword:
            raise serializers.ValidationError({"password": "Password mismatch"})    
        user.set_password(password)
        user.save()
        return attrs
    
class SendMailSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    class Meta:
        fields = ["email"]

    def validate(self, attrs):
        email = attrs.get("email", None)
        if MyUser.objects.filter(email=email).exists():
            pass
        else:
            raise serializers.ValidationError({"email": "Email not found user not registered"})
        
        return super().validate(attrs)