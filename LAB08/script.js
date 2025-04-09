// 亂數產生字串
function generateRandomString(minLength, maxLength) {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}// 亂數產生字串
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
  const randomString = generateRandomString(3, 5); // 初始顯示3-5個字符
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
function appendRandomCharacters(count = 1) {
  const container = document.getElementById('container');
  for (let i = 0; i < count; i++) {
    container.textContent += generateRandomString(1, 3); // 產生 1 到 3 個字元的字串
  }
}

// 初始化
let mistakeCount = 0;
window.onload = function() {
  displayRandomString();
};

// 事件處理
window.addEventListener('keyup', function(e) {
  const container = document.getElementById('container');
  const currentText = container.textContent;

  if (e.key === 'Escape') {
    // 按下 Escape 鍵，清除所有字母
    container.textContent = '';
    mistakeCount = 0;
  } else if (e.key === 'Backspace') {
    // 按下 Backspace 鍵，刪除最後一個字母
    container.textContent = currentText.substring(0, currentText.length - 1);
  } else if (currentText.length > 0 && e.key === currentText[0]) {
    // 如果按下的按鍵和字串的第一個字元相同，則移除第一個字元
    removeFirstCharacter();
    mistakeCount = 0; // 重置錯誤計數
  } else if (/^[a-z]$/.test(e.key)) {
    // 如果按下的是字母鍵但不是正確的第一個字母
    mistakeCount++;
    if (mistakeCount >= 3) {
      // 連續打錯三次，額外增加6個亂數字串
      appendRandomCharacters(6);
      mistakeCount = 0; // 重置錯誤計數
    }
  }

  // 每次按鍵都在字串後方新增亂數字元
  appendRandomCharacters();
});

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
