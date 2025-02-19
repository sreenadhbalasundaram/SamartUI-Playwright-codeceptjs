Feature('SmartUI Visual Testing');

const { smartuiSnapshot } = require("@lambdatest/playwright-driver");
const { inject } = require('codeceptjs');

Scenario('Capture SmartUI Snapshots', async ({ I }) => {

    


    const pages = [
        { url: 'http://avexaero.com/', name: 'Landing.png' },
        { url: 'http://avexaero.com/services/elementor-123/', name: 'Catering.png' },
        { url: 'http://avexaero.com/services/flight-planning/', name: 'Flight-Planning.png' },
        { url: 'http://avexaero.com/services/fuel/', name: 'Fuel.png' },
        { url: 'http://avexaero.com/services/handling/', name: 'Handling.png'}
    ];

    for (const { url, name, viewport } of pages) {
        I.amOnPage(url);

        await I.usePlaywrightTo('Capture Smart UI Snapshot', async ({ page }) => {
            await smartuiSnapshot(page, name);
          });

    }
});
