class Api::RoutesController < ApplicationController

  def create
    @route = Route.new()
    @route.name = params[:route][:name]
    @route.user_id = params[:route][:user_id]
    @route.save
    route_id = @route.id
    params[:route][:bars].values.each do |bar|
      @bar = Bar.new()
      @bar.name = bar["name"]
      @bar.lat = bar["lat"]
      @bar.lng = bar["lng"]
      @bar.image_url = bar["img"]
      @bar.route_id = route_id
      @bar.save
    end
    @user = @route.user
    render "api/users/show"
  end
end
