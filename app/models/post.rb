class Post < ActiveRecord::Base
  has_attached_file :photo, :styles => { :medium => "300x300>", :thumb => "100x100>" },  :url => "/assets/posts/:id/:style/:basename.:extension",
  :path => ":rails_root/public/assets/posts/:id/:style/:basename.:extension"
  validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/
  belongs_to :city
end
