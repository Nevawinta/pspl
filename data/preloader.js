console.log('onload called');   
//this will preload the ith and after in stack view
var obj = function(pix, i)
{
    console.log('recursing number: ' + i);
    if(i < pix.length)
    {
        pix[i].onload = function()
        {
            console.log('image onload called');
            obj(pix, i + 1);
        };
        pix[i].setAttribute('src', pix[i].getAttribute('data-src'));
    }
};

var preloadBook = function(pix, i)
{
    console.log('recursing number: ' + i);
    if(i < pix.length)
    {
        var img = new Image();
        img.onload = function()
        {
            console.log('image onload called');
            preloadBook(pix, i + 1);
        };
        img.src = pix[i];
    }
}

//we check if we are in "book" view or stack view
if(unsafeWindow.pixiv.context.images)
{
    images = unsafeWindow.pixiv.context.images;
    preloadBook(images, 0);
}
else
{
    var images = document.getElementsByClassName('ui-scroll-view');
    console.log('starting jank recursion');
    obj(images, 0);
}
