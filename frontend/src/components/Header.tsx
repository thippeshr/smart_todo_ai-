/**
 * Header component with application title.
 * This version does not include a dark mode toggle,
 * because it's handled globally from index.tsx.
 */
export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white shadow-md transition-colors">
      {/* App logo/title */}
      <h1 className="text-2xl font-bold">🧠 Smart Todo List</h1>
    </header>
  )
}