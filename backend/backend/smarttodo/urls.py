"""
URL configuration for smarttodo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# Django admin and URL routing imports
from django.contrib import admin
from django.urls import path, include

# Main URL configuration
urlpatterns = [
    # Admin panel route (http://127.0.0.1:8000/admin/)
    path('admin/', admin.site.urls),

    # API route: includes all routes from the 'todos' app (like /api/tasks/, /api/categories/, etc.)
    path('api/', include('todos.urls')),
]
