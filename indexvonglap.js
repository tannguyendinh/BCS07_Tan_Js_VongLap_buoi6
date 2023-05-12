//! bài 1

// input: Người dùng nhập giá trị lớn nhất
// xử lý:

// output: xuất cho người dùng

// giải

function soNguyenDuongNhoNhat() {
  var tongN = 1;
  var giaTriLonNhat = document.getElementById("giaTriLonNhat").value * 1;
  for (var i = 2; i < giaTriLonNhat; i++) {
    tongN += i;
    if (tongN > giaTriLonNhat) {
      var soNguyenDuongNhoNhat = i;
      break;
    }
  }
  document.querySelector(".kqBaiMot").innerHTML = soNguyenDuongNhoNhat;
}

//! bài 2 
// inpout: người dùng nhập 2 giá trị x và n

// output: hiển thị tổng XN c

// giải
function tinhTongSn() {
  var nhapX = document.getElementById("nhapX").value * 1;
  var nhapN = document.getElementById("nhapN").value * 1;

  var tongSn = 0;
  for (var i = 1; i <= nhapN; i++) {
    tongSn += Math.pow(nhapX, i);
  }
  document.querySelector(".kqBaiHai").innerHTML = tongSn;
}

//! Bài 3
// input: nguoi dungf nhap vao soNGiaiThua

// output:

function tinhGiaiThua() {
  var soGiaiThua = document.getElementById("soNGiaiThua").value * 1;

  var giaiThua = 1;
  for (var i = 1; i < soGiaiThua; i++) {
    giaiThua *= i;
  }
  document.querySelector(".kqBaiBa").innerHTML = giaiThua;
}

//! Bài 4
// input: tạo ô button người dùng để click vào

// ouput : người dùng click vào sẽ hiện 10 thẻ div nếu vị trí chẵn thì màu đỏ lẻ thì màu xanh

// giải

function theDip() {
  var theDiv = "";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      theDiv += `<div style="background-color: red;color: white; height: 50px; width: 100%; margin-bottom: 10px">Đỏ nè Mentor hihi</div>`;
    } else {
      theDiv += `<div style="background-color: blue;color: white; height: 50px; width: 100%; margin-bottom: 10px">Xanh</div>`;
    }
  }
  document.getElementById("in10The").innerHTML = theDiv;
}

//! bài 5

// input: người dùng nhập so nguyên bất kì

// ouput:xuất cho người dùng số nguyên tố từ 1 đến hết giá trị của ng dùng nhập

// giải



function kiemTraSoNguyenTo(Number) {
  if (Number < 2) {
    // alert ("nhập số lớn hơn 2");
    return;
  } else {
    var soNguyenTo = 1;
    for (var i = 2; i < Math.sqrt(Number); i++) {
      if (Number % i == 0) {
        soNguyenTo = 0;
        break;
      } else {
        soNguyenTo = 1;
      }
    }
    return soNguyenTo;
  }
}

function timSoNguyenToNDNhap() {
  var arr = [];
  var nhapSoNguyenTo = document.getElementById("nhapSoNguyenTo").value * 1;

  for (var i = 1; i < nhapSoNguyenTo; i++) {
    if (kiemTraSoNguyenTo(i) == 1) {
      arr.push(i);
    }
  } 
  document.querySelector(".kqBaiNam").innerHTML = arr;
}
