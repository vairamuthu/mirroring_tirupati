class InspiringsController <  ApplicationController  
  def index
    @inspirings = Post.recent.limit(10)
    @top_posts = Post.top.limit(10)
  end
  
  def show
    @post = Post.find(params[:id])
    @top_posts = Post.top.limit(10)
    @post.increase_view
  end  
  
  def comment
    @post = Post.find(params[:id])
    @post.comments.create(:name => params[:name], :email => params[:email], :content => params[:comment])
    redirect_to inspiring_path(@post)
  end 
    
end