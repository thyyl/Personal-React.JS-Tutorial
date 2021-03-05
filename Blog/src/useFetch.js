import {useState, useEffect} from 'react';

/*******************************
* Fetch data from specific url *
*******************************/
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(url)
        .then(response => {
            // check if the database server is live or not
            if (!response.ok) {
                throw Error('The data is unavailable..');
            }

            return response.json();
        })
        .then(data => {
            setData(data);
            setError(null);
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            } else {
                setError(error);
            }
        });
        setIsPending(false);

        return () => abortController.abort();
    }, [url])

    return { data, setData, isPending, error };
}
 
export default useFetch;