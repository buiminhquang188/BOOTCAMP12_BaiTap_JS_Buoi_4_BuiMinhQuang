// BÀI 1:
btnBai1.onclick = function () {
    var soThuNhat = document.getElementById('soThuNhat').valueAsNumber;
    var soThuHai = document.getElementById('soThuHai').valueAsNumber;
    var soThuBa = document.getElementById('soThuBa').valueAsNumber;
    var soLonNhat = soThuNhat;
    var ketQuaBai1 = document.getElementById('ketQuaBai1');

    if (soThuHai < soThuBa) {
        ketQuaBai1.innerHTML = '' + soThuHai + ' ' + soThuBa + ' ' + soLonNhat;
    }
    else {
        ketQuaBai1.innerHTML = '' + soThuBa + ' ' + soThuHai + ' ' + soLonNhat;
    }
    if (soLonNhat < soThuHai) {
        soLonNhat = soThuHai;
        if (soThuNhat < soThuBa) {
            ketQuaBai1.innerHTML = '' + soThuNhat + ' ' + soThuBa + ' ' + soLonNhat;
        }
        else {
            ketQuaBai1.innerHTML = ' ' + soThuBa + ' ' + soThuNhat + ' ' + soLonNhat;
        }
    }
    if (soLonNhat < soThuBa) {
        soLonNhat = soThuBa;
        if (soThuNhat < soThuHai) {
            ketQuaBai1.innerHTML = '' + soThuNhat + ' ' + soThuHai + ' ' + soLonNhat;
        }
        else {
            ketQuaBai1.innerHTML = '' + soThuHai + ' ' + soThuNhat + ' ' + soLonNhat;
        }
    }
}
// BÀI 2:
btnBai2.onclick = function () {
    var chonNguoiSuDung = document.getElementById('chonNguoiSuDung').value;
    var ketQuaBai2 = document.getElementById('ketQuaBai2');
    switch (chonNguoiSuDung) {
        case 'B':
            alert("Chào Bố");
            ketQuaBai2.innerHTML = 'Chào Bố';
            break;
        case 'M':
            alert("Chào Mẹ");
            ketQuaBai2.innerHTML = 'Chào Mẹ';
            break;
        case 'A':
            alert("Chào Anh Trai");
            ketQuaBai2.innerHTML = 'Chào Anh Trai';
            break;
        case 'E':
            alert("Chào em");
            ketQuaBai2.innerHTML = 'Chào Em';
            break;
    }
    console.log(chonNguoiSuDung);
}

// BÀI 3:
btnBai3.onclick = function () {
    var soNguyenThuNhat = document.getElementById('soNguyenThuNhat').valueAsNumber;
    var soNguyenThuBa = document.getElementById('soNguyenThuHai').valueAsNumber;
    var soNguyenThuHai = document.getElementById('soNguyenThuBa').valueAsNumber;
    var soLuongSoChan = 0;
    var soLuongSoLe = 0;
    var tongSoChan = document.getElementById('tongSoChan');
    var tongSoLe = document.getElementById('tongSoLe');

    if (soNguyenThuNhat % 2 == 0) {
        soLuongSoChan++;
    }
    else {
        soLuongSoLe++;
    }
    if (soNguyenThuHai % 2 == 0) {
        soLuongSoChan++;
    }
    else {
        soLuongSoLe++;
    }
    if (soNguyenThuBa % 2 == 0) {
        soLuongSoChan++;
    }
    else {
        soLuongSoLe++;
    }
    tongSoChan.innerHTML = 'Số lượng số chẵn là: ' + soLuongSoChan;
    tongSoLe.innerHTML = 'Số lượng số lẻ là: ' + soLuongSoLe;
}

//BÀI 4:
btnBai4.onclick = function () {
    var canhHuyen = document.getElementById('canhHuyen').valueAsNumber;
    var canhDoi = document.getElementById('canhDoi').valueAsNumber;
    var canhKe = document.getElementById('canhKe').valueAsNumber;
    var ketQuaBai4 = document.getElementById('ketQuaBai4');
    var doDaiCanhHuyen = Math.sqrt((canhDoi * canhDoi) + (canhKe * canhKe));
    console.log(doDaiCanhHuyen);
    if (canhKe == canhDoi && canhKe !== canhHuyen && canhDoi !== canhHuyen) {
        ketQuaBai4.innerHTML = 'Tam giác là tam giác cân';
    }
    else {
        ketQuaBai4.innerHTML = 'Tma giác là tam giác thường';
    }
    if (canhKe == canhDoi && canhKe == canhHuyen && canhDoi == canhHuyen) {
        ketQuaBai4.innerHTML = 'Tam giác là tam giác đều';
    }
    else {
        ketQuaBai4.innerHTML = 'Tam giác là tam giác thường';
    }
    if (canhHuyen == doDaiCanhHuyen) {
        ketQuaBai4.innerHTML = 'Tam giác là tam giác vuông';
    }
    else {
        ketQuaBai4.innerHTML = 'Tam giác là tam giác thường'
    }
    if (canhKe !== canhDoi && canhKe !== canhHuyen && canhDoi !== canhHuyen && canhHuyen !== doDaiCanhHuyen) {
        ketQuaBai4.innerHTML = 'Tam giác là tam giác thường';
    }
}