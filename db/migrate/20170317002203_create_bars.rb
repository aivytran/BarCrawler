class CreateBars < ActiveRecord::Migration[5.0]
  def change
    create_table :bars do |t|
      t.string :name, null: false
    	t.string :image_url
      t.string :city
      t.string :address
    	t.string :phone_number
    	t.numeric :rating
    	t.string :lng
    	t.string :lat
    	t.string :yelp_url
    	t.boolean :open
      t.timestamps null: false
    end
    add_index :bars, :name
  end
end
