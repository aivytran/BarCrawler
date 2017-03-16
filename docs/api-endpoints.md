# API Endpoints

## HTML API
__Root__
- GET /

## JSON API
__Users__
- POST /api/users
- PATCH /api/users

__Session__
- POST /api/sesion
- DELETE /api/session

__Bars__
- GET /api/bars
- POST /api/bars
- GET /api/bars/:id

__Reviews__
- POST /api/bars/:bar_id/reviews
- GET /api/bars/:bar_id/reviews

__Route__
- GET /api/routes/
- POST /api/routes/
- GET /api/routes/:id
- DELETE /api/routes/:id

## YELP API
```
require 'yelp'

Yelp.client.configure do |config|
  config.consumer_key = PXBzqvhfdDoUd2JSBm1sGg
  config.consumer_secret = JdL8Z0xJBEbZwqJ8d4TR7boe4lo
  config.token = AiUKIA5Z4jwyotCkF4yjaGcluU85xYSf
  config.token_secret = NfiuC_3t5LiEvuzo0Pl8ibBNWgE
end

Yelp.client.search('San Francisco', { term: 'bars' })

```

## GOOGLE MAP API

```
function calculateAndDisplayRoute(map) {

  const directionsService = new google.maps.DirectionsService;
  const directionsDisplay = new google.maps.DirectionsRenderer;
  directionsDisplay.setMap(map);

  directionsService.route({
    origin: "San Francisco, CA",
    destination: "Los Angeles, CA",
    waypoints: [{location: "Davis, CA", stopover: true} ,
                {location: "Santa Ana, CA", stopover: true}],
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    })
};

```
