from .models import Category, Product
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'parent_category_id', 'created_at', 'updated_at']


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.title')
    class Meta:
        model = Product
        fields = ['id', 'title', 'category', 'price','image_link','technical_details' ,'rating', 'created_at', 'updated_at']