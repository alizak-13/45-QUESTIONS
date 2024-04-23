function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making sandwich with the following items:");
    items.forEach(function (item) { return console.log("- " + item); });
    console.log("Enjoy your sandwich!\n");
}
makeSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
makeSandwich("Ham", "Cheese");
makeSandwich("Peanut butter", "Jelly");
