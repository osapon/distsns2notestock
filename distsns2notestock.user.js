// ==UserScript==
// @name         distsns to notestock
// @namespace    osa-p.net
// @author       osa <osa@osa-p.net>
// @version      1.2.0
// @homepageURL  https://notestock.osa-p.net
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @match        https://*/@*
// @match        https://*/notes/*
// @updateURL    https://github.com/osapon/distsns2notestock/raw/master/distsns2notestock.user.js
// @downloadURL  https://github.com/osapon/distsns2notestock/raw/master/distsns2notestock.user.js
// @homepageURL  https://github.com/osapon/distsns2notestock
// ==/UserScript==

(function() {
  "use strict";
  var is_mastodon_v3 = (document.querySelector("[alt='Mastodon']") || document.querySelector("#mastodon-svg-logo-full"));
  var is_mastodon_v4 = document.querySelector("div[id='mastodon'][class='notranslate app-holder']");
  var is_misskey = document.querySelector("[name='application-name'][content='Misskey']");
  if ((!is_mastodon_v3) && (!is_mastodon_v4) && (!is_misskey)) return;
  var svg='<svg version="1.1" viewBox="0 0 471.78409 86.55049" height="16px"><g><rect y="-9.2286758" x="-11.1125" height="107.42083" width="496.35834" fill="#ffffff" /></g><g style="display:inline" transform="translate(174.6599,-132.01642)"><g transform="translate(-178.40476,127.75591)"><g transform="matrix(0.35277777,0,0,-0.35277777,-27.768255,1516.15)"><g clip-path="url(#clipPath52)"><g transform="translate(1391,4169)"><path d="M 0,0 H -13 L 11,26 -22,53 -56,7 v 78 h -45 V -62 h 45 v 32 h 26 c 6.25,-20 20,-32 20,-32 h 40 z m -408,69 h -43 V 49 h -25 V 16 h 25 v -78 h 43 v 78 h 25 v 33 h -25 z M -216,34 C -229.46,19.948 -231,3 -231,3 v -16 c 4,-39.5 38,-50 38,-50 h 67 v 33 h -61 v 45 h 61 v 34 h -63 c 0,0 -13.35,-0.75 -27,-15 m -78,-64 h -30 v 46 h 30 z m 32,63 c -11.8,11.8 -30,16 -30,16 h -34 c 0,0 -37.4,-8.8 -45,-41 -1.4,-9.4 -3.2,-26.4 5,-40 8.2,-13.6 16,-21.8 35,-30 h 43 c 0,0 12.4,1.2 27,16 14.6,14.8 15,31 15,31 0,0 5.4,28 -16,48 M -526,13 c -2.333,2.167 0,3 0,3 h 33 v 33 h -56 c -11.8,-1 -26.2,-12 -26,-27 0.2,-15 8.2,-23.6 14,-30 5.8,-6.4 25,-21 25,-21 h -38 v -33 h 67 c 0,0 16.833,4.833 19,21 1.5,8.333 0.5,15 -9,28 -9.5,13 -26.667,23.833 -29,26 m -349,-43 h -30 v 46 h 30 z m 32,63 c -11.8,11.8 -30,16 -30,16 h -34 c 0,0 -37.4,-8.8 -45,-41 -1.4,-9.4 -3.2,-26.4 5,-40 8.2,-13.6 16,-21.8 35,-30 h 43 c 0,0 12.4,1.2 27,16 14.6,14.8 15,31 15,31 0,0 5.4,28 -16,48 M -632,5 h -34 v 11 h 34 z m 5,43 h -42 c 0,0 -12.5,-0.5 -27,-16 -14.5,-15.5 -14,-30 -14,-30 v -18 c 2.5,-10 3.5,-18.5 17,-33 13.5,-14.5 26,-14 26,-14 h 1 69 v 34 h -69 v 12 h 78 V 0 c 0,0 0.25,17 -14,32 -14.25,15 -25,16 -25,16 m -372,1 h -19 -3 -24 -21 -21 V -62 h 42 v 78 h 24 v -78 h 17 5 8 c 0,0 18.6,18.2 22,55 0.4,43.2 -30,56 -30,56 m 252,20 h -43 V 49 h -25 V 16 h 25 v -78 h 43 v 78 h 25 v 33 h -25 z" fill="#3c494a" /></g><g transform="translate(262.3958,4093.3694)"><path d="m 0,0 c -2.412,2.473 -5.321,3.711 -8.727,3.711 h -21.959 c -3.406,0 -6.315,-1.238 -8.727,-3.711 -2.413,-2.475 -3.619,-5.424 -3.619,-8.849 v -26.678 c 0,-3.425 0.206,-11.842 0.206,-11.842 h 46.43 c 0,0 0.015,8.417 0.015,11.842 V -8.849 C 3.619,-5.424 2.412,-2.475 0,0 m -70.91,61.443 h -21.959 c -3.406,0 -6.315,-1.237 -8.727,-3.711 -2.413,-2.475 -3.619,-5.423 -3.619,-8.848 v -84.411 c 0,-3.425 0.104,-11.842 0.104,-11.842 h 46.43 c 0,0 0.117,8.417 0.117,11.842 v 84.411 c 0,3.425 -1.207,6.373 -3.619,8.848 -2.412,2.474 -5.321,3.711 -8.727,3.711 m -62.183,63.339 h -21.959 c -3.406,0 -6.315,-1.238 -8.727,-3.711 -2.413,-2.476 -3.619,-5.423 -3.619,-8.849 V -35.527 c 0,-3.566 0.002,-11.842 0.002,-11.842 h 46.431 c 0,0 0.218,8.261 0.218,11.842 v 147.749 c 0,3.426 -1.207,6.373 -3.619,8.849 -2.412,2.473 -5.321,3.711 -8.727,3.711" fill="#2ebacb" /></g><g transform="translate(232.1658,4154.5508)"><path d="m 0,0 c -3.396,0 -6.318,-1.217 -8.772,-3.65 -2.452,-2.433 -3.679,-5.368 -3.679,-8.804 v -22.15 c 0,-3.436 1.227,-6.37 3.679,-8.803 2.454,-2.434 5.376,-3.651 8.772,-3.651 h 21.917 c 3.396,0 11.74,0.015 11.74,0.015 v 46.836 c 0,0 -8.344,0.207 -11.74,0.207 z m -60.63,62.726 c -3.396,0 -6.319,-1.217 -8.773,-3.651 -2.451,-2.433 -3.678,-5.367 -3.678,-8.803 v -22.15 c 0,-3.435 1.227,-6.37 3.678,-8.804 2.454,-2.433 5.377,-3.65 8.773,-3.65 h 82.547 c 3.396,0 11.74,0.117 11.74,0.117 v 46.836 c 0,0 -8.344,0.105 -11.74,0.105 z m 82.547,62.725 h -146.471 c -3.395,0 -6.318,-1.216 -8.772,-3.65 -2.452,-2.433 -3.679,-5.367 -3.679,-8.803 V 90.847 c 0,-3.435 1.227,-6.369 3.679,-8.803 2.454,-2.434 5.377,-3.65 8.772,-3.65 H 21.917 c 3.55,0 11.74,0.22 11.74,0.22 v 46.836 c 0,0 -8.204,10e-4 -11.74,10e-4" fill="#e02691" /></g></g></g></g></g></svg>';

  if ( ( typeof GM_xmlhttpRequest != 'function' ) && ( typeof GM.xmlHttpRequest == 'function' ) ) {
    window.GM_xmlhttpRequest = GM.xmlHttpRequest;
  }

  function getId() {
    let id=false, id_link=document.querySelector("link[rel='alternate'][type='application/activity+json']");
    if (id_link) id = id_link.getAttribute("href");
    return id;
  }

  if (is_mastodon_v4) {
    let rewriteHandler = function(mutations){
      if (document.querySelector("#notestock_logo")) return;
      mutations.forEach((mutation) => {
        if ((mutation.addedNodes.length != 1) || ((mutation.target.getAttribute('role') != 'region') && (mutation.target.getAttribute('class') != 'columns-area columns-area--mobile'))/* || (mutation.addedNodes[0].getAttribute('class') != 'scrollable')*/) return;

        // ユーザーページから投稿ページへ遷移したときに、linkタグが更新されないので投稿IDが取得できない
        let id = getId();
        let bio_extra_obj = document.querySelector(".account__header__extra__links");
        let status_meta_obj = document.querySelector(".detailed-status__meta");
        if (id && (bio_extra_obj || status_meta_obj)) {
          let loadHandler = function(response){
            let res = JSON.parse(response.responseText);
            if ((res.user) && (res.user.public_view) && bio_extra_obj) {
              bio_extra_obj.insertAdjacentHTML("beforeend", "<a href='"+res.user.url+"' target='_blank'><span id='notestock_logo'>"+svg+"</span></a>");
              return;
            }
            if ((status_meta_obj) && (res.note.full_url)) {
              status_meta_obj.insertAdjacentHTML("beforeend", " · <a href='"+res.note.full_url+"' target='_blank'><span id='notestock_logo'>"+svg+"</span></a>");
              return;
            }
          }
          GM_xmlhttpRequest({
            url:"https://notestock.osa-p.net/api/v1/isstock.json?id="+id,
            method:'GET',
            onload:loadHandler
          });
        }
      });
    }
    const obs_body = new MutationObserver(rewriteHandler);
    obs_body.observe(document.getElementById("mastodon"), {childList: true, subtree: true});
  }
  else if (is_misskey) {
    let rewriteHandler = function(mutations){
      if (document.querySelector("#notestock_logo")) return;
      mutations.forEach((mutation) => {
        if ((mutation.addedNodes.length != 1) || ((mutation.addedNodes[0].getAttribute('class').substring(0, 6) != '_root_') && (mutation.addedNodes[0].getAttribute('class').split(' ').indexOf('note') == -1))) return;

        // ユーザーページから投稿ページへ遷移したときに、linkタグが更新されないので投稿IDが取得できない
        let id = getId();
        let bio_extra_obj = document.querySelector(".status");
        let status_meta_obj = document.querySelector("footer");
        if (bio_extra_obj || status_meta_obj) {
          let loadHandler = function(response){
            let res = JSON.parse(response.responseText);
            if ((res.user) && (res.user.public_view) && bio_extra_obj) {
              bio_extra_obj.insertAdjacentHTML("beforeend", "<a href='"+res.user.url+"' target='_blank' id='notestock_logo'>"+svg+"</a>");
              return;
            }
            if ((status_meta_obj) && (res.note.full_url)) {
              status_meta_obj.insertAdjacentHTML("beforeend", "<div style='display:inline-block; margin-right:28px;font-size:0em;'><a href='"+res.note.full_url+"' target='_blank' id='notestock_logo'>"+svg+"</a></div>");
              return;
            }
          }
          GM_xmlhttpRequest({
            url:"https://notestock.osa-p.net/api/v1/isstock.json?id="+id,
            method:'GET',
            onload:loadHandler
          });
        }
      });
    }
    const obs_body = new MutationObserver(rewriteHandler);
    obs_body.observe(document.querySelector("body"), {childList: true, subtree: true});
  }
    else if (is_mastodon_v3) {
    let id = getId();
    let loadHandler = function(response){
      let res = JSON.parse(response.responseText);
      if ((res.user) && (res.user.public_view)) {
        let bio_extra_objs = document.querySelectorAll(".public-account-bio__extra");
        for (var bio_extra_obj of bio_extra_objs) {
          bio_extra_obj.insertAdjacentHTML("beforeend", "<a href='"+res.user.url+"' target='_blank'>"+svg+"</a>");
        }
      }
      if ((res.user) && (res.user.public_view) && (res.note.full_url)) {
        let status_meta_objs = document.querySelectorAll(".detailed-status__meta");
        for (var status_meta_obj of status_meta_objs) {
          status_meta_obj.insertAdjacentHTML("beforeend", "· <a class='clickable' href='"+res.note.full_url+"' target='_blank'>"+svg+"</a>");
        }
      }
    }
    GM_xmlhttpRequest({
      url:"https://notestock.osa-p.net/api/v1/isstock.json?id="+id,
      method:'GET',
      onload:loadHandler
    });
  }
})();
