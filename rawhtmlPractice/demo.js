function buttonClickHandler(){
    var buttons = document.getElementsByClassName("button");// is used to access multiple things returns array 

    console.log(typeof buttons);

    // querySelector return first element only
    // var button = document.querySelector("button");
    // button.addEventListener("click", function() {
    //     console.log('button clicked');
    // });
}