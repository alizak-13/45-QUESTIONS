let magicians: string[] = ["Alice", "Jack", "Alex"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(magicians:string[]) {
    for (let i=0; i <magicians.length; i++) {
        magicians[i] = magicians[i] + "The Great";
    }
}

make_great(magicians);
show_magicians(magicians);