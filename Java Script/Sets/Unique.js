// ! Unique tags in a blog
const tags = ["JS", "React", "JS", "Node", "React"];
const uniqueTags = [...new Set(tags)];
console.log(uniqueTags); // ['JS','React','Node']


// ! Fast membership check
const emails = new Set(["a@example.com","b@example.com"]);
console.log(emails.has("c@example.com")); // false
