# Testing Playwright with CodeCept on LambdaTest

## Setup
* Clone the repo. Run `cd playwright-codecept-js`

## Running your tests
- Install dependencies - ```npm install```
- To run tests - ```npm run codeceptjs``` (this will just run the tests in LT)
-  Perform npm i
   You can update your figma token and ids in the design.json file.
- Set your user name, access key and project token along with figma token.
- Upload your figma baseline using command : npx smartui upload-figma-web designs.json
 
Doc for reference : https://www.lambdatest.com/support/docs/smartui-cli-figma-web/
 
- Add below code after your URL commands for which you need to take the screenshot :
 
await I.usePlaywrightTo('Capture Smart UI Snapshot', async ({ page }) => {
        await smartuiSnapshot(page, 'Thumbnail.png'); // name of your screenshot
    });
 
- Then finally run command : npx smartui exec npm run codeceptjs --config web-config.json
- To switch between executing in LT and in local go to codecept.config.js file
-       chromium: {
      o/browserWSEndpoint: { wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}` } This is f0r execution in LT
      }

    
for local execution we can comment it out in case if the test is not finding the chrome executable for local execution we can specify the path of the executable like this(already present in the file but commented)
 executablePath: 'C:\\Users\\sreenadhb\\AppData\\Local\\ms-playwright\\chromium-1155\\chrome-win\\chrome.exe'    // This is for local execution, this path is not required only if you need to set the chromium.exe path explicitly we need this

