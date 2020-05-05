const chalk = require("chalk");
const argv = require("minimist")(process.argv.slice(2));

const lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tincidunt quam. Morbi viverra sem orci, sit amet congue neque auctor eu. Quisque enim nisl, ullamcorper ut mauris et, hendrerit auctor ligula. Aenean maximus rhoncus justo, in suscipit elit dictum eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque mattis nisl rutrum, ullamcorper elit vulputate, vestibulum libero. Pellentesque vitae leo nec erat dapibus finibus. Integer in mi quis leo rhoncus euismod sit amet sed orci. Sed cursus elementum congue. Donec gravida neque tortor, nec tempor magna convallis vitae. Praesent tincidunt rhoncus orci at hendrerit. Sed erat massa, dictum a metus a, tempor vehicula metus. Sed tellus tortor, consectetur et lacus sit amet, ornare condimentum velit. Fusce laoreet turpis vel urna lacinia, eget laoreet nunc gravida. Mauris a ex at nibh sodales molestie nec a dui. Etiam vehicula, tellus in molestie dapibus, quam arcu iaculis eros, sit amet interdum nibh neque in elit.";

const colors = [
  'blue', 'red', 'yellow'
];

const getRandomParagraph = function() {
  var words = lipsum.split(' ');
  var nbWords = 50;
  var generatedWords = [];

  for(var i = 0; i < nbWords; i++) {
    var rand = Math.floor(Math.random() * words.length);
    var word = words[rand];

    generatedWords.push(word);
  }

  return generatedWords.join(" ");
}

module.exports = function() {
  var paragraphs = argv._[0] || 2;

  if(paragraphs < 0) {
    console.error("Il faut un nombre > 0");
  }else if(paragraphs > 100) {
    console.error("Trop de paragraphes");
  }else {
    for(var i = 0; i < paragraphs; i++) {
      var rand = Math.floor(Math.random() * colors.length);
      var randomColor = colors[rand];
      console.log(chalk[randomColor](getRandomParagraph()));
    }
  }
}
