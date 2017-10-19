function whatIsInAName(collection, source) {
    var arr = [];
    // Find the properties(keys) of the source object
    var keys = Object.keys(source);
    // Filter collection objects by matching key/value pairs
    arr = collection.filter(function (obj) {
        // Loop through each key of source
        for (var i = 0; i < keys.length; i++) {
            // Does it match the collection obj key? Do they share the same values?
            if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
                return false;
            }
        }
        return true;
    });
    return arr;
}
// Examples
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); // returns [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); // returns [{ "a": 1, "b": 2, "c": 2 }]