function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">UI Patterns</h1>
        <p className="mt-4 text-lg text-gray-600">
          A modern, open-source collection of reusable UI components, design patterns, and frontend
          foundations built for React applications.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            React 19
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            TypeScript 5
          </span>
          <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 ring-1 ring-inset ring-cyan-700/10">
            Tailwind CSS v4
          </span>
          <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700 ring-1 ring-inset ring-violet-700/10">
            Vite 6
          </span>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          Project foundation ready. Components coming soon.
        </p>
      </div>
    </main>
  )
}

export default App
