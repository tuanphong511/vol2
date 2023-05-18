class NhanVien{
    ten:string
    tuoi:number
    ngaysinh:number
    diachi:string

    constructor(ten:string , tuoi:number , ngaysinh:number , diachi:string) {
        this.ten = ten
        this.tuoi = tuoi
        this.ngaysinh = ngaysinh
        this.diachi = diachi
    }
}
class QuanLy{
    listNhanVien : NhanVien[]=[]

    add(nhanvien : NhanVien){
        this.listNhanVien.push(nhanvien)
    }
    show(){
        console.log(this.listNhanVien)
    }
    delete(ten:string){
        this.listNhanVien = this.listNhanVien.filter(item =>item.ten !== ten)
    }
    edit(ten:string , nhanvien:NhanVien){
        for (let i = 0 ; i < this.listNhanVien.length ; i++){
            if (this.listNhanVien[i].ten === ten ){
                this.listNhanVien[i] = nhanvien
            }
        }
    }

}
let ng = new QuanLy()
ng.add(new NhanVien('nghĩa',24 , 25 , 'hà nội'))
ng.add(new NhanVien('hiếu',30 , 8 , 'hà nội'))
ng.delete('nghĩa')
ng.edit('hiếu', new NhanVien('phong',23 , 5 , 'hà nội'))
ng.show()