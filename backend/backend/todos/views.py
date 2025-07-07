# Import Django REST Framework viewsets and response utilities
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

# Import our models and serializers
from .models import Task, Category, ContextEntry
from .serializers import TaskSerializer, CategorySerializer, ContextEntrySerializer

# Import the AI suggestion function from our custom ai.py module
from .ai import get_ai_suggestions

# Optional: Used to exempt views from CSRF validation if needed
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

# ViewSet for managing Task CRUD operations
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('-created_at')  # Show latest tasks first
    serializer_class = TaskSerializer

    # Custom endpoint: POST /api/tasks/ai/suggestions/
    @action(detail=False, methods=['post'], url_path='ai/suggestions')
    def ai_suggestions(self, request):
        result = get_ai_suggestions()
        return Response({"suggestions": result}, status=status.HTTP_200_OK)

# ViewSet for reading category data (ReadOnlyModelViewSet = only GET requests allowed)
class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# ViewSet for managing context entries (e.g., notes, emails, WhatsApp messages)
class ContextEntryViewSet(viewsets.ModelViewSet):
    queryset = ContextEntry.objects.all().order_by('-created_at')  # Recent first
    serializer_class = ContextEntrySerializer