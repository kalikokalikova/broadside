require 'rails_helper'

RSpec.describe 'Flyers', type: :request do

  describe "DELETE /destroy" do
    let!(:flyer) { FactoryBot.create(:flyer) }

    before do
      delete "/api/v1/flyers/#{flyer.id}"
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

end