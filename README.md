# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - MySQL2 數據庫操作(CURD)
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

---

<!--ts-->
## 目錄
* [簡介](#簡介)
* [實作範例](#實作範例)
* [使用套件](#使用套件)
* [操作說明](#操作說明)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---

## 簡介:
mysql 和 mysql2 是 Node.js 中操作 MySQL 資料庫的兩個常用套件. <br>
其中，mysql 套件在舊版 Node.js 中使用較多，而 mysql2 則是較新的版本。<br>
在功能上，mysql2是相容於mysql 並直接包裝 Promise 和 async/await，<br>
可以更方便地處理非同步的資料庫操作，也提供更好的性能表現。<br>
<br>
此外，mysql2 也支援多種資料庫連線方式，<br>
包括 TCP、Unix domain socket 和 Named pipes。<br>
而 mysql 套件也有相似的功能，但需要額外安裝相應的套件來支援。<br>
<br>
總體來說，mysql2 是一個功能更為豐富，且具有更好性能表現的套件，<br>
而 mysql 則是舊版 Node.js 中使用較多的套件。<br>
如果你正在使用較新的 Node.js 版本，建議使用 mysql2 套件。<br>

<br>

這邊會實作如何連接數據庫以及進行數據庫的操作(CURD)
- C - 建立資料 (Create)
- R - 讀取資料 (Read)
- U - 更新資料 (Update)
- D - 刪除資料 (Delete)

<br>

## 實作範例:
- [Example1](https://github.com/RC-Dev-Tech/nodejs-mysql2/blob/main/src/examples/example1.ts) - MySQL2基本使用(CRUD).
- [Example2](https://github.com/RC-Dev-Tech/nodejs-mysql2/blob/main/src/examples/example2.ts) - MySQL2非同步使用(CRUD).

---

## 使用套件:
- mysql2

---

## 操作說明:
#### 1. 安裝MySQL[^1]
> 請自行上網查詢，或著可以參考下方的分享資料.
#### 2. 安裝Workbench[^2]
> 請自行上網查詢，或著可以參考下方的分享資料.
#### 2. 安裝套件 [^3]
> npm install --save
#### 3. 編譯 & 運行
> npm run start

---

## 延伸項目:
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---

## 參考資料:
* [npm mysql2](https://npm.io/package/mysql2) <br>

---

<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->

---

## 備註：
[^1]: 由於該範例是著重在MySQL(CURD)的操作，所以安裝MySQL跟其操作細節，這邊就不多加說明.
[^2]: 同上.
[^3]: 在這個範例中我們需要安裝部分套件，指令如下：<br>
`npm install mysql2 --save` <br>

因為這個套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好
