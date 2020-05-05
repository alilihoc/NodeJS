module.exports = () => {

  var now = Date.now();
  var time = Date.parse("2019-01-01 20:50:15");
  var date = new Date(time);

  console.log("annee", date.getFullYear());
  console.log("mois", date.getMonth() + 1); // commence à 0
  console.log("jour", date.getDate());
  console.log("heures", date.getHours());
  console.log("minutes",date.getMinutes());
  console.log("secondes",date.getSeconds());
  console.log("1".padStart(5, '0'));
  console.log("12".padEnd(5, '*'));

}
