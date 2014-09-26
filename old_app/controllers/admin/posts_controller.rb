class Admin::PostsController < InheritedResources::Base
  actions :all, 

 private

  def permitted_params
    params.permit(:post => [:title, :content, :city_id, :photo, :views, :publish_on, :is_publish])
  end
  
end
