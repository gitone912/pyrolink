from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .models import MyUser
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

class UserRegistration(APIView):
    def post(self, request,format=None):
        email = request.data.get("email")
        name = request.data.get("name")
        terms = request.data.get("terms")
        password = request.data.get("password")
        confirmPassword = request.data.get("confirmPassword")
        if password != confirmPassword:
            return Response({"error": "Password mismatch"}, status=status.HTTP_400_BAD_REQUEST)
        if MyUser.objects.filter(email=email).exists():
            return Response({"error": "Email already exists"}, status=status.HTTP_400_BAD_REQUEST)
        user = MyUser.objects.create_user(email=email, name=name,terms=terms, password=password,confirmPassword=confirmPassword)
        user.save()
        return Response({"success": "User created successfully"}, status=status.HTTP_201_CREATED)

