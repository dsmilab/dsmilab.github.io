var projectName = 'Oral-B母親節Ecard';
var activityId = '${activityId}';
var imei = '${imei}'
var lat,lon;


jQuery(function() {
    window.scrollTo(0,1);
    var PB = Math.ceil(document.documentElement.clientHeight*0.15);
    console.log(PB);
    document.getElementById('content').style.paddingBottom = PB.toString()+"px";

    setFunction(redirBack, "home", "index.html", "回首頁");
    setFunction(redirBack, "again", "index.html", "再拍一次");
    setFunction(redirBack, "note", "note.html", "活動辦法");
    setFunction(redirOut, "goFB", "https://www.facebook.com/oralb.tw", "FB粉絲團");

	//setFunction(redirOut, "getTicket", "http://tw.adon.vpon.com/xpon/activity.action?activityId=8a8081824476180601451c7819b52b0c&path=upload.html&imei=${userData.imei}", "立即獲得電影票");
    //setFunction(redirOut, "upload", "http://tw.adon.vpon.com/xpon/activity.action?activityId=8a8081824476180601451c7819b52b0c&path=upload.html&imei=${userData.imei}", "menu_上傳發票");
    //setFunction(redirBack, "home", "index.html", "回首頁");
	//setFunction(facebookShare,"fb", "http://tw.adon.vpon.com/xpon/activity/8a80818240f28fdf014125c1e9b809f2/fb.html", "FB分享");
	//setFunction(lineShareTxt,"line", "全球首創lightbulb鑽石光粉餅 隨身補光，全日超亮零暗沉 立即體驗植村秀 http://goo.gl/BU2ZTt");
    //setFunction(upload,"upload");
	setFunction(submitData,"send");
});


function checkInput() {
  var cellNo = jQuery.trim(jQuery("#phone").val()); 
  var name = jQuery.trim(jQuery("#name").val());
  //var address = jQuery.trim(jQuery("#address").val());
  if (checkName(name) && checkCellNo(cellNo) && checkAgree()) {
    //  alert("ok");
    return true;    
  }

  return false;
}


function submitData() {
    var cellNo = jQuery.trim(jQuery("#phone").val());
    var name = jQuery.trim(jQuery("#name").val());
    var imgNo = decodeURIComponent(getQueryString('rr'));
    //var mail = jQuery.trim(jQuery("#mail").val());
    if (checkInput()) {
        jQuery.post(
            '/xpon/user_submit_data_unique.action'
            ,{userDataId:'${userData.id}'
                ,url:'/activity/${userData.id}/form.html'
                ,'data.name':name
                ,'data.phoneNo':cellNo
                ,'data.from':'${userData.imei}'
                ,'data.No':imgNo+'.jpg'
            }
            ,function(data) {
                if (data == 0) {
                    //redirectBack(projectName + '_送出','gift.html');
                    var URL = 'http://tw.adon.vpon.com/xpon/activity/${userData.id}/index.html';
                    jQuery.get('/xpon/redirect.action?alias='+ encodeURIComponent('Oral-B母親節Ecard_送出') +'&url='+encodeURIComponent(URL));
                    document.getElementById('main3').style.display="none";
                    document.getElementById('main4').style.display="block";
                    alert("資料已送出，感謝您的熱情參與，祝您中獎~");
                    //redirectOut(projectName + '_送出並分享至FB', "http://m.facebook.com/sharer.php?u=" + "http://www.youtube.com/embed/rLDlxtV5p8M");
                } else if(data == 2) {
                    alert('電話號碼已重複');
                }else {
                }
            });
    }
}

