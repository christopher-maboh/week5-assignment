import React, { Component } from 'react'

export class StarWarsCharacter2A extends Component {
    state= {
        isLoading : true,
        starWarsCharacter1: null,
        error: false
    }
    componentDidMount(){
      fetch('https://swapi.dev/api/people/3')  
      .then(response => response.json())
      .then(data => {
          console.log(data)
          this.setState({
              isLoading: false,
              starWarsCharacter1Info: data
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
        const {isLoading, error, starWarsCharacter1Info } = this. state;
        let content;
        if(starWarsCharacter1Info ){
            content=(
                <div>
                    <h2>Name: {starWarsCharacter1Info.name}</h2>
                    <h3>Gender: {starWarsCharacter1Info.gender}</h3>
                    <h3> Height: {starWarsCharacter1Info.height}</h3>
                    <h3>Mass: {starWarsCharacter1Info.mass}</h3>
                    <h3>Hair Color: {starWarsCharacter1Info.hair_color}</h3>
                    <h3>Skin Color: {starWarsCharacter1Info.skin_color}</h3>
                    <h3>eye color: {starWarsCharacter1Info.eye_color}</h3>
                    <h3>birth year: {starWarsCharacter1Info.birth_year}</h3>
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

export default StarWarsCharacter2A
