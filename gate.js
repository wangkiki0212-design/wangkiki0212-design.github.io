/* 访问密码门 - 修改密码只改下面 PASS 的值 */
(function () {
  var PASS = "kiki2026"; // ← 修改这里即可更换密码
  var KEY = "kiki_gate_ok";

  var passed = false;
  try { passed = localStorage.getItem(KEY) === PASS; } catch (e) {}

  if (passed) return; // 已验证，正常显示页面

  // 先隐藏整页内容，防止闪现
  var css = document.createElement("style");
  css.textContent = "html{visibility:hidden!important}";
  document.head.appendChild(css);

  function boot() {
    var overlay = document.createElement("div");
    overlay.innerHTML =
      '<div style="position:fixed;inset:0;z-index:2147483647;background:#0d0d0d;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,\'PingFang SC\',\'Helvetica Neue\',sans-serif">' +
      '<div style="text-align:center;padding:40px 28px;max-width:340px;width:86%">' +
      '<div style="color:#fff;font-size:15px;letter-spacing:6px;font-weight:600;margin-bottom:6px">KIKI&reg; PORTFOLIO</div>' +
      '<div style="color:#888;font-size:12px;letter-spacing:2px;margin-bottom:34px">私 密 作 品 集</div>' +
      '<input id="gate-pw" type="password" placeholder="请输入访问密码" autocomplete="off" ' +
      'style="width:100%;box-sizing:border-box;background:#1a1a1a;border:1px solid #333;color:#fff;font-size:15px;padding:13px 16px;border-radius:8px;outline:none;text-align:center;letter-spacing:2px" />' +
      '<div id="gate-err" style="color:#e05a5a;font-size:12px;height:18px;margin-top:10px"></div>' +
      '<button id="gate-btn" style="width:100%;background:#fff;color:#0d0d0d;border:none;font-size:14px;font-weight:600;padding:13px 0;border-radius:8px;cursor:pointer;letter-spacing:4px;margin-top:6px">进 入</button>' +
      "</div></div>";
    document.body.appendChild(overlay);

    var input = overlay.querySelector("#gate-pw");
    var err = overlay.querySelector("#gate-err");
    var btn = overlay.querySelector("#gate-btn");

    function unlock() {
      if (input.value === PASS) {
        try { localStorage.setItem(KEY, PASS); } catch (e) {}
        overlay.remove();
        document.head.removeChild(css);
        document.documentElement.style.visibility = "";
      } else {
        err.textContent = "密码不正确，请重试";
        input.value = "";
        input.focus();
      }
    }

    btn.addEventListener("click", unlock);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") unlock();
    });
    setTimeout(function () {
      input.focus();
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
