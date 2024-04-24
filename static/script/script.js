window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    var navigation = document.getElementById("nav")
    var container = 80;
    if(container > currentScrollPos) {
        navigation.style.top = 'auto';
    }
    else {
        navigation.style.top = 0;
    }
    var sections = document.getElementsByTagName("section");
    var needed = 0;
    var counter = container;
    for(var i = 0; i < sections.length; ++i) {
        if(currentScrollPos >= counter) {
            needed = i + 1;
        }
        counter += sections[i].offsetHeight;
    }
    console.log(needed);
    var aList = document.getElementsByTagName('p');
    for(var i = 0; i < aList.length; ++i) {
        if(aList[i].className == "top") {
            var current = aList[i].id[1];
            if(current == needed) {
                aList[i].style.fontSize = "1.2em";
                aList[i].style.color = "black";
            }
            else {
                aList[i].style.fontSize = "initial";
                aList[i].style.color = "aliceblue";
            }
        }
    }
}

function clearResult(){
    var selects = document.getElementsByTagName("select")
    for(var i = 0; i < selects.length; ++i) {
        selects[i].selectedIndex = 0;
    }
}