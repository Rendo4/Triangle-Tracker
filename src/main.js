import './styles.css';
import { Triangle } from './triangle.js';


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    let side1 = parseInt($("input#side1").val());
    let side2 = parseInt($("input#side2").val());
    let side3 = parseInt($("input#side3").val());
    let triangle = new Triangle(side1, side2, side3);
    let result = triangle.checkType();

    $(".triangle_type").text(`This is ${result}`);

    $("#result").show();

    event.preventDefault();
  });
});
