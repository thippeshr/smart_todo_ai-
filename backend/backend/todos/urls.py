# Import necessary Django and DRF modules
from django.urls import path, include
from rest_framework.routers import DefaultRouter

# Import the ViewSets and custom AI suggestion function
from .views import TaskViewSet, CategoryViewSet, ContextEntryViewSet
from .ai import get_ai_suggestions

# Set up the default router for automatic URL routing for ViewSets
router = DefaultRouter()
router.register(r'tasks', TaskViewSet)           # /api/tasks/
router.register(r'categories', CategoryViewSet)  # /api/categories/
router.register(r'contexts', ContextEntryViewSet)  # /api/contexts/

# Define URL patterns for the app
urlpatterns = [
    path('', include(router.urls)),  # Include all auto-generated ViewSet URLs
    path('ai/suggestions/', get_ai_suggestions, name='ai-suggestions'),  # Custom AI endpoint
]