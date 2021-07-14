import React, {useState, useEffect} from 'react'

const PokemonCall = (props) =>{
    const [state, setState] = useState(0);
    const [show, setShow] = useState(false);


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=807")
            .then(response => {
            return response.json();
        }).then(response => {
            setState({
                pokemon: response.results
            })
        }).catch(err=>{
            console.log(err);
        })
    }, []);

    const showNow = () =>{
        setShow(true);
    }


    return(
    <div>
        <button onClick={showNow}>Fetch Pokemon</button>
        {show == true ? state.pokemon.map((pokemon, index) =>{
            return(<div key={index}><li>{pokemon.name}</li></div>)
             }):null}
    </div>

  )
}
export default PokemonCall;
