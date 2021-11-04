import React from "react";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import './category.css'



export default function Category(props){
    const [data,setData] = useState()
    const [episodes_D, setEpisodes_D] = useState(150)
    let link = useLocation().pathname.slice(10,useLocation().pathname.length)

    useEffect(async () => {
        await fetch('http://127.0.0.1:8000/api/category/?id=' + link).then(async res => {
            let json = await res.json()
            console.log(json);
            setData(json)
        })
    }, [])

    function createEpisodesRanges(){
        let displayer = []
        let nEp = data.total_episodes;

        for(let i=0;i <= Math.floor(nEp/150);i++){
            if(i === 0){
                if(Math.floor(nEp/150) === i){
                    displayer.push(<li key={i} onClick={() => setEpisodes_D(nEp)} className="active">{"1-" + nEp}</li>)
                }else{
                    displayer.push(<li key={i} onClick={() => setEpisodes_D((((i+1) * 150) + 1))} class="active">{"1-" + (((i+1) * 150) + 1)}</li>)
                }
                console.log('Did it one time.');
            }else{
                if(Math.floor(nEp/150) === i){
                    displayer.push(<li key={i} onClick={(e) => {setEpisodes_D(nEp); e.target.className = "active"}}>{i + "51" + "-" + nEp}</li>)
                }else{
                displayer.push(<li key={i} onClick={() => setEpisodes_D(parseInt((i+1) +"51"))}>{i + "51" + "-" + (i+1) +"51"}</li>)
                console.log('Did it one time.');
                }
            }
        }

        return displayer
    }
    function createEpisodesBoxes(){
        let nEp = data.total_episodes;
        let epArray = []
        for(let a=0; a < nEp; a++){
            if(a < episodes_D  && a >= episodes_D-151){
                epArray.push(<li><a href={'/watch?tittle='+ data.anime_id + '&ep=' + (a + 1)}>{a + 1}</a></li>) 
            }
        }
        return epArray
    }

    return (
        <div className="container">
            {data !== undefined ? (
                <section id="info">
                    <div className="poster">
                        <div>
                            <img src={data.anime_poster} alt={data.anime_name} />
                        </div>
                    </div>
                    <div className="info">
                        <h2 className="title">{data.anime_name}</h2>
                        <p className="desc shorting">{data.anime_plot}</p>
                        <div>Episodes: <span>{data.total_episodes}</span></div> 
                        <div>Year aired: <span>{data.released_date}</span> </div>
                        <div>Status: <span>{data.anime_status}</span></div> 
                    </div>
                    <div className="col2"> 
                        <div>Genre: 
                            <span>
                                {data.anime_genre.map(gen => {
                                    return <a href={"https://animesuge.io/genre/" + gen} title={gen}>{gen + ' '}</a>
                                })} 
                            </span> 
                        </div> 
                    </div> 
                </section>
            ) : ''}
            {data !== undefined ? (
                <section id="episodes">
                    <div className="content">
                        <div className="group">
                            <ul class="ranges">
                                {createEpisodesRanges().map(li => {return li})}
                            </ul>
                        </div>
                        <ul class="episodes">
                            {
                                createEpisodesBoxes().map(el => {return el})
                            }
                        </ul>
                    </div>
                </section>
            ) : ''}
        </div>
    )
}