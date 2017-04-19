require 'json'
require 'net/http'
require 'open-uri'

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

  def show
    name = params[:name]
    @bar = get_bar(name)
    p @bar
    render :show
  end

  def get_bar(nameID)
    token = get_token
    bar_review = get_bar_review(token, nameID)
    bar_detail = get_bar_detail(token, nameID)
    bar_review.merge(bar_detail)
  end

  def get_token
    uri = URI("https://api.yelp.com/oauth2/token")
    res = Net::HTTP.post_form(uri, 'client_id' => 'fhnh9Ru7ZIJwOY_mzFFNrQ', 'client_secret' => 'Si6u8lndqUmvLJSBAa0leu6C3ljpNcTJR7WmOBm34oSbxnB7S3K9R9LSMU7KOuSq')
    token = JSON.parse(res.body)["access_token"]
  end

  def get_bar_review(token, nameID)
    encoded_url = URI::encode("https://api.yelp.com/v3/businesses/" + nameID + "/reviews")
    url = URI.parse(encoded_url)
    req = Net::HTTP::Get.new(url.request_uri)
    req["Authorization"] = "Bearer " + token
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == "https")
    res = http.request(req)
    JSON.parse(res.body)
  end

  def get_bar_detail(token, nameID)
    encoded_url = URI::encode("https://api.yelp.com/v3/businesses/" + nameID)
    url = URI.parse(encoded_url)
    req = Net::HTTP::Get.new(url.request_uri)
    req["Authorization"] = "Bearer " + token
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == "https")
    res = http.request(req)
    JSON.parse(res.body)
  end


end
