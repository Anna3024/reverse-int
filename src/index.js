module.exports = function reverse (n) {
    // if (n<0) return (-1)*((n+"").split('').reverse().join(""));
  return (Math.abs(n)+"").split('').reverse().join("")
}
