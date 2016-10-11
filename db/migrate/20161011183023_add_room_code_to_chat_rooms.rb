class AddRoomCodeToChatRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :chat_rooms, :room_code, :string
  end
end
