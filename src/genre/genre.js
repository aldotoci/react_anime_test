import React from "react";
import { useState,useEffect } from "react";
import '../search_v2/search_v2.css';
import './genre.css'

function Search(){
    const [results, setResult] = useState();
    const queryParams = new URLSearchParams(window.location.search);
    const genre = queryParams.get('genre');
    const page = queryParams.get('page');
    
    useEffect(() => {
        console.log('http://127.0.0.1:8000/api/genre/?genre=' + genre + '&page=' + page);
        fetch('https://infinite-bayou-47239.herokuapp.com/api/genre/?genre=' + genre + '&page=' + page, {})
        .then(async res => {
            let json = await res.json();
            console.log(json.animes);
            setResult(json.animes);
    })
    })
    
    function results_In_Html(){
        return results.map((result) => (
            <li key={results.indexOf(result)}>
                <a className="poster tooltipstered" href={'/category/' + result.anime_id}>
                    <img src={result.anime_poster} alt={result.body}/>
                </a>
                <div className="info">
                    <div className="name">
                    <h3><a href={'/category/' + result.anime_id} title={result.anime_title} data-jtitle={result.anime_title}>{result.anime_title}</a></h3>
                    </div>
                </div>
            </li>
        ))
    }

    function pages_displayer(){
        let html = []
        for(let a=0; a < 5;a++){
            html.push(
                <a href={"/genre?genre=Seinen&page=" + (parseInt(page) + 1)}>{parseInt(page) + a} </a> ,
            )
        }
        return html
    }
    
    return (
        <div className="container">
            <div className="pages">
                <span>Pages :</span> {pages_displayer().map(li => {return li})}
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