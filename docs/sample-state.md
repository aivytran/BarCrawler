{
  currentUser: {
    id: 1,
    username: "aivy-tran"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    addReviews: {errors: ["body can't be blank"]}
  },
  bars: {
    1: {
      name: "Bar 1",
      rating: 5",
      id: 1,
      lat: 0.0,
      lng: 0.0
      barDetail: {
        location: "SF"
        image_url: "",
        price: "$$",
        pet_friendly: true,
        wifi: true,
        review: {
          1: {
            rating: 4,
            body: "cool bar"
            bar_id: 1
          }
        }
      }
    }
  },
  route: {
    id: 1,
    name: "Route 1",
    bars: [
      1: {
        name: "Bar 1",
        bar_id : 1
        location: "SF",
      }
    ]
  }
}
