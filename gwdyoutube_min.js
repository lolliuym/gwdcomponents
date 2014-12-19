(function(){"use strict";var f=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},l=function(a){if(f(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&f(a))return a;return null};var m=function(){var a=window.navigator.userAgent||"";return-1<a.indexOf("Trident")||-1<a.indexOf("MSIE")};var n=function(a,b){var c;c=document.createEvent("Event");c.initEvent(a,!0,!0);b.dispatchEvent(c)},p=function(a,b){var c=function(e){a.removeEventListener("load",c);b(e)};a.addEventListener("load",c)};function q(a,b){this.j=a;for(var c=b.split("."),e=window,g=0;e&&g<c.length;g++)e=e[c[g]];this.h=e?0:2;this.d=[]}q.prototype.t=function(){for(var a=this.h=0;a<this.d.length;a++)this.d[a]();this.d=[]};q.prototype.load=function(a){a&&(0==this.h?a():this.d.push(a));if(2==this.h){this.h=1;a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=this.j;p(a,this.t.bind(this));var b=document.getElementsByTagName("script")[0];b?b.parentNode.insertBefore(a,b):document.getElementsByTagName("head")[0].appendChild(a)}};function r(a,b){this.j=a;this.s=b;this.k=null;this.d=[];this.o=!1}r.prototype.load=function(a){this.o?a():(this.k||(this.k=new q(this.j,this.s)),this.k.load(),this.d.push(a))};var t=null;window.onYouTubeIframeAPIReady=function(){n("apiloaded",document);var a=t;a.o=!0;for(var b=0;b<a.d.length;b++)a.d[b]();a.d=[]};
var u=function(a,b,c,e){t||(t=new r("https://www.youtube.com/iframe_api","YT"));t.load(function(){var g,d="https://www.youtube.com/embed/"+c.videoId,d=d+"?enablejsapi=1";c.autoplay&&(d+="&autoplay=1");c.adformat&&(d+="&adformat="+c.adformat);m()&&(d+="&wmode=opaque");c.theme&&(d+="&theme="+c.theme);d+="&controls=";switch(c.controls){case "none":d+="0";break;case "show":d+="1&autohide=0";break;case "autohide":case void 0:d+="1&autohide=1"}c.annotations||(d+="&iv_load_policy=3");c.related||(d+="&rel=0");
c.loop&&(d+="&loop=1&playlist="+c.videoId);c.title||(d+="&showinfo=0");c.startPosition&&(d+="&start="+c.startPosition);g=c.width;var k=c.height,h=document.createElement("iframe");h.id=b;h.frameBorder="0";h.type="text/html";h.width=g;h.height=k;h.src=d;a.appendChild(h);g=new YT.Player(b,{events:c.events});e(g)})};var v=function(a){setTimeout(a,0)};var w=function(a){a=a||"";var b=a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return b&&11==b[2].length?b[2]:a};
document.registerElement&&document.registerElement("gwd-youtube",{prototype:Object.create(HTMLElement.prototype,{createdCallback:{value:function(){this.a=null;this.n=this.l=this.f=!1;this.c=[];this.p=[];this.m=this.b=null;this.e=!1},enumerable:!0},r:{value:function(a){if(!this.b){this.style.position="relative";var b=window.getComputedStyle(this).height,c=window.getComputedStyle(this).width;this.b=document.createElement("div");this.b.className="youtube-overlay";this.b.style.height=b;this.b.style.width=
c;if(a){this.b.className+=" youtube-play-button";this.b.style.backgroundImage="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4NCcgaGVpZ2h0PSc2MCc+PHBhdGggZD0nTTg0LjE1LDI2LjR2Ni4zNWMwLDIuODMzLTAuMTUsNS45NjctMC40NSw5LjRjLTAuMTMzLDEuNy0wLjI2NywzLjExNy0wLjQsNC4yNWwtMC4xNSwwLjk1Yy0wLjE2NywwLjc2Ny0wLjM2NywxLjUxNy0wLjYsMi4yNWMtMC42NjcsMi4zNjctMS41MzMsNC4wODMtMi42LDUuMTVjLTEuMzY3LDEuNC0yLjk2NywyLjM4My00LjgsMi45NWMtMC42MzMsMC4yLTEuMzE2LDAuMzMzLTIuMDUsMC40Yy0wLjc2NywwLjEtMS4zLDAuMTY3LTEuNiwwLjJjLTQuOSwwLjM2Ny0xMS4yODMsMC42MTctMTkuMTUsMC43NWMtMi40MzQsMC4wMzQtNC44ODMsMC4wNjctNy4zNSwwLjFoLTIuOTVDMzguNDE3LDU5LjExNywzNC41LDU5LjA2NywzMC4zLDU5Yy04LjQzMy0wLjE2Ny0xNC4wNS0wLjM4My0xNi44NS0wLjY1Yy0wLjA2Ny0wLjAzMy0wLjY2Ny0wLjExNy0xLjgtMC4yNWMtMC45LTAuMTMzLTEuNjgzLTAuMjgzLTIuMzUtMC40NWMtMi4wNjYtMC41MzMtMy43ODMtMS41LTUuMTUtMi45Yy0xLjAzMy0xLjA2Ny0xLjktMi43ODMtMi42LTUuMTVDMS4zMTcsNDguODY3LDEuMTMzLDQ4LjExNywxLDQ3LjM1TDAuOCw0Ni40Yy0wLjEzMy0xLjEzMy0wLjI2Ny0yLjU1LTAuNC00LjI1QzAuMTMzLDM4LjcxNywwLDM1LjU4MywwLDMyLjc1VjI2LjRjMC0yLjgzMywwLjEzMy01Ljk1LDAuNC05LjM1bDAuNC00LjI1YzAuMTY3LTAuOTY2LDAuNDE3LTIuMDUsMC43NS0zLjI1YzAuNy0yLjMzMywxLjU2Ny00LjAzMywyLjYtNS4xYzEuMzY3LTEuNDM0LDIuOTY3LTIuNDM0LDQuOC0zYzAuNjMzLTAuMTY3LDEuMzMzLTAuMywyLjEtMC40YzAuNC0wLjA2NiwwLjkxNy0wLjEzMywxLjU1LTAuMmM0LjktMC4zMzMsMTEuMjgzLTAuNTY3LDE5LjE1LTAuN0MzNS42NSwwLjA1LDM5LjA4MywwLDQyLjA1LDBMNDUsMC4wNWMyLjQ2NywwLDQuOTMzLDAuMDM0LDcuNCwwLjFjNy44MzMsMC4xMzMsMTQuMiwwLjM2NywxOS4xLDAuN2MwLjMsMC4wMzMsMC44MzMsMC4xLDEuNiwwLjJjMC43MzMsMC4xLDEuNDE3LDAuMjMzLDIuMDUsMC40YzEuODMzLDAuNTY2LDMuNDM0LDEuNTY2LDQuOCwzYzEuMDY2LDEuMDY2LDEuOTMzLDIuNzY3LDIuNiw1LjFjMC4zNjcsMS4yLDAuNjE3LDIuMjg0LDAuNzUsMy4yNWwwLjQsNC4yNUM4NCwyMC40NSw4NC4xNSwyMy41NjcsODQuMTUsMjYuNHogTTMzLjMsNDEuNEw1NiwyOS42TDMzLjMsMTcuNzVWNDEuNHonIGZpbGw9JyNDQzE4MUUnIGZpbGwtb3BhY2l0eT0nLjUnPjwvcGF0aD48cG9seWdvbiBwb2ludHM9JzMzLjMsNDEuNCAzMy4zLDE3Ljc1IDU2LDI5LjYnIGZpbGw9JyNGRkYnPjwvcG9seWdvbj48L3N2Zz4K')";
var e=document.createElement("div");e.className="youtube-thumbnail";this.b.appendChild(e);var g={videoId:this.getYouTubeOptions_().videoId,width:c,height:b,thumbWidth:"100%",thumbHeight:"100%",thumbAlign:"tl",events:{onClick:this.thumbnailClickHandler_.bind(this)}};v(function(){this.m=new YT.Thumbnail(e,g)}.bind(this))}else m()&&(this.b.style.backgroundColor="rgba(0, 0, 0, 0)")}return this.b},enumerable:!1},thumbnailClickHandler_:{value:function(){this.a.destroy();this.m.destroy();this.b.parentNode.removeChild(this.b);
this.setAttribute("autoplay","standard");this.f=!1;u(this,this.id+"video",this.getYouTubeOptions_(),function(a){this.e=!1;this.a=a;this.toggleMute();n("ready",this)}.bind(this))},enumerable:!1},attachedCallback:{value:function(){l(this)||"function"!=typeof this.gwdLoad||("function"==typeof this.gwdIsLoaded?this.gwdIsLoaded()||this.gwdLoad():this.gwdLoad())},enumerable:!0},gwdLoad:{value:function(){if(!this.l){this.l=!0;var a=this.getYouTubeOptions_();u(this,this.id+"video",a,function(b){this.a=b;
if("preview"==a.preview||"intro"==a.preview)this.e=!0,this.appendChild(this.r("preview"==a.preview));n("ready",this)}.bind(this))}},enumerable:!0},gwdIsLoaded:{value:function(){return null!=this.a},enumerable:!0},attributeChangedCallback:{value:function(a){"video-url"==a&&this.setYouTubeId(w(this.getAttribute(a)))},enumerable:!0},play:{value:function(){this.e||(this.f?this.a.playVideo():this.c.push({g:0}))},enumerable:!0},pause:{value:function(){this.e||(this.f?this.a.pauseVideo():this.c.push({g:1}))},
enumerable:!0},replay:{value:function(){this.e||(this.seek(0),this.play())},enumerable:!0},seek:{value:function(a){this.e||(this.f?this.a.seekTo(a,!0):this.c.push({g:2,i:a}))},enumerable:!0},setYouTubeId:{value:function(a,b){this.e||(this.f?b?this.a.cueVideoById(a):this.a.loadVideoById(a):this.c.push({g:4,i:a,q:b}))},enumerable:!0},toggleMute:{value:function(){if(!this.e)if(this.f){var a=this.a;a.isMuted()?a.unMute():a.mute()}else this.c.push({g:3})},enumerable:!0},getYouTubeOptions_:{value:function(){var a=
"none",b=!1,c=String(this.getAttribute("autoplay")).toLowerCase();"none"==c||"false"==c||"null"==c||"ontouchstart"in window||0<window.navigator.MaxTouchPoints||0<window.navigator.msMaxTouchPoints||(b=!0,a="true"==c||""==c?"standard":c);b={annotations:this.hasAttribute("annotations"),autoplay:b,events:{onReady:this.onPlayerReady_.bind(this),onStateChange:this.onStateChange_.bind(this),onCueRangeEnter:this.onCueRangeEnter_.bind(this)},height:this.clientHeight,loop:this.hasAttribute("loop"),preview:a,
related:this.hasAttribute("related"),title:this.hasAttribute("title"),videoId:w(this.getAttribute("video-url")),width:this.clientWidth};if(c=this.getAttribute("theme"))b.theme=c;if(c=this.getAttribute("controls"))b.controls=c;c=parseInt(this.getAttribute("start-position"),10);isNaN(c)||(b.startPosition=c);if("preview"!=a&&"intro"!=a)b.adformat=this.getAttribute("adformat");else if(window.Enabler){var c=window.Enabler.getParameter("adSiteUrl"),e=/:\/\/(.[^/]+)/;c&&c.match(e)[1].indexOf("youtube.com")?
b.adformat="1_8":b.adformat="1_5"}if("intro"==a||"preview"==a)b.annotations=!1,b.controls="none",b.loop=!1,b.related=!1,b.title=!1;return b},enumerable:!1},addCueRange_:{value:function(a,b,c){this.a.addCueRange(a,b,c);this.p.push({id:a,start:b,end:c})},enumerable:!1},onPlayerReady_:{value:function(){this.f=!0;for(var a=0,b=this.c.length;a<b;++a)switch(this.c[a].g){case 0:this.play();break;case 1:this.pause();break;case 2:this.seek(this.c[a].i);break;case 3:this.toggleMute();break;case 4:this.setYouTubeId(this.c[a].i,
this.c[a].q)}this.c=[];b=this.getYouTubeOptions_().preview;(this.hasAttribute("muted")||"intro"==b||"preview"==b)&&this.a.mute();var a=this.a.getDuration(),c,e,g=0;switch(b){case "none":case "standard":case "intro":c=a;e=["q0","q1","q2","q3","q4"];break;case "preview":(c=this.getYouTubeOptions_().startPosition)&&c<a&&(g=c),c=parseInt(this.getAttribute("preview-duration"),10)||30,g+c>a&&(c=a-g),e=["preview_q0","preview_q1","preview_q2","preview_q3","preview_q4"]}for(var d=c/4,k=0,b=e.length;k<b;k++){var h=
g+d*k,x=g+c;0===k?h+=.1:k===b-1&&--h;this.addCueRange_(e[k],h,x)}this.hasAttribute("pause-on-end")&&this.addCueRange_("ending",a-1,a);this.a.addEventListener("seekto",function(){n("seekto",this)}.bind(this),!1)},enumerable:!1},onStateChange_:{value:function(a){a=parseInt(a.data,10);if(!isNaN(a)){var b="";switch(a){case 0:b="ended";break;case 1:b="playing";!this.n&&this.getYouTubeOptions_().autoplay?this.n=!0:n("playpressed",this);break;case 2:b="paused";break;case 3:b="buffering"}b&&n(b,this)}},enumerable:!1},
onCueRangeEnter_:{value:function(a){switch(a.data){case "q0":n("viewed0percent",this);break;case "q1":n("viewed25percent",this);break;case "q2":n("viewed50percent",this);break;case "q3":n("viewed75percent",this);break;case "q4":n("viewed100percent",this);break;case "preview_q0":n("previewed0percent",this);break;case "preview_q1":n("previewed25percent",this);break;case "preview_q2":n("previewed50percent",this);break;case "preview_q3":n("previewed75percent",this);break;case "preview_q4":n("previewed100percent",
this),this.a.pauseVideo()}"ending"==a.data?this.pause():this.a.removeCueRange(a.data)},enumerable:!1}})});})()