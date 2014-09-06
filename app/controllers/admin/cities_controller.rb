class Admin::CitiesController <  InheritedResources::Base
   actions :all, :except => [:show]

 private

  def permitted_params
    params.permit(:city => [:name, :country_id, :short_name, :code])
  end
  
end
