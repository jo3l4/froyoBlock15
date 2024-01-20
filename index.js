const input = prompt("Enter froyo flav followed by , pls:");

const flavors = input.split(',');

const froyoTotal = {};
flavors.forEach(flavor => {
    flavor = flavor.trim();
   froyoTotal[flavor] = (froyoTotal[flavor] || 0) + 1;
});

console.table(froyoTotal);