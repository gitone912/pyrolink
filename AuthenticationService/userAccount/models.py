from django.db import models
from userAuth.models import MyUser

#create a model unique for every user and store the data like adress skills they like etc

# class UserProfile(models.Model):
#     user = models.OneToOneField(MyUser, on_delete=models.CASCADE)
#     address = models.CharField(max_length=200)
#     skills = models.CharField(max_length=200)
#     interests = models.CharField(max_length=200)
#     about = models.CharField(max_length=200)
#     def __str__(self):
#         return self.user.name
