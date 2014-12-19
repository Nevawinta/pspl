var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod(
{
    include: 'http://www.pixiv.net/member_illust.php?mode=manga*',
    contentScriptFile: data.url('preloader.js'),
    contentScriptWhen: 'end'
});
