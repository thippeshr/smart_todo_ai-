from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

@csrf_exempt
def get_ai_suggestions(request):
    if request.method == "POST":
        # Your logic here (call OpenAI API etc.)
        return JsonResponse({'suggestions': ["Example suggestion 1", "Example 2"]})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)