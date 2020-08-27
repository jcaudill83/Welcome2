import React from "react";

function GameDisplay (props) {
    let category ="loading"
    if (props.category && props.category.title) {
      category = this.state.data.category.title
    }
    return (
        <div>
        <strong>Catagory: </strong> {category} <br />
        <strong>Question: </strong> {props.question} <br/>
        <strong>Value: </strong> {props.value}
        </div>
    )
}




export default GameDisplay;