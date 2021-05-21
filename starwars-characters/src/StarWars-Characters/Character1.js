import React, { Component } from 'react'

export class Character1 extends Component {
        state= {
            isLoading : true,
            Character1: null,
            error: false
        }
        componentDidMount(){
          fetch('https://swapi.dev/api/people/1')  
          .then(response => response.json())
          .then(data => {
              console.log(data)
              this.setState({
                  isLoading: false,
                  Character1: data
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
            const {isLoading, error, Character1 } = this. state;
            let content;
            if(Character1 ){
                content=(
                    <div>
                        <h2>{Character1.name}</h2>
    
                    </div>
                );
            }
            return (
                <div>
                    <h1><emp>STAR WARS CHARACTERS</emp></h1>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>Error. Please refresh and try again</p>}
                    {content}
                </div>
            )
        }
    }
         

export default Character1
