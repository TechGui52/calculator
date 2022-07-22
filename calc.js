
//function that display value
function dis(val)
{
document.getElementById("result").value+=val
}
function clearscreen()
{
document.getElementById("result").value=""
}
function calculate()
{
    let x=document.getElementById("result").value 
    let y=eval(x)
    document.getElementById("result").value=y
}
