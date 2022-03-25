/**
 * @param {string} address
 * @return {string}
 */

// using built in js functions
var defangIPaddr = function (address) {
    return address.split('.').join('[.]')
};

// without built in js functions
var defangIPaddr = function (address) {
    let output = ''

    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            output += '[.]'
        } else {
            output += address[i]
        }
    }

    return output
};
