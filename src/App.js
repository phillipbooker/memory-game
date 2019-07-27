import React, {Component} from "react";
import CharacterBox from "./components/CharacterBox";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import "./App.css";


class App extends Component{
  state = {
    characters: characters,
    score: 0
  };

  wasClicked = id => {
    var newCharacters = this.state.characters;
    var alreadyClicked;
    for(let i = 0; i < newCharacters.length; i++){
      if(newCharacters[i].id === id){
        alreadyClicked = newCharacters[i].clicked;
        newCharacters[i].clicked = !newCharacters[i].clicked;
      }
    }

    if(alreadyClicked){
      for(let j = 0; j < newCharacters.length; j++){
        alreadyClicked = newCharacters[j].clicked;
        newCharacters[j].clicked = false;
      }
      this.setState({
        characters: newCharacters,
        score: 0
      });
    } else {
      this.setState({
        characters: newCharacters,
        score: this.state.score + 1
      });
    }
  }

  // Fisher-Yates shuffle
  shuffle = () => {
    var j, x, i;
    var a = this.state.characters;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    this.setState({characters: a});
  }

  render() {
    return(
      <Wrapper>
        <h1 className="title">Memory Game</h1>
        <h2>Score: {this.state.score}</h2>
        {
          this.state.characters.map(character => 
            <CharacterBox image={character.image}
            key={character.id}
            clicked={character.clicked}
            shuffleCharacters={this.shuffle}
            wasClicked={this.wasClicked}
            id={character.id}/>
          )
        }
      </Wrapper>
    );
  }
}

export default App;
