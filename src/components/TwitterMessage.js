import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  handleTyping = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  // changeChars = () => {
  //   this.props.maxChars - this.state.content.length
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.content} onChange={event => this.handleTyping(event)}/>
        <p>Remaining Characters: {this.props.maxChars - this.state.content.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
