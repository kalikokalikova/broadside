class CreateFlyers < ActiveRecord::Migration[7.0]
  def change
    create_table :flyers do |t|
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
