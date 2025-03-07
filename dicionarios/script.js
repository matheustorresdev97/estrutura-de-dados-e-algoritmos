let cookies = new Map();

cookies.set("user", "matheus27")
cookies.set("theme", "dark")
cookies.set("language", "pt-br")

console.log(cookies.get("user"));  // Output: matheus27
console.log("Is empty: " + (cookies.size === 0))
console.log("Count: " + cookies.size)

console.log("Keys:")
for (let value of cookies.keys()) {
    console.log(value);
}

console.log("Values:")
for (let value of cookies.values()) {
    console.log(value);
}

console.log("Keys & Values:")
for (let [key, value] of cookies) {
    console.log(key + "=" + value);
}

console.log("Contains email: " + cookies.has("email"));
let removed = cookies.get("email");
cookies.delete("email");
console.log("Removed email: " + removed);

console.log("Contains email: " + cookies.has("email"));
removed = cookies.get("email");
console.log("Removed email: " + removed);