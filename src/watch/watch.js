import React from "react";
import { useState, useEffect } from "react";
import '../header/header.css';
import './watch.css'


export default function Watch(){
    const [data,setData] = useState()
    const [ep_watch, setEpWatch] = useState()
    const [currentEpisode,setCurrentEpisode] = useState()
    const queryParams = new URLSearchParams(window.location.search);
    const tittle = queryParams.get('tittle');
    const ep = queryParams.get('ep');
    const [episodes_D, setEpisodes_D] = useState(150)

    useEffect(async () => {
        let search = 'http://127.0.0.1:8000/api/watch/?id=' + tittle + '&ep=' + ep; 
        await fetch('https://infinite-bayou-47239.herokuapp.com/api/watch/?id=' + tittle + '&ep=' + ep).then(async res => {
            let json = await res.json()
            let c_e = 'https:' +json[0]
            console.log(c_e);
            setCurrentEpisode(c_e)
        })
    }, [])

    useEffect(async () => {
        await fetch('https://infinite-bayou-47239.herokuapp.com/api/category/?id=' + tittle).then(async res => {
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

    return data === undefined ? '' : (
            <section className="container">
                <div className="heading sline"> 
                    <h1 className="title"><a href={'/category/' + data.anime_id}>{data.anime_name}</a></h1>
                </div>
                <div className="alert alert-warning"> 
                        Please help us by sharing this site with your friends. It's the biggest motivation to help us to make the site better. Thanks! 
                </div>
                <div className="content">
                    <iframe title={data.anime_name} src={currentEpisode} allowfullscreen="true" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>
                </div>
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
            </section>
        )
}