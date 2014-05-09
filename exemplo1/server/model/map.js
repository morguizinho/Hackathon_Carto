var isString = function(value) {
    return typeof value === 'string';
};

var Map = function(data) {
    this.update(data);
};

Map.prototype.update = function(data) {

    Object.keys(data).forEach(function(key) {
        if (isString(data[key])) {
            if (key === 'gid') {
                this[key] = parseInt(data[key], 10);
            } else if (key === 'lat' || key === 'lon') {
                this[key] = parseFloat(data[key]);
            }
        } else {
            this[key] = data[key];
        }
    }, this);
};

Map.prototype.validate = function(errors) {
    if (!this.gid) {
        errors.push('Invalid: "gid" is a mandatory field!');
    }

    return errors.length === 0;
};

exports.Map = Map;