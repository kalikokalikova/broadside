require "test_helper"

class FlyersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @flyer = flyers(:one)
  end

  test "should get index" do
    get flyers_url, as: :json
    assert_response :success
  end

  test "should create flyer" do
    assert_difference("Flyer.count") do
      post flyers_url, params: { flyer: { description: @flyer.description, title: @flyer.title } }, as: :json
    end

    assert_response :created
  end

  test "should show flyer" do
    get flyer_url(@flyer), as: :json
    assert_response :success
  end

  test "should update flyer" do
    patch flyer_url(@flyer), params: { flyer: { description: @flyer.description, title: @flyer.title } }, as: :json
    assert_response :success
  end

  test "should destroy flyer" do
    assert_difference("Flyer.count", -1) do
      delete flyer_url(@flyer), as: :json
    end

    assert_response :no_content
  end
end
