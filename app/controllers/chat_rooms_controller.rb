class ChatRoomsController < ApplicationController
  before_action :authenticate_user!

  def index
    render component: 'Main', props: { current_user: current_user }
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
      respond_to do |format|
        format.json { render json: @chat_room.as_json(include: :messages) }
      end
    else
      render 'new'
    end
  end

end