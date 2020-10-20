module.exports = function reverse (n) {
    
    let b = n.toString()

    return parseInt( b.split('').reverse().join(''))
}
