// form login
var user_login = document.querySelector('#login-btn');
user_login.addEventListener('click', () => {
    document.querySelector('.login-form-container').classList.add('click');
})

var remove_bar = document.querySelector('.cross-bar');
remove_bar.onclick = () => {
    document.querySelector('.login-form-container').classList.remove('click');
}

var remove_bar = document.querySelector('.cross-bar');
remove_bar.onclick = () => {
    document.querySelector('.login-form-container').classList.remove('click');
}
// search dynamic bar
document.querySelector('#search-btn').onclick = () => {

    document.querySelector('header .search_box').classList.add('active');

}


document.querySelector('#delete_search').onclick = () => {
    document.querySelector('header .search_box').classList.remove('active');
    document.querySelector('#input_search').value = null;
}

window.onscroll = () => {
    if (scrollY > 20) {
        document.querySelector('header .search_box').classList.remove('active');
    }
}

var i = 0;


setInterval(() => {
    i++;
    function Typewriting() {
        var str = 'Start Your Day With Sweetness';
        document.querySelector('.auto-writng').innerHTML = str.slice(0, i);
        if (i > str.length) {
            i = 10;
        }

    }
    Typewriting();
}, 300);


document.querySelector('#card_plus').onclick = () => {
    document.querySelector('.add_to_card_container').classList.add('active');
}

document.querySelector('.delete').onclick = () => {
    document.querySelector('.add_to_card_container').classList.remove('active');

}

// document.querySelector("#add_btn").onclick = () => {
//     document.querySelector('.add_to_card_container').classList.remove('active');

// }
// document.querySelector("#add_btn").onclick = () => {
//     var value_data = document.querySelector('.add_to_card_container .input').value;
//     document.querySelector('header .count').innerHTML = value_data;
//     console.log(value_data)
// }

// var count=0;
// document.querySelector("#add_btn").onclick = () => {
//     count++;
//     document.querySelector('header .count').innerHTML = count;
    
// }




var p=0;  //index number

var birthday=['lemon.jpg','coco.jpg','im1.jpg','imm1.jpg'];  //Length 4(1,2,3,4). Index num hbe 0,1,2,3
var btn=document.querySelector('#btn1').onclick=()=>{
    document.getElementById('img').src=`${birthday[p]}`;
    p++;

    if(p>birthday.length-1){
        p=0;
      
    }

    console.log(birthday.length);
}



function myFunction(){
    document.querySelector('header .navigate').classList.add('active');
    console.log('I,m clicked');
}