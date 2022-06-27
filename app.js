/* 
1.이미지 썸네일을 클릭하면 
- > light box에 해당 이미지 url 변경
- > 팝업창 display
2.닫기 버튼 클릭시 - >팝업창 종료 */

const img = document.querySelectorAll('#gallery li');
// 이미지요소에 이벤트 등록 --let으로 등록해야함(var 안됨) 
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function () {
        // 이미지 탐색후 url값 가져오기 | src는 getAttribute('src')와 같음 : 이미지태그는 줄여 가능 
        let imgurl = img[i].children[0].src;
        console.log(imgurl)
        // 이미지 클릭시 라이트박스로 표시 (크게보임)
        const lightbox = document.getElementById('lightbox');
        // lightbox.setAttribute('class', 'on');
        lightbox.classList.add('on');

        //클릭한 이미지 표시 
        const lightboxImg = document.querySelector('#lightbox .box img');
        lightboxImg.setAttribute('src', imgurl);
    });

    // console.log(img[i].children[0]);
}


/*
닫는거
- 닫기 버튼을 누르면 닫힘 
*/
    //이벤트를 새로 만듬 
    const closebtn = document.getElementById('closebtn');

    closebtn.addEventListener('click', function () {
    const lightbox = document.querySelector('#lightbox');
    lightbox.classList.remove('on');
});

