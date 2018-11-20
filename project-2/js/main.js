const sctn = document.querySelector("section");
const wrrpOpen = document.querySelector(".wrapper-open");
const wrrpClose = document.querySelector(".wrapper-close");
const boxClose = document.querySelector(".box-sliders");
const openTitle = wrrpOpen.querySelector(".titles");
const closeTitle = wrrpClose.querySelector(".titles");
const imgCloseW = wrrpClose.querySelectorAll(".img");
const imgCloseB = boxClose.querySelectorAll(".img");
const titleClose = wrrpClose.querySelectorAll("h1");
const titleOpen = wrrpOpen.querySelectorAll("h1");
const btnClose = document.querySelector(".btn-close");
const btnOpen = document.querySelector(".btn-open");
const text = wrrpOpen.querySelector("p");
const menuBtn = document.querySelector(".btn-menu");
const wrrpMenu = document.querySelector(".wrapper-menu");
const numberSlids = document.querySelector(".number-sliders");
const spanNumber = numberSlids.querySelectorAll("span");

const arrText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat id porta nibh venenatis cras sed felis eget velit. Et netus et malesuada fames ac turpis egestas sed tempus. Eget nullam non nisi est sit amet facilisis. Sed enim ut sem viverra aliquet eget. Gravida dictum fusce ut placerat orci. Nunc sed id semper risus. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Porta nibh venenatis cras sed felis. Nunc sed blandit libero volutpat sed cras ornare arcu. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Consectetur lorem donec massa sapien faucibus et. Elementum nisi quis eleifend quam adipiscing vitae proin. Dui ut ornare lectus sit amet est placerat in egestas. Consequat mauris nunc congue nisi.",
    "Id ornare arcu odio ut sem nulla pharetra diam sit. Lectus mauris ultrices eros in cursus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Netus et malesuada fames ac turpis egestas. Hac habitasse platea dictumst vestibulum. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Risus viverra adipiscing at in tellus integer feugiat. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Nisi est sit amet facilisis. Turpis egestas integer eget aliquet. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Ut porttitor leo a diam. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus.",
    "Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Dignissim enim sit amet venenatis urna cursus. Morbi tempus iaculis urna id volutpat lacus laoreet. Donec et odio pellentesque diam volutpat commodo sed egestas. Quis lectus nulla at volutpat diam. Sit amet justo donec enim diam vulputate ut pharetra. Non pulvinar neque laoreet suspendisse interdum. Vitae tortor condimentum lacinia quis vel eros. Pharetra vel turpis nunc eget lorem dolor. Fermentum posuere urna nec tincidunt praesent. Sed risus ultricies tristique nulla aliquet enim tortor at. Aliquet bibendum enim facilisis gravida neque convallis a. Aliquam vestibulum morbi blandit cursus. Eu facilisis sed odio morbi quis",
    "Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Dui faucibus in ornare quam viverra orci. Morbi tempus iaculis urna id volutpat lacus. Morbi tristique senectus et netus et malesuada. Velit dignissim sodales ut eu sem integer. Elit at imperdiet dui accumsan sit amet nulla facilisi. Turpis egestas sed tempus urna. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Cras semper auctor neque vitae tempus quam pellentesque nec. Rutrum tellus pellentesque eu tincidunt tortor. Auctor neque vitae tempus quam. Ornare quam viverra orci sagittis. Enim nunc faucibus a pellentesque sit amet porttitor eget. In aliquam sem fringilla ut morbi tincidunt augue interdum velit."
];

let sldPause = true;
let menuPause = true;
let p = 0;
let startX;
let f = true;

btnOpen.addEventListener("click", () => {
    sctn.dataset.view = "open";
});
btnClose.addEventListener("click", () => {
    sctn.dataset.view = "close";
})

function setPosition(name, x) {
    for (let i = 0; i < name.length; i++) {
        if  (x == i) {
            name[i].style.top = "0";
        } else if (x < i) {
            name[i].style.top = "100%";
        } else if (x > i) {
            name[i].style.top = "-100%";
        }
    }
};

function setNumber(x) {
    spanNumber.forEach((y) => {y.classList.remove("active")});
    for (let i = 0; i < spanNumber.length; i++) {
        if (i == x){
            spanNumber[i].classList.add("active");
        }
    }
};

wrrpMenu.querySelector(".circle").style.top = menuBtn.offsetTop + "px";
    wrrpMenu.querySelector(".circle").style.left = menuBtn.offsetLeft + "px";

menuBtn.addEventListener("click", () => {
    let dataMenu = menuBtn.dataset.menu;
    wrrpMenu.querySelector(".circle").style.top = menuBtn.offsetTop + "px";
    wrrpMenu.querySelector(".circle").style.left = menuBtn.offsetLeft + "px";
    if (menuPause == true){
        menuPause = false;
        if ( dataMenu == "close") {
            menuBtn.dataset.menu = "open";
            wrrpMenu.dataset.menu = "open";
            setTimeout(() => menuPause = true, 800);
        } else {
            menuBtn.dataset.menu = "close";
            wrrpMenu.dataset.menu = "close";
            wrrpOpen.querySelectorAll("span").forEach((z) => {
                z.style.transitionDelay = "0.5s";
            });
            setTimeout(() => wrrpOpen.querySelectorAll("span").forEach((z) => {
                z.style.transitionDelay = "0s";
            }), 500);
            setTimeout(() => menuPause = true, 1000);
        }
    }
});

function slide(y) {
    sctn.dataset.number = y;
    let n = sctn.dataset.number;
    setPosition(imgCloseW, n);
    setPosition(imgCloseB, n);
    setPosition(titleClose, n);
    setPosition(titleOpen, n);
    setNumber(n);
    text.innerHTML = arrText[n];
}
slide(p);

sctn.addEventListener("wheel", (e) => {
    if (sldPause == true && sctn.dataset.view == "close") {
        sldPause = false;
        const z = p;
        if (e.deltaY < 0) {
            p -= 1;
            titleClose.forEach((x) => {x.style.transition = ".5s all"});
        } else {
            p += 1;
            titleClose.forEach((x) => {x.style.transition = ".3s .2s all"});
        };
        if (p == imgCloseW.length) {
            p = imgCloseW.length - 1;
        } else if (p < 0) {
            p = 0;
        };
        slide(p);
        setTimeout(() => {sldPause = true}, 700);
    }
});
