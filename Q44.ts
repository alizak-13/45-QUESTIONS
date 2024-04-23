function makeSandwich (...items:string[]):void {
    console.log("Making sandwich with the following items:");
    items.forEach(item => console.log("- "+ item));
    console.log("Enjoy your sandwich!\n");
}

makeSandwich("Turkey" ,"Lettuce" ,"Tomato" ,"Mayo");
makeSandwich("Ham" ,"Cheese");
makeSandwich("Peanut butter" ,"Jelly");
