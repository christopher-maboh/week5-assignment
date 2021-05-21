import React, { Component } from 'react'

export class FifthCharacter extends Component {
    state= {
        isLoading : true,
        Character5: null,
        error: false
    }
    componentDidMount(){
      fetch('https://swapi.dev/api/people/5')  
      .then(response => response.json())
      .then(data => {
          console.log(data)
          this.setState({
              isLoading: false,
              Character5: data
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
        const {isLoading, error, Character5 } = this. state;
        let content;
        if(Character5 ){
            content=(
                <div>
                    <h2>{Character5.name}</h2>

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

export default FifthCharacter
