// function wh() {
//     var elmnt = document.getElementById("box");
//     var txt = "Height: " + elmnt.clientHeight + "px";
//     var txt2 =  "Width: " + elmnt.clientWidth + "px";
//     console.log(txt);
//     console.log(txt2);
// }
// console.log("Đây là nội dung bằng chữ được đánh bằng máy tính")
function wh() {
    var numbers = document.getElementsByClassName("box");
    for (var i = 0 ; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
