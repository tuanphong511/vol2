class CanBo{
    ten: string
    tuoi:number
    gender:string
    address:string

    constructor(ten:string, tuoi:number, gender:string, address:string) {
        this.ten = ten
        this.tuoi = tuoi
        this.gender = gender
        this.address = address
    }
}
class CongNhan extends CanBo {
    bac: number
    constructor(ten:string , tuoi:number , gender:string , address:string , bac:number) {
        super(ten , tuoi , gender , address);
        this.bac = bac
    }
}

class KySu extends CanBo{
    NghanhDaoTao: string
    constructor(ten:string , tuoi:number , gender:string , address:string , NghanhDaoTao:string) {
        super(ten, tuoi, gender, address,);
        this.NghanhDaoTao = NghanhDaoTao
    }
}
class NhanVien extends CanBo{
    CongViec:string
    constructor(ten:string , tuoi:number, gender:string, address:string, CongViec:string) {
        super(ten ,tuoi,gender,address);
        this.CongViec = CongViec
    }
}