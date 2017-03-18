@bars.each_with_index do |bar, idx|
  json.set! idx do
    json.name bar.name
    json.rating bar.rating
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
  end
end
