// launchcode.test.js code:
const launchcode = require('../hello.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!

  test("property organization should have a value of nonprofit", function() {
    expect(launchcode.organization).toEqual("nonprofit");
 });

  test("executive director should have a value of Jeff", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  test("percentage should have a value of 100", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("programs offered should have the appropriate values", function() {
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });
  
});
