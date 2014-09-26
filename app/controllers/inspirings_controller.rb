class InspiringsController <  ApplicationController  
  def index
    @inspirings = Post.recent.limit(10)
    @top_posts = Post.top.limit(10)
  end
  
end