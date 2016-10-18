class ChatRoomsChannel < ApplicationCable::Channel
  def follow(data)
    stop_all_streams
    stream_from "chat_rooms_#{data['chat_room_id']}_channel"
  end

  def unfollow
    stop_all_streams
  end

  def send_message(data)
    current_user.messages.create!(body: data['message'], chat_room_id: data['chat_room_id'])
  end
end