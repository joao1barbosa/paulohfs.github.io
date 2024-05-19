"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[5899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={id:"godot-scenes",title:"Scenes"},c=void 0,s={unversionedId:"godot/godot-scenes",id:"godot/godot-scenes",title:"Scenes",description:"Scenes are the components/objects of the game. We can break down a game in a lot of reusable scenes. The scenes are composed of nodes, that can be anything from a sprite to a camera.",source:"@site/my-brain/godot/scenes.md",sourceDirName:"godot",slug:"/godot/godot-scenes",permalink:"/my-brain/godot/godot-scenes",draft:!1,tags:[],version:"current",frontMatter:{id:"godot-scenes",title:"Scenes"},sidebar:"myBrainSidebar",previous:{title:"Pausing",permalink:"/my-brain/godot/dogot-pausing"},next:{title:"Signals",permalink:"/my-brain/godot/godot-signals"}},i={},l=[{value:"Scene tree",id:"scene-tree",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Scenes are the components/objects of the game. We can break down a game in a lot of reusable scenes. The scenes are composed of nodes, that can be anything from a sprite to a camera."),(0,o.kt)("p",null,"As a example, the player is a scene, the enemies are scenes, the bullets are scenes, the background is a scene, the UI is a scene, etc."),(0,o.kt)("h2",{id:"scene-tree"},"Scene tree"),(0,o.kt)("p",null,"The scene tree is a tree structure that holds all the scenes of the game. The root of the tree is the main scene, and it can have children scenes."),(0,o.kt)("p",null,"You can think the a level of a game as a scene, that have a lot of children scenes, like the player, the enemies, the background, etc."))}d.isMDXComponent=!0}}]);