class DrinksController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
      drinks = Drink.all
      render json: drinks
    end
  
    def show
      drink = find_drink
      render json: drink
    end
  
    def create
      drink = Drink.create!(drink_params)
      render json: drink, status: :created
    rescue ACtiveRecord::RecordInvalid => invalid 
      render json: {error: "invalid!"}, status: 422
    end
  
    def update
      drink = find_drink
      drink.update(drink_params)
      render json: drink
    end
  
    def destroy
      drink = find_drink
      drink.destroy
      head :no_content
    end
  
  
      private
  
    def find_drink
      Drink.find(params[:id])
    end
  
    def drink_params
      params.permit(:name, :ingredients, :instructions, :img_url, :custom, :users)
    end
  
    def render_not_found_response
      render json: { error: "Drink not found" }, status: :not_found
    end
end
