import { useEffect, useState } from "react";

function useGithubCardInfo (username) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!username)return
        
        setLoading(true)
        setError(null)

        fetch(`https://api.github.com/users/${username}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Unable to load User Card')
            }
            return res.json()
        })
        .then((res) => setData(res))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, [username])
    return {user: data, loading, error}
}

export default useGithubCardInfo;