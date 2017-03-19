var food = function (_id, _name, _pictureUrl, _price, _soldCurMonth) {
    this.id = _id;
    this.name = _name;
    this.pictureUrl = _pictureUrl;
    this.price = _price;
    this.soldCurMonth = _soldCurMonth;
}

var foodClass = function (_id, _name, _foods, _isActive) {
    this.id = _id;
    this.name = _name;
    this.foods = _foods;
    this.isActive = _isActive;
}

foodClass.prototype.addFood = function (_food) {
    this.foods.push(_food);
}

foodClass.prototype.toString = function () {
    var str = '';

    for (var food in foods) {
        str += food.name;
    }

    return str;
}

var foods = [
    new food(1, "剁椒鱼头", "images/shuangseyutou.jpg", 60, 12),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100),
    new food(2, "辣椒炒肉", "images/shuangseyutou.jpg", 20, 100)
]
var stapleFood = new foodClass("class-1", "主食", foods, true);
var signitureDishes = new foodClass("class-2", "招牌菜", foods, false);
var stirFry = new foodClass("class-3", "炒菜", foods, false);
var coldDishes = new foodClass("class-4", "凉菜", foods, false)
var drink = new foodClass("class-5", "酒水", foods, false);

var foodClasses = [stapleFood, signitureDishes, stirFry, coldDishes, drink];

var orderLine = function (_id, _name, _price, _number) {
    this.fd_id = _id;
    this.fd_name = _name;
    this.fd_price = _price;
    this.fd_number = _number;
}

var order = {
    lines: [],
    quantity: 0,
    amount: 0
}

var showShoppingCart = {
    show: true
}

// Menu.
var menuVM = new Vue({
    el: "#menu",
    data: {
        items: foodClasses
    },
    methods: {
        setCurrent: function (_index) {
            for (var i = 0; i < this.items.length; i++) {
                if (i != _index) {
                    this.items[i].isActive = false;
                } else {
                    this.items[i].isActive = true;
                }
            }
        }
    }
})

// Menu list.
Vue.component("food", {
    template: '\
        <div class="food">\
            <a href="#">\
                <img :src="pictureUrl" :alt="name" />\
                <div>{{ name }}</div>\
            </a>\
            <div class="food-sold">月售{{ soldCurMonth }}份</div>\
            <div class="food-to-sell">\
                <div class="food-price">¥{{ price }}</div>\
                <div class="num-in-cart" v-show="fd_number != 0">{{ fd_number }}</div>\
                <input class="add-to-cart" type="button" value="+"\
                    @click="addToCart"/>\
            </div>\
        </div>',
    props: ['id', 'name', 'pictureUrl', 'price', 'soldCurMonth'],
    data: function () {
        var line = new orderLine(this.id, this.name, this.price, 0);
        order.lines.push(line);
        return line;
    },
    methods: {
        addToCart: function () {
            this.fd_number++;
            order.quantity++;
            order.amount += this.fd_price;
            if (this.fd_number > 100) {
                this.fd_number = 1;
                order.quantity -= 99;
                order.amount -= this.fd_price * 99;
            }
        }
    }
})

Vue.component("food-class", {
    template: '\
        <div :id="id" class="food-class">\
            <h2>{{ name }}</h2>\
            <div class="foods">\
                <food v-for="food in foodClass.foods"\
                    :id="food.id"\
                    :name="food.name"\
                    :price="food.price"\
                    :picture-url="food.pictureUrl"\
                    :sold-cur-month="food.soldCurMonth"\
                    :key="food.id">\
                </food>\
            </div>\
            <div class="clearfix"></div>\
        </div>',
    props: ['id', 'name', 'foodClass']
})

var contentVM = new Vue({
    el: "#content",
    data: {
        foodClasses: foodClasses
    }
})

Vue.component("cart-list-item", {
    template: '\
        <li>\
            <div class="cart-list-name">{{ orderLine.fd_name }}</div>\
            <div class="cart-list-number">\
                <input type="button" value="-"\
                    @click="minus" />\
                <div>{{ orderLine.fd_number }}</div>\
                <input type="button" value="+"\
                    @click="add" />\
            </div>\
            <div class="cart-list-amount">¥{{ orderLine.fd_number * orderLine.fd_price }}</div>\
            <div class="clearfix">\
        </li>',
    props: ['orderLine'],
    methods: {
        add: function () {
            this.orderLine.fd_number++;
            order.quantity++;
            order.amount += this.orderLine.fd_price;
            if (this.orderLine.fd_number > 100) {
                order.quantity -= 99;
                order.amount -= this.orderLine.fd_price * 99;
            }
        },
        minus: function () {
            this.orderLine.fd_number--;
            order.quantity--;
            order.amount -= this.orderLine.fd_price;
        }
    }

})

var cartListVM = new Vue({
    el: "#cart-list",
    data: {
        showShoppingCart: showShoppingCart
    },
    computed: {
        orderLines: function () {
            return order.lines.filter(function (line) {
                return line.fd_number > 0;
            });
        }
    }
})

// Compute total.
var cartTotalVM = new Vue({
    el: "#cart-total",
    data: {
        order: order
    },
    computed: {
        quantity: function () {
            return this.order.quantity;
        },
        amount: function () {
            return this.order.amount;
        }
    }
})

// Clear button.
var clearShoppingCartVM = new Vue({
    el: "#clear-shopping-cart",
    data: {
        order: order
    },
    methods: {
        clearShoppingCart: function () {
            this.order.lines.forEach(function (line) {
                line.fd_number = 0;
            })
            this.order.quantity = 0;
            this.order.amount = 0;
        }
    }
})

var cartIconVM = new Vue({
    el: "#cart-icon",
    data: {
        showShoppingCart: showShoppingCart
    },
    methods: {
        showOrHideShoppingCart: function () {
            this.showShoppingCart.show = !this.showShoppingCart.show;
        }
    }
})

// Use jQuery to handle the scroll event.
window.onscroll = function () {
    var top = $(document).scrollTop();
    var menu = $("#menu");
    var items = $("#content").find(".food-class");

    var currentId = "";

    items.each(function () {
        var m = $(this);
        var itemTop = m.offset().top;
        if (top > itemTop - 360) {
            currentId = "#" + m.attr("id");
        } else {
            return;
        }
    })

    var currentLink = menu.find(".current");
    if (currentId && currentLink.attr("href") != currentId) {
        currentLink.removeClass("current");
        menu.find("[href=" + currentId + "]").addClass("current");
    }
}