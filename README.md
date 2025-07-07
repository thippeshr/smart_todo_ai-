Smart Todo List with AI

An intelligent full-stack task management application built with Django REST Framework (Backend), Supabase PostgreSQL (Database), Next.js + Tailwind CSS (Frontend), and optional AI integration via OpenAI or local LLMs.

⸻

✨ Features
- Add, view, delete, and mark tasks as completed
- Attractive UI with glassmorphism, gradient effects, and dark mode
- Smart AI suggestions (mocked/static in UI for demo)
- Responsive layout for mobile and desktop
- Admin dashboard for managing tasks
- Designed with clean architecture and OOP principles

⸻

🚀 Tech Stack

- Frontend	- Next.js (React) + Tailwind CSS
- Backend	- Django REST Framework
- Database	- Supabase PostgreSQL
- AI Layer	- OpenAI API / LM Studio (optional)
- Styling	- Tailwind CSS, dark mode, animations


⸻

⚙️ Setup Instructions

1. Clone the repo

```
git clone https://github.com/your-username/smart-todo-ai.git
cd smart-todo-ai
```

2. Backend Setup (Django)

```
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt

# Setup environment variables in .env or settings.py
python manage.py migrate
python manage.py createsuperuser  # for admin panel (optional)
python manage.py runserver
```

Backend runs at: http://127.0.0.1:8000/

3. Frontend Setup (Next.js)

```
cd frontend
npm install
npm run dev
```

Frontend runs at: http://localhost:3000/

⸻

⚠️ IMPORTANT NOTE

The file ```backend/.env``` has NOT been committed to the repository because it contains sensitive information like the OpenAI API Key. According to GitHub’s security policy, this is not allowed.

To run the project successfully, please create a ```.env``` file inside the ```backend/``` folder with the following content:

```OPENAI_API_KEY=your_openai_api_key_here```


⸻

📊 API Endpoints

Task APIs
	•	```GET /api/tasks/``` - Get all tasks
	•	```POST /api/tasks/``` - Create new task
	•	```DELETE /api/tasks/<id>/``` - Delete task
	•	```PATCH /api/tasks/<id>/``` - Update status

AI Suggestions API
	•	```POST /api/ai/suggestions/``` - Get smart suggestions based on context (mocked)

Context Input APIs (Optional)
	•	```POST /api/context/``` - Add context data (emails, notes, etc.)
	•	```GET /api/context/``` - List context entries

⸻

📊 Sample Tasks
	1.	Morning Workout
	2.	Check Email
	3.	Standup Call
	4.	PR Reviews
	5.	Coding
	6.	Learning Time
	7.	Task Discussion
	8.	Read Book
	9.	Play Time

⸻

🧵 Smart Suggestions (Static UI for Demo)
	•	Prioritize your tasks based on urgency
	•	Break large tasks into smaller subtasks
	•	Avoid multitasking; focus on one thing at a time
	•	Schedule your most difficult tasks in the morning
	•	Use clear, action-oriented titles

⸻

📂 Sample Context Data

Create a file ```sample_context.json```:

```
[
  {
    "content": "Team meeting at 10AM",
    "source": "email",
    "timestamp": "2025-07-06T10:00:00"
  },
  {
    "content": "Review PR from frontend team",
    "source": "slack",
    "timestamp": "2025-07-06T09:30:00"
  }
]
```


⸻

🌍 Admin Panel Access

Run backend and navigate to: ```http://127.0.0.1:8000/admin/```

Login using your superuser credentials to manage tasks, context, etc.

⸻

✅ Test Cases

Test files are available inside the ```backend/todos/tests/``` directory. To run all backend tests:

```python manage.py test```

🏆 Evaluation Criteria Checklist
	•	AI-powered suggestions integrated (mocked/static for demo)
	•	Backend REST APIs functional and tested
	•	Responsive and modern UI (Tailwind CSS)
	•	Admin panel for data control
	•	Proper folder structure and OOP usage
	•	Comments and clean code

⸻

🔗 [Repository Link]

⸻

Thank You so much!
