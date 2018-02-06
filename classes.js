var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('user created :' + this.name);
    }
    // method
    // we can also make these private too
    user.prototype.register = function () {
        console.log(this.name + " " + 'is now registered');
    };
    user.prototype.payInvoice = function () {
        console.log(this.name + " " + ' paid invoice');
    };
    return user;
}());
var john = new user('john', 'kiran@gmail.com', 23);
console.log(john.age);
john.register();
//Inheritance
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return member;
}(user));
var mike = new member(1, 'mike', 'mike@gmail.com', 33);
mike.payInvoice();
