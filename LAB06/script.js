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
  // 檢查 count 是否大於 1
  // 如果 count 是 1，表示沒有透過 addfunction 產生的按鈕可以刪除了
  if (count > 1) {
    // 先將 count 減 1
    var targetCount = --count;
    // 嘗試獲取對應 ID 的按鈕
    var btn = document.getElementById("btn_" + targetCount);
    console.log(`嘗試移除 ID: btn_${targetCount}`);

    // 確保按鈕真的存在再移除
    if (btn) {
      document.body.removeChild(btn);
      console.log(`成功移除 ID: btn_${targetCount}`);
    } else {
      // 理論上，如果 count > 1，應該能找到按鈕，除非按鈕被其他方式移除了
      console.log(`警告：找不到 ID 為 btn_${targetCount} 的按鈕`);
      // 在此情況下，我們已經執行了 --count，但沒有成功移除按鈕。
      // 根據需求，你可能想在這裡加回 count++，但目前的修改已能阻止 count 變負數。
    }
  } else {
    // 如果 count 已經是 1 或更小，就不執行任何操作
    console.log("無法刪除：沒有更多可刪除的按鈕 (count <= 1)");
  }
}
