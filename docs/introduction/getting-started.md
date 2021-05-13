---
title: 快速开始
slug: /
---

## 准备工作

- 账号：您需要先准备一个 GitHub 账号
- 仓库和分支管理
  - fork [document](https://github.com/2050dev/document.git) 的仓库，并作为自己仓库的上游： `git remote add upstream https://github.com/2050dev/document.git`

## 拉取项目

使用 `git` 拉取项目：

```shell
git clone https://github.com/2050dev/document.git
```

## 本地构建

:::info
- Node.js 版本 >= 12.13.0 （可以使用 `node -v` 命令查看）
- Yarn 版本 >= 1.5（可以使用 `yarn --version` 命令查看）
:::

安装依赖

```shell
cd document
# 命令安装依赖
yarn install
```

## 修改文档

文档文件位于 `\docs` 目录中，并以 Markdown 格式编写。如果目录有修改，还需要在完成文档编写后，修改 `sidebars.js` 文件来更新文档目录路径。

## 本地预览

```shell
yarn start
yarn run v1.22.10
warning ../../package.json: No license field
$ docusaurus start
Starting the development server...
Docusaurus website is running at: http://localhost:3000/

✔ Client
  Compiled successfully in 2.06s

ℹ ｢wds｣: Project is running at http://localhost:3000/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /Users/saybot/own/2050.dev
ℹ ｢wds｣: 404s will fallback to /index.html
```

在 [http://localhost:3000/](http://localhost:3000/) 上就可以看到预览效果

## 提交 PR

文档更新完成后，就可以提交 PR 了。