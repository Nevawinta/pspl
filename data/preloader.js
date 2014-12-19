console.log('onload called');   
var obj = function(pix, i)
{
    console.log('recursing number: ' + i);
    if(i != pix.length)
    {
        pix[i].onload = function()
        {
            console.log('image onload called');
            obj(pix, i + 1);
        }
    }
    pix[i].setAttribute('src', pix[i].getAttribute('data-src'));
}

var images = document.getElementsByClassName('ui-scroll-view');
console.log('starting jank recursion');
obj(images, 0);
/*
for(var i = 0; i < pix.length; i++)
{
    var x = pix[i];
    console.log('ng');
    //x.setAttribute('src', x.getAttribute('data-src'));
}*/
