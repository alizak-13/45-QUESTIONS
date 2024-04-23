interface Car {
    manufacturer:string;
    model:string;
    [key:string]:any;
}

function create_car(manufacturer:string, model:string, ...options:[string,any][]):Car {
    const car:Car = {manufacturer,model};
    options.forEach(([key,value]) => car [key] = value);
    return car;
}
const my_car = create_car("Toyota", "Camry",["color","blue"],["year", 2023]);

console.log(my_car);