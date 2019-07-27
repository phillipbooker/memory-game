import React, {Component} from "react";
import "./style.css";

class CharacterBox extends Component{
  render(){
    return (
      <div className="card">
        <div className="img-container">
          <img
            alt={this.props.name}
            src={this.props.image}
            onClick={
              () => {
                this.props.shuffleCharacters();
                this.props.wasClicked(this.props.id);
              }
            }
          />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Clicked:</strong> {this.props.clicked.toString()}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CharacterBox;
