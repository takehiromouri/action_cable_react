let ChatRoomMessageForm = React.createClass({
  getInitialState() {
    return {
      body: ''
    };
  },

  handleChange(e){
    this.setState({body: e.target.value});
  },

  handleKeyPress(e){    
    if(e.key == 'Enter'){      
      App.global_chat.send_message(this.state.body, this.props.chatRoom.id);
      this.setState({body: ''});
    }
  },

  render(){
    return (
      <form>
        <textarea className="form-control" 
                  name="body" 
                  value={this.state.body} 
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="From 2 to 1000 Characters" /> 
        <p>{this.state.body.length} characters</p>
      </form>
    )
  }

})