var guest_list = ["Manahil", "Khadija", "Ayesha", "Zunaira"];
console.log("Great news! I found a bigger dining table!.");
var newGuest = "Aliza";
var new_guest = "Eman";
var New_guest = "Amna";
var newguest_list = ["Manahil", "Khadija", "Ayesha", "Zunaira", "Aliza", "Eman", "Amna"];
newguest_list.forEach(function (guest) {
    console.log("Dear ".concat(guest, " would you like to join me for dinner?"));
});
