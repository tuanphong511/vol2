var User = /** @class */ (function () {
    function User(name, email, role) {
        this._name = name;
        this._email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        console.log("".concat(this._name, " , ").concat(this._email));
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            return "Admin";
        }
        if (this.role === 2) {
            return "người dùng bình thường";
        }
    };
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var ph = new User('phong', 'koko@gmail.com', 1);
ph.getInfo();
console.log(ph.email);
console.log(ph.isAdmin());
