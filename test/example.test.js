// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderData } from '../render-utils.js';

const test = QUnit.test;

test('renderData for creating a div and populating it with data', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="sticky"><h2>Test data</h2><p>This is to test that my data is displaying on the home page correctly</p><h3>Developer</h3></div>';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderData({ title: 'Test data', content: 'This is to test that my data is displaying on the home page correctly', contact: 'Developer' });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
