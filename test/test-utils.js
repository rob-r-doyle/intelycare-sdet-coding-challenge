// Collection of resuable test functions

function waitForPageLoad(waitTime = 60000) {
    browser.waitUntil(
        () => browser.execute(() => document.readyState == 'complete'),
        {
            timeout: waitTime, // default is one minute
            timeoutMsg: 'Timed out waiting for webpage to load.'
        }
    );
    // Source for the timeout code: https://stackoverflow.com/a/67811753
}