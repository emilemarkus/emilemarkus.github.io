window.addEventListener("load",function() {
    
    var familtPic = document.getElementsByClassName("familyPic");
    var picTarget = document.getElementsByClassName("maPhoto");
    familtPic[0].addEventListener("mouseover",function() {
        picTarget[0].classList.add("mafamille");
    });
    familtPic[0].addEventListener("mouseout",function() {
        picTarget[0].classList.remove("mafamille");
    });
  

})