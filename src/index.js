import _ from "lodash";
import "./css/style.css";
import Img from "./img/big.png";
import printMe from './print.js';
function comment(){
  var div=document.createElement("div");
      div.innerHTML=_.join(['song','zhong','min','is','a','good','boys'],' ');
  var img=new Image(120,120);
      img.src=Img;
  var span=document.createElement("span");
      span.appendChild(img);
      div.appendChild(span);
      return div;
}
printMe();
document.body.appendChild(comment());