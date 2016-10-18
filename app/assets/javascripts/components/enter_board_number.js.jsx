let EnterBoardNumber = React.createClass({
  getInitialState() {
    return {
      roomCode: '',
      error: ''
    };
  },

  handleChange(e){
    if (this.state.roomCode.length <= 5) {
      this.setState({roomCode: e.target.value});
    }    
  },

  handleSubmit(e){
    e.preventDefault();
    $.ajax({
      url: '/chat_room_requests',
      dataType: 'JSON',
      type: 'POST',
      data: { chat_room_requests: {room_code: this.state.roomCode}},
      context: this,
      success(data){
        this.props.handleEnterBoard(data);
      },
      error(xhr) {
        error = xhr.responseJSON.error;
        this.setState({error: error});
      }
    });    
  },

  errorMessage(){
    if (this.state.error.length != 0) {
      return <p class="alert alert-danger">{this.state.error}</p>
    }
  },

  render(){
    return (
      <div>
        <form className="enter-board" onSubmit={this.handleSubmit}>
          {this.errorMessage()}
          <input type="text" name="room_code" value={this.state.roomCode} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
        </form>

        <br />

        <button onClick={this.props.goBack} className="btn btn-sm btn-primary">Go Back</button>
      </div>
    )
  }
})