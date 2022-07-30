# QA assignment: SmartFrame

Simple automated tests written in Javascript using Playwright.

## Installation guide

First, Node.js 14 or higher is required. If it's your first time with Node, follow this [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

To run all tests:
1. Clone this repository
2. Install the dependencies using `npm install`
3. Run the sample script using `npm run tests`

To get detailed test report, run `npm run report`. 

## Time spent on it
Oh dear, it really took some time. In total, I spent on this part of the assignment around 5h:
1. My laptop did not have a pleasure to run anything with `.js` in the file name, so installation itself took around 0.5h (frameworks, IDE, even `git`)
2. Then I wasted solid 2,5h trying to conquer first iframe in Cypress. I know this should be possible cause I already saw it done in my previous project, but custom script was blocking displaying frame before I could even start hacking it. There must be some trivial workaround, but I did not want to spent too much (ha... too late for that (◔_◔) ) of my Saturday investigating.
3. Rest of the time was ~~learning~~ getting some basic understanding of Playwright - tool that I knew was marketed as solving all the troubles Cypress has with iframes. I ended up having a lot of eyeopening fun, even if the tests ended up being much more basic if could be in framework I actuall know. 

## Caveats

### Because this is only exemplary assignement...
I did not want to go into this rabbit hole too far, there are some limitations in the tests:
* they run only on Chrome (eventhough Playwright support many other browsers)
* tests are optimised for Windows - I did not have a chance to check if they work also on Mac or Linux
* only steps and assertions specified in the provided test cases were covered - Playwright is pretty far in the support for visual testing, so if more detailed assertions for elements (checking colors, sizes, etc.) were needed, it's probably good way to go
* tests are not checked and optimised to run in parallel

### If I have more time...
some things I would do differently:
* checking what are requirements regarding browsers coverage
* adding eslint code analysis and confirming linter rules
* instead of using `removeAttribute` in the second test, actually taking advantage of support for multiple tabs Playwright provides (yessss!). There are some [official workarounds](https://github.com/microsoft/playwright/issues/2692), but they does not seem to (easily) work