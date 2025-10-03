
const EventEmitter = require("events");

const emmiter = new EventEmitter();

const eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
};

// Event listener
emmiter.on("user-login", (username)=>{
    eventCounts["user-login"]++;
    console.log(`${username} logged in!`);
});
emmiter.on("user-purchase", (username, item)=>{
    eventCounts["user-purchase"]++;
    console.log(`${username} purchased ${item}`);

});

emmiter.on("profile-update",(username, field) => {
    eventCounts["profile-update"]++;
    console.log(`${username} updated their ${field}`);
});

emmiter.on("user-logout",(username) => {
    eventCounts["user-logout"]++;
    console.log(`${username} logged out!`);
});

let prevCounts = null;

emmiter.on("Summary", () => {
    console.log("Event Summary:")
    console.log(eventCounts);

});


// Emit some events
emmiter.emit("user-login", "Raju");
emmiter.emit("user-purchase", "Raju", "Laptop");
emmiter.emit("profile-update", "Raju", "email");
emmiter.emit("user-logout", "Raju");

// summery emit events
emmiter.emit("Summary");
