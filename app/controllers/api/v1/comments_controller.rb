class Api::V1::FlyersController < ApplicationController
  before_action :set_flyer, only: %i[ show update destroy ]

    # POST /comments
    def create
      @comment = Comment.new(comment_params)
  
      if @comment.save
        render json: @comment, status: :created, location: @comment
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end

    # DELETE /comments/1
    def destroy
      @comment = Comment.find(params[:id])

      if @comment.destroy
        head :no_content
      else
        render json: @comment.errors, status: :unprocessable_entity
      end
    end


  private

  def comment_params
    params.require(:comment).permit(:body, flyer_id)
  end




end