Feature: Business rules
  In order to achieve my goals
  As a persona

  # Scenario: Login Functionality with Valid user name and password
  #   Given I Login into Orange HRM
  #   Then I should see the Dashboard page

  Scenario: Login to HRM and go to Admin Tab
    Given I Login into Orange HRM
    When I go to Admin Tab
    Then I should see the "System"
    Then I should see the "Users"
    And I should see the "System Users" texts
    When I go to PIM tab
    And I shoud see the number 0029

