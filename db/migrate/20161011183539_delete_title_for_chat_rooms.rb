class DeleteTitleForChatRooms < ActiveRecord::Migration[5.0]
  def change
    remove_column :chat_rooms, :title
  end
end
