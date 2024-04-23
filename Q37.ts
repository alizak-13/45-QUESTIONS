function make_shirt (size :string = "large", message :string = "I love typescript" ) {
    console.log(`making a ${size} shirt with the message "${message}" printed on it`);
}

make_shirt();
make_shirt ("medium");
make_shirt ("small","Life is way to short for bad vibes!");
