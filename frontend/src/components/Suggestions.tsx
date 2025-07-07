'use client'

import { useState } from 'react'

/**
 * Smart suggestions component (frontend-only)
 * Shows productivity tips without fetching from backend.
 */
export default function Suggestions() {
  // You can update or add more suggestions here
  const suggestions: string[] = [
    '🧠 Break big tasks into smaller ones for easier focus.',
    '📅 Set realistic daily goals and stick to them.',
    '⏰ Use the Pomodoro technique: 25 mins focus + 5 mins break.',
    '✅ Mark completed tasks — it helps boost motivation!',
    '📌 Prioritize tasks by urgency and importance (Eisenhower Matrix).',
    '🌙 Review your daily progress every evening.',
    '📵 Turn off notifications during deep work blocks.',
    '🎯 Focus on one task at a time to improve quality.',
  ]

  return (
    <div className="bg-white/10 backdrop-blur-md shadow-xl p-6 rounded-lg border border-white/20 mt-8">
      <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-300 mb-4">
        💡 Smart Suggestions
      </h2>
      <ul className="list-disc pl-6 text-indigo-900 dark:text-indigo-100 space-y-2">
        {suggestions.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  )
}