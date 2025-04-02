var count = 1;
function addfunction() {
  var btn = document.createElement("BUTTON");
  // 注意：原始圖片中的模板字串語法似乎有誤，這裡已修正
  btn.innerHTML = `CLICK ME (${count})`;
  btn.setAttribute("id", "btn_" + count++);
  btn.setAttribute("class", "btn btn-outline-danger");
  console.log(btn);
  document.body.appendChild(btn);
}

function delfunction() {
  // 注意：根據圖片箭頭指示，這裡使用了 --count 來先遞減再取得 ID
  var btn = document.getElementById("btn_" + --count);
  console.log(btn);
  // 如果 btn 存在才執行移除，避免錯誤
  if (btn) {
    document.body.removeChild(btn);
  }
}
