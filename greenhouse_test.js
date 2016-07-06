
Feature('Application Form');

Scenario('Check the page', (I) => {
  I.amOnPage('/improbable/jobs/69982#.V3xgbpMrLUI');
  I.see('Front End Developer');
});

Scenario('Test the "Attach" option', (I) => {
  I.amOnPage('/improbable/jobs/69982#.V3xgbpMrLUI');
  I.click('div[data-field=resume] a[data-source=attach]');
  I.seeElement('div[data-field=resume] a[data-source=attach]');
});

Scenario('Test the "Dropbox" option', (I) => {
  I.amOnPage('/improbable/jobs/69982#.V3xgbpMrLUI');
  I.click('div[data-field=resume] a[data-source=dropbox]');
  I.see('Loading attachment from Dropbox...', 'div[data-messages=uploaders]');
});

Scenario('Test the "Paste" option', (I) => {
  I.amOnPage('/improbable/jobs/69982#.V3xgbpMrLUI');
  I.click('div[data-field=resume] a[data-source=paste]');
  I.seeElement('div[data-field=resume] a[data-source=paste]');
});

Scenario('Test the "Google Drive" option', (I) => {
  I.amOnPage('/improbable/jobs/69982#.V3xgbpMrLUI');
  I.click('div[data-field=resume] a[data-source=google-drive]');
  I.seeElement('div[data-field=resume] a[data-source=google-drive]');
});
