import{S as z,i as I,s as k,e as v,c as C,b as U,f as S,g as x,k as F,h as O,m as D,n as g}from"./index.20449886.js";import{L as r}from"./leaflet.2cbba980.js";import"./leaflet.markercluster-src.77fb655c.js";import"./common.26748dae.js";function E(a){let e,o,s;return{c(){e=v("div"),this.h()},l(l){e=C(l,"DIV",{class:!0,style:!0}),U(e).forEach(S),this.h()},h(){x(e,"class","w-full h-full relative z-10"),F(e,"background","linear-gradient(142deg,#085078 10%,#85d8ce)")},m(l,u){O(l,e,u),o||(s=D(a[0].call(null,e)),o=!0)},p:g,i:g,o:g,d(l){l&&S(e),o=!1,s()}}}function T(a){return a==0?"#fff":a>=40?"#eba500":a<=39&&a>=13?"#df5c15":a<=12?"#c01d0c":"#000"}function B(a){return{fillColor:T(a?.properties?.wwl_status),weight:1,opacity:1,color:"#aaa",fillOpacity:.9,zIndex:10}}function G(a,e,o){let{locale:s}=e,{countries:l}=e,{organizations:u}=e,{languages:m}=e,{t:d}=e,{countryWWL:y}=e,{countryShapes:c}=e;const w=new Intl.NumberFormat(s);async function _(n){let b={Agency:new r.Icon({iconUrl:"/images/map-pin-yellow.svg",iconSize:[16,26],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[20,20]}),UBS:new r.Icon({iconUrl:"/images/map-flag-green.svg",iconSize:[14,23],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[0,0]}),Library:new r.Icon({iconUrl:"/images/map-library-red.svg",iconSize:[16,18],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[20,20]}),FOBAI:new r.Icon({iconUrl:"/images/map-pin-blue1.svg",iconSize:[20,32],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[20,20]})};const L=new r.Icon({iconUrl:"/images/map-pin-green.svg",iconSize:[20,32],iconAnchor:[12,41],popupAnchor:[1,-34],shadowSize:[20,20]}),W=r.markerClusterGroup();u.forEach(t=>{if(t.latitude&&t.longitude){let i=r.marker([t.latitude,t.longitude],{icon:b[t.type]});i.bindPopup(`<a href="/${s}/organizations/${t.slug}">${t.name}</a>`),W.addLayer(i)}});const A=r.markerClusterGroup();m.forEach(t=>{if(t.latitude&&t.longitude){let i=r.marker([t.latitude,t.longitude],{icon:L});i.bindPopup(`<a href="/${s}/languages/${t.iso}">${t.name}</a>`),A.addLayer(i)}});for(let t=0;t<c.features.length;t++)o(1,c.features[t].properties.wwl_status=y.filter(i=>c.features[t].properties.iso_a2===i.country_id)[0]?.rank??0,c),o(1,c.features[t].properties.literacy=l.filter(i=>c.features[t].properties.iso_a2===i.id)[0]?.lit??100,c);let p=r.geoJson(c,{style:B});p.eachLayer(t=>{t.on("mouseover",function(){t.setStyle({fillOpacity:1}),t.bringToFront(),f.update(t.feature.properties)}),t.on("mouseout",function(){t.setStyle({fillOpacity:.9}),f.update()}),t.on("click",function(){window.location.href=`/${s}/countries/${t.feature.properties.iso_a2}`},this)});let h=r.map(n,{layers:[p]});h.setView([10,0],3);const f=r.control({position:"bottomleft"});return f.onAdd=function(t){return this._div=r.DomUtil.create("div","info"),this.update(),this._div},f.update=function(t){const i=t?`<b>${t.name}</b><br />${w.format(t.pop_est)} people,<br />
          ${w.format(t.literacy)}% Literacy Rate,<br /> ${t.wwl_status!=0?t.wwl_status+" World Watch List Rank":""}`:"";this._div.innerHTML=`<div class="p-2 bg-white/80 shadow rounded text-stone-900 empty:hidden">${i}</div>`},f.addTo(h),h.on("baselayerchange",function(t){let i=t.layer.options.style.toString();i.startsWith("function worldWatchListStyle")&&d?.world_watch_list,i.startsWith("function literacyListStyle")&&d?.literacy}),{destroy:()=>{h.remove()}}}return a.$$set=n=>{"locale"in n&&o(2,s=n.locale),"countries"in n&&o(3,l=n.countries),"organizations"in n&&o(4,u=n.organizations),"languages"in n&&o(5,m=n.languages),"t"in n&&o(6,d=n.t),"countryWWL"in n&&o(7,y=n.countryWWL),"countryShapes"in n&&o(1,c=n.countryShapes)},[_,c,s,l,u,m,d,y]}class j extends z{constructor(e){super(),I(this,e,G,E,k,{locale:2,countries:3,organizations:4,languages:5,t:6,countryWWL:7,countryShapes:1})}}export{j as default};