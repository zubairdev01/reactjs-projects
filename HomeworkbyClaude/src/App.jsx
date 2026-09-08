import { useState } from 'react'
import useGithubUser from './hooks/usegithubuser'
import ProfileCard from './Components/Profilecard'

function App() {

  const [inputValue, setInputValue] = useState("")
  const [submittedUsername, setSubmittedUsername] = useState("")

  const { user, loading, error } = useGithubUser(submittedUsername)

  const handleSearch = (event) => {
    event.preventDefault()
    setSubmittedUsername(inputValue.trim())

  }
    return (
      <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
        <section className="mx-auto w-full max-w-lg">
          <h1 className="mb-6 text-center text-3xl font-bold text-slate-900">
            GitHub User Search
          </h1>

          <form onSubmit={handleSearch} className="mb-6 flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Enter a GitHub username"
              aria-label="GitHub username"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={!inputValue.trim()}
            >
              Search
            </button>
          </form>

          {loading && <p className="mb-4 text-center text-slate-600">Loading...</p>}
          {error && <p className="mb-4 text-center text-red-600">User not found</p>}
          {user && <ProfileCard user={user} />}
        </section>
      </main>


    )
  }

  export default App