/**
 * main.js
 *
 * ToDo: URL speichern und per Kontext wiederherstellen
 * ToDo: case switch
 *
 * @author    EchtkPvL
 * @copyright 28.11.2018 EchtkPvL
 */

/*
function getDomainFromUrl(amazonUrl) {
  var domain = amazonUrl.split("/");
  return domain[2];
}
*/

// Amazon
var regex = /http(s)?:\/\/(www\.)?amazon\.\w{2,4}\/([\w-%]+\/)?(dp|gp\/product)\/(\w+\/)?(?<id>\w{10})/gi;
go(regex, "/dp/!!id!!/");

// ebay
var regex = /http(s)?:\/\/(www\.)?ebay\.\w{2,4}\/itm\/([^\/]*\/)?(?<id>[0-9]{12})/gi;
go(regex, "/itm/!!id!!/");

// YouTube
var regex = /http(?:s)?:\/\/(?:www\.)?youtube\.\w{2,4}\/(?!v=).*v=(?<id>[^&\/\n]*)/gi;
go(regex, "#https://youtu.be/!!id!!");

// heise
//var regex = /http(s)?:\/\/(?:www.)?heise\.\w{2,4}\/newsticker\/meldung\/.*(?:(?<id>-\d{7})\.html(?:\?\S*)?)$/gi;
var regex = /http(s)?:\/\/(?:www.)?heise\.\w{2,4}\/.*(?:(?<id>-\d{7})\.html(?:\?\S*)?)$/gi;
go(regex, "/!!id!!");



// --------------------------------------------------

/**
  * Go and do the magic
  *
  * @param string $regex
  * @param string $url
  * @return bool
  */
function go(regex, url){
  oldurl = document.location.href;
  result = regex.exec(oldurl);
  if(result != null){
    console.log("Replaced! " + oldurl);
    window.history.replaceState(null, null, url.replace("!!id!!", result.groups.id));

    chrome.storage.local.set({"key": "baum"}, function(){
      alert(oldurl);
    });
    chrome.storage.local.get(['key'], function(result){
      alert('Value currently is ' + JSON.stringify(result));
    });
  }

  return true;
}
// EOF
