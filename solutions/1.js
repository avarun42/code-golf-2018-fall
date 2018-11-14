w = x => process.stdout.write(x);

[...Array(5)].forEach(x => {
    [...Array(5)].forEach(x => w(String.raw` / __ \ \_`) & w(String.raw`_/`));
    console.log(String.raw` / __ \ \_`);
    [...Array(5)].forEach(x => w(String.raw`/ /  \ \__`) & w(String.raw`__`));
    console.log(String.raw`/ /  \ \__`);
    [...Array(5)].forEach(x => w(String.raw`\ \__/ / _`) & w(String.raw`_ `));
    console.log(String.raw`\ \__/ / _`);
    [...Array(5)].forEach(x => w(String.raw` \____/ / `) & w(" \\"));
    console.log(String.raw` \____/ / `);
});

[...Array(5)].forEach(x => w(String.raw` / __ \ \_`) & w(String.raw`_/`));
console.log(String.raw` / __ \ \_`);
[...Array(5)].forEach(x => w(String.raw`/ /  \ \__`) & w(String.raw`__`));
console.log(String.raw`/ /  \ \__`);