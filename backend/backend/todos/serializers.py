from rest_framework import serializers
from .models import Task, Category, ContextEntry

# Serializer for Task model - converts Task instances to JSON and back
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'  # Include all fields from the Task model


# Serializer for Category model - used for read-only category listing
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'  # Include all fields from the Category model


# Serializer for ContextEntry model - handles incoming and outgoing context data
class ContextEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = ContextEntry
        fields = '__all__'  # Include all fields from the ContextEntry model