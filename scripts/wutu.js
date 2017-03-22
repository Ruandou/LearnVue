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

var stapleFoods = [
    new food("sf1", "米饭", "images/mifan.jpg", 2, 600),
    new food("sf2", "臊子面", "images/saozimian.jpg", 32, 0)
];

var sdes = [
    new food("sd1", "剁椒鱼头", "images/shuangseyutou.jpg", 60, 12),
    new food("sd2", "辣椒炒肉", "images/lajiaochaorou.jpg", 20, 100),
    new food("sd3", "辣子鸡", "images/laziji.jpg", 32, 268),
    new food("sd4", "风味辣子猪手", "images/fengweilazizhushou.jpg", 52, 300),
    new food("sd5", "猪脚爱上鸭", "images/zhujiaoaishangya.jpg", 60, 88),
    new food("sd6", "毛血旺", "images/maoxuewang.jpg", 32, 110),
    new food("sd7", "过江鱼", "images/guojiangyu.jpg", 28, 600),
    new food("sd8", "湖南小炒肉", "images/hunanxiaochaorou.jpg", 22, 800),
    new food("sd9", "虎皮扣肉", "images/hupikourou.jpg", 35, 100),
    new food("sd10", "坛子菜炒五花肉", "images/tanzicaichaowuhuarou.jpg", 36, 166)
];

var stirFries = [
    new food("sf1", "豆角炒腊肉", "images/doujiaochaolarou.jpg", 12, 122),
    new food("sf2", "姜葱炒花甲", "images/jiangcongchaohuajia.jpg", 28, 100),
    new food("sf3", "酸菜鱼", "images/suancaiyu.jpg", 59, 46),
    new food("sf4", "湘西腊肉炒蒜苔", "images/xiangxilarouchaosuantai.jpg", 49, 7),
    new food("sf5", "姜辣焖鸡", "images/jianglamenji.jpg", 59, 3),
    new food("sf6", "十里香牛肉", "images/shilixiangniurou.jpg", 59, 16),
    new food("sf7", "秘制串烧虾", "images/mizhichuanshaoxia.jpg", 59, 5),
    new food("sf8", "辣些年错过的大鱼", "images/laxieniancuoguodedayu.jpg", 59, 19),
    new food("sf9", "湘炒羊里脊", "images/xiangchaoyangliji.jpg", 39, 28),
    new food("sf10", "毛氏红烧肉", "images/maoshihongshaorou.jpg", 49, 17),
    new food("sf11", "大碗花菜", "images/dawanhuacai.jpg", 32, 64),
    new food("sf12", "豆角7号", "images/doujiaoqihao.jpg", 32, 16),
    new food("sf13", "干锅鸡杂", "images/ganguojiza.jpg", 28, 22),
    new food("sf14", "干锅千页豆腐", "images/ganguoqianyedoufu.jpg", 28, 76),
    new food("sf15", "干锅手撕包菜", "images/ganguoshousibaocai.jpg", 22, 79),
    new food("sf16", "地三鲜", "images/disanxian.jpg", 20, 15)
];

var cdes = [
    new food("cd1", "胭脂冬瓜", "images/yanzhidonggua.jpg", 15, 88),
    new food("cd2", "香辣海带丝", "images/xianglahaidaisi.jpg", 5, 200),
    new food("cd3", "葱油拌金针菇", "images/congyoubanjinzhengu.jpg", 6, 111),
    new food("cd4", "凉拌蒜蓉茄子", "images/liangbansuanrongqiezi.jpg", 18, 67),
    new food("cd5", "酸辣拌豆腐", "images/suanlabandoufu.jpg", 5, 65),
    new food("cd6", "凉拌土豆丝", "images/liangbantudousi.jpg", 12, 123),
    new food("cd7", "手撕茄子", "images/shousiqiezi.jpg", 12, 3),
    new food("cd8", "香拌藕片", "images/xiangbanoupian.jpg", 12, 20),
    new food("cd9", "凉拌海带丝", "images/liangbanhaidaisi.jpg", 6, 100)
];

var drinks = [
    new food("drink1", "可乐", "images/kele.jpg", 5, 10),
    new food("drink2", "雪碧", "images/xuebi.jpg", 5, 36),
    new food("drink3", "加多宝", "images/jiaduobao.jpg", 5, 63),
    new food("drink4", "玉米汁", "images/yimizhi.jpg", 10, 2),
    new food("drink5", "红牛", "images/hongniu.jpg", 10, 3),
    new food("drink6", "乌梅汁", "images/wumeizhi.jpg", 6, 123),
    new food("drink7", "橙汁", "images/chengzhi.jpg", 12, 1),
    new food("drink8", "老酸奶", "images/laosuannai.jpg", 10, 8)
];

var stapleFood = new foodClass("class-1", "主食", stapleFoods, true);
var signitureDishes = new foodClass("class-2", "招牌菜", sdes, false);
var stirFry = new foodClass("class-3", "炒菜", stirFries, false);
var coldDishes = new foodClass("class-4", "凉菜", cdes, false)
var drink = new foodClass("class-5", "饮品", drinks, false);

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
            <a href="#" @click.prevent="">\
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
                order.quantity -= 100;
                order.amount -= this.fd_price * 100;
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
                order.quantity -= 100;
                order.amount -= this.orderLine.fd_price * 100;
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