const TGP_URL = 'thegearpage.net';
const PAGE_WRAPPER = 'div.p-pageWrapper';
const PREFERRED_BG = '#FFFFFF';
const replaceBackgroundColor = (target, backgroundColor) => {
  const mainWrapper = document.querySelector(target);

  mainWrapper.style.background = backgroundColor;
};

chrome.tabs.onUpdated.addListener(async (tabId, _, tab) => {
  const { url } = tab;

  if (!url.includes(TGP_URL)) return;
  
  await chrome.scripting.executeScript(({
    target: {
      tabId,
    },
    func: replaceBackgroundColor,
    args: [PAGE_WRAPPER, PREFERRED_BG],
  }));

  console.log('done changing background');
});