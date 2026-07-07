function toggleCard(btn){

    const detail = btn.nextElementSibling;

    if(detail.style.maxHeight){
        detail.style.maxHeight = null;
    }else{
        detail.style.maxHeight = detail.scrollHeight + "px";
    }
}