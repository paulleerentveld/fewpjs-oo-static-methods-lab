class Formatter {
  static capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);

  }
  static sanitize(value) {
    return value.replace(/[^A-Za-z0-9-' ]+/g, '');


  }
  static titleize(value) {
    let arr = [];
    let exclude = ['the','a','an','but','of','and','for','at','by','from']
    arr = value.split(' ');
    return arr.map(word => {
      return exclude.includes(word) && word !== arr[0] ? [word] : word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
}