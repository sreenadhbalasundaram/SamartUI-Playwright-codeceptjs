const { smartuiSnapshot } = require('@lambdatest/playwright-driver');

Feature('SmartUI Visual Testing');

  Scenario('Capture SmartUI Snapshots', async ({ I }) => { 
    
    I.amOnPage('http://avexaero.com/services/flight-planning/');
    I.wait(10); // Small delay after navigation

    await I.usePlaywrightTo('Capture Smart UI Snapshot', async ({ page }) => {
        await smartuiSnapshot(page, 'Landing.png');
    });

    I.amOnPage('http://avexaero.com/services/elementor-123/');
    I.wait(10);

    await I.usePlaywrightTo('Capture Smart UI Snapshot', async ({ page }) => {
        await smartuiSnapshot(page, 'Catering.png');
    });

    I.amOnPage('http://avexaero.com/services/flight-planning/');
    I.wait(10);

    await I.usePlaywrightTo('Capture Smart UI Snapshot', async ({ page }) => {
        await smartuiSnapshot(page, 'Flight-Planning.png');
    });

    I.amOnPage('http://avexaero.com/services/fuel/');
    I.wait(10);

    await I.usePlaywrightTo('Capture Smart UI Snapshot', async ({ page }) => {
        await smartuiSnapshot(page, 'Fuel.png');
    });

    I.amOnPage('http://avexaero.com/services/handling/');
    I.wait(10);

    await I.usePlaywrightTo('Capture Smart UI Snapshot', async ({ page }) => {
        await smartuiSnapshot(page, 'Handling.png');
    });

});
