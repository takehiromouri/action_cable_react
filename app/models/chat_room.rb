class ChatRoom < ApplicationRecord
  belongs_to :user
  has_many :messages, dependent: :destroy

  validates_uniqueness_of :room_code

  before_create :generate_room_code!

  delegate :name, to: :user, prefix: true

  private

  def generate_room_code!
    self.room_code = loop do
      random_room_code = rand.to_s[2..6]
      break random_room_code unless self.class.exists?(room_code: random_room_code)
    end
  end
end
