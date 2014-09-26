class Post < ActiveRecord::Base
  has_attached_file :photo, :styles => { :medium => "300x300>", :thumb => "100x100>" },  :url => "/assets/posts/:id/:style/:basename.:extension",
  :path => ":rails_root/public/assets/posts/:id/:style/:basename.:extension"
  validates_attachment_content_type :photo, :content_type => /^image\/(jpg|jpeg|pjpeg|png|x-png|gif)$/
  belongs_to :city
  
  def posted_on
    publish_on || created_at
  end
end
