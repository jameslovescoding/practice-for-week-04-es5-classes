// Your code here

Array.prototype.isEqual = function(arr) {
    if (this.length !== arr.length) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (this[i] !== arr[i]) {
            return false;
        }
    }
    return true;
}
