let guest_list : string [] = ["Manahil" , "Khadija" , "Ayesha" , "Zunaira"];
console.log("Great news! I found a bigger dining table!.")

let newGuest : string = "Aliza";
let new_guest : string = "Eman";
let New_guest :  string = "Amna";

let newguest_list : string [] = ["Manahil" , "Khadija" , "Ayesha" , "Zunaira" , "Aliza" ," Eman" , "Amna"];


newguest_list.forEach(guest => {
    console.log(`Dear ${guest} would you like to join me for dinner?`)
});


//Q17
console.log("Unfortuanately, I can only invite two people for dinner");
let only_guest : string [] = ["Manahil" ,"Khadija"];

let removedGuest = "Amna";
let removedGuest1 = "Eman";
let removedGuest2 = "Aliza";
let removedGuest3 = "Zunaira";
let removedGuest4 ="Ayesha";

console.log (`Sorry ${removedGuest}, I can't invite you to dinner`);
console.log(`Sorry ${removedGuest1}, I can't invite you to dinner`);
console.log(`Sorry ${removedGuest2}, I can't invite you to dinner`);
console.log(`Sorry ${removedGuest3}, I cant't invite you to dinner`);
console.log(`Sorry ${removedGuest4}, I can't invite you to dinner`);

only_guest.forEach(only_guest =>
    {
console.log(`${only_guest}, you're still invited to dinner`)
    });


newguest_list.splice (0, newguest_list.length)

console.log (newguest_list);


