---
title: React tối ưu performance cho dự án
date: "2019-09-16"
spoiler: Four principles to set you on the right path.
description: javascript, javascript tiếng việt, javascript nâng cao
---

## Giới thiệu

Bài viết này tóm tắc kinh nghiệm bản thân trong quá trình làm việc với react. Reactjs là thư viện render ui do facebook phát triển ban đầu chỉ dành cho những kỹ sư facebook sử dụng react nên tài liệu cũng rất khó hiểu. mình làm được 2 năm nhưng vẫn chưa nắm hết api.

React được xây dụng trên ngôn ngữ javascript nên cũng cần nắm vũng các kiến thức javascript và mới nhất là chuẩn ES6.

-> https://developer.mozilla.org/en-US/docs/Web/JavaScript
-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla

Tóm tắc tip:
1. Hiểu về cách thức hoạt động virtual DOM, reconciliation
2. Sử dụng shouldComponentUpdate
3. Sử dụng api PureComponent cho class và React.memo cho function
4. Sử dụng Hook, hook useMemo và UseCallBack
5. Sử dụng React Lazy & Suspense hoặc webpack-bundle-alyzeler
6. Sử dụng React window package for long list
7. Sử dụng Unit testing rerender của component
8. Sử dụng React devtool test hành vi của component