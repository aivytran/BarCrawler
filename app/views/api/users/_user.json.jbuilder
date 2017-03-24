json.extract! user, :id, :username

json.routes do
  json.array! user.routes do |route|
    json.route_name route.name
    json.user_id route.user_id
    json.bars do
      json.array! route.bars do |bar|
        json.bar_name bar.name
        json.lat bar.lat
        json.lng bar.lng
        json.bar_img bar.image_url
      end
    end
  end
end
