import React, { Component } from 'react'

export class Page2 extends Component {
        state= {
            isLoading : true,
            starWarsCharacter2: null,
            error: false
        }
        componentDidMount(){
          fetch('https://swapi.dev/api/people/2')  
          .then(response => response.json())
          .then(data => {
              console.log(data)
              this.setState({
                  isLoading: false,
                  starWarsCharacter2: data
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
            const {isLoading, error, starWarsCharacter2 } = this. state;
            let content;
            if(starWarsCharacter2 ){
                content=(
                    <div>
                        <h2>{starWarsCharacter2.name}</h2>
    
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
export default Page2