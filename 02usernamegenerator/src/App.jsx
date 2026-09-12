import { useState, useCallback, useRef } from 'react'

const adjectives = ['Swift', 'Silent', 'Brave', 'Clever', 'Fierce', 'Lucky', 'Mighty', 'Quiet']
const nouns = ['Tiger', 'Falcon', 'Wolf', 'Phoenix', 'Shadow', 'Storm', 'Panther', 'Comet']

const createUsername = (includeNumber) => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  const number = includeNumber ? Math.floor(Math.random() * 100) : ''

  return `${adjective}${noun}${number}`
}

function App() {
  const [username, setUsername] = useState(() => createUsername(false))
  const [numberAllowed, setNumberAllowed] = useState(false)

  const usernameRef = useRef(null)

  const usernameGenerator = useCallback(() => {
    setUsername(createUsername(numberAllowed))
  }, [numberAllowed])

  const handleNumberChange = () => {
    const nextNumberAllowed = !numberAllowed
    setNumberAllowed(nextNumberAllowed)
    setUsername(createUsername(nextNumberAllowed))
  }

  const copyUsernameToClipboard = async () => {
    usernameRef.current?.select()
    await navigator.clipboard.writeText(username)
  }

  return (
    <main className="min-h-screen bg-slate-200 p-8 text-center">
      <h1 className="text-2xl font-bold text-slate-800">
        Username / Nickname Generator
      </h1>

      <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3">
        <input
          ref={usernameRef}
          className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-slate-500"
          type="text"
          value={username}
          readOnly
        />
        <button
          type="button"
          onClick={copyUsernameToClipboard}
          className="shrink-0 rounded-lg bg-slate-700 px-3 py-2 text-white hover:bg-slate-600"
        >
          Copy
        </button>
      </div>

      <div className="mx-auto mt-6 flex max-w-xl flex-wrap items-center justify-center gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={handleNumberChange}
          />
          Numbers
        </label>

        <button
          type="button"
          onClick={usernameGenerator}
          className="rounded-lg bg-slate-700 px-3 py-2 text-white hover:bg-slate-600"
        >
          Generate
        </button>
      </div>
    </main>
  )
}

export default App