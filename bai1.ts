class User{
    protected _name: string
    protected _email:string
    role:number

    constructor(name:string , email:string , role:number) {
        this._name = name
        this._email = email
        this.role = role
    }
    getInfo(){
        console.log(`${this._name} , ${this._email}`)
    }
    isAdmin(){
        if (this.role ===1){
            return "Admin"
        }
        if (this.role ===2){
            return "người dùng bình thường"
        }
    }
    get name():string{
        return this._name
    }
    set name(value:string){
        this._name = value
    }
    get email():string{
        return this._email
    }
    set email(value:string){
        this._email = value
    }
}
let ph = new User('phong', 'koko@gmail.com',1);
ph.getInfo()
console.log(ph.isAdmin())
