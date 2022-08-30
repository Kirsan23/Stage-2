export function string (str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};