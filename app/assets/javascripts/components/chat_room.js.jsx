let ChatRoom = React.createClass({
  getInitialState() {
    return {
      chatRoom: this.props.chatRoom,
      messages: this.props.chatRoom.messages
    };
  },

  componentDidMount() {
    this.setupSubscription();
  },

  setupSubscription() {
    var that = this;
    App.global_chat = App.cable.subscriptions.create("ChatRoomsChannel", {
      chat_room_id: this.props.chatRoom.id,

      connected: function () {
        // Timeout here is needed to make sure Subscription
        // is setup properly, before we do any actions.
        setTimeout(() => this.perform('follow',
                                      {chat_room_id: that.props.chatRoom.id}),
                                      1000);
      },

      received: function(data) {
        console.log(data);
        that.updateMessages(data.message);
      },

      send_message: function(message, chat_room_id) {
        this.perform('send_message', {
          message: message,
          chat_room_id: chat_room_id
        });
      },

      updateMessages: this.updateMessages
    });
  },

  updateMessages(message) {
    let messages = React.addons.update(this.state.messages, {$push: [message]});
    this.setState({messages: messages});
  },

  render(){
    let messages;
    if (this.state.messages.length !== 0) {
      messages = this.state.messages.map((message) => {
        return <Message key={message.id} message={message} />
      });
    }
    

    return (
      <div>
        <button onClick={this.props.goBack} className="btn btn-sm btn-primary">Go Back</button>
        <br />
        <ul>
          <li>Board Number: {this.props.chatRoom.room_code}</li>
          <li>Created By: {this.props.chatRoom.user_name}</li>
          <li>Created On: {this.props.chatRoom.created_at}</li>
        </ul>

        {messages}

        <ChatRoomMessageForm chatRoom={this.props.chatRoom}/>
      </div>
    )
  }
})