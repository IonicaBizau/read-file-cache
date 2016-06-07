
# read-file-cache

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/read-file-cache.svg)](https://www.npmjs.com/package/read-file-cache) [![Downloads](https://img.shields.io/npm/dt/read-file-cache.svg)](https://www.npmjs.com/package/read-file-cache) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Read files and cache them.

## :cloud: Installation

```sh
$ npm i --save read-file-cache
```


## :clipboard: Example



```js
const readFileCache = require("read-file-cache");

// Read the file from the disk
readFileCache("~/.bashrc", (err, content) => {
    console.log(err || content);

    // Read it from the cache
    readFileCache("~/.bashrc", (err, content) => {
        console.log(err || content);

        // And now force reading it from the disk again
        readFileCache("~/.bashrc", true, (err, content) => {
            console.log(err || content);
        });
    });
});

// From the disk
console.log(readFileCache.sync("~/.bashrc"));

// From cache
console.log(readFileCache.sync("~/.bashrc"));

// Force reading from disk
console.log(readFileCache.sync("~/.bashrc", true));
```

## :memo: Documentation


### `readFileCache(path, noCache, cb)`
Reads the file asyncronously.

#### Params
- **String** `path`: The file path.
- **Boolean** `noCache`: If `true`, the file will be read from the disk.
- **Function** `cb`: The callback function.

### `sync(path, noCache)`
The syncronous version of the function.

#### Params
- **String** `path`: The file path.
- **Boolean** `noCache`: If `true`, the file will be read from the disk.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
