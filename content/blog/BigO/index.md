---
title: BigO
date: "2019-11-20"
spoiler: Four principles to set you on the right path.
description: BigO, thuật toán
---

## Giới thiệu

BigO là một những khái niệm quan trọng mà một developer nên nắm để viết code tốt hơn.
Một lập trình viên tốt là viết code để mình và người khác có thể đọc và có thể mở rộng.

## Mục lục

### 1. Khái niệm

### 2. Cách tính BigO

### 3. Tài liệu tham khảo

## 1. Khái niệm

BigO là một cách để đánh giá mức độ scale của code. code có BigO càng thấp thì mức độ scales dự án rất cao.

<img src="https://www.cdn.geeksforgeeks.org/wp-content/uploads/mypic.png"/>

Như trong sơ đồ ta thấy dữ liệu đầu vào là n càng lớn thì những bigo tốt là có thời gian thực hiên tăng thấp.

O(1) tốt hơn O(logn),
O(logn) tốt hơn O(n),...

## 2. Các tính BigO

BigO càng nhỏ là code càng tốt vậy làm sao để tính BigO của chương trình. có 4 rule để tính BigO

1. Tính trường hợp tệ nhất
2. Bỏ hằng số
3. Phụ thuộc vào nhiều input
4. Lượt bỏ thành phần nhở hơn
   vi dụ:

```
function sumArray(a, b){
  let s = 0; O(1)
  for (let i = 0; i < a.length; i ++){
    s+=a[i]; O(n) n = a.length
  }

  for (let i = 0; i < b.length; i ++){
    s+=b[i]; O(m) m = b.length
  }

  return s; O(1)
}

const a = [1,2,3,4,5]; O(1)
const b = [2,1,2,4,5]; O(1)

sumArray(a,b);

```

Vậy theo quy tắt ta có BigO của chương trình là: O(m) + O(m)

## 3. Tham khảo

https://www.bigocheatsheet.com/
