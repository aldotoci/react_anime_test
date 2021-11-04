import React from "react";
import { useHistory } from "react-router";
import { useState,useEffect } from "react";
import './search_v2.css';

function Search(){
    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResult] = useState()
    let history = useHistory()
    let search_q = window.location.pathname.slice(8, window.location.pathname.length)

    function onQueryChange(e){
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        console.log('http://127.0.0.1:8000/api/search/?keyword=' + search_q);
        fetch('http://127.0.0.1:8000/api/search/?keyword=' + search_q, {})
        .then(async res => {
            let json = await res.json();
            console.log(json);
            setResult(json)
        })
    }, [])
    

    function results_In_Html(){
        return results.map((result) => (
            <li key={results.indexOf(result)}>
                <a className="poster tooltipstered" href={'/category/' + result.anime_id} data-tip="lwp3?/cache681">
                    <img src={result.anime_poster} alt={result.body}/>
                </a>
                <div class="info">
                    <div className="name">
                    <h3><a href={'/category/' + result.anime_id} title={result.anime_title} data-jtitle={result.anime_title}>{result.anime_title}</a></h3>
                    </div>
                </div>
            </li>
        ))
    }
    return (
        <div className="container">
            <div id="hsearch">
                <div>
                    <form>
                        <input type="text" onChange={onQueryChange} placeholder="Search your anime" />
                        <button onClick={() => {history.push('/search/' + searchQuery)}}></button>
                    </form>
                </div>
            </div>
            <div className="content tab-content">
                <ul className="itemlist">
                    {results !== undefined ? results_In_Html() : ''} 
                </ul>
            </div>
        </div>
    );
}

export default Search;