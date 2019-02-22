var $search = $('.search');
$search.on('click',function(e){
    $search.find('input').focus();
})

var $toggleButton = $('.toggle-button');
var $sidebar = $('.sidebar');
var $catalogOfSidebar = $sidebar.find('.catalog');
var $searchOfSiderbar = $sidebar.find('.search');
var $textContentsOfMenu = $catalogOfSidebar.find('.item>div:nth-of-type(2)');
var $mask = $('.mask');
$toggleButton.on('click', function(e){
    if($sidebar.css('right') == '0px'){
        $sidebar.css("right",'-350px');
        $mask.css('opacity','0');
        $mask.css('visibility','hidden');
        $searchOfSiderbar.removeClass('active');
        for(let textContentOfMenu of $textContentsOfMenu){
            $(textContentOfMenu).removeClass('active');
        } 
    }else{
        $sidebar.css("right",0);
        $mask.css('opacity','1');
        $mask.css('visibility','visible');
        $searchOfSiderbar.addClass('active');
        for(let textContentOfMenu of $textContentsOfMenu){
            $(textContentOfMenu).addClass('active');
        } 
    }
})


$catalogOfSidebar.on('mouseover','.item',function(e){
    let a = $(this);
    $(this).addClass("active");
})
$catalogOfSidebar.on('mouseout','.item',function(e){
    $(this).removeClass("active");
})

var $menuItems = $catalogOfSidebar.find('.item');
let offset = 0;
for(let menuItem of $menuItems){
    let div = $(menuItem).find('div:nth-of-type(2)');
    div.css('transition','all 0.3s '+offset+'s');
    offset+= 0.1;
}



