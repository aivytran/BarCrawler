@bars.each do |bar, idx|
  json.set! idx do
    json.extract! bar, :name, :location
  end
end
