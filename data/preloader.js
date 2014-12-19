//this will preload the ith and after in stack view
var obj = function(pix, i)
{
    if(i < pix.length)
    {
        pix[i].addEventListener('load', function()
        {
            obj(pix, i + 1);
        });
        pix[i].setAttribute('src', pix[i].getAttribute('data-src'));
    }
};

var preloadBook = function(pix, i)
{
    if(i < pix.length)
    {
        var img = new Image();
        img.onload = function()
        {
            preloadBook(pix, i + 1);
        };
        img.src = pix[i];
        //insert it into the page hidden so the data stays cached
        img.style.display = 'none';
        document.body.appendChild(img);
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
    obj(images, 0);
}
