// ==UserScript==
// @name         distsns to notestock
// @namespace    osa-p.net
// @author       osa <osa@osa-p.net>
// @version      1.1.0
// @homepageURL  https://notestock.osa-p.net
// @grant           GM_xmlhttpRequest
// @grant           GM.xmlHttpRequest
// @match        https://*/@*
// @match        https://*/notes/*
// ==/UserScript==

(function() {
  "use strict";
  var is_mastodon = (document.querySelector("[alt='Mastodon']") || document.querySelector("#mastodon-svg-logo-full"));
  var is_misskey = (document.querySelector("[name='application-name'][content='Misskey']"));
  if ((!is_mastodon) && (!is_misskey)) return;
  var id=false, id_link=document.querySelector("link[rel='alternate'][type='application/activity+json']");
  if (id_link) id = id_link.getAttribute("href");
  if (location.href.match(/\/notes\//)) id=location.href;
  var svg='<div style="display:inline-block;vertical-align: bottom;height:17px;"><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" id="svg8" version="1.1" viewBox="0 0 471.78409 86.55049" height="16px"><defs id="defs2"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath52"><path d="M 0,4500 H 1500 V 0 H 0 Z" id="path50" /></clipPath><marker id="marker4561" orient="auto" refY="163.56236" refX="891.55973" markerHeight="327.12473" markerWidth="1783.1195"><path style="fill:#ffff00;fill-opacity:0;stroke-width:0.97089332" d="M 0,0 H 1783.1195 V 327.12473 H 0 Z" id="rect4549" /><path style="fill:#ff0000;fill-opacity:0;stroke-width:0.97089332" d="M 0,0 H 1783.1195 V 327.1247 H 0 Z" id="rect4555" /></marker></defs><metadata id="metadata5"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><g id="layer3"><rect y="-9.2286758" x="-11.1125" height="107.42083" width="496.35834" id="rect4575" style="fill:#ffffff;fill-opacity:1;stroke-width:0.26458332" /></g><g style="display:inline" transform="translate(174.6599,-132.01642)" id="layer1"><g id="layer1-2" transform="translate(-178.40476,127.75591)"><g transform="matrix(0.35277777,0,0,-0.35277777,-27.768255,1516.15)" id="g46"><g id="g48" clip-path="url(#clipPath52)"><g id="g54" transform="translate(1391,4169)"><path d="M 0,0 H -13 L 11,26 -22,53 -56,7 v 78 h -45 V -62 h 45 v 32 h 26 c 6.25,-20 20,-32 20,-32 h 40 z m -408,69 h -43 V 49 h -25 V 16 h 25 v -78 h 43 v 78 h 25 v 33 h -25 z M -216,34 C -229.46,19.948 -231,3 -231,3 v -16 c 4,-39.5 38,-50 38,-50 h 67 v 33 h -61 v 45 h 61 v 34 h -63 c 0,0 -13.35,-0.75 -27,-15 m -78,-64 h -30 v 46 h 30 z m 32,63 c -11.8,11.8 -30,16 -30,16 h -34 c 0,0 -37.4,-8.8 -45,-41 -1.4,-9.4 -3.2,-26.4 5,-40 8.2,-13.6 16,-21.8 35,-30 h 43 c 0,0 12.4,1.2 27,16 14.6,14.8 15,31 15,31 0,0 5.4,28 -16,48 M -526,13 c -2.333,2.167 0,3 0,3 h 33 v 33 h -56 c -11.8,-1 -26.2,-12 -26,-27 0.2,-15 8.2,-23.6 14,-30 5.8,-6.4 25,-21 25,-21 h -38 v -33 h 67 c 0,0 16.833,4.833 19,21 1.5,8.333 0.5,15 -9,28 -9.5,13 -26.667,23.833 -29,26 m -349,-43 h -30 v 46 h 30 z m 32,63 c -11.8,11.8 -30,16 -30,16 h -34 c 0,0 -37.4,-8.8 -45,-41 -1.4,-9.4 -3.2,-26.4 5,-40 8.2,-13.6 16,-21.8 35,-30 h 43 c 0,0 12.4,1.2 27,16 14.6,14.8 15,31 15,31 0,0 5.4,28 -16,48 M -632,5 h -34 v 11 h 34 z m 5,43 h -42 c 0,0 -12.5,-0.5 -27,-16 -14.5,-15.5 -14,-30 -14,-30 v -18 c 2.5,-10 3.5,-18.5 17,-33 13.5,-14.5 26,-14 26,-14 h 1 69 v 34 h -69 v 12 h 78 V 0 c 0,0 0.25,17 -14,32 -14.25,15 -25,16 -25,16 m -372,1 h -19 -3 -24 -21 -21 V -62 h 42 v 78 h 24 v -78 h 17 5 8 c 0,0 18.6,18.2 22,55 0.4,43.2 -30,56 -30,56 m 252,20 h -43 V 49 h -25 V 16 h 25 v -78 h 43 v 78 h 25 v 33 h -25 z" style="fill:#3c494a;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path56" /></g><g id="g58" transform="translate(262.3958,4093.3694)"><path d="m 0,0 c -2.412,2.473 -5.321,3.711 -8.727,3.711 h -21.959 c -3.406,0 -6.315,-1.238 -8.727,-3.711 -2.413,-2.475 -3.619,-5.424 -3.619,-8.849 v -26.678 c 0,-3.425 0.206,-11.842 0.206,-11.842 h 46.43 c 0,0 0.015,8.417 0.015,11.842 V -8.849 C 3.619,-5.424 2.412,-2.475 0,0 m -70.91,61.443 h -21.959 c -3.406,0 -6.315,-1.237 -8.727,-3.711 -2.413,-2.475 -3.619,-5.423 -3.619,-8.848 v -84.411 c 0,-3.425 0.104,-11.842 0.104,-11.842 h 46.43 c 0,0 0.117,8.417 0.117,11.842 v 84.411 c 0,3.425 -1.207,6.373 -3.619,8.848 -2.412,2.474 -5.321,3.711 -8.727,3.711 m -62.183,63.339 h -21.959 c -3.406,0 -6.315,-1.238 -8.727,-3.711 -2.413,-2.476 -3.619,-5.423 -3.619,-8.849 V -35.527 c 0,-3.566 0.002,-11.842 0.002,-11.842 h 46.431 c 0,0 0.218,8.261 0.218,11.842 v 147.749 c 0,3.426 -1.207,6.373 -3.619,8.849 -2.412,2.473 -5.321,3.711 -8.727,3.711" style="fill:#2ebacb;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path60" /></g><g id="g62" transform="translate(232.1658,4154.5508)"><path d="m 0,0 c -3.396,0 -6.318,-1.217 -8.772,-3.65 -2.452,-2.433 -3.679,-5.368 -3.679,-8.804 v -22.15 c 0,-3.436 1.227,-6.37 3.679,-8.803 2.454,-2.434 5.376,-3.651 8.772,-3.651 h 21.917 c 3.396,0 11.74,0.015 11.74,0.015 v 46.836 c 0,0 -8.344,0.207 -11.74,0.207 z m -60.63,62.726 c -3.396,0 -6.319,-1.217 -8.773,-3.651 -2.451,-2.433 -3.678,-5.367 -3.678,-8.803 v -22.15 c 0,-3.435 1.227,-6.37 3.678,-8.804 2.454,-2.433 5.377,-3.65 8.773,-3.65 h 82.547 c 3.396,0 11.74,0.117 11.74,0.117 v 46.836 c 0,0 -8.344,0.105 -11.74,0.105 z m 82.547,62.725 h -146.471 c -3.395,0 -6.318,-1.216 -8.772,-3.65 -2.452,-2.433 -3.679,-5.367 -3.679,-8.803 V 90.847 c 0,-3.435 1.227,-6.369 3.679,-8.803 2.454,-2.434 5.377,-3.65 8.772,-3.65 H 21.917 c 3.55,0 11.74,0.22 11.74,0.22 v 46.836 c 0,0 -8.204,10e-4 -11.74,10e-4" style="fill:#e02691;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path64" /></g></g></g></g></g></svg></div>';

  if (id) {
    if ( ( typeof GM_xmlhttpRequest != 'function' ) && ( typeof GM.xmlHttpRequest == 'function' ) ) {
      window.GM_xmlhttpRequest = GM.xmlHttpRequest;
    }

    var loadHandler = function(response){
      var res = JSON.parse(response.responseText);
	    console.log( res );
      if (is_mastodon) {
        if ((res.user) && (res.user.public_view)) {
          var bio_extra_objs = document.querySelectorAll(".public-account-bio__extra");
          for (var bio_extra_obj of bio_extra_objs) {
            bio_extra_obj.insertAdjacentHTML("beforeend", "<a href='"+res.user.url+"' target='_blank'>"+svg+"</a>");
          }
        }
        if ((res.user) && (res.user.public_view) && (res.note.full_url)) {
          var status_meta_objs = document.querySelectorAll(".detailed-status__meta");
          for (var status_meta_obj of status_meta_objs) {
            status_meta_obj.insertAdjacentHTML("beforeend", "· <a class='clickable' href='"+res.note.full_url+"' target='_blank'>"+svg+"</a>");
          }
        }
      }
      if (is_misskey) {
        const obs_body = new MutationObserver(function(mutations) {
          var bio_extra_obj = document.querySelector(".status");
          if (bio_extra_obj) {
            this.disconnect();
            bio_extra_obj.insertAdjacentHTML("beforeend", "<a class='' href='"+res.user.url+"' target='_blank'>"+svg+"</a>");
            return;
          }
          var status_meta_obj = document.querySelector("footer");
          if ((status_meta_obj) && (res.note.full_url)) {
            this.disconnect();
            status_meta_obj.insertAdjacentHTML("beforeend", "<div style='display:inline-block; margin-right:28px;font-size:0em;'><a class='' href='"+res.note.full_url+"' target='_blank'>"+svg+"</a></div>");
            return;
          }
        });
        obs_body.observe(document.querySelector("body"), {childList: true});
      }
    }

    GM_xmlhttpRequest({
      url:"https://notestock.osa-p.net/api/v1/isstock.json?id="+id,
      method :'GET',
      onload: loadHandler
    });
  }

})();
