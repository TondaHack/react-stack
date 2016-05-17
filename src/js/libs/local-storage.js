
module.exports.set = function set(data = {}) {
    for (const key in data) {
        const val = data[key];

        localStorage.setItem(key, JSON.stringify(val));
    }
};

module.exports.get = function get(key, default_value) {
    const val = localStorage.getItem(key);

    return (val === null) ? default_value : JSON.parse(val);
};
