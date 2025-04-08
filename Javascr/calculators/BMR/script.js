
function getbmr() {
          let age = document.getElementById("age").value ;
          let weight = document.getElementById("weight").value ;
          let height = document.getElementById("weight").value ;

          let bmr = 10 * age * weight + 6.25 * height - 5 * age +5;

          alert("your bmr is :" + bmr)
          document.write("your bmr is :" + bmr)
          console.log("your bmr is :" + bmr)
    
}




