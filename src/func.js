function ranBG(){
    let random = Math.floor(Math.random()*(80)+1001);
    let file='/static/images/still_unit_'+random+'31.png';
    return 'url('+file+')';
}

export default{
    ranBG
}