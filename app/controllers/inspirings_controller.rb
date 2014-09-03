class InspiringsController <  ApplicationController
  
  def index
    @inspirings = Post.order("id desc").limit(5)
  end
  
end