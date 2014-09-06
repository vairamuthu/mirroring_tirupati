class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.string :code
      t.integer :country_id
      t.string :short_name

      t.timestamps
    end
  end
end
