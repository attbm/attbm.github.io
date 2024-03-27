$(document).ready(function () {
    $('.logo').click(function (e) { 
        e.preventDefault();
        //window.location.href = 'https://www.facebook.com/truongcaodangcntn/';
        window.open("https://www.facebook.com/truongcaodangcntn", "_blank");
    });
});
/**
 * 
 * @param {Number} so_luong 
 * @returns array
 */
function createRandomArray(so_luong){
    // Mảng để lưu trữ các số nguyên ngẫu nhiên
    var mang_so_nguyen = [];

    // Tạo mảng với số lượng phần tử
    for (var i = 0; i < so_luong; i++) {
        // Tạo số nguyên ngẫu nhiên trong khoảng từ 1 đến 99
        var so_nguyen = (Math.floor(Math.random() * 99) + 1) + '';

        // Thêm số nguyên vào mảng
        mang_so_nguyen.push(so_nguyen);
    }
    return mang_so_nguyen;
}
function createArrayFromString(str){
    str = str.replace(/[.,;:-]/g, ' '); //Thay các ký tự phân cách bằng khoảng trắng
    str = str.trim().replace(/\s+/g, ' ');//Thay thế các ký tự 2 khoảng trắng, xoá ký tự trắng thừa
    let myArray = str.split(' ');
    return myArray.slice(0, 10);
}