//導到外部網頁或內部
// id = tag's id
// url = url
// alias = alias
function setFunction(func, id, url, alias, latlon, address, shopName){
    var tag = jQuery("#"+id);
    if (tag.prop("tagName") == "A") {
	   	tag.removeAttr("href");
    } else {
      tag.parent().removeAttr("href");
    }

    var param = {};
    switch (func) {
        case redirBack:
        case redirOut:
          	param = {"alias":projectName + "_" + alias, "url":url};
          	break;
        case facebookShare:
          	param = {"alias":projectName , "url":url};
          	break;
        case dialNO:
        case sendSMS:
            param = {"alias":projectName + ((alias == "") ? "" : "_" + alias) , "phoneNo": url};
          	break;
        case lineShareTxt:
          	param = {"alias":projectName, "text": url};
          	break;
        case redirBackLatLon:
            param = {"alias":projectName + "_" + alias, "lat": latlon.lat, "lon": latlon.lon, "activityId": activityId, "imei": imei, "path": url}
            break;
        case openGMapByAddress:
            param = {"projectName": projectName, "shopName":shopName, "address":address}
            break;
        default:
			    
        	break;
    }
      tag.on("click", param, func);
}

function checkName(name) {
   if (name == '') {
     alert('請輸入姓名');
     return false;    
   }  
   return true;
}


function checkCellNo(cellNo) {
   if (cellNo == '' || cellNo.substring(0,2) != '09' || cellNo.length != 10) {
     alert('手機號碼格式不正確');
     return false;    
   } else {
     return true;
   }
}

function checkAgree() {
  if (!jQuery("#agree").prop("checked")) {
    alert('請勾選同意提供資料');
    return false;
  }
  return true;
}

function checkAddress(address){
    if (address == '') {
        alert('請輸入地址');
        return false;
    }
    return true;
}

function checkVote(){ 
	//console.log(document.radioForm.vote[0].checked);
	//console.log(document.radioForm.vote[1].checked);
    if (document.radioForm.vote[0].checked || document.radioForm.vote[1].checked){
        return true;
    } else{
		alert('請先投票才能參加抽獎唷');
        return false;
    }
}

//auto replace meta to fit screen
document.addEventListener('DOMContentLoaded',function(){

      var meta = document.createElement('meta');
      meta.name = 'viewport';
      var navString = navigator.userAgent.toLowerCase();

      //alert(navString);
      if (navString.indexOf('android') > -1 && navString.indexOf('chrome') > -1) {
        //alert('android chrome');
        meta.content = 'width=640, target-densitydpi=device-dpi, maximum-scale=2.0, user-scalable=yes';
        document.getElementById('device').value = 'android';
      } else if (navString.indexOf('ipad') > -1) {
        //alert('ipad');
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=0.5, user-scalable=yes';
        document.getElementById('device').value = 'ipad';
	  } else if (navString.indexOf('iphone') > -1) {
        //alert('iphone');
        meta.content = 'width=device-width; initial-scale=0.5; maximum-scale=1.0; minimum-scale=0.5; user-scalable=yes;';
        document.getElementById('device').value = 'iphone';
	  } else {
        //alert('not android chrome');
        meta.content = 'width=device-width; initial-scale=0.5; maximum-scale=1.0; minimum-scale=0.5; user-scalable=yes;';
        document.getElementById('device').value = 'other';
	  }

      document.getElementsByTagName('head')[0].replaceChild(meta, document.getElementsByName('viewport')[0]);

},false);


//拆解URL
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

