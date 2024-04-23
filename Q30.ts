let usernames : string[]= ["admin" , "user1", "user2" , "user3" , "user5"];
usernames.forEach ((username) => {
    if (username == "admin") {
        console.log("Hello admin would you like to see the status report?");
    } else {
        console.log(`Hello ${username} thank you for logging in again.`);
    }
});