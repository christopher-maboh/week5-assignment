import React, { Component } from 'react'

export class StarWarsCharacter2 extends Component {
        state= {
            isLoading : true,
            starWarsCharacter3: null,
            error: false
        }
        componentDidMount(){
          fetch('https://swapi.dev/api/people/3')  
          .then(response => response.json())
          .then(data => {
              console.log(data)
              this.setState({
                  isLoading: false,
                  starWarsCharacter3: data
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
            const {isLoading, error, starWarsCharacter3 } = this. state;
            let content;
            if(starWarsCharacter3 ){
                content=(
                    <div>
                        <h2>{starWarsCharacter3.name}</h2>
    
                    </div>
                );
            }
            return (
                <div>
            
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error. Please refresh and try again</p>}
                    {content}
                </div>
            )
        }
    }
    

export default StarWarsCharacter2