function checkSelected() {
    // ga('send', 'event', 'button', 'click', '開啟相機', {'nonInteraction': 1});

    if (document.getElementById("inputImg").value != '') {
        var file = this.files[0];
        console.log("file.type:"+file.type);
        console.log("file.size:"+file.size/1024);

        //alert(document.getElementById("inputImg").value);
        if(!/image\/(jpg|jpeg|JPG|JPEG)/.test(file.type)){
            jQuery.blockUI({css: { width: '90%', top: '40%', left: '5%', opacity:0.9}, message: '<p style="font-size: 26px">檔案副檔名需為jpg之圖片，請重新上傳</p>' });
            setTimeout("jQuery.unblockUI()", 4000 );
            //alert("檔案副檔名需為jpg之圖片，請重新上傳");
            document.getElementById("inputImg").value = '';
            //return false;
        }else if(file.size/1024>2999){
            console.log(file.size/1024);
            jQuery.blockUI({css: { width: '90%', top: '40%', left: '5%', opacity:0.9}, message: '<p style="font-size: 26px">您的檔案大小已超過上傳上限，請重新上傳</p>' });
            setTimeout("jQuery.unblockUI()", 4000 );
            //alert("您的檔案大小已超過上傳上限，請重新上傳");
            document.getElementById("inputImg").value = '';
            //return false;
        }else{
            jQuery.get('/xpon/redirect.action?alias='+ encodeURIComponent("Oral-B母親節Ecard_開啟相機") +'&url='+encodeURIComponent("http://tw.adon.vpon.com/xpon/activity/${userData.id}/index.html"));
            //jQuery.blockUI({css: { width: '90%', top: '40%', left: '5%', opacity:0.9}, message: '<p style="font-size: 26px">相片讀取中，請稍候...</p>' });
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e){
			
				var cameraPhoto = document.getElementById("cameraPhoto");
				cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
				
                var goalWidth ="227";
                var goalHeight ="301";
                //辨別相片旋轉
                var bin = atob(this.result.split(',')[1]);
                var exif = EXIF.readFromBinaryFile(new BinaryFile(bin));
                alert(exif.Orientation);
				//alert('W:'+exif.JPEGInterchangeFormatLength+', H:'+exif.MakerNote+', DPI:'+exif.FNumber);
	
                var rotated = false;
				//alert(document.getElementById('device').value);
				if (document.getElementById('device').value == 'iphone'){

                    switch (exif.Orientation) {
                        case 8:
                            //cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
                            //jQuery(this).addClass('rotate-90');
                            jQuery('#selPhoto').css('transform-origin', "0 0");
                            jQuery('#selPhoto').css('height',goalHeight+'px');
                            jQuery('#selPhoto').css('width',goalWidth+'px');
                            document.getElementById( "orientation" ).value = "28";
                            console.log("28");
                            //alert("28")
                            break;
                        case 3:
                            //cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
                            //jQuery(this).addClass('rotate180');
                            jQuery('#selPhoto').css('transform-origin', "0 0");
                            jQuery('#selPhoto').css('height',goalHeight+'px');
                            jQuery('#selPhoto').css('width',goalWidth+'px');
                            document.getElementById( "orientation" ).value = "23";
                            console.log("23");
                            //alert("23")
                            break;
                        case 6:
                            //cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
                            //jQuery(this).addClass('rotate90');
                            jQuery('#selPhoto').css('transform-origin', "0 0");
                            jQuery('#selPhoto').css('height',goalHeight+'px');
                            jQuery('#selPhoto').css('width',goalWidth+'px');
                            document.getElementById( "orientation" ).value = "26";
                            console.log("26");
                            //alert("26")

                            break;
                        default:
                            //cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
                            jQuery('#selPhoto').css('transform-origin', "0 0");
                            jQuery('#selPhoto').css('height',goalHeight+'px');
                            jQuery('#selPhoto').css('width',goalWidth+'px');
                            document.getElementById( "orientation" ).value = "1";
                            console.log("21");
                            //alert("21");
                            break;
                    }

				}else{
					switch (exif.Orientation) {
                    case 8:
                        //cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
                        //jQuery(this).addClass('rotate-90');
                        jQuery('#selPhoto').css('transform-origin', "0 0");
                        jQuery('#selPhoto').css('transform', "rotate(-90deg) translateX(-"+goalHeight+"px)");
                        jQuery('#selPhoto').css('height',goalWidth+'px');
                        jQuery('#selPhoto').css('width',goalHeight+'px');
                        document.getElementById( "orientation" ).value = "8";
                        rotated = true;
                        console.log("8");						
			            //alert("8")
                        break;
                    case 3:
                        //cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
                        //jQuery(this).addClass('rotate180');
                        jQuery('#selPhoto').css('transform-origin', "0 0");
                        jQuery('#selPhoto').css('transform', "rotate(180deg) translateX(-"+goalHeight+"px) translateY(-"+goalWidth+"px)");
                        jQuery('#selPhoto').css('height',goalHeight+'px');
                        jQuery('#selPhoto').css('width',goalWidth+'px');
                        document.getElementById( "orientation" ).value = "3";
                        console.log("3");						
			            //alert("3")
                        break;
                    case 6:
                        //cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
                        //jQuery(this).addClass('rotate90');
                        jQuery('#selPhoto').css('transform-origin', "0 0");
                        jQuery('#selPhoto').css('transform', "rotate(90deg) translateY(-"+goalWidth+"px)");
                        jQuery('#selPhoto').css('height',goalWidth+'px');
                        jQuery('#selPhoto').css('width',goalHeight+'px');
                        document.getElementById( "orientation" ).value = "6";
                        console.log("6");
			            //alert("6")
                        rotated = true;					
                        break;  
                    default:  
						//cameraPhoto.innerHTML = '<img id="selPhoto" src="'+this.result+'" alt=""/>';
						jQuery('#selPhoto').css('transform-origin', "0 0"); 
                        jQuery('#selPhoto').css('height',goalHeight+'px');
                        jQuery('#selPhoto').css('width',goalWidth+'px');
						document.getElementById( "orientation" ).value = "1";
                        console.log("1");						
			            //alert("1");
                        break;
					}
					
				}
				document.getElementById('btn').style.display = 'none';
				document.getElementById('next').style.display = 'block';
				jQuery.unblockUI();
                
            }

        }
    }else{
        return false;

    }
}

