console.log("connected")
var dateholder = document.getElementById("currentDay")
console.log(moment().format("dddd, MMMM Do"))
dateholder.innerText = moment().format("dddd, MMMM Do")
var alltextcont = document.querySelectorAll("textarea")

console.log ("alltextcont")[0]
console.log ("alltextcont")[9]
console.log ("alltextcont")[10]
console.log ("alltextcont")[11]
console.log ("alltextcont")[12]
console.log ("alltextcont")[1]
console.log ("alltextcont")[2]
console.log ("alltextcont")[3]
console.log ("alltextcont")[4]
console.log ("alltextcont")[5] 

all
console.log(moment().hour())
function check_time(){
    // select all time classes
    let nodes = document.querySelectorAll('.time');
    for (let node of nodes ) {
      // should get the time using Date(), but for this example a fixed hour always works ;)
      const current_time = 12; 
      // get the time from a data-attribute, don't use an id for this!
      const node_time = parseInt(node.getAttribute('data-time'));
      // add a relevant class, much easier to maintain/update than styling elements inside your JS
      if(current_time === node_time )
        node.classList.add('now');
      else if(current_time > node_time )
        node.classList.add('past');
      else if(current_time < node_time )
        node.classList.add('future');
    }
  }
  
  // use window.setTimeout(...) to check frequently to keep up to date. I just called the function once instead of periodically.
  check_time();
  .now{
    color: green;
  }
  .past{
    color: red;
  }
  .future{
    color: grey;
  }
  <div class = "time" data-time="11" > 10am </div>
  <div class = "time" data-time="12" > 11am </div>
  <div class = "time" data-time="13" > 12am </div>
  