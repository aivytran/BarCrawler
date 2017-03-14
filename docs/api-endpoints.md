# API Endpoints

## HTML API
** Root **
- GET /

## JSON API
** Users **
- POST /api/users
- PATCH /api/users

** Session **
- POST /api/sesion
- DELETE /api/session

** Bars **
- GET /api/bars
- POST /api/bars
- GET /api/bars/:id

** Reviews **
- POST /api/bars/:bar_id/reviews
- GET /api/bars/:bar_id/reviews

** Route **
- GET /api/routes/
- POST /api/routes/
- GET /api/routes/:id
- DELETE /api/routes/:id

## YELP API
require 'yelp'

Yelp.client.configure do |config|
  config.consumer_key = PXBzqvhfdDoUd2JSBm1sGg
  config.consumer_secret = JdL8Z0xJBEbZwqJ8d4TR7boe4lo
  config.token = AiUKIA5Z4jwyotCkF4yjaGcluU85xYSf
  config.token_secret = NfiuC_3t5LiEvuzo0Pl8ibBNWgE
end

Yelp.client.search('San Francisco', { term: 'bars' })
