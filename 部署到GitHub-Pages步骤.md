# 部署到 GitHub Pages 步骤（免费）

## 第一步：注册 / 登录 GitHub

没有账号就到 https://github.com/signup 注册一个（免费）。
记下你的**用户名**（下面要用，假设是 `kiki2026`）。

## 第二步：创建「特殊名字」的仓库

这一步是关键：**仓库名必须叫 `<你的用户名>.github.io`**（例如 `kiki2026.github.io`）。

1. 登录后打开 https://github.com/new
2. Repository name 填：`kiki2026.github.io`（换成你的用户名）
3. 选 Public（免费账户必须 Public）
4. 点 Create repository

> 为什么必须这个名字：只有这个仓库名，网站才会部署在
> `https://<你的用户名>.github.io/` 的**根路径**下，页面里的资源路径才能正常工作。

## 第三步：推送代码（在本文件夹打开终端执行）

```bash
cd "/Users/jiang/WorkBuddy/作品集网页/gh-pages-site"
git branch -M main
git remote add origin https://github.com/<你的用户名>/<你的用户名>.github.io.git
git push -u origin main
```

推送时 GitHub 会要求登录：弹窗授权即可（或用用户名 + Personal Access Token）。

## 第四步：开启 Pages

1. 打开仓库页面 → Settings → 左侧 Pages
2. Source 选 `Deploy from a branch`，Branch 选 `main` / `(root)`，Save

等 1~2 分钟，访问 **https://<你的用户名>.github.io/** 即可看到作品集。

## 以后更新内容

改完工程重新打包静态文件后，在本文件夹执行：

```bash
git add -A && git commit -m "update" && git push
```

---

## ⚠️ 关于微信内打开的实话

- 截图里的拦截是**微信对整个域名**的安全拦截（`workbuddy.host` 无备案、不在白名单），
  不是网页内容有问题。
- `github.io` **同样没有备案**，在微信里也可能被拦截或不稳定（大陆访问 github.io 时好时坏）。
  免费方案里没有「保证微信内直接打开」的选项。
- 实际可行的预期：
  - ✅ 电脑浏览器、手机浏览器直接打开 —— github.io 稳定可用
  - ⚠️ 微信内 —— 时好时坏；被拦时对方点「右上角 … → 在浏览器打开」仍可访问
  - ✅ 若要做到**微信里百分百正常打开**，唯一稳妥方案：买一个自己的域名（约 ¥50/年）
    + 完成工信部 ICP 备案（免费，需一台国内云服务器，轻量款约 ¥100/年），再绑定到
    GitHub Pages 或任何托管服务。需要的话我可以帮你走这个流程。
