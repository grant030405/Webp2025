// 亂數產生字串
function generateRandomString(minLength, maxLength) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 在 container div 中顯示亂數產生的字串
function displayRandomString() {
  const container = document.getElementById('container');
  const randomString = generateRandomString(0, 2);
  console.log("Random String:", randomString); // 檢查產生的字串
  container.textContent = randomString;
}

// 消除第一個字元
function removeFirstCharacter() {
  const container = document.getElementById('container');
  if (container.textContent.length > 0) {
    container.textContent = container.textContent.substring(1);
  }
}

// 在字串後方新增亂數字元
function appendRandomCharacters() {
  const container = document.getElementById('container');
  container.textContent += generateRandomString(1, 3); // 產生 1 到 3 個字元的字串
}

// 初始化
window.onload = function() {
  displayRandomString();
};

// 事件處理
window.addEventListener('keyup', function(e) {
  const container = document.getElementById('container');

  if (e.key === 'Escape') {
    // 按下 Escape 鍵，清除所有字母
    container.textContent = '';
  } else if (e.key === 'Backspace') {
    // 按下 Backspace 鍵，刪除最後一個字母
    var str = container.textContent;
    container.textContent = str.substring(0, str.length - 1);
  } else if (e.key === container.textContent[0]) {
    // 如果按下的按鍵和字串的第一個字元相同，則移除第一個字元
    removeFirstCharacter();
  }

  // 在字串後方新增亂數字元
  appendRandomCharacters();
});
