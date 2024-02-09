const a =document.querySelector('.slider');
var counter = 0;
//console.log(a);
a.forEach(
    (slider,index) => 
    {
        slider.style.left = `${index*100}`
}
)