function operation(val)
{
   console.log(val)
    document.getElementById("display").value+=val;

}
function empty()
{
        document.getElementById("display").value="";
}
function equals()
{
  var ops=document.getElementById("display").value
  var result= eval(ops)
  document.getElementById("display").value=result
}