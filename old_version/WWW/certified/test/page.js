var projectName = '康健';

function getQueryString (paramName) {
    paramName = paramName .replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var reg = "[\\?&]"+paramName +"=([^&#]*)";
    var regex = new RegExp( reg );
    var regResults = regex.exec(window.location.href);
    if( regResults == null ) {
        return "";
    } else {
        return regResults[1];
    }
}


function sendBeacon(){
    var uid = decodeURIComponent(getQueryString('uid'));
    console.log("uid: "+uid);
    if (uid!='' || uid!=undefined){
        var beacon = 'http://sr.turn.com/r/beacon?b2=mwqdmzfQnW7X67Iv3SEVSd-eVNGaSuURH97MhGG2wkcj23J_Lv0ecYlHjzhyMinsMgaN2451UmQmQChycVMj4A&cid=&uid='+uid+'&device_sha1=&platform_sha1=&ifa=&mac_sha1=&bprice=';
        jQuery('#content').append("<img src=" + beacon + " width='0' height='0'>");
        console.log("beacon: "+beacon);

    }
}