class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.string :name, :not_null => false
      t.string :short_name
      t.string :code
      t.timestamps
    end
  end
end
