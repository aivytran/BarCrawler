class CreateBars < ActiveRecord::Migration[5.0]
  def change
    create_table :bars do |t|
      t.string :name, null: false
    	t.string :image_url
    	t.string :lng
    	t.string :lat
      t.timestamps null: false
    end
    add_index :bars, :name
  end
end
