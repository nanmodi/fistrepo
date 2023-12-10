function change(statu)
{
  let body=document.getElementsByClassName("b");
if(statu)
{
 body[0].style.backgroundColor="black";
 statu=false;
}
else
{
  body[0].style.backgroundColor="white";
  statu=true;
}
return statu;
}
let elem=document.querySelector(".click");
console.log(elem);
let statu=true;

elem.addEventListener("click",function()
{
  statu=change(statu);
});

