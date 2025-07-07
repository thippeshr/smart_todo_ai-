from django.db import models

# Category model to classify tasks (e.g., Work, Personal, etc.)
class Category(models.Model):
    name = models.CharField(max_length=100)  # Name of the category
    usage_count = models.IntegerField(default=0)  # Optional usage tracking (e.g., how often it's used)

    def __str__(self):
        return self.name  # Returns the category name when printed or displayed


# ContextEntry model to store AI-analyzed or source-based content (e.g., notes, messages)
class ContextEntry(models.Model):
    SOURCE_CHOICES = [
        ('whatsapp', 'WhatsApp'),
        ('email', 'Email'),
        ('note', 'Note'),
    ]

    content = models.TextField()  # Raw text from the source
    source_type = models.CharField(max_length=50, choices=SOURCE_CHOICES)  # Type of source (select from above)
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp when entry is created
    processed_insight = models.TextField(blank=True)  # Optional AI-processed summary/insight

    
# Task model representing a single todo item
class Task(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
    ]

    title = models.CharField(max_length=255)  # Main task title
    description = models.TextField(blank=True)  # Optional task details
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)  # Link to category
    priority_score = models.FloatField(default=0)  # Used for AI-generated prioritization (e.g., 0-1 scale)
    deadline = models.DateTimeField(null=True, blank=True)  # Optional deadline for task
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')  # Task status
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp when task is created
    updated_at = models.DateTimeField(auto_now=True)  # Timestamp when task is last modified