class AddColumnsPosts < ActiveRecord::Migration
  def change
    add_column :posts, :publish_on, :datetime
    add_column :posts, :is_publish, :boolean
  end
end
