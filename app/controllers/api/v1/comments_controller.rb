class Api::V1::CommentsController < ApplicationController

    # POST /comments
    def create
      comment = Comment.new(comment_params)
  
      if comment.save
        render json: comment, status: :created
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    end

    # DELETE /comments/1
    def destroy
      comment = Comment.find(params[:id])

      if comment.destroy
        head :no_content
      else
        render json: comment.errors, status: :unprocessable_entity
      end
    end


  private

  def comment_params
    params.require(:comment).permit(:body, :flyer_id)
  end

end