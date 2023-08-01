class AddPrivateFieldToFlyers < ActiveRecord::Migration[7.0]
  def change
    add_column :flyers, :private, :boolean
  end
end
