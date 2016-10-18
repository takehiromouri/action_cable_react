class ChatRoomRequestsController < ApplicationController
  before_action :authenticate_user!

  def create    
    @chat_room = ChatRoom.find_by_room_code(chat_room_request_params[:room_code])
    
    if @chat_room.nil?
      flash[:alert] = "No chat room found!"
      respond_to do |format|
        format.json { render json: {error: "No chat room found!"}, status: :unprocessable_entity }
      end      
    else
      respond_to do |format|
        format.json { render json: @chat_room.as_json(include: :messages) }
      end   
    end
  end

  private

  def chat_room_request_params
    params.require(:chat_room_requests).permit(:room_code)
  end
end
