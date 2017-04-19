json.review1_rating @bar["reviews"][0]["rating"]
json.review1_user_img asset_path(@bar["reviews"][0]["user"]["image_url"])
json.review1_user_name @bar["reviews"][0]["user"]["name"]
json.review1 @bar["reviews"][0]["text"]
json.review1_date @bar["reviews"][0]["time_created"][0..9]

json.review2_rating @bar["reviews"][1]["rating"]
json.review2_user_img asset_path(@bar["reviews"][1]["user"]["image_url"])
json.review2_user_name @bar["reviews"][1]["user"]["name"]
json.review2 @bar["reviews"][1]["text"]
json.review2_date @bar["reviews"][1]["time_created"][0..9]


json.review3_rating @bar["reviews"][2]["rating"]
json.review3_user_img asset_path(@bar["reviews"][2]["user"]["image_url"])
json.review3_user_name @bar["reviews"][2]["user"]["name"]
json.review3 @bar["reviews"][2]["text"]
json.review3_date @bar["reviews"][2]["time_created"][0..9]


json.name @bar["name"]
json.rating asset_path(@bar["rating"])
json.image_url asset_path(@bar["image_url"])
json.yelp_url asset_path(@bar["url"])
json.rating @bar["rating"]
json.price @bar["price"]
json.review_count @bar["review_count"]
json.phone @bar["phone"]
json.photo1 asset_path(@bar["photos"][0])
json.photo2 asset_path(@bar["photos"][1])
json.photo3 asset_path(@bar["photos"][2])

if @bar["hours"]

  if @bar["hours"][0]["open"][6]
    json.mon_hour @bar["hours"][0]["open"][0]["start"][0..1] + ":" + @bar["hours"][0]["open"][0]["start"][2..3] + " - " +  @bar["hours"][0]["open"][0]["end"][0..1] + ":" + @bar["hours"][0]["open"][0]["end"][2..3]
  else
    json.mon_hour "Close"
  end
  if @bar["hours"][0]["open"][6]
    json.tues_hour @bar["hours"][0]["open"][1]["start"][0..1] + ":" + @bar["hours"][0]["open"][1]["start"][2..3] + " - " +  @bar["hours"][0]["open"][1]["end"][0..1] + ":" + @bar["hours"][0]["open"][1]["end"][2..3]
  else
    json.tues_hour "Close"
  end
  if @bar["hours"][0]["open"][6]
    json.wed_hour @bar["hours"][0]["open"][2]["start"][0..1] + ":" + @bar["hours"][0]["open"][2]["start"][2..3] + " - " +  @bar["hours"][0]["open"][2]["end"][0..1] + ":" + @bar["hours"][0]["open"][2]["end"][2..3]
  else
    json.wed_hour "Close"
  end
  if @bar["hours"][0]["open"][6]
    json.thurs_hour @bar["hours"][0]["open"][3]["start"][0..1] + ":" + @bar["hours"][0]["open"][3]["start"][2..3] + " - " +  @bar["hours"][0]["open"][3]["end"][0..1] + ":" + @bar["hours"][0]["open"][3]["end"][2..3]
  else
    json.thurs_hour "Close"
  end
  if @bar["hours"][0]["open"][6]
    json.fri_hour @bar["hours"][0]["open"][4]["start"][0..1] + ":" + @bar["hours"][0]["open"][4]["start"][2..3] + " - " +  @bar["hours"][0]["open"][4]["end"][0..1] + ":" + @bar["hours"][0]["open"][4]["end"][2..3]
  else
    json.fri_hour "Close"
  end
  if @bar["hours"][0]["open"][6]
    json.sat_hour @bar["hours"][0]["open"][5]["start"][0..1] + ":" + @bar["hours"][0]["open"][5]["start"][2..3] + " - " +  @bar["hours"][0]["open"][5]["end"][0..1] + ":" + @bar["hours"][0]["open"][5]["end"][2..3]
  else
    json.sat_hour "Close"
  end
  if @bar["hours"][0]["open"][6]
    json.sun_hour @bar["hours"][0]["open"][6]["start"][0..1] + ":" + @bar["hours"][0]["open"][6]["start"][2..3] + " - " +  @bar["hours"][0]["open"][6]["end"][0..1] + ":" + @bar["hours"][0]["open"][6]["end"][2..3]
  else
    json.sun_hour "Close"
  end
  json.is_open @bar["hours"][0]["is_open_now"]
end


json.address @bar["location"]["display_address"]
json.lat @bar["coordinates"]["latitude"]
json.lng @bar["coordinates"]["longitude"]
