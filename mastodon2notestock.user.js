// ==UserScript==
// @name         Mastodon to notestock
// @namespace    osa-p.net
// @author       osa <osa@osa-p.net>
// @version      1.0.0
// @homepageURL  https://notestock.osa-p.net
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @match        https://*/@*
// ==/UserScript==

(function() {
  "use strict";
  if (!document.querySelector("[alt='Mastodon']")) return;
  var id_link=document.querySelector("link[rel='alternate'][type='application/activity+json']");

  if (id_link) {
    var id = id_link.getAttribute("href");

    if ( ( typeof GM_xmlhttpRequest != 'function' ) && ( typeof GM.xmlHttpRequest == 'function' ) ) {
      window.GM_xmlhttpRequest = GM.xmlHttpRequest;
    }
    
    var loadHandler = function(response){
      var res = JSON.parse(response.responseText);
	    console.log( res );
      if ((res.user) && (res.user.public_view)) {
        var bio_extra_objs = document.querySelectorAll(".public-account-bio__extra");
        for (var bio_extra_obj of bio_extra_objs) {
          bio_extra_obj.insertAdjacentHTML("beforeend", "<a href='"+res.user.url+"' target='_blank'>notestock</a>");
        }
      }
      if ((res.user) && (res.user.public_view) && (res.note.full_url)) {
        var status_meta_objs = document.querySelectorAll(".detailed-status__meta");
        for (var status_meta_obj of status_meta_objs) {
          status_meta_obj.insertAdjacentHTML("beforeend", "· <a class='detailed-status__application' href='"+res.note.full_url+"' target='_blank'>notestock</a>");
        }
      }
    }
    
    GM_xmlhttpRequest({
      url:"https://notestock.osa-p.net/api/v1/isstock.json?id="+id,
      method :'GET',
      onload: loadHandler
    });
  }

})();
