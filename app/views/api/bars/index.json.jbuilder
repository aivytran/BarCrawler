@bars.each_with_index do |bar, idx|
  json.set! idx+1 do
    json.id idx+1
    json.name bar.name
    json.rating asset_path(bar.rating_img_url_large)
    json.image_url asset_path(bar.image_url)
    json.city bar.location.city
    json.address bar.location.display_address
    json.phone_number bar.display_phone
    json.neighborhoods bar.location.neighborhoods
    json.lng bar.location.coordinate.longitude
    json.lat bar.location.coordinate.latitude
    json.yelp_url asset_path(bar.url)
    json.open bar.is_closed
    json.review_count bar.review_count
    json.name_id bar.id
  end
end
