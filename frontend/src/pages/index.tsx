import Head from 'next/head'
import Header from '../components/Header'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import Suggestions from '../components/Suggestions'
import { useState, useCallback, useEffect } from 'react'

/**
 * Type definition for each task item.
 */
type Task = {
  id: number
  title: string
  description: string
  status: string
  priority_score: number
  deadline: string
  created_at: string
  updated_at: string
}

/**
 * Main homepage that shows the smart todo UI with AI suggestions.
 */
export default function Home() {
  // State to hold all tasks
  const [tasks, setTasks] = useState<Task[]>([])

  // State to control dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  /**
   * Toggle dark mode and update the <html> class
   */
  const toggleDarkMode = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      setDarkMode(false)
    } else {
      html.classList.add('dark')
      setDarkMode(true)
    }
  }

  /**
   * Fetch all tasks from backend API.
   */
  const fetchTasks = useCallback(async () => {
    const res = await fetch('http://127.0.0.1:8000/api/tasks/')
    const data = await res.json()
    setTasks(data)
  }, [])

  // Load tasks on first render
  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  /**
   * Update task status (e.g., mark as done).
   */
  const handleTaskUpdate = async (id: number, status: string) => {
    await fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    })
    fetchTasks()
  }

  /**
   * Delete a task by ID.
   */
  const handleTaskDelete = async (id: number) => {
    await fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
      method: 'DELETE',
    })
    fetchTasks()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Set page title and metadata */}
      <Head>
        <title>Smart Todo List</title>
        <meta name="description" content="AI-enhanced smart todo app" />
      </Head>

      {/* Header */}
      <Header />

      {/* Toggle button for dark mode */}
      <div className="flex justify-end max-w-3xl mx-auto px-4 mt-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-gray-700 text-sm hover:opacity-80"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Main layout container */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Form to add a new task */}
        <TaskForm onTaskCreated={fetchTasks} />

        {/* List of current tasks with actions */}
        <TaskList
          tasks={tasks}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelete={handleTaskDelete}
        />

        {/* AI-generated suggestions */}
        <Suggestions />
      </main>
    </div>
  )
}