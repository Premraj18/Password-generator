let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let passbox = document.getElementById("passbox");
let btn = document.querySelector(".btn");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbols");
let copyIcon = document.getElementById("copyIcon");

//howing input value
slidervalue.textContent= inputslider.value;
inputslider.addEventListener('input', () =>{
    slidervalue.textContent= inputslider.value;
})

btn.addEventListener('click', () => {
    passbox.value = genpassword();
})

let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrsstuvwxyz";
let allnumber = "0122456789";
let allsymbol = "~!@#$%^&*";
const genpassword = () => {
    let genepassword = " ";
    var allchars = " ";

    allchars += lowercase.checked ? lowerchars: " ";
    allchars += uppercase.checked ? upperchars: " ";
    allchars += number.checked ? allnumber: " ";
    allchars += symbol.checked ? allsymbol: " ";

    if(allchars == " " || allchars.length == 0){
        
        return genepassword;
    }
    // console.log(allchars);
    let i = 1;
    while(i<=inputslider.value){
        genepassword += allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    }
    return genepassword;
}

copyIcon.addEventListener('click', ()=>{
    if(passbox.value != "" || passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});