class Api::V1::FlyersController < ApplicationController
  before_action :set_flyer, only: %i[ show update destroy ]

  # GET /flyers
  def index
    @flyers = Flyer.all
    render json: @flyers
  end

  # GET /flyers/1
  def show
    render json: @flyer
  end

  # POST /flyers
  def create
    @flyer = Flyer.new(flyer_params)

    if @flyer.save
      render json: (@flyer), status: :created
    else
      render json: @flyer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /flyers/1
  def update
    if @flyer.update(flyer_params)
      render json: (@flyer)
    else
      render json: @flyer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /flyers/1
  def destroy
    if @flyer.destroy
      head :no_content # 204 status
    else
      render json: @flyer.errors, status: :unprocessable_entity
    end
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_flyer
      @flyer = Flyer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def flyer_params
      params.require(:flyer).permit(:id, :title, :description, :user_id)
    end

end
