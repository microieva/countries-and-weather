import React from 'react';

const CountryComponent = ({
    flag, 
    name, 
    capital, 
    population, 
    languages, 
    weatherComponent }) => {
    
    return (
        <div className='country-component'>
            <div className='country'>
                <div className='flag'>
                    <img src={flag} alt='flag'/>
                </div>
                <div className='name'>{name}</div>
                <div className='country-info'>
                    <p>Capital:  <span>{capital}</span></p>
                    <p>Population:  <span>{population}</span></p>
                    {languages.length > 1 ?
                        <p>Languages: <span>{languages.map(lang => lang.name).join(", ")}</span></p>
                    :
                        <p>Language: <span>{languages[0].name}</span></p>
                    }
                </div>    
            </div>
            <div className='weather-container'>
                {weatherComponent}
            </div>
        </div>
    )
}

export default CountryComponent;