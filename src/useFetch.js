import { useState, useEffect } from 'react'


export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const AbortCont = new AbortController();

        fetch(url, { signal: AbortCont.signal })
        .then(res => {
          if(!res.ok) {
            throw Error('Couldnt fetch the data for that resourse');
          }
          return res.json();
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted')
          } else {
            setError(err.message);
            setIsPending(false)
          }
        })

        return () => AbortCont.abort()
      }, [url])

      return { data, isPending, error }
}

