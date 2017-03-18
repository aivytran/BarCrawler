require 'json'

class Api::BarsController < ApplicationController
  def index
    keyword = params[:keyword]
    @bars = get_all_bars(keyword)
    render :index
  end

  def get_all_bars(keyword)
    response = Yelp.client.search(keyword, { term: 'bars', limit: 3 })
    response.businesses
  end

end
