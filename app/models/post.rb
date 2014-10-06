class Post < ActiveRecord::Base
  has_attached_file :photo, :styles => { :medium => "280x140>", :thumb => "100x100>" },  :url => "/assets/posts/:id/:style/:basename.:extension",
  :path => ":rails_root/public/assets/posts/:id/:style/:basename.:extension"
  validates_attachment_content_type :photo, :content_type => /^image\/(jpg|jpeg|pjpeg|png|x-png|gif)$/
  belongs_to :city
  
  has_many :comments
  
  scope :recent, -> { where(is_publish: true).order(created_at: :desc) }
  scope :top, -> { where(is_publish: true).order(views: :desc)}
  
  def posted_on
    publish_on || created_at
  end
  
  def increase_view
    update_attributes(:views => (self.views + 1))
  end
  
end
