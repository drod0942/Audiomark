import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // This runs in every render, helps in tot fetch data or just to call something
    // everytime the code is changed/called
    useEffect(() => {

        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could Not Fetch the Data :(');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    setIsPending(false);
                    setError(err.message);
                }

            })
        return () => abortCont.abort();
    }, [url]); //,[url] makes this function only run when [dependancy] changes. It is called dependencies. Take the ,[] to make it run continuously

    return { data, isPending, error }


}

export default useFetch;