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
                    <p>Capital:  <spam>{capital}</spam></p>
                    <p>Population:  <spam>{population}</spam></p>
                    {languages.length > 1 ?
                        <p>Languages: <spam>{languages.map(lang => lang.name).join(", ")}</spam></p>
                    :
                        <p>Language: <spam>{languages[0].name}</spam></p>
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