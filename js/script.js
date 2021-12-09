$(() => {
    // Page Loading
    $.getScript('js/lang.js');
    $('header').load('header.html');
    $('footer').load('footer.html', () => {
        // Language
        for (var i=0; i<lang_list.length; i++) if (language==lang_list[i]) {
            setLanguage(lang_list[i]);
            break;
        }
        if (i==lang_list.length) setLanguage(lang_list[0]);
    });
    // Data
    InitEducationData();
    InitJobData();
    InitInternData();
    InitProgramData();
    InitEditingData();
    InitLanguagesData();
    InitProfileData();
    // Get Location
    let path = window.location.hash.substr(1);
    if (path.search('About') != -1) InitChange(1);
    else if (path.search('Profile') != -1) InitChange(2);
    else if (path.search('Skill') != -1) InitChange(3);
    else InitChange(0);
});

$('.fa.fa-chevron-down.fa-5x').click(e => {
    $('html, body').animate({
        scrollTop: $( $.attr(e.currentTarget, 'href') ).offset().top
    }, 500);
    return false;
});

let InitChange = pageNumber => {
    let page;
    if ($(`.navbar-collapse`).hasClass(`show`)) $(`.navbar-toggler`).click();
    document.getElementById('index').classList.add('d-none');
    document.getElementById('about').classList.add('d-none');
    document.getElementById('profile').classList.add('d-none');
    document.getElementById('skill').classList.add('d-none');
    if (pageNumber == 0) {
        page = 'Index';
        document.getElementById('index').classList.remove('d-none');
    }
    if (pageNumber == 1) {
        page = 'About';
        document.getElementById('about').classList.remove('d-none');
    }
    if (pageNumber == 2) {
        page = 'Profile';
        document.getElementById('profile').classList.remove('d-none');
    }
    if (pageNumber == 3) {
        page = 'Skill';
        document.getElementById('skill').classList.remove('d-none');
    }
    setTimeout(() => (location.href = '#' + page), 10);
}

$('.card-flip').click(e => {
    if (isMobileBool) $(e.currentTarget).toggleClass('hover');
});
$('.skill-box').click(e => {
    if (isMobileBool) $(e.currentTarget).toggleClass('hover');
});
let SearchClick = () => {
    if (isMobileBool) $('#search').toggleClass('hover');
};
let detectmob = () => {
    if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) return true;
    else return false;
}
let isMobileBool = detectmob();

let SearchClear = () => $('input[type=text]').val('');