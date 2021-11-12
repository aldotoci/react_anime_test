import React from "react";
import { useState, useEffect } from "react";
import './recently.css';


function Recently(){
    const [results, setResult] = useState();

    useEffect(() => {
        console.log('http://127.0.0.1:8000/api/recent/?page=1');
        fetch('https://infinite-bayou-47239.herokuapp.com/api/recent/?page=1', {})
        .then(async res => {
            let json = await res.json();
            console.log(json);
            setResult(json);
    })
    }, [])

    function results_In_Html(){

        return results.map((result) => {
            let episode  = result.anime_episode_number.slice(8, result.anime_episode_number.length)
            let tittle = result.anime_id.slice(0, result.anime_id.length - 9 - episode.length)
            
            return (
                <li key={results.indexOf(result)}>
                    <a className="poster tooltipstered" href={'/watch?tittle=' + tittle + '&ep=' + episode}>
                        <img src={result.anime_poster} alt={result.body}/>
                    </a>
                    <div className="info">
                        <div className="name">
                        <h3><a href={'/watch?tittle=' + tittle + '&ep=' + episode} title={result.anime_title} data-jtitle={result.anime_title}>{result.anime_title}</a></h3>
                        </div>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className="container">
            <section className="content tab-content">
                <div className="heading">
                    <h2 className="title">RECENTLY UPDATED</h2>
                    <div className="links tabs"> 
                        <span data-name="updated_all" className="active">All</span> 
                        <span data-name="updated_sub">Subbed</span> 
                        <span data-name="updated_dub">Dubbed</span> 
                        <span data-name="updated_chinese">Chinese</span> 
                        <span data-name="trending">Trending</span> 
                        <span data-name="random">Random</span> 
                    </div>
                    
                </div>
                <ul className="itemlist">
                        {results !== undefined ? results_In_Html() : ''} 
                </ul>
            </section>
            
        </div>
    );
}

export default Recently;