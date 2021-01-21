import { useState, useEffect } from 'react';

function useRandomJoke( fName, lName){
    const [joke, setJoke] = useState('');

    useEffect(() =>{
        const fetchJoke = async() =>
        await fetch(
            `http://api.icndb.com/jokes/random?firstName=${fName}&lastName=${lName}`
        )
            .then((res) => res.json())
            .then((data) =>{
                setJoke(data.value.joke);
            });
        

        fetchJoke();
    }, [fName, lName]);

    return joke;
}

export default useRandomJoke;