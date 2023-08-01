class AddUserToFlyers < ActiveRecord::Migration[7.0]
  def change
    add_reference :flyers, :user
  end
end
