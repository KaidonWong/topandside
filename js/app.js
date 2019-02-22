var $search = $('.search');
$search.on('click', function (e) {
    $search.find('input').focus();
})
var $top = $('.top');
var $toggleButton = $('.toggle-button');
var $sidebar = $('.sidebar');
var $catalogOfSidebar = $sidebar.find('.catalog');
var $searchOfSiderbar = $sidebar.find('.search');
var $textContentsOfMenu = $catalogOfSidebar.find('.item>div:nth-of-type(2)');
var $mask = $('.mask');
$toggleButton.on('click', function (e) {
    if ($sidebar.css('right') == '0px') {
        //折叠起来
        $sidebar.css("right", '-350px');
        $mask.css('opacity', '0');
        $mask.css('visibility', 'hidden');
        $searchOfSiderbar.removeClass('active');
        for (let textContentOfMenu of $textContentsOfMenu) {
            $(textContentOfMenu).removeClass('active');
        }
    } else {
        //展开起来
        $sidebar.css("right", 0);
        $mask.css('opacity', '1');
        $mask.css('visibility', 'visible');
        $searchOfSiderbar.addClass('active');
        for (let textContentOfMenu of $textContentsOfMenu) {
            $(textContentOfMenu).addClass('active');
        }
    }
})
$mask.on('click', function (e) {
    if ($sidebar.css('right') == '0px') {
        //折叠起来
        $sidebar.css("right", '-350px');
        $mask.css('opacity', '0');
        $mask.css('visibility', 'hidden');
        $searchOfSiderbar.removeClass('active');
        for (let textContentOfMenu of $textContentsOfMenu) {
            $(textContentOfMenu).removeClass('active');
        }
    }
})


$catalogOfSidebar.on('mouseover', '.item', function (e) {
    let a = $(this);
    $(this).addClass("active");
})
$catalogOfSidebar.on('mouseout', '.item', function (e) {
    $(this).removeClass("active");
})

var $menuItems = $catalogOfSidebar.find('.item');
let offset = 0;
for (let menuItem of $menuItems) {
    let div = $(menuItem).find('div:nth-of-type(2)');
    div.css('transition', 'all 0.3s ' + offset + 's');
    offset += 0.1;
}

var $sections = $('.section');
var sectionHeight;
for (let section of $sections) {
    let sectionWidth = $(section).css('width');
    sectionWidth = sectionWidth.substr(0, sectionWidth.lastIndexOf('px'));
    sectionHeight = sectionWidth / 1920 * 1080;
    $(section).css('height', sectionHeight);
}

var topExpanded = false;
$(window).on('scroll', function () {
    let scrollTop = $(window).scrollTop();
    let shouldExpand = true;
    if (scrollTop < sectionHeight) {
        shouldExpand = false;
    }
    if (shouldExpand == topExpanded) {
        return;
    }
    topExpanded = shouldExpand;
    let $background = $top.find('.background');
    if (shouldExpand) {
        $background.addClass('expand');
    } else {
        $background.removeClass('expand');
    }
})