function toPic1(){

		jQuery.get('/xpon/redirect.action?alias='+ encodeURIComponent("Oral-B母親節Ecard_下一步") +'&url='+encodeURIComponent("http://tw.adon.vpon.com/xpon/activity/${userData.id}/index.html"));
        //jQuery.blockUI({css: { width: '90%', top: '40%', left: '5%', opacity:0.9}, message: '<p style="font-size: 26px">相片合成中，請稍候...</p>' });

		var goalWidth =480;
		var goalHeight =640;

		var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");

		var imageUp = document.getElementById('selFramePic');
		var imageDown = document.getElementById('selPhoto');
		
		
		if (document.getElementById( "orientation" ).value == "8"){
			ctx.rotate(-90 * Math.PI / 180);
			ctx.drawImage(imageDown, -goalHeight, 0, goalHeight, goalWidth);
			ctx.rotate(90 * Math.PI / 180);
			ctx.drawImage(imageUp, 0, 0, goalWidth, goalHeight);
		}else if (document.getElementById( "orientation" ).value == "3"){
			ctx.rotate(180 * Math.PI / 180);
			ctx.drawImage(imageDown, -goalWidth, -goalHeight, goalWidth, goalHeight);
			ctx.rotate(-180 * Math.PI / 180);
			ctx.drawImage(imageUp, 0, 0, goalWidth, goalHeight);
		}else if (document.getElementById( "orientation" ).value == "6"){
			ctx.rotate(90 * Math.PI / 180);
			ctx.drawImage(imageDown, 0, -goalWidth, goalHeight, goalWidth);
			ctx.rotate(-90 * Math.PI / 180);
			ctx.drawImage(imageUp, 0, 0, goalWidth, goalHeight);
		}else if (document.getElementById( "orientation" ).value == "26"){
			ctx.rotate(90 * Math.PI / 180);
			ctx.drawImage(imageDown, 0, -360, goalHeight, goalWidth);
			ctx.rotate(-90 * Math.PI / 180);
			ctx.drawImage(imageUp, 0, 0, goalWidth, goalHeight);
		}else if (document.getElementById( "orientation" ).value == "21"){
            ctx.drawImage(imageDown, 0, 0, goalWidth, goalHeight);
            ctx.drawImage(imageUp, 0, 0, goalWidth, goalHeight);
        }else{
			ctx.drawImage(imageDown, 0, 0, goalWidth, goalHeight);
			ctx.drawImage(imageUp, 0, 0, goalWidth, goalHeight);
		}



		var newImg = document.getElementById('newImg');
		newImg.src = c.toDataURL();

		var picTxt = document.getElementById('picTxt');
		picTxt.value = c.toDataURL();

		//setTimeout("jQuery('#CompleteForm').submit()", 3000 );
		//setTimeout(postImage, 5000 );


}





