import { useState } from 'react'

/**
 * Props accepted by the TaskForm component.
 * - onTaskCreated: callback to trigger task list refresh in parent after creating a task.
 */
interface TaskFormProps {
  onTaskCreated: () => void
}

/**
 * Form component for adding a new task.
 * Includes input fields for title and optional description.
 * Sends a POST request to the backend API to create the task.
 */
export default function TaskForm({ onTaskCreated }: TaskFormProps) {
  // Local state for form fields
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /**
   * Submit handler for the task form.
   * Sends data to backend and resets form on success.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('http://127.0.0.1:8000/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })

    if (response.ok) {
      setTitle('')
      setDescription('')
      onTaskCreated() // Refresh task list
    } else {
      alert('❌ Failed to add task. Please try again.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md shadow-xl p-6 rounded-lg border border-white/20"
    >
      {/* Section heading */}
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        📝 Add New Task
      </h2>

      {/* Title input */}
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-600 p-2 mb-3 rounded text-black dark:text-white bg-white dark:bg-gray-800"
        required
      />

      {/* Description input */}
      <textarea
        placeholder="Task description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-600 p-2 mb-3 rounded text-black dark:text-white bg-white dark:bg-gray-800"
      />

      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        ➕ Add Task
      </button>
    </form>
  )
}