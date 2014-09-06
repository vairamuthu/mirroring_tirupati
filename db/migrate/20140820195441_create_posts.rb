class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.integer :views
      t.integer :city_id

      t.timestamps
    end
  end
end
