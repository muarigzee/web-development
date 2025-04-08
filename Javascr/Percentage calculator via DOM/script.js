function getperc() {
    let totalmarks = document.getElementById ("totalmarls").value
    let obtainmarks = document.getElementById("obtainmarks").value
    let result=totalmarks/obtainmarks *100
    document.write(result)
    alert(result)
    console.log(result)
    
}