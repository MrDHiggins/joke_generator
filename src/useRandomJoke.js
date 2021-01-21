import { useState, useEffect } from 'react';

function useRandomJoke( fName){
    const [joke, setJoke] = useState('');

    useEffect(() =>{
        const fetchJoke = async() =>
        await fetch(
            `http://api.icndb.com/jokes/random?firstName=${fName}`
        )
            .then((res) => res.json())
            .then((data) =>{
                setJoke(data.value.joke);
            });
        

        fetchJoke();
    }, [fName]);

    return joke;
}

export default useRandomJoke;