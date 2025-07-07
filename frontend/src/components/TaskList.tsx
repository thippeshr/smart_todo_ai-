import React from 'react'

/**
 * Type definition for a single task item
 */
interface Task {
  id: number
  title: string
  description: string
  status: string
}

/**
 * Props expected by the TaskList component
 */
interface TaskListProps {
  tasks: Task[]
  onTaskUpdate: (id: number, status: string) => void
  onTaskDelete: (id: number) => void
}

/**
 * TaskList component
 * - Renders all tasks inside a styled rectangle card like other sections
 * - Provides buttons for marking tasks as done or deleting
 */
const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskUpdate, onTaskDelete }) => {
  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-xl p-6 rounded-lg border border-white/20 mt-6 mb-8">
      {/* Section heading */}
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📋 Task List</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No tasks yet. Add one above!</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-400 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start gap-4">
                {/* Task content */}
                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold ${
                      task.status === 'completed'
                        ? 'line-through text-gray-400'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {task.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      task.status === 'completed'
                        ? 'text-gray-500'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {task.description}
                  </p>

                  {/* Task status tag */}
                  <span
                    className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${
                      task.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-2">
                  {task.status !== 'completed' && (
                    <button
                      onClick={() => onTaskUpdate(task.id, 'completed')}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 text-sm rounded shadow-md"
                    >
                      ✓ Mark as Done
                    </button>
                  )}
                  <button
                    onClick={() => onTaskDelete(task.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 text-sm rounded shadow-md"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList