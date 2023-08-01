class AddDefaultValueToPrivate < ActiveRecord::Migration[7.0]
  def change
    change_column_default :flyers, :private, false
  end
end
