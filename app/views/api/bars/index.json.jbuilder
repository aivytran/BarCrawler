json.array! @bars do |bar|
  json.extract! bar, :name, :rating
  json.neighborhoods bar.location.neighborhoods
end
