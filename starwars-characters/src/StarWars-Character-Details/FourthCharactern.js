import React, { Component } from 'react'

export class FourthCharactern extends Component {
    state= {
        isLoading : true,
        starWarsCharacter3: null,
        error: false
    }
    componentDidMount(){
      fetch('https://swapi.dev/api/people/2')  
      .then(response => response.json())
      .then(data => {
          console.log(data)
          this.setState({
              isLoading: false,
              starWarsCharacter3Info: data
          })
      })
      .catch (() => {
          this.setState({
              isLoading: false,
              error: true
          });
      });
    }
    render() {
        const {isLoading, error, starWarsCharacter3Info } = this. state;
        let content;
        if(starWarsCharacter3Info ){
            content=(
                <div>
                    <h2>Name: {starWarsCharacter3Info.name}</h2>
                    <h3>Gender: {starWarsCharacter3Info.gender}</h3>
                    <h3>Height: {starWarsCharacter3Info.height}</h3>
                    <h3>Mass: {starWarsCharacter3Info.mass}</h3>
                    <h3>Hair Color: {starWarsCharacter3Info.hair_color}</h3>
                    <h3>Skin Color: {starWarsCharacter3Info.skin_color}</h3>
                    <h3>eye color: {starWarsCharacter3Info.eye_color}</h3>
                    <h3>birth year: {starWarsCharacter3Info.birth_year}</h3>

                </div>
            );
        }
        return (
            <div>
                <h1>Star Wars Character</h1>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error. Please refresh and try again</p>}
                {content}
            </div>
        )
    }
}
   
export default FourthCharactern
