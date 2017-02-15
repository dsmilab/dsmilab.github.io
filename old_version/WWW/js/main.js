function init(){
    if(window.location.href!=index_url){
        target_page=window.location.href.split("#")[1];
        switch(target_page){
            case 'home.html':
                clickForLink('home');
                break;
            case 'cv.html':
                clickForLink('cv');
                break;
            case 'research.html':
                clickForLink('research');
                break;
            case 'projects.html':
                clickForLink('projects');
                break;
            case 'publications.html':
                clickForLink('publications');
                clickForLink('Journal_Papers','','show_publications');
                break;
            default:
                clickForLink('home');
                break;
        }
    }else{
        clickForLink('home');
    }
}

var index_url=window.location.origin;;

function changeDoc(page_name,target_name,id){
	var xmlhttp;
	if (window.XMLHttpRequest){
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else{
	// code for IE6, IE5
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			document.getElementById(target_name).innerHTML = xmlhttp.responseText;
			if(id){
				location.hash = "#"+id;
				location = location;
			}else if(xmlhttp.readyState==4 && xmlhttp.status==404){
                location=index_url+"/Leepage/index.html";
            }
		}
	}
	xmlhttp.open("GET",page_name,true);
	xmlhttp.send();
}

function clickForLink(page,id,target){
	if(!target){
		target = "content";
	}
	//document.getElementById('move_img').src = "image/"+imgMap[page];
	changeDoc(page+".html",target,id);

}

function ReverseDisplay(id) {
        if(document.getElementById(id).style.display == "none") { 
                document.getElementById(id).style.display = "block"; 
        }
        else { 
                document.getElementById(id).style.display = "none"; 
        }
}