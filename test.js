

const show_btn = document.querySelectorAll('.color-section button');
const bgc_img = document.querySelectorAll('#bgc-img img');
const switch_img = document.querySelectorAll('.color-section img');

console.log('test')

for (let i = 0; i < bgc_img.length; i++) {
    // console.log(bgc_img[i].src);
    bgc_img[i].addEventListener('click', changeBgc, true);
}

for (let i = 0; i < show_btn.length; i++) {
    show_btn[i].addEventListener('click', swichSection, true);
}
for (let i = 0; i < switch_img.length; i++) {
    // 上面宣告抓到 class=".color-section" 這個元素底下所有的 switch_img ，用迴圈全部監聽
    switch_img[i].addEventListener('click', switchImg, true);
}

function swichSection(e) {
    let white_section = document.getElementById('white-section');
    let black_section = document.getElementById('black-section');
    let initial = 'white-btn';
    // console.log(this.getAttribute('id'));
    if (this.getAttribute('id') == initial) {
        white_section.style.display = 'block';
        black_section.style.display = 'none';
    } else {
        black_section.style.display = 'block';
        white_section.style.display = 'none';
    }
}

function switchImg(e) {
    // 宣告 src 為參數的src(參數的網址)
    let src = this.src;
    // 在位置-4的地方， '.png' 的前面插入 '-大'
    let switch_file = src.replace("-大", -4, src.length);
    // 在big-img這個元素，把src設定成switch_file
    document.getElementById('big-img').setAttribute('src', switch_file);
}

function changeBgc(e) {

    let show_bgc = document.getElementById('img-section');
    show_bgc.style.backgroundImage = `url(${this.src})`;
    // console.log(this.src)
    event.stopPropagation();
}