function ranBG(){
    let random = Math.floor(Math.random()*(80)+1001);
    return 'url(/static/images/still_unit_'+random+'31.png)';
}

export default{
    ranBG
}