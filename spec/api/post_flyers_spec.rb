require 'rails_helper'

RSpec.describe 'Flyers', type: :request do
  describe 'POST /create' do
    context 'with valid parameters' do
      let!(:my_flyer) { FactoryBot.create(:flyer) }

      before do
        post '/api/v1/flyers', params:
          {
            flyer: {
              title: my_flyer.title,
              description: my_flyer.description,
              user_id: 1
            }
          }
      end

      it 'returns the title' do
        expect(json['title']).to eq(my_flyer.title)
      end

      it 'returns the description' do
        expect(json['description']).to eq(my_flyer.description)
      end

      it 'returns a created status' do
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid title parameters' do
      let!(:user) { FactoryBot.create(:user) }

      before do
        post '/api/v1/flyers', params:
          {
            flyer: {
              title: '',
              description: '',
              user_id: user.id
            }
          }
      end
        
      it 'returns an unprocessabel entity status' do
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end

    context 'with invalid user parameters' do

      before do
        post '/api/v1/flyers', params:
          {
            flyer: {
              title: 'foo',
              description: '',
            }
          }
      end
        
      it 'returns an unprocessabel entity status' do
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end


