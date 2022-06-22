Feature: Access the about page
    I want to access the about page

    Scenario: Accessing the about page successfully
        Given I open the main page
        When I click on the About button
        Then I see that I am on the about page