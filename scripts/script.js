function next(id){
    var currentPage = document.getElementById(`page-${id}`);
    var nextPage = document.getElementById(`page-${parseInt(id)+1}`);
    currentPage.classList.add("hidden");
    nextPage.classList.remove("hidden");

    if(parseInt(id) === 1){
        $(function(){
            $("#coupon_list").load("../coupon.html"); 
          });
    }
}

function back(id){
    var currentPage = document.getElementById(`page-${id}`);
    var previousPage = document.getElementById(`page-${parseInt(id) - 1}`);
    currentPage.classList.add("hidden");
    previousPage.classList.remove("hidden")
    if(parseInt(id) - 1 === 2){
        $(function(){
            $("#coupon_list").load("../coupon.html"); 
        });
    }
}
