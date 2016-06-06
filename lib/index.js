"use strict";

const read = require("read-utf8")
    , abs = require("abs")
    ;

const _cache = {};

/**
 * readFileCache
 * Reads the file asyncronously.
 *
 * @name readFileCache
 * @function
 * @param {String} path The file path.
 * @param {Boolean} noCache If `true`, the file will be read from the disk.
 * @param {Function} cb The callback function.
 */
function readFileCache (path, noCache, cb) {
    path = abs(path);

    if (typeof noCache === "function") {
        cb = noCache;
        noCache = false;
    }

    // TODO: Callback buffering
    if (_cache[path] && noCache !== true) {
        return cb(null, _cache[path]);
    }

    read(path, (err, data) => {
        if (err) { return cb(err); }
        cb(null, _cache[path] = data);
    });
}

readFileCache._cache = _cache;

readFileCache.sync = function (path, noCache) {
    path = abs(path);
    if (noCache) {
        return _cache[path] = read(path);
    }
    return _cache[path] || (_cache[path] = read(path));
};

module.exports = readFileCache;
