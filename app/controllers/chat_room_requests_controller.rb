class ChatRoomRequestsController < ApplicationController
  before_action :authenticate_user!

  def create    
    @chat_room = ChatRoom.find_by_room_code(chat_room_request_params[:room_code])

    if @chat_room.nil?
      flash[:alert] = "No chat room found!"
      redirect_to root_path
    else
      redirect_to chat_room_path(@chat_room)
    end
  end

  private

  def chat_room_request_params
    params.require(:chat_room_requests).permit(:room_code)
  end
end
