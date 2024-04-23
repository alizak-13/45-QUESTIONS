function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist one", "The first album"));
console.log(make_album("Artist two", "The second album"));
console.log(make_album("Artist three", "The third album", 12));
