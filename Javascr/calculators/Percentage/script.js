
function getperc() {
    let totalmarks = document.getElementById("totalmarks").value ;
    let obtainedmarks = document.getElementById("obtainedmarks").value ;
    let percentage = (obtainedmarks/totalmarks)*100

    alert("your percentage is:" + percentage)
    document.write("your percentage is:" + percentage)
    console.log("your percentage is:" + percentage)
    
}