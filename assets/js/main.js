$(function(){
  constructHomePage();

  $('.nav-page').on("click",function(){
    let page =  $(this).attr("id");
    switch (page) {
      case 'home-page':
        constructHomePage();
      break;
      case 'cv-page':
        console.log('this is cv-page');
      break;
      case 'research-page':
        console.log('this is research-page');
      break;
      case 'projects-page':
        console.log('this is projects-page');
      break;
      case 'publications-page':
        console.log('this is publications-page');
      break;
      default:
        constructHomePage();
    }
  });
});

function constructHomePage () {
  let homePageContent = 
    '<h1>Yuh-Jye Lee<sub>Professor at NCTU</sub></h1>  \
  <div class="info"> \
  <ul class="title"> \
  <li>email</li> \
  <li>telephone</li> \
  <li>fax</li> \
  </ul> \
  <ul> \
  <li>yuh-jye@mail.ntust.edu.tw</li> \
  <li>+886-2-2730-1066</li> \
  <li>+886-2-2730-1081</li> \
  </ul> \
  </div>';
  $('#content').append(homePageContent);  
}
