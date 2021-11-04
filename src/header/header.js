import React from "react";
import './header.css';
import login_img from '../images/login.png';

function Header(){
    return (
        <header>
            <div className="container">
                <div className="wrapper">
                    <a href="/" id="logo" title="Watch Anime Online for Free">
                    <h2>Watch Anime Online Free</h2>
                    </a>
                    <ul id="navbar">
                        <li className="genre">                            
                        {/* eslint-disable-next-line*/}
                            <a>GENRE</a>
                            <div className="genre-content">
                                <a href="/genre?genre=action&page=1">Action</a>
                                <a href="/genre?genre=Adventure&page=1">Adventure</a>
                                <a href="/genre?genre=Cars&page=1">Cars</a>
                                <a href="/genre?genre=Comedy&page=1" title="Comedy Anime">Comedy</a>
                                <a href="/genre?genre=Dementia&page=1" title="Dementia Anime">Dementia</a>
                                <a href="/genre?genre=Demons&page=1" title="Demons Anime">Demons</a>
                                <a href="/genre?genre=Drama&page=1" title="Drama Anime">Drama</a>
                                <a href="/genre?genre=Ecchi&page=1" title="Ecchi Anime">Ecchi</a>
                                <a href="/genre?genre=Fantasy&page=1" title="Fantasy Anime">Fantasy</a>
                                <a href="/genre?genre=Game&page=1" title="Game Anime">Game</a>
                                <a href="/genre?genre=Harem&page=1" title="Harem Anime">Harem</a>
                                <a href="/genre?genre=Historical&page=1" title="Historical Anime">Historical</a>
                                <a href="/genre?genre=Horror&page=1" title="Horror Anime">Horror</a>
                                <a href="/genre?genre=Josei&page=1" title="Josei Anime">Josei</a>
                                <a href="/genre?genre=Kids&page=1" title="Kids Anime">Kids</a>
                                <a href="/genre?genre=Magic&page=1" title="Magic Anime">Magic</a>
                                <a href="/genre?genre=Martial-Arts&page=1" title="Martial Arts Anime">Martial Arts</a>
                                <a href="/genre?genre=Mecha&page=1" title="Mecha Anime">Mecha</a>
                                <a href="/genre?genre=Military&page=1" title="Military Anime">Military</a>
                                <a href="/genre?genre=Music&page=1" title="Music Anime">Music</a>
                                <a href="/genre?genre=Mystery&page=1" title="Mystery Anime">Mystery</a>
                                <a href="/genre?genre=Parody&page=1" title="Parody Anime">Parody</a>
                                <a href="/genre?genre=Police&page=1" title="Police Anime">Police</a>
                                <a href="/genre?genre=Psychological&page=1" title="Psychological Anime">Psychological</a>
                                <a href="/genre?genre=Romance&page=1" title="Romance Anime">Romance</a>
                                <a href="/genre?genre=Samurai&page=1" title="Samurai Anime">Samurai</a>
                                <a href="/genre?genre=School&page=1" title="School Anime">School</a>
                                <a href="/genre?genre=Sci-Fi&page=1" title="Sci-Fi Anime">Sci-Fi</a>
                                <a href="/genre?genre=Seinen&page=1" title="Seinen Anime">Seinen</a>
                                <a href="/genre?genre=Shoujo&page=1" title="Shoujo Anime">Shoujo</a>
                                <a href="/genre?genre=Shoujo-Ai&page=1" title="Shoujo Ai Anime">Shoujo Ai</a>
                                <a href="/genre?genre=Shounen&page=1" title="Shounen Anime">Shounen</a>
                                <a href="/genre?genre=Shounen-Ai&page=1" title="Shounen Ai Anime">Shounen Ai</a>
                                <a href="/genre?genre=Slice-of-Life&page=1" title="Slice of Life Anime">Slice of Life</a>
                                <a href="/genre?genre=Space&page=1" title="Space Anime">Space</a>
                                <a href="/genre?genre=Sports&page=1" title="Sports Anime">Sports</a>
                                <a href="/genre?genre=Super-Power&page=1" title="Super Power Anime">Super Power</a>
                                <a href="/genre?genre=Supernatural&page=1" title="Supernatural Anime">Supernatural</a>
                                <a href="/genre?genre=Thriller&page=1" title="Thriller Anime">Thriller</a>
                                <a href="/genre?genre=Vampire&page=1" title="Vampire Anime">Vampire</a>
                                <a href="/genre?genre=Yaoi&page=1" title="Yaoi Anime">Yaoi</a>
                                <a href="/genre?genre=Yuri&page=1" title="Yuri Anime">Yuri</a>
                            </div>
                        </li>
                        <li><a href="./newest">NEWEST</a></li>
                        <li><a href="./updated">UPDATED</a></li>
                        <li><a href="./ongoing">ONGOING</a></li>
                        <li><a href="./added">RECENTLY ADDED</a></li>
                        <li className="types">
                            <a href="./types">TYPES</a>
                            <div className="types-content">
                                <a href="/tv">TV Series</a>
                                <a href="/movie">Movies</a>
                                <a href="/ova">OVAs</a>
                                <a href="/ona">ONAs</a>
                                <a href="/special">Specials</a>
                            </div>
                        </li>
                        {/* eslint-disable-next-line*/}
                        <li><a href=""><img src={login_img} alt=""/></a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;