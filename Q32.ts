let current_users : string [] = ["user12" , "admin" , "user1" , "user5"];
let new_users : string [] = ["user1" , "user2" , "user3" , "user5"];

new_users.forEach ((newUser) =>  {
    if (
      current_users.some(
        (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
      )
    ) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

        
