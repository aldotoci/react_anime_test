import React from "react";
import { useHistory } from "react-router";
import { useState } from "react";


function Search(){
    const [searchQuery, setSearchQuery] = useState('')
    const [results, setResults] = useState()
    let history = useHistory();

    function onQueryChange(e){
        setSearchQuery(e.target.value)
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
            
        </div>
    );
}

export default Search;