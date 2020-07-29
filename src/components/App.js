import React, { Component } from 'react';
import UserComponent from './UserComponent';
import CountryComponent from './CountryComponent';
import WeatherComponent from './WeatherComponent';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries:[],
            searchWord:'',   
        }
    }
    
    componentDidMount() {
        const urlCountries = 'https://restcountries.eu/rest/v2/all'
        fetch(urlCountries)
        .then(response => response.json())
        .then(data => {
            this.setState({
                countries: [...data]
            })
        })
    }

    // search = () => {
    //     const {countries, searchWord} = this.state;
    //     const filteredCountries = countries
    //       .filter(country => 
    //         country.name.toLowerCase().indexOf(searchWord.toLowerCase())>=0
    //         ||
    //         country.capital.toLowerCase().indexOf(searchWord.toLowerCase()) >=0
    //         ||
    //         country.languages
    //             .map(lang => lang.name).join(", ")
    //             .toLowerCase().indexOf(searchWord.toLowerCase()) >=0 
    //       )
          
    //     this.setState({
    //         countries: filteredCountries,
            
    //     })
    //     console.log(searchWord)
    // }

     searchByName = () => {
        const {countries, searchWord} = this.state;
        const filteredCountries = countries.filter((country => 
          country.name.toUpperCase().startsWith(searchWord.toUpperCase())
        ));
        
        this.setState({
            countries: filteredCountries
        })
    }

    searchByCapital = () => {
        const {countries, searchWord} = this.state;
        const filteredCountries = countries.filter((country => 
            country.capital.toUpperCase().startsWith(searchWord.toUpperCase())
        ));
        
        this.setState({
            countries: filteredCountries
        })
    }

    searchByLanguage = () => {
        const {countries, searchWord} = this.state;
        
        const filteredCountries = countries.filter(country => {
            return country.languages
                .map(lang => lang.name).join(", ")
                .toUpperCase().includes(searchWord.toUpperCase());    
        })
        
        this.setState({
            countries: filteredCountries
        })
    }

    handleChange = e => {
        e.preventDefault(); 
        this.setState({
            searchWord: e.target.value,    
        })
    }

    onRefresh = () =>{
        const urlCountries = 'https://restcountries.eu/rest/v2/all'
        fetch(urlCountries)
        .then(response => response.json())
        .then(data => {
            this.setState({
                countries: [...data],
            })
        })
        
    }

    render(){   
        const { countries, searchWord } = this.state;
        const countriesList = countries.map((country, i) =>(
            <CountryComponent 
                key={i}
                flag={country.flag}
                name={country.name.toUpperCase()}
                capital={country.capital}
                population={country.population}
                languages={country.languages}
                weatherComponent ={
                    countries.length===1 && 
                        <WeatherComponent
                            key={i}
                            city={country.capital}
                            countries={countries}
                        />                           
                }
            />    
        ))
        return(
            <div className='app-container'>
                <UserComponent 
                    countries={countriesList}
                    onChange={this.handleChange}
                    onNameClick={this.handleChange}
                    onCapitalClick={this.searchByCapital}
                    onLanguageClick={this.searchByLanguage}
                    onRefresh={this.onRefresh}
                    value={searchWord}/>
                <div className='display-container'>
                    <div className='countries-container'>
                        {countriesList}
                    </div>
                </div>
                
            </div>
            
        )
    }
    
}

export default App;