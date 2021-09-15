class UserDrinksController < ApplicationController
    def create
        userdrinks = UserDrink.create!(user_drinks_params)
        render json: userdrinks, status: :created
    end

    private

    def user_drinks_params
        params.permit(:user_id, :drink_id)
    end

end
