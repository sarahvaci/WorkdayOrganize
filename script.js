
//Current date and time is displayed in the header//

var dt = new Date();
document.getElementById('date-time').innerHTML=dt;


//Save input data to localStorage on button click and loads saved data//

function mySave() {
    var myContent = document.getElementById("myTextArea").value;
    localStorage.setItem("myContent", myContent);
  }
  function myLoad() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("myTextArea").value = myContent;
  }
