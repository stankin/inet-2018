const isShow = {val:false};
const isShow1 = {val:false};
const isShow2 = {val:false};
const isShow3 = {val: false};


function is_show(s, isShow) {
    console.log(isShow.val);
    if (!isShow.val){
        document.getElementsByClassName(s)[0].style.display ='block';
        isShow.val=true;
    } else {
        document.getElementsByClassName(s)[0].style.display ='none';
        isShow.val=false;
    }
}

