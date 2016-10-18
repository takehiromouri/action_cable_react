let ChatRoomIndex = React.createClass({
  render(){
    return (
      <div>
        <button className="btn btn-success" onClick={this.props.handleEnterBoardNumber}>Join a Board</button>

        <button className="btn btn-primary" onClick={this.props.handleNewChatRoom}>Create a Board</button>
      </div>
    )
  }
})