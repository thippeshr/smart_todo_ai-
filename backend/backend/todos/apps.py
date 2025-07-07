# This file configures the 'todos' app within the Django project.

from django.apps import AppConfig

# Define the configuration for the 'todos' app
class TodosConfig(AppConfig):
    # Automatically uses BigAutoField for primary keys unless explicitly overridden
    default_auto_field = 'django.db.models.BigAutoField'
    
    # Name of the app to register with Django
    name = 'todos'