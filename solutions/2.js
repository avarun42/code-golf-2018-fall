[...Array(999999).keys()].filter(x => [3, 5, 7].some(e => x % e == 0) && x.toString()[0] == x.toString().split("").pop()).splice(1)
                         .forEach(x => console.log(x));