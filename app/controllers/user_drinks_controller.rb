class UserDrinksController < ApplicationController

    def index
        userdrinks = UserDrink.all
        render json: userdrinks
    end

    def create
        userdrinks = UserDrink.create!(user_drinks_params)
        render json: userdrinks, status: :created
    end

    def destroy
        userdrink = UserDrink.find(params[:id])
        userdrink.destroy
        head :no_content
    end

    def delete
        current_user.drinks.find_by(params[:drink_id])
    end

    private

    def user_drinks_params
        params.permit(:user_id, :drink_id)
    end

end
