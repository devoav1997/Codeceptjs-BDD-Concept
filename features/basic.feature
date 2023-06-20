Feature: Business rules
  In order to achieve my goals
  As a persona

Background: Login Functionality
Given I Login into Orange HRM
Then I should see the Dashboard page

  Scenario: Login Functionality with Valid user name and password
    Given I should see the Dashboard page

  Scenario: Login to HRM and go to Admin Tab
    Given I go to Admin Tab
    Then I should see the "System"
    Then I should see the "Users"
    And I should see the "System Users" texts
    When I go to PIM tab
    And I shoud see the number 0029

@TableScenario
  Scenario: Login to Orange HRM and go to Admin Tab - Using Table
  Given I go to PIM tab
  Then I should see the Employee details
  |id   | fname | lname |
  |0221 |Alice  |Duval  |
  |0261 |Anista |grace  |

@TableParameterisation
  Scenario Outline: Login to HRM and using Parameterisation
  Given I go to PIM tab
  Then I should see the "<fname>"
  Examples:
    |id   | fname | lname |
    |0221 |Alice  |Duval  |
    |0261 |Anista |grace  |

