require 'json'

class Api::BarsController < ApplicationController
  def index
    keyword = params[:keyword]
    bounds = params[:bounds]
    @bars = get_all_bars(keyword, bounds)
    render :index
  end

  def get_all_bars(keyword, bounds)
    if bounds != nil
      response = Yelp.client.search_by_bounding_box(bounds, { term: 'bars'})
    else
      response = Yelp.client.search(keyword, { term: 'bars'})
    end
    response.businesses
  end

  # def show
  #   name = params[:name]
  #   @bar = get_bar(name)
  #   render :show
  # end
  #
  # def get_bar(nameID)
  #   response = Yelp.client.business(nameID)
  # end

end
