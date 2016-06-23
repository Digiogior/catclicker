var catImg = document.getElementById("cat-img");
var resetBtn = document.getElementById("reset");
var counter = document.getElementById("timer");
var count = 0;
catImg.addEventListener("click", function(){
    count += 1;
    counter.firstChild.nodeValue = count;
}, false);
resetBtn.addEventListener("click", function(){
    count = 0;
    counter.firstChild.nodeValue = count;
});
