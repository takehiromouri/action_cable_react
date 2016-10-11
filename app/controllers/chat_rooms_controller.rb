class ChatRoomsController < ApplicationController
  before_action :authenticate_user!

  def index
    @chat_rooms = ChatRoom.all
  end

  def show
    @chat_room = ChatRoom.includes(:messages).find_by_id(params[:id])
    @message = Message.new
  end

  def new
    @chat_room = ChatRoom.new
  end

  def create
    @chat_room = current_user.chat_rooms.build
    if @chat_room.save
      flash[:success] = 'Chat room added!'
      redirect_to chat_room_path(@chat_room)
    else
      render 'new'
    end
  end

end