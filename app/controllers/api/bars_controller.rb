require 'json'

class Api::BarsController < ApplicationController
  def index
    keyword = params[:keyword]
    @bars = get_all_bars(keyword)
    # p @bars
  end

  def get_all_bars(keyword)
    response = Yelp.client.search(keyword, { term: 'bars', limit: 3 })
    @bars = response.businesses
    render :index
  end

end
