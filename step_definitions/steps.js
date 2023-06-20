const { I } = inject();
// Add in your custom step files

Given('I Login into Orange HRM', () => {
    I.amOnPage('https://opensource-demo.orangehrmlive.com'); 
    I.wait(5);
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

When('I go to PIM tab',() => {
  I.click("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']");
  I.wait(5);
});

Then('I should see the "{word}"', (seetext) =>{
  I.see(seetext);
});

Then(/I should see the \"([^\\"]*)\" texts/, (seetext) =>{
  I.see(seetext);
});

Then('I shoud see the number {int}', (seenumber) =>{
  I.scrollTo("//div[normalize-space()='0029']");
  I.wait(3);
  I.see(seenumber);
});

Then('I should see the Employee details', (table) => {
  for(const record in table.rows) {
    if(record<1){
      continue;
    }
    const cellvalue = table.rows[record].cells;
    const id = cellvalue[0].value;
    const fname = cellvalue[1].value;
    const lname = cellvalue[2].value;
    I.see(fname);
    I.say(lname);
    I.say(id);
  }
});

