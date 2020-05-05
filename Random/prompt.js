const readline = require('readline');

const promiseQuestion = function(question) {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question(question, (reponse) => {
      rl.close();
      resolve(reponse);
    });
  });
}

module.exports = async () => {

  /*promiseQuestion("Comment ça va?").then((response) => {
    console.log(response);
  });*/

  try {
    var response1 = await promiseQuestion("Comment ça va?");
    var response2 = await promiseQuestion("Sûr?");
    var response3 = await promiseQuestion("Sûr Sûr?");

    console.log(response1);
    console.log(response2);
    console.log(response3);
  }catch(err) {
    console.error(err);
  }
  /*const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });



  rl.question("Comment ça va?\n", (reponse) => {
    console.log(reponse);

    rl.question("T'es sur?", (reponse2) => {
      console.log(reponse2);
      rl.close();
    });
  });*/

  //console.log("Prompt");
};
