let guest_list : string [] = ["Manahil" , "Khadija" , "Ayesha" , "Zunaira"];
console.log("Great news! I found a bigger dining table!.")

let newGuest : string = "Aliza";
let new_guest : string = "Eman";
let New_guest :  string = "Amna";

let newguest_list : string [] = ["Manahil" , "Khadija" , "Ayesha" , "Zunaira" , "Aliza" , "Eman" , "Amna"];


newguest_list.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for dinner?`)
});


