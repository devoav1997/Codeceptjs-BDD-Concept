const { I } = inject();
// Add in your custom step files

Given('I Login into Orange HRM', () => {
    I.amOnPage('https://opensource-demo.orangehrmlive.com'); 
    I.waitForText("Login");
    I.see("Login"); //assertion
    I.fillField("//input[@placeholder='Username']", "Admin"); //Xpath
    I.fillField("//input[@placeholder='Password']", "admin123"); //Xpath
    I.click("//button[@type='submit']"); //Xpath
    I.wait(5);
});

Then('I should see the Dashboard page', () => {
    I.waitForText("Dashboard",4);
    I.see("Dashboard"); //assertion
});

When('I go to Admin Tab', () =>{
  I.click("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)");
  I.wait(5);
});

Then('I should see the "{word}"', (seetext) =>{
  I.see(seetext);
});

Then(/I should see the \"([^\\"]*)\" texts/, (seetext) =>{
  I.see(seetext);
});

Then('I shoud see the number {int}', (seenumber) =>{
  I.see(seenumber);
});

