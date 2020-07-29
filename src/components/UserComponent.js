import React from 'react';

const UserComponent = ({
    countries, 
    onChange, 
    onNameClick, 
    onCapitalClick, 
    onLanguageClick, 
    searchWord,
    onRefresh
}) => {

    return (
        <div className='top-container'>
            <div className="titles">
                <h1>World Countries Data</h1>
                {countries.length === 0 ? 
                    <p>No countries found, refresh the page and try again!</p>
                :
                    countries.length > 1 ?
                        <p>Currently there are {countries.length} countries</p>
                    :
                        <p>There is 1 country</p>
                }
                
            </div>
            <div className="ui-container">
                <p>Search for one specific country, see current weather!</p>
                <input className="user-input" 
                    type="text" 
                    placeholder="Search countries by name, capital or language"
                    onChange={onChange} 
                    value={searchWord}/>
                <div className="buttons">
                    <button 
                        onClick={onNameClick}>
                            NAME
                    </button>
                    <button 
                        onClick={onCapitalClick}>
                            CAPITAL
                    </button>
                    <button 
                        onClick={onLanguageClick}>
                            LANGUAGE
                    </button>
                    <button 
                        className='btn'
                        onClick={onRefresh}>
                        <i className="fa fa-refresh" aria-hidden="true"></i>
                    </button>
                </div>
            </div> 
        </div>      
    )
}

export default UserComponent;