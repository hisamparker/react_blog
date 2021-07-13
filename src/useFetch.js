import {useEffect, useState} from 'react';

// custom hooks must start with use
const useFetch = (url) => {
    const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [isError, setIsError] = useState(null);
	// don't change state with useEffect, use for fetching data
	useEffect(() => {
        const abortController = new AbortController();
		fetch(url, {signal: abortController.signal})
			.then(res => {
				//check if res object is ok, if not throw error
				if (!res.ok) {
					throw Error(`Couldn't get it`);
				}
				//parse the json and return it
				return res.json();
			})
			.then(data => {
				setData(prevData => data);
				setIsPending(false);
				setIsError(null);
			})
			.catch(e => {
                if(e.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsError(prevError => (prevError = e.message));
                    setIsPending(false);
                }
			});
            return () => abortController.abort();
		//dependency array, means only useEffect when whatever's in the array is rendered, if you leave it blank it only runs on the first render
	}, [url]);
    return {data, isPending, isError}
}

export default useFetch;