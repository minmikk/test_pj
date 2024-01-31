function click_menu(element) {
    var before = document.querySelector(".mobile_menu.active");

    if (before && before !== element) {
        before.nextElementSibling.style.maxHeight = null;
        before.classList.remove("active");
    }

    element.classList.toggle("active");

    var mobile_sub_wrap = element.nextElementSibling;
    if (mobile_sub_wrap && mobile_sub_wrap.style.maxHeight != 0) {
        mobile_sub_wrap.style.maxHeight = null;
    } else if (mobile_sub_wrap) {
        mobile_sub_wrap.style.maxHeight = mobile_sub_wrap.scrollHeight + "px";
    }
}

document.addEventListener('click', function (e) {
    const mobileMenu = document.querySelector('.mobile_menu_wrap');
    if (!mobileMenu.contains(e.target)) {
        const activeButton = document.querySelector('.mobile_menu.active');
        if (activeButton) {
            activeButton.nextElementSibling.style.maxHeight = null;
            activeButton.classList.remove('active');
        }
    }
});

const mobileSubMenus = document.querySelectorAll('.mobile_sub_wrap div');
mobileSubMenus.forEach(subMenu => {
    subMenu.addEventListener('click', function () {
        const activeButton = document.querySelector('.mobile_menu.active');
        if (activeButton) {
            activeButton.nextElementSibling.style.maxHeight = null;
            activeButton.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

window.addEventListener('scroll', function () {
    // 현재 스크롤 위치 확인
    var scrollPosition = window.scrollY;

    // 스크롤 위치가 200px 이상이면 탑 버튼 표시, 그렇지 않으면 숨김
    if (scrollPosition > 200) {
        document.getElementById('topBtn').style.display = 'block';
    } else {
        document.getElementById('topBtn').style.display = 'none';
    }
});

// 탑 버튼 클릭 시 페이지 상단으로 스크롤
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤 적용
    });
}