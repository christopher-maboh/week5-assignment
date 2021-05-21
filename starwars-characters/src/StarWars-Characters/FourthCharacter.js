import React, { Component } from 'react'

export class FourthCharacter extends Component {
        state= {
            isLoading : true,
            Character4: null,
            error: false
        }
        componentDidMount(){
          fetch('https://swapi.dev/api/people/4')  
          .then(response => response.json())
          .then(data => {
              console.log(data)
              this.setState({
                  isLoading: false,
                  Character4: data
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
            const {isLoading, error, Character4 } = this. state;
            let content;
            if(Character4 ){
                content=(
                    <div>
                        <h2>{Character4.name}</h2>
    
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

export default FourthCharacter
