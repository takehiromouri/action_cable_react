class StaticPagesController < ApplicationController
  def index
    if current_user.present?
      redirect_to chat_rooms_path
    else
      render layout: 'landing_page'
    end
  end
end
