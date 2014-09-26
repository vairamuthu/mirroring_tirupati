class Admin::CountriesController <  InheritedResources::Base
  actions :all, :except => [:show]

 private

  def permitted_params
    params.permit(:country => [:name, :short_name, :code])
  end
  
end
