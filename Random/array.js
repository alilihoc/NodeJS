module.exports = function() {
  /*let array = [
    "str3", "str1", "str2", 120, 15.5
  ];*/

  let array = [
    {
      id: 1,
      name: "name1"
    },
    {
      id: 3,
      name: "name3"
    },
    {
      id: 2,
      name: "name2"
    }
  ];

  for(var i = 0; i < array.length; i++) {
    var obj = array[i];

    //console.log(obj);
  }

  for(var obj of array) {
    for(var index in obj) {
      console.log(index, obj[index]);
    }
  }




  /*var index = 0;
  var nbToDelete = 1;

  array.splice(index, nbToDelete, "salut");

  var obj = array[1];

  var index = array.indexOf(obj);

  array.splice(index, 1);

  console.log(array.length);*/

  /*array.sort(function(a, b) {
    if(a.id < b.id) return -1;
    if(a.id > b.id) return 1;
    return 0;
  });

  console.log(array);*/

  /*array.push('a ajouter');

  var str = array.join("-");

  var traitement = function(data) {
    console.log(data);
  };*/

  //array.map(traitement);

  /*array.map(function(e) {
    console.log(e);
  });*/

  //array.sort();



  //console.log(array);
  //console.log(str);
}
