webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.token = localStorage.getItem('token');
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.token)
            return true;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DataService = /** @class */ (function () {
    function DataService(router, restService) {
        var _this = this;
        this.router = router;
        this.restService = restService;
        this.message = '';
        this.messageType = 'danger';
        this.cartItems = 0;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                _this.message = '';
            }
        });
    }
    DataService.prototype.error = function (message) {
        this.messageType = 'danger';
        this.message = message;
    };
    DataService.prototype.success = function (message) {
        this.messageType = 'success';
        this.message = message;
    };
    DataService.prototype.warning = function (message) {
        this.messageType = 'warning';
        this.message = message;
    };
    DataService.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!localStorage.getItem('token')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.restService.getProfile()];
                    case 1:
                        data = _a.sent();
                        this.user = data['user'];
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.error(error_1['message']);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DataService.prototype.getCart = function () {
        var cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    };
    DataService.prototype.addToCart = function (item) {
        var cart = this.getCart();
        if (cart.find(function (data) { return JSON.stringify(data) === JSON.stringify(item); })) {
            return false;
        }
        else {
            cart.push(item);
            this.cartItems++;
            localStorage.setItem('cart', JSON.stringify(cart));
            return true;
        }
    };
    DataService.prototype.clearCart = function () {
        this.cartItems = 0;
        localStorage.setItem('cart', '[]');
    };
    DataService.prototype.removeFromCart = function (item) {
        var cart = this.getCart();
        if (cart.find(function (data) { return JSON.stringify(data) === JSON.stringify(item); })) {
            cart = cart.filter(function (data) { return JSON.stringify(data) !== JSON.stringify(item); });
            this.cartItems--;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/_service/rest-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RestApiService = /** @class */ (function () {
    function RestApiService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    RestApiService.prototype.getHeaders = function () {
        var token = localStorage.getItem('token');
        return token ? new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token) : null;
    };
    RestApiService.prototype.register = function (model) {
        return this.http.post(this.baseUrl + '/accounts/signup', model, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.login = function (model) {
        return this.http.post(this.baseUrl + '/accounts/login', model, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.getProfile = function () {
        return this.http.get(this.baseUrl + '/accounts/profile', { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.updateProfile = function (model) {
        return this.http.post(this.baseUrl + '/accounts/profile', model, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.getAddress = function () {
        return this.http.get(this.baseUrl + '/accounts/address', { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.updateAddresss = function (model) {
        return this.http.post(this.baseUrl + '/accounts/address', model, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.getCategories = function () {
        return this.http.get(this.baseUrl + '/categories', { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.addCategories = function (model) {
        return this.http.post(this.baseUrl + '/categories', model, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.getSellerProducts = function () {
        return this.http.get(this.baseUrl + '/seller/products', { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.addProducts = function (form) {
        return this.http.post(this.baseUrl + '/seller/products', form, { headers: this.getHeaders() })
            .toPromise();
    };
    RestApiService.prototype.getProducts = function (categoryId, pageNumber) {
        return this.http.get(this.baseUrl + '/categories/' + categoryId + '?page=' + (pageNumber - 1))
            .toPromise();
    };
    RestApiService.prototype.getSingleProduct = function (productId) {
        return this.http.get(this.baseUrl + '/product/' + productId).toPromise();
    };
    RestApiService.prototype.getAllProducts = function () {
        return this.http.get(this.baseUrl + '/products').toPromise();
    };
    RestApiService.prototype.postReview = function (review) {
        return this.http.post(this.baseUrl + '/review', review, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.search = function (query, page) {
        return this.http.get(this.baseUrl + '/search?query=' + query + '&page=' + page).toPromise();
    };
    RestApiService.prototype.payment = function (paymentDeatails) {
        return this.http.post(this.baseUrl + '/payment', paymentDeatails, { headers: this.getHeaders() })
            .toPromise();
    };
    RestApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "./src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"address\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Shipping Address</h4>\n    <hr>\n    <app-message></app-message>\n    <div *ngIf=\"!currentAddress\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"currentAddress\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Address 1</label>\n            <input type=\"text\" name=\"address1\" class=\"form-control\" [(ngModel)]=\"currentAddress.addr1\">\n          </div>\n          <div class=\"form-group\">\n            <label>Address 2</label>\n            <input type=\"text\" name=\"address2\" class=\"form-control\" [(ngModel)]=\"currentAddress.addr2\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>City</label>\n                <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"currentAddress.city\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>State</label>\n                <input type=\"text\" name=\"state\" class=\"form-control\" [(ngModel)]=\"currentAddress.state\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Postal Code</label>\n                <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"currentAddress.postalCode\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Country</label>\n            <input type=\"text\" name=\"country\" class=\"form-control\" [(ngModel)]=\"currentAddress.country\">\n          </div>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"updateAddress()\" [disabled]=\"btnDisabled\">Change Address</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/address/address.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AddressComponent = /** @class */ (function () {
    function AddressComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
        this.btnDisabled = false;
    }
    AddressComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.restService.getAddress()];
                    case 1:
                        data = _a.sent();
                        if (JSON.stringify(data['address']) == '{}' && this.dataService.message == '') {
                            this.dataService.warning('You have not entered your shipping address. Please enter your shipping address.');
                        }
                        this.currentAddress = data['address'];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.dataService.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddressComponent.prototype.updateAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.btnDisabled = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.restService.updateAddresss(this.currentAddress)];
                    case 2:
                        data = _b.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.dataService.getProfile()];
                    case 3:
                        _a = (_b.sent(), this.dataService.success(data['message']));
                        return [3 /*break*/, 5];
                    case 4:
                        _a = this.dataService.error(data['message']);
                        _b.label = 5;
                    case 5:
                        _a;
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        this.dataService.error(error_2['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-address',
            template: __webpack_require__("./src/app/address/address.component.html"),
            styles: [__webpack_require__("./src/app/address/address.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__["a" /* RestApiService */]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__address_address_component__ = __webpack_require__("./src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__post_product_post_product_component__ = __webpack_require__("./src/app/post-product/post-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_products_my_products_component__ = __webpack_require__("./src/app/my-products/my-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__category_category_component__ = __webpack_require__("./src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'cart',
        component: __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__["a" /* CartComponent */]
    },
    {
        path: 'categories',
        component: __WEBPACK_IMPORTED_MODULE_9__categories_categories_component__["a" /* CategoriesComponent */]
    },
    {
        path: 'categories/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__category_category_component__["a" /* CategoryComponent */]
    },
    {
        path: 'product/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__product_product_component__["a" /* ProductComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile/settings',
        component: __WEBPACK_IMPORTED_MODULE_7__settings_settings_component__["a" /* SettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile/address',
        component: __WEBPACK_IMPORTED_MODULE_8__address_address_component__["a" /* AddressComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile/postproduct',
        component: __WEBPACK_IMPORTED_MODULE_10__post_product_post_product_component__["a" /* PostProductComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'profile/myproducts',
        component: __WEBPACK_IMPORTED_MODULE_11__my_products_my_products_component__["a" /* MyProductsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-main\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/\" class=\"navbar-brand\">\n      <img src=\"./assets/img/logo.png\" alt=\"logo\" id=\"logo\"> Xtreme\n    </a>\n    <button class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div [ngbCollapse]=\"isCollapsed\" style=\"align-items: left; margin-left: 50px;\" class=\"collapse navbar-collapse flex-column\"\n      id=\"navbarNav\">\n      <div class=\"input-group w-75\">\n        <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"searchTerm\" (keyup)=\"search()\">\n        <span id=\"searchBtn\" class=\"bg-warning\" (click)=\"search()\">\n          <i class=\"fa fa-search\"></i>\n        </span>\n      </div>\n      <div class=\"w-100\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a (click)=\"collapse()\" routerLink=\"/categories\" routerLinkActive=\"active\" class=\"nav-link\">Categories</a>\n          </li>\n          <li class=\"nav-item ml-0 ml-md-auto\" ngbDropdown #dropdown=\"ngbDropdown\">\n            <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n              <i class=\"fa fa-user mr-1\"></i>\n              <span *ngIf=\"!token\">Accounts</span>\n              <span *ngIf=\"dataService.user\">{{dataService.user.name | titlecase}}</span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\">\n              <a *ngIf=\"token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/profile\" class=\"dropdown-item\">\n                <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> Profile\n              </a>\n              <a *ngIf=\"!token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/login\" class=\"dropdown-item\">\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Login\n              </a>\n              <a *ngIf=\"token\" (click)=\"closeDropdown(dropdown);collapse();logout();\" class=\"dropdown-item\">\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Logout\n              </a>\n              <a *ngIf=\"!token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/register\" class=\"dropdown-item\">\n                <i class=\"fa fa-group\" aria-hidden=\"true\"></i> Register\n              </a>\n            </div>\n          </li>\n          <li class=\"nav-item ml-0 ml-md-2\">\n            <a (click)=\"collapse()\" routerLink=\"/cart\" routerLinkActive=\"active\" class=\"nav-link\">\n              <i class=\"fa fa-shopping-cart mr-1\"></i>\n              Cart\n              <span *ngIf=\"dataService.cartItems\" class=\"badge badge-warning ml-1\">{{ dataService.cartItems }}</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer id=\"main-footer\" class=\"bg-main text-white mt-5 p-5\">\n  <div class=\"container\">\n    <p class=\"lead text-center\">Copyright &copy; 2018 Xtreme</p>\n    <p class=\"text-center\">Made by <strong>Samuel Essim</strong></p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "#searchBtn {\n  cursor: pointer;\n  border: none;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n#logo {\n  width: 50px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.searchTerm = '';
        this.isCollapsed = true;
        dataService.getProfile();
        this.dataService.cartItems = this.dataService.getCart().length;
    }
    Object.defineProperty(AppComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    AppComponent.prototype.closeDropdown = function (dropdown) {
        dropdown.close();
    };
    AppComponent.prototype.logout = function () {
        this.dataService.user = {};
        this.dataService.cartItems = 0;
        localStorage.clear();
        this.router.navigate(['']);
    };
    AppComponent.prototype.search = function () {
        if (this.searchTerm) {
            this.collapse();
            this.router.navigate(['search', { query: this.searchTerm }]);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__message_message_component__ = __webpack_require__("./src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__ = __webpack_require__("./src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__address_address_component__ = __webpack_require__("./src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__categories_categories_component__ = __webpack_require__("./src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__post_product_post_product_component__ = __webpack_require__("./src/app/post-product/post-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_products_my_products_component__ = __webpack_require__("./src/app/my-products/my-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__category_category_component__ = __webpack_require__("./src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__product_product_component__ = __webpack_require__("./src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cart_cart_component__ = __webpack_require__("./src/app/cart/cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__address_address_component__["a" /* AddressComponent */],
                __WEBPACK_IMPORTED_MODULE_17__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__post_product_post_product_component__["a" /* PostProductComponent */],
                __WEBPACK_IMPORTED_MODULE_19__my_products_my_products_component__["a" /* MyProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_21__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_22__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_23__cart_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__service_rest_api_service__["a" /* RestApiService */],
                __WEBPACK_IMPORTED_MODULE_9__service_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"cart\">\n  <div class=\"container-fluid p-5\">\n    <app-message></app-message>\n    <h3 *ngIf=\"!cartItems.length\" class=\"display-2 text-center mt-5\">Cart is Empty</h3>\n    <div *ngIf=\"cartItems.length\" class=\"row\">\n      <div class=\"col-md-9\">\n        <p class=\"lead font-weight-bold\">Shopping Cart</p>\n        <div class=\"row\">\n          <div class=\"offset-8 col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Price</small>\n            </p>\n          </div>\n          <div class=\"col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Quantity</small>\n            </p>\n          </div>\n        </div>\n        <hr class=\"mt-0\">\n        <div *ngFor=\"let item of cartItems; let i=index; trackBy: trackByCartItems;\" class=\"cartItem\">\n          <div class=\"row\">\n            <div class=\"col-4 col-md-2\">\n              <a routerLink=\"/product/{{ item._id }}\">\n                <img src=\"{{ item.image }}\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\n              </a>\n            </div>\n            <div class=\"col-5 col-md-6\">\n              <h5>\n                <a routerLink=\"/product/{{ item._id }}\">{{ item.title }}</a>\n              </h5>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ item.owner.name }}</small>\n              </p>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ item.category.name }}</small>\n              </p>\n              <a class=\"text-danger\" (click)=\"removeProduct(i, item)\">Delete</a>\n            </div>\n            <div class=\"col-1 col-md-2\">\n              <h6 class=\"font-weight-bold text-danger\">{{ item.price | currency }}</h6>\n            </div>\n            <div class=\"col-1 mt-5 mt-md-0 p-0\">\n              <input type=\"number\" class=\"form-control\" min=\"1\" max=\"99\" [(ngModel)]=\"quantities[i]\">\n            </div>\n          </div>\n          <hr>\n        </div>\n        <h5 class=\"text-right\">Total:\n          <span class=\"ml-1 font-weight-bold text-danger\">{{ cartTotal | currency }}</span>\n        </h5>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h5>Total:\n              <span class=\"ml-1 font-weight-bold text-danger\">{{ cartTotal | currency }}</span>\n            </h5>\n            <br>\n            <button class=\"btn btn-warning btn-block\" (click)=\"checkout()\" [disabled]=\"btnDisabled\">Checkout</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/***/ (function(module, exports) {

module.exports = "input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var CartComponent = /** @class */ (function () {
    function CartComponent(dataService, restService, router) {
        this.dataService = dataService;
        this.restService = restService;
        this.router = router;
        this.btnDisabled = false;
        this.quantities = [];
    }
    CartComponent.prototype.trackByCartItems = function (index, item) {
        return item._id;
    };
    Object.defineProperty(CartComponent.prototype, "cartItems", {
        get: function () {
            return this.dataService.getCart();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartComponent.prototype, "cartTotal", {
        get: function () {
            var _this = this;
            var total = 0;
            this.cartItems.forEach(function (data, index) {
                total += data['price'] * _this.quantities[index];
            });
            return total;
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.removeProduct = function (index, product) {
        this.quantities.splice(index, 1);
        this.dataService.removeFromCart(product);
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems.forEach(function (data) {
            _this.quantities.push(1);
        });
        this.handler = StripeCheckout.configure({
            key: __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].stripeKey,
            image: 'assets/img/logo.png',
            locale: 'auto',
            token: function (stripeToken) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var products, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            products = [];
                            this.cartItems.forEach(function (d, index) {
                                products.push({
                                    product: d['_id'],
                                    quantity: _this.quantities[index],
                                });
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.restService.payment({
                                    totalPrice: this.cartTotal,
                                    products: products,
                                    stripeToken: stripeToken,
                                })];
                        case 2:
                            data = _a.sent();
                            data['success']
                                ? (this.dataService.clearCart(), this.dataService.success('Purchase Successful.'))
                                : this.dataService.error(data['message']);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.dataService.error(error_1['message']);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); },
        });
    };
    CartComponent.prototype.validate = function () {
        var _this = this;
        if (!this.quantities.every(function (data) { return data > 0; })) {
            this.dataService.warning('Quantity cannot be less than one.');
        }
        else if (!localStorage.getItem('token')) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: '/cart' } }).then(function () {
                _this.dataService.warning('You need to login before making a purchase.');
            });
        }
        else if (!this.dataService.user['address']) {
            this.router.navigate(['/profile/address']).then(function () {
                _this.dataService.warning('You need to login before making a purchase.');
            });
        }
        else {
            this.dataService.message = '';
            return true;
        }
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        this.btnDisabled = true;
        try {
            if (this.validate()) {
                this.handler.open({
                    name: 'Xtreme',
                    description: 'Checkout Payment',
                    amount: this.cartTotal * 100,
                    closed: function () {
                        _this.btnDisabled = false;
                    },
                });
            }
            else {
                this.btnDisabled = false;
            }
        }
        catch (error) {
            this.dataService.error(error);
        }
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("./src/app/cart/cart.component.html"),
            styles: [__webpack_require__("./src/app/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_1__service_rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"categories\">\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <h4 class=\"display-4\">Categories</h4>\n    <hr>\n    <div *ngIf=\"!categories\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"categories\" class=\"list-group\">\n      <a *ngFor=\"let category of categories\" routerLink=\"/categories/{{ category._id }}\" class=\"list-group-item list-group-item-action\">\n      {{ category.name }}\n      </a>\n    </div>\n    <hr style=\"margin-top: 15rem;\">\n    <div class=\"card bg-light mt-5\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Add New Category</h4>\n        <hr>\n        <div class=\"form\">\n          <div class=\"form-group\">\n            <label>Category</label>\n            <input type=\"text\" name=\"newCategory\" class=\"form-control\" [(ngModel)]=\"model.newCategory\">\n          </div>\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"addCategory()\" [disabled]=\"btnDisabled\">Add Category</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
        this.model = {};
        this.btnDisabled = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.restService.getCategories()];
                    case 1:
                        data = _a.sent();
                        data['success'] ? (this.categories = data['categories'])
                            : this.dataService.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.dataService.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent.prototype.addCategory = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.restService.addCategories({
                                category: this.model['newCategory']
                            })];
                    case 2:
                        data = _a.sent();
                        data['success'] ? (this.dataService.success('Category successfully added'),
                            this.categories.push({ name: this.model['newCategory'] })) :
                            this.dataService.error(data['message']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.dataService.error(error_2);
                        return [3 /*break*/, 4];
                    case 4:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-categories',
            template: __webpack_require__("./src/app/categories/categories.component.html"),
            styles: [__webpack_require__("./src/app/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__["a" /* RestApiService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"category\">\n  <div class=\"container p-3 p-md-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!category\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3 *ngIf=\"category && !category.products.length\" class=\"display-2 text-center mt-5\">No Products inside Category</h3>\n    <div *ngIf=\"category && category.products.length\">\n      <p>{{ lower }}-{{ upper }} of {{ category.totalProducts }} products in {{ category.categoryName }}</p>\n      <hr>\n      <div class=\"product\" *ngFor=\"let product of category.products\">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-2\">\n            <a routerLink=\"/product/{{ product._id }}\">\n              <img [src]=\"product.image\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\n            </a>\n          </div>\n          <div class=\"col-5 col-md-8\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-6\">\n                <h5>\n                  <a routerLink=\"/product/{{ product._id }}\">{{ product.title }}</a>\n                </h5>\n                <p>\n                  <small class=\"text-muted\">{{ product.category.id }}</small>\n                </p>\n                <p>{{ product.price | currency }}</p>\n              </div>\n              <div class=\"col-md-6\">\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n      </div>\n      <ngb-pagination [collectionSize]=\"category.totalProducts\" [pageSize]=\"10\" [(page)]=\"page\" (pageChange)=\"getProducts($event)\"></ngb-pagination>\n    </div>\n  </div>\n</section>\n\n<ng-template #t let-fill=\"fill\">\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n  </span>\n</ng-template>"

/***/ }),

/***/ "./src/app/category/category.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(restService, dataService, route) {
        this.restService = restService;
        this.dataService = dataService;
        this.route = route;
        this.page = 1;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.categoryId = res['id'];
            _this.getProducts();
        });
    };
    Object.defineProperty(CategoryComponent.prototype, "lower", {
        get: function () {
            return 10 * (this.page - 1) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryComponent.prototype, "upper", {
        get: function () {
            return Math.min(10 * this.page, this.category.totalProducts);
        },
        enumerable: true,
        configurable: true
    });
    CategoryComponent.prototype.getProducts = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (event) {
                            this.category = null;
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.restService.getProducts(this.categoryId, this.page)];
                    case 2:
                        data = _a.sent();
                        data['success'] ? this.category = data : this.dataService.error(data['message']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.dataService.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category',
            template: __webpack_require__("./src/app/category/category.component.html"),
            styles: [__webpack_require__("./src/app/category/category.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\n  <div class=\"container-fluid d-none d-md-block\">\n    <ngb-carousel>\n      <ng-template ngbSlide>\n        <img src=\"../../assets/img/img1.jpg\" alt=\"first\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"../../assets/img/img2.jpg\" alt=\"second\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"../../assets/img/img3.jpg\" alt=\"third\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"../../assets/img/img4.jpg\" alt=\"fourth\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"../../assets/img/img5.jpg\" alt=\"fifth\" class=\"item\">\n      </ng-template>\n    </ngb-carousel>\n  </div>\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <p class=\"lead\">\n      <b>Recommended Deals: Last-Minute Deals</b>\n    </p>\n    <div class=\"row\">\n      <div *ngIf=\"!products\" class=\"m-auto\">\n        <h1 class=\"text-center display-3 mt-5\">\n          <i class=\"fa fa-spinner fa-spin\"></i>\n        </h1>\n      </div>\n      <div *ngFor=\"let product of products\" class=\"col-md-3 mb-5\">\n        <a routerLink=\"/product/{{ product._id }}\">\n          <div class=\"card bg-light\">\n            <img src=\"{{ product.image }}\" alt=\"product\" class=\"card-img-top\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{ product.title }}</h5>\n              <p class=\"card-text\">{{ product.price | currency }}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "ngb-carousel {\n  min-width: 1000px;\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.item {\n  position: relative;\n  height: 300px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.restService.getAllProducts()];
                    case 1:
                        data = _a.sent();
                        data['success'] ? this.products = data['products']
                            : this.dataService.error('Products not loadded');
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.dataService.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__["a" /* RestApiService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"loginPage\">\n  <div class=\"container p-5\">\n    <div class=\"row mt-5\">\n      <div class=\"col-lg-4 offset-lg-4\">\n        <app-message></app-message>\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h4 class=\"text-center\">Login</h4>\n            <hr>\n            <form>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"model.email\">\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\">\n              </div>\n              <hr>\n              <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"login()\" [disabled]=\"btnDisabled\">Login</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, dataService, restService, route) {
        this.router = router;
        this.dataService = dataService;
        this.restService = restService;
        this.route = route;
        this.model = {};
        this.btnDisabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        this.returnUrl = returnUrl;
    };
    LoginComponent.prototype.validate = function () {
        if (this.model.email) {
            if (this.model.password) {
                return true;
            }
            else {
                this.dataService.error('Password is not entered');
            }
        }
        else {
            this.dataService.error('Email is not entered.');
        }
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.validate()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.restService.login(this.model)];
                    case 2:
                        data = _a.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        localStorage.setItem('token', data['token']);
                        return [4 /*yield*/, this.dataService.getProfile()];
                    case 3:
                        _a.sent();
                        this.router.navigateByUrl(this.returnUrl);
                        return [3 /*break*/, 5];
                    case 4:
                        this.dataService.error(data['message']);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.dataService.error(error_1['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__service_rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"data.message\">\n  <ngb-alert [type]=\"data.messageType\" [dismissible]=\"false\">\n    {{data.message}}\n  </ngb-alert>\n</p>\n"

/***/ }),

/***/ "./src/app/message/message.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent(data) {
        this.data = data;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("./src/app/message/message.component.html"),
            styles: [__webpack_require__("./src/app/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/my-products/my-products.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"myProducts\">\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!products\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3 *ngIf=\"products && !products.length\" class=\"display-2 text-center mt-5\">My Products is Empty</h3>\n    <div *ngIf=\"products && products.length\" class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"display-4\">My Products</h4>\n        <div class=\"row\">\n          <div class=\"offset-10 col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Price</small>\n            </p>\n          </div>\n        </div>\n        <hr class=\"mt-0\">\n        <div *ngFor=\"let product of products\" class=\"product\">\n          <div class=\"row\">\n            <div class=\"col-4 col-md-2\">\n              <a routerLink=\"/product/{{ product.id }}\">\n                <img src=\"{{ product.image }}\" alt=\"image\" class=\"img-fluid img-thumbnail\">\n              </a>\n            </div>\n            <div class=\"col-5 col-md-8\">\n              <h5>\n                <a routerLink=\"/product/{{ product.id }}\">{{ product.title }}</a>\n                <p class=\"m-0\">\n                  <small class=\"text-muted\">{{ product.category.name }}</small>\n                </p>\n              </h5>\n            </div>\n            <div class=\"col-2\">\n              <h6 class=\"font-weight-bold text-danger\">{{ product.price | currency }}</h6>\n            </div>\n          </div>\n          <hr>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/my-products/my-products.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-products/my-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MyProductsComponent = /** @class */ (function () {
    function MyProductsComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
        this.btnDisabled = false;
    }
    MyProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.restService.getSellerProducts()];
                    case 1:
                        data = _a.sent();
                        data['success'] ? (this.products = data['products'])
                            : this.dataService.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.dataService.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-products',
            template: __webpack_require__("./src/app/my-products/my-products.component.html"),
            styles: [__webpack_require__("./src/app/my-products/my-products.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__["a" /* RestApiService */]])
    ], MyProductsComponent);
    return MyProductsComponent;
}());



/***/ }),

/***/ "./src/app/post-product/post-product.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"postProduct\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">Post a Product for Sale</h4>\n    <hr>\n    <app-message></app-message>\n    <div *ngIf=\"!categories\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"categories\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Title</label>\n            <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"model.title\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Price</label>\n            <input type=\"number\" name=\"price\" class=\"form-control\" [(ngModel)]=\"model.price\">\n          </div>\n          <div class=\"form-group\">\n            <label>Category</label>\n            <select name=\"categoryId\" [(ngModel)]=\"model.categoryId\" class=\"custom-select\">\n              <option *ngFor=\"let category of categories\" [value]=\"category._id\">\n                {{ category.name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea class=\"form-control\" name=\"description\" rows=\"5\" [(ngModel)]=\"model.description\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Upload Image</label>\n            <input type=\"file\" class=\"form-control-file\" accept=\"image/*\" name=\"file\" (change)=\"fileChange($event)\">\n          </div>\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"post()\" [disabled]=\"btnDisabled\">Post</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/post-product/post-product.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-product/post-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PostProductComponent = /** @class */ (function () {
    function PostProductComponent(dataService, restService, router) {
        this.dataService = dataService;
        this.restService = restService;
        this.router = router;
        this.model = {
            price: 0,
            product_picture: null
        };
        this.btnDisabled = false;
    }
    PostProductComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.restService.getCategories()];
                    case 1:
                        data = _a.sent();
                        data['success'] ? (this.categories = data['categories'])
                            : this.dataService.error(data['message']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.dataService.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostProductComponent.prototype.validate = function (product) {
        if (product.title) {
            if (product.price) {
                if (product.categoryId) {
                    if (product.description) {
                        if (product.product_picture) {
                            return true;
                        }
                        else {
                            this.dataService.error('Please select product image.');
                        }
                    }
                    else {
                        this.dataService.error('Please enter description.');
                    }
                }
                else {
                    this.dataService.error('Please select category.');
                }
            }
            else {
                this.dataService.error('Please enter a price.');
            }
        }
        else {
            this.dataService.error('Please enter a title.');
        }
    };
    PostProductComponent.prototype.fileChange = function (event) {
        this.model.product_picture = event.target.files[0];
    };
    PostProductComponent.prototype.post = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var form, key, data_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!this.validate(this.model)) return [3 /*break*/, 3];
                        form = new FormData();
                        for (key in this.model) {
                            if (this.model.hasOwnProperty(key)) {
                                if (key == 'product_picture') {
                                    form.append('product_picture', this.model.product_picture, this.model.product_picture.name);
                                }
                                else {
                                    form.append(key, this.model[key]);
                                }
                            }
                        }
                        return [4 /*yield*/, this.restService.addProducts(form)];
                    case 2:
                        data_1 = _a.sent();
                        data_1['success'] ?
                            this.router.navigate(['/profile/myproducts'])
                                .then(function () { return _this.dataService.success(data_1['message']); })
                                .catch(function (error) { return _this.dataService.error(error); })
                            : this.dataService.error(data_1['message']);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.dataService.error(error_2);
                        return [3 /*break*/, 5];
                    case 5:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    PostProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post-product',
            template: __webpack_require__("./src/app/post-product/post-product.component.html"),
            styles: [__webpack_require__("./src/app/post-product/post-product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], PostProductComponent);
    return PostProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"product\">\n  <div class=\"container-fluid p-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!product\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"product\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img [src]=\"product.image\" alt=\"productImage\" class=\"image img-thumbnail\">\n        </div>\n        <div class=\"col-lg-5\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <h4>{{ product.title }}</h4>\n              <p class=\"m-0\">\n                <small>by {{ product.owner.name }}</small>\n              </p>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ product.category.name }}</small>\n              </p>\n            </div>\n            <div class=\"col-6\">\n              <ngb-rating [(rate)]=\"product.averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n            </div>\n          </div>\n          <hr>\n          <p class=\"lead\">{{ product.description }}</p>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"card bg-light\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Price: {{ product.price | currency }}</h5>\n              <br>\n              <br>\n              <a class=\"btn btn-warning btn-block\" (click)=\"addToCart()\">Add to Cart</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class=\"mt-5 ml-lg-5\">\n          <h4>Reviews</h4>\n          <hr>\n          <div class=\"reviews\">\n            <div *ngFor=\"let review of product.reviews\" class=\"review\">\n              <div class=\"p-3\">\n                <img [src]=\"review.owner.picture\" alt=\"\" width=\"75px\" class=\"rounded-circle\">\n                <p class=\"lead d-inline ml-3\">{{ review.owner.name }}</p>\n                <br>\n                <br>\n                <ngb-rating [(rate)]=\"review.rating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n                <p class=\"ml-2 d-inline font-weight-bold\">{{ review.title }}</p>\n                <p class=\"mt-3\">{{ review.description }}</p>\n              </div>\n              <hr>\n            </div>\n            <div *ngIf=\"token\" class=\"card bg-light my-5\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Add a review</h4>\n                <hr>\n                <div class=\"form\">\n                  <div class=\"form-group\">\n                    <label>Title</label>\n                    <input type=\"text\" name=\"title\" class=\"form-control\" [(ngModel)]=\"review.title\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Description</label>\n                    <textarea class=\"form-control\" rows=\"5\" name=\"description\" [(ngModel)]=\"review.description\"></textarea>\n                  </div>\n                  <label>Rating</label>\n                  <br>\n                  <ngb-rating [(rate)]=\"review.rating\" [starTemplate]=\"t\" [readonly]=\"false\" max=\"5\"></ngb-rating>\n                  <br>\n                  <br>\n                  <button type=\"button\" class=\"btn btn-info\" (click)=\"postReview()\" [disabled]=\"btnDisabled\">Post Review</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #t let-fill=\"fill\">\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n  </span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(dataService, restService, route, router) {
        this.dataService = dataService;
        this.restService = restService;
        this.route = route;
        this.router = router;
        this.review = {
            title: '',
            description: '',
            rating: 0,
            productId: this.productId
        };
        this.btnDisabled = false;
        this.token = localStorage.getItem('token');
    }
    ProductComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.route.params.subscribe(function (res) {
                            _this.productId = res['id'];
                        });
                        return [4 /*yield*/, this.restService.getSingleProduct(this.productId)];
                    case 1:
                        data = _a.sent();
                        data['success'] ? this.product = data['product'] : (this.router.navigate(['/']), this.dataService.error(data['message']));
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent.prototype.addToCart = function () {
        this.dataService.addToCart(this.product)
            ? this.dataService.success('Product successfully added to cart.')
            : this.dataService.error('Product has already been added to cart.');
    };
    ProductComponent.prototype.postReview = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.restService.postReview({
                                productId: this.productId,
                                title: this.review.title,
                                description: this.review.description,
                                rating: this.review.rating,
                            })];
                    case 2:
                        data = _a.sent();
                        console.log(this.review);
                        data['success'] ? this.dataService.success(data['message'])
                            : this.dataService.error('Sorry could not add review');
                        this.btnDisabled = false;
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.dataService.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__["a" /* RestApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"profile\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Profile</h4>\n    <hr>\n    <div *ngIf=\"!dataService.user\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"dataService.user\" class=\"row mt-5\">\n      <div class=\"col-md-3\">\n        <img [src]=\"dataService.user.picture\" alt=\"userimage\" class=\"rounded-circle image\">\n      </div>\n      <div class=\"col-md-8 ml-3\">\n        <p id=\"name\" class=\"lead\">{{ dataService.user.name | titlecase }}</p>\n        <!-- <a routerLink=\"/profile/orders\" class=\"btn btn-warning\">My Orders</a> -->\n        <br>\n        <br>\n        <a routerLink=\"/profile/settings\" class=\"btn btn-warning\">Change Account Settings</a>\n        <br>\n        <br>\n        <a routerLink=\"/profile/address\" class=\"btn btn-warning\">Change Shipping Address</a>\n        <br>\n        <br>\n        <div *ngIf=\"dataService.user.isSeller\">\n          <p class=\"lead\">Seller Actions</p>\n          <hr>\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <a routerLink=\"/profile/postproduct\" class=\"btn btn-outline-success btn-block\">Post Product for Sale</a>\n            </div>\n            <div class=\"col-md-6\">\n              <a routerLink=\"/profile/myproducts\" class=\"btn btn-outline-info btn-block\">My Products</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = "#name {\n  font-size: 2rem; }\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dataService) {
        this.dataService = dataService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"registrationPage\">\n  <div class=\"container p-5\">\n    <div class=\"row mt-5\">\n      <div class=\"col-lg-4 offset-lg-4\">\n        <app-message></app-message>\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h4 class=\"text-center\">Registration</h4>\n            <hr>\n            <form #f=\"ngForm\">\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Name</label>\n                <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"model.name\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Email</label>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"model.email\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Confirm Password</label>\n                <input type=\"password\" name=\"password1\" class=\"form-control\" [(ngModel)]=\"model.password1\">\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input type=\"checkbox\" name=\"isSeller\" class=\"form-check-input\" [(ngModel)]=\"model.isSeller\"> Register as Seller\n                </label>\n              </div>\n              <hr>\n              <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"register()\" [disabled]=\"btnDisabled\">Register</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(restService, dataService, router) {
        this.restService = restService;
        this.dataService = dataService;
        this.router = router;
        this.model = {};
        this.btnDisabled = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.validate = function () {
        if (this.model.name) {
            if (this.model.email) {
                if (this.model.password) {
                    if (this.model.password1) {
                        if (this.model.password == this.model.password1) {
                            return true;
                        }
                        else {
                            this.dataService.error('Passwords do not match');
                        }
                    }
                    else {
                        this.dataService.error('Confirmation password not entered');
                    }
                }
                else {
                    this.dataService.error('Password is not entered');
                }
            }
            else {
                this.dataService.error('Email is not entered');
            }
        }
        else {
            this.dataService.error('Name is not entered');
        }
    };
    RegistrationComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.validate()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.restService.register(this.model)];
                    case 2:
                        data = _a.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        localStorage.setItem('token', data['token']);
                        this.dataService.success('Registration successful');
                        return [4 /*yield*/, this.dataService.getProfile()];
                    case 3:
                        _a.sent();
                        this.router.navigate(['/profile/address'])
                            .then(function () {
                            _this.dataService.success('Registration successful! Please enter your shipping address below.');
                        }).catch(function (error) { return _this.dataService.error(error); });
                        return [3 /*break*/, 5];
                    case 4:
                        this.dataService.error(data['message']);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.dataService.error(error_1['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("./src/app/registration/registration.component.html"),
            styles: [__webpack_require__("./src/app/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"search\">\n  <div class=\"container p-3 p-md-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!content\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3 *ngIf=\"content && !content.nbHits\" class=\"display-2 text-center mt-5\">No Results</h3>\n    <div *ngIf=\"content && content.nbHits\">\n      <p>{{ lower }}-{{ upper }} of {{ content.nbHits }} results for\n        <span class=\"text-warning\">\"{{ query }}\"</span>\n      </p>\n      <hr>\n      <div class=\"product\" *ngFor=\"let product of content.hits\">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-2\">\n            <a routerLink=\"/product/{{ product.objectID }}\">\n              <img [src]=\"product.image\" alt=\"productImage\" class=\"img-fluid img-thumbnail\">\n            </a>\n          </div>\n          <div class=\"col-5 col-md-8\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-6\">\n                <h5>\n                  <a routerLink=\"/product/{{ product.objectID }}\">{{ product.title }}</a>\n                </h5>\n                <p>\n                  <small>by {{ product.owner.name }}</small>\n                </p>\n                <p>{{ product.price | currency }}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <ngb-rating [(rate)]=\"product.averageRating\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr>\n      </div>\n      <ngb-pagination [collectionSize]=\"content.nbHits\" [pageSize]=\"20\" [(page)]=\"page\" (pageChange)=\"getProducts()\"></ngb-pagination>\n    </div>\n  </div>\n</section>\n\n<ng-template #t let-fill=\"fill\">\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n  </span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, dataService, restService) {
        this.route = route;
        this.dataService = dataService;
        this.restService = restService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.query = res['query'];
            _this.page = 1;
            _this.getProducts();
        });
    };
    Object.defineProperty(SearchComponent.prototype, "lower", {
        get: function () {
            return 1 + this.content.hitsPerPage * this.content.page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "upper", {
        get: function () {
            return Math.min(this.content.hitsPerPage * (this.content.page + 1), this.content.nbHits);
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.content = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.restService.search(this.query, this.page - 1)];
                    case 2:
                        data = _a.sent();
                        data['success'] ? this.content = data['content']
                            : this.dataService.error('Could not find search');
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.dataService.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__service_rest_api_service__["a" /* RestApiService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"settings\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Account Settings</h4>\n    <hr>\n    <app-message></app-message>\n    <div *ngIf=\"!currentSettings\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"currentSettings\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Name</label>\n            <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"currentSettings.name\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Email</label>\n            <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"currentSettings.email\">\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" name=\"isSeller\" class=\"form-check-input\" [(ngModel)]=\"currentSettings.isSeller\"> Is Seller\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">New Password</label>\n            <input type=\"password\" name=\"newPwd\" class=\"form-control\" [(ngModel)]=\"currentSettings.newPwd\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Confirm Password</label>\n            <input type=\"password\" name=\"pwdConfirm\" class=\"form-control\" [(ngModel)]=\"currentSettings.pwdConfirm\">\n          </div>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"updateProfile()\" [disabled]=\"btnDisabled\">Update</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/_service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__ = __webpack_require__("./src/app/_service/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
        this.btnDisabled = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (this.dataService.user) {
                        this.currentSettings = Object.assign({
                            newPwd: '',
                            pwdConfirm: ''
                        }, this.dataService.user);
                    }
                }
                catch (error) {
                    this.dataService.error(error);
                }
                return [2 /*return*/];
            });
        });
    };
    SettingsComponent.prototype.validate = function (settings) {
        if (settings['name']) {
            if (settings['email']) {
                if (settings['newPwd']) {
                    if (settings['pwdConfirm']) {
                        if (settings['newPwd'] === settings['pwdConfirm']) {
                            return true;
                        }
                        else {
                            this.dataService.error('Passwords do not match.');
                        }
                    }
                    else {
                        this.dataService.error('Please enter confirmation password.');
                    }
                }
                else {
                    if (!settings['pwdConfirm']) {
                        return true;
                    }
                    else {
                        this.dataService.error('Please enter new password.');
                    }
                }
            }
            else {
                this.dataService.error('Please enter your email.');
            }
        }
        else {
            this.dataService.error('Please enter your name.');
        }
    };
    SettingsComponent.prototype.updateProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.btnDisabled = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        if (!this.validate(this.currentSettings)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.restService.updateProfile({
                                name: this.currentSettings['name'],
                                email: this.currentSettings['email'],
                                password: this.currentSettings['newPwd'],
                                isSeller: this.currentSettings['isSeller']
                            })];
                    case 2:
                        data = _b.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.dataService.getProfile()];
                    case 3:
                        _a = (_b.sent(), this.dataService.success(data['message']));
                        return [3 /*break*/, 5];
                    case 4:
                        _a = this.dataService.error(data['message']);
                        _b.label = 5;
                    case 5:
                        _a;
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _b.sent();
                        this.dataService.error(error_1);
                        return [3 /*break*/, 8];
                    case 8:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__service_rest_api_service__["a" /* RestApiService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'api',
    stripeKey: 'pk_test_xC3e0EYbUs6GiOOB1HLEaaXg'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map