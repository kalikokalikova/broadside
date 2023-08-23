require 'rails_helper'

describe 'React Route Testing', type: :feature do
  it 'navigates to a React route and interacts with the page' do
    visit('/')  # Visit the root of your React app
    page.execute_script('window.location = "/wall";')  # Change the URL to your desired React route
    # Perform interactions using Capybara's DSL
    expect(page).to have_content('THE WALL')
    # click_button('Submit')
    # expect(page).to have_content('Success!')
  end
end

# describe "the flyers page (AKA the Wall)", type: :feature do
#   describe 'NOT LOGGED IN experience', js: true do
#     # create 5 public flyers, 1 private flyer
#     before do
#       FactoryBot.create_list(:flyer, 5)
#     end

#     it "goes to the wall" do
#       # go to the wall
#       visit('/wall')
#       # user should see only public flyers
        # user should see sign up/sign in
#       puts page
#     end
#   end

#   describe 'LOGGED IN experience' do
#     # create 5 public flyers, 1 private flyer owned by user, 1 private flyer owned by other
#     # go to wall
#     # user should see all public flyers, their own flyer, but NOT the private flyer owned by other
      # user should see Welcome username, log out
#   end

# end

# NOT LOGGED IN user should be able to see all public flyers
# LOGGED IN user should see all public flyers, no private flyers except flyers owned by that user

# NOT LOGGED IN user should be able to see individual private flyers for which they have a special link

  # before :each do
  #   User.create(email: 'user@example.com', password: 'password')
  # end

  # it "signs me in" do
  #   visit '/sessions/new'
  #   within("#session") do
  #     fill_in 'Email', with: 'user@example.com'
  #     fill_in 'Password', with: 'password'
  #   end
  #   click_button 'Sign in'
  #   expect(page).to have_content 'Success'
  # end