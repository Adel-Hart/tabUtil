chrome.runtime.onMessage.addListener((message, sender, sendResponse) => { //ui.js 로 부터 이벤트 대기
    


    if(message.action === 'saveHistory' && message.tabIds){ //Strict Equal Operator 값과 "종류"까지 비교

        const saveTabIds = message.tabIds;

        saveTabIds.forEach((tabId) => {
            
            chrome.tabs.get(tabId, (tab) => {

                const currentTab = tab.url;

                chrome.history




            });


        });
        



    }







});







/*
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'saveHistory' && message.tabIds) {
    const selectedTabIds = message.tabIds;
    let allHistories = '';

    selectedTabIds.forEach((tabId, tabIndex) => {
      chrome.tabs.get(tabId, (tab) => {
        const currentUrl = tab.url;
        let tabHistoryString = `Current Tab URL: ${currentUrl}\n`;

        // history API로 해당 탭의 기록 가져오기
        chrome.history.search({
          text: '',  // 모든 기록 검색
          maxResults: 100,  // 충분히 많은 기록 가져오기
          startTime: 0  // 모든 기록 검색
        }, (historyItems) => {
          const filteredHistory = historyItems.filter(item => item.url !== currentUrl);

          // 10번째 이전의 기록부터 가져옴 (즉, 최근 기록에서 11번째부터 최대 10개의 기록을 가져옴)
          const startIndex = 10;
          const previousHistory = filteredHistory.slice(startIndex, startIndex + 10);

          previousHistory.forEach((historyItem, index) => {
            tabHistoryString += `${startIndex + index + 1}th Previous URL: ${historyItem.url}\n`;
          });

          tabHistoryString += '\n'; // 탭 구분용 빈 줄 추가
          allHistories += tabHistoryString;

          // 모든 탭 기록이 모이면 파일로 저장
          if (tabIndex === selectedTabIds.length - 1) {
            const blob = new Blob([allHistories], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            chrome.downloads.download({
              url: url,
              filename: 'tab_histories.txt',
              saveAs: true
            });
          }
        });
      });
    });

    sendResponse({ status: 'success' });
  }
});





document.addEventListener('DOMContentLoaded', () => {
  const tabsContainer = document.getElementById('tabs-container');

  // 현재 열린 모든 탭을 가져옴
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      // 각 탭에 대한 HTML 요소 생성
      const tabElement = document.createElement('div');
      tabElement.classList.add('tab-item');
      tabElement.innerHTML = `
        <input type="checkbox" id="tab-${tab.id}" data-tab-id="${tab.id}">
        <img src="${tab.favIconUrl || 'default_icon.png'}" alt="Tab Icon">
        <label for="tab-${tab.id}">${tab.title} (${tab.url})</label>
      `;
      tabsContainer.appendChild(tabElement);
    });
  });

  // 저장 버튼 클릭 시 선택된 탭 ID들을 background로 전달
  document.getElementById('save-history').addEventListener('click', () => {
    const selectedTabs = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach((checkbox) => {
      selectedTabs.push(parseInt(checkbox.getAttribute('data-tab-id')));
    });

    // 선택된 탭이 있으면 background.js로 메시지 전달
    if (selectedTabs.length > 0) {
      chrome.runtime.sendMessage({ action: 'saveHistory', tabIds: selectedTabs }, (response) => {
        if (response.status === 'success') {
          console.log('History saving initiated.');
        }
      });
    } else {
      alert('Please select at least one tab.');
    }
  });
});




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Select Tabs to Save History</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 20px;
    }
    #tabs-container {
      margin-bottom: 20px;
    }
    .tab-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .tab-item img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  </style>
</head>
<body>
  <h1>Select Tabs to Save History</h1>
  <div id="tabs-container"></div>
  <button id="save-history">Save History to File</button>

  <script src="popup.js"></script>
</body>
</html>

*/