module.exports = () => {
  var str = "Hello World";

  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
  var words = str.split(" ");

  var newStr = str.split(" ").join("-");

  console.log(str.replace("Hello", "Salut"));
  console.log("1".padStart(5, '0'));
  console.log("12".padEnd(5, '*'));
  console.log(str.indexOf("World"));
  console.log(str.indexOf("Coucou"));
  console.log(newStr);

}
