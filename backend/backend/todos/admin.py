from django.contrib import admin
from .models import Task

# Register the Task model to show it in the admin panel
@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    list_filter = ('status', 'created_at')