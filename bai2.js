var NhanVien = /** @class */ (function () {
    function NhanVien(ten, tuoi, ngaysinh, diachi) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.ngaysinh = ngaysinh;
        this.diachi = diachi;
    }
    return NhanVien;
}());
var QuanLy = /** @class */ (function () {
    function QuanLy() {
        this.listNhanVien = [];
    }
    QuanLy.prototype.add = function (nhanvien) {
        this.listNhanVien.push(nhanvien);
    };
    QuanLy.prototype.show = function () {
        console.log(this.listNhanVien);
    };
    QuanLy.prototype.delete = function (ten) {
        this.listNhanVien = this.listNhanVien.filter(function (item) { return item.ten !== ten; });
    };
    QuanLy.prototype.edit = function (ten, nhanvien) {
        for (var i = 0; i < this.listNhanVien.length; i++) {
            if (this.listNhanVien[i].ten === ten) {
                this.listNhanVien[i] = nhanvien;
            }
        }
    };
    return QuanLy;
}());
var ng = new QuanLy();
ng.add(new NhanVien('nghĩa', 24, 25, 'hà nội'));
ng.add(new NhanVien('hiếu', 30, 8, 'hà nội'));
ng.delete('nghĩa');
ng.edit('hiếu', new NhanVien('phong', 23, 5, 'hà nội'));
ng.show();
