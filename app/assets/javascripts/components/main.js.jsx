let Main = React.createClass({
  getInitialState() {
    return {
      chatRoom: {},
      showIndex: true,
      enterBoardNumber: false,
      showBoard: true
    };
  },

  setToFalse(){
    this.setState({showIndex: false, enterBoardNumber: false, showBoard: false});
  },

  handleEnterBoardNumber(){
    this.setState({enterBoardNumber: true, showIndex: false, showBoard: false})
  },

  handleNewChatRoom(){
    if(confirm("Create a new board?")) {
      $.ajax({
        url: '/chat_rooms',
        type: 'POST',
        dataType: 'JSON',
        context: this,
        success(data){          
          this.setState({chatRoom: data, showIndex: false, enterBoardNumber: false, showBoard: true});
        }
      })
    }
  },

  handleEnterBoard(data){
    this.setState({chatRoom: data, showBoard: true, showIndex: false, enterBoardNumber: false});
  },

  goBack(e){
    e.preventDefault();
    this.setState({showIndex: true, enterBoardNumber: false, showBoard: false })
  },

  render(){
    if (this.state.showIndex) {
      return <ChatRoomIndex handleEnterBoardNumber={this.handleEnterBoardNumber} handleNewChatRoom={this.handleNewChatRoom} />
    }
    else if (this.state.showBoard) {
      return <ChatRoom chatRoom={this.state.chatRoom} goBack={this.goBack}/>
    }
    else if (this.state.enterBoardNumber) {
      return <EnterBoardNumber handleEnterBoard={this.handleEnterBoard} goBack={this.goBack} />
    }
  }
})