var guest_list = ["Manahil", "Khadija", "Ayesha", "Zunaira"];
console.log("Great news! I found a bigger dining table!.");
var newGuest = "Aliza";
var new_guest = "Eman";
var New_guest = "Amna";
var newguest_list = ["Manahil", "Khadija", "Ayesha", "Zunaira", "Aliza", " Eman", "Amna"];
newguest_list.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join me for dinner?"));
});
//Q17
console.log("Unfortuanately, I can only invite two people for dinner");
var only_guest = ["Manahil", "Khadija"];
var removedGuest = "Amna";
var removedGuest1 = "Eman";
var removedGuest2 = "Aliza";
var removedGuest3 = "Zunaira";
var removedGuest4 = "Ayesha";
console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner"));
console.log("Sorry ".concat(removedGuest1, ", I can't invite you to dinner"));
console.log("Sorry ".concat(removedGuest2, ", I can't invite you to dinner"));
console.log("Sorry ".concat(removedGuest3, ", I cant't invite you to dinner"));
console.log("Sorry ".concat(removedGuest4, ", I can't invite you to dinner"));
only_guest.forEach(function (only_guest) {
    console.log("".concat(only_guest, ", you're still invited to dinner"));
});
newguest_list.splice(0, newguest_list.length);
console.log(newguest_list);
