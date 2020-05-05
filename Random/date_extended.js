class DateExtended extends Date {

  format(str) {
    return str.split('').map((char) => {
      return this.parseChar(char);
    }).join('');
  }

  parseChar(char) {
    switch(char) {
      case "Y": return this.getFullYear().toString().padStart(4, '0'); break;
      case "m": return (this.getMonth() + 1).toString().padStart(2, '0'); break;
      case "d": return this.getDate().toString().padStart(2, '0'); break;
      case "H": return this.getHours().toString().padStart(2, '0'); break;
      case "i": return this.getMinutes().toString().padStart(2, '0'); break;
      case "s": return this.getSeconds().toString().padStart(2, '0'); break;
      default: return char;
    }
  }
}

module.exports = DateExtended;
