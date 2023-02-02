(()=>{"use strict";const e=window.wp.blocks,t=window.wp.element,l=window.wp.blockEditor,a=window.wp.components;(0,e.registerBlockType)("amz/amazon",{title:"Amazon",category:"widgets",icon:"admin-users",attributes:{title1:{type:"string",default:"Producto 1"},title2:{type:"string",default:"Producto 2"},title3:{type:"string",default:"Producto 3"},precio1:{type:"string",default:"0 USD"},precio2:{type:"string",default:"0 USD"},precio3:{type:"string",default:"0 USD"},image1:{type:"object",default:{id:null,url:null}},image2:{type:"object",default:{id:null,url:null}},image3:{type:"object",default:{id:null,url:null}},link1:{type:"string",default:""},link2:{type:"string",default:""},link3:{type:"string",default:""}},edit:e=>{const{className:n,attributes:r,setAttributes:o}=e,{title1:c,title2:m,title3:i,precio1:s,precio2:u,precio3:d,link1:E,link2:g,link3:b}=r,{image1:p,image2:A,image3:N}=r;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(a.Panel,null,(0,t.createElement)(a.PanelBody,{title:"Nombre de producto",initialOpen:!0},(0,t.createElement)(a.TextControl,{label:"Producto 1",value:c,onChange:e=>o({title1:e})}),(0,t.createElement)(a.TextControl,{label:"Producto 2",value:m,onChange:e=>o({title2:e})}),(0,t.createElement)(a.TextControl,{label:"Producto 3",value:i,onChange:e=>o({title3:e})})),(0,t.createElement)(a.PanelBody,{title:"Precios",initialOpen:!0},(0,t.createElement)(a.TextControl,{label:"Precio 1",value:s,onChange:e=>o({precio1:e})}),(0,t.createElement)(a.TextControl,{label:"Precio 2",value:u,onChange:e=>o({precio2:e})}),(0,t.createElement)(a.TextControl,{label:"Precio 3",value:d,onChange:e=>o({precio3:e})})),(0,t.createElement)(a.PanelBody,{title:"Links de los botones",initialOpen:!0},(0,t.createElement)(a.TextControl,{label:"Boton 1",value:E,onChange:e=>o({link1:e})}),(0,t.createElement)(a.TextControl,{label:"Boton 2",value:g,onChange:e=>o({link2:e})}),(0,t.createElement)(a.TextControl,{label:"Boton 3",value:b,onChange:e=>o({link3:e})})))),(0,t.createElement)("div",{className:n},(0,t.createElement)("div",{className:"container-AMZ"},(0,t.createElement)(l.MediaUpload,{onSelect:e=>{o({image1:e})},type:"image",value:p.id,render:e=>{let{open:l}=e;return(0,t.createElement)("button",{className:"ima-button",onClick:l},"Subir imagen")}}),p.url&&(0,t.createElement)("img",{src:p.url,alt:"",className:"product-AMZ"}),(0,t.createElement)("h3",{className:"title-AMZ"},c),(0,t.createElement)("h3",{className:"text-AMZ"},s),(0,t.createElement)("a",{href:E,target:"_blank",className:"AMZ-buttonlink"},(0,t.createElement)("button",{className:"button-AMZ",target:"_blank",rel:"nofollow"},"Compra en Amazon"))),(0,t.createElement)("div",{className:"container-AMZ"},(0,t.createElement)(l.MediaUpload,{onSelect:e=>{o({image2:e})},type:"image",value:A.id,render:e=>{let{open:l}=e;return(0,t.createElement)("button",{className:"ima-button",onClick:l},"Subir imagen")}}),A.url&&(0,t.createElement)("img",{src:A.url,alt:"",className:"product-AMZ"}),(0,t.createElement)("h3",{className:"title-AMZ"},m),(0,t.createElement)("h3",{className:"text-AMZ"},u),(0,t.createElement)("a",{href:g,target:"_blank",className:"AMZ-buttonlink"},(0,t.createElement)("button",{className:"button-AMZ",target:"_blank",rel:"nofollow"},"Compra en Amazon"))),(0,t.createElement)("div",{className:"container-AMZ"},(0,t.createElement)(l.MediaUpload,{onSelect:e=>{o({image3:e})},type:"image",value:N.id,render:e=>{let{open:l}=e;return(0,t.createElement)("button",{className:"ima-button",onClick:l},"Subir imagen")}}),N.url&&(0,t.createElement)("img",{src:N.url,alt:"",className:"product-AMZ"}),(0,t.createElement)("h3",{className:"title-AMZ"},i),(0,t.createElement)("h3",{className:"text-AMZ"},d),(0,t.createElement)("a",{href:b,target:"_blank",className:"AMZ-buttonlink"},(0,t.createElement)("button",{className:"button-AMZ",target:"_blank",rel:"nofollow"},"Compra en Amazon")))))},save:e=>{const{className:l,attributes:a}=e,{title1:n,title2:r,title3:o,precio1:c,precio2:m,precio3:i,link1:s,link2:u,link3:d}=a,{image1:E,image2:g,image3:b}=a;return(0,t.createElement)("div",{className:l},(0,t.createElement)("div",{className:"container-AMZ"},E.url&&(0,t.createElement)("img",{src:E.url,alt:"",className:"product-AMZ"}),(0,t.createElement)("h3",{className:"title-AMZ"},n),(0,t.createElement)("h3",{className:"text-AMZ"},c),(0,t.createElement)("a",{href:s,target:"_blank"},(0,t.createElement)("button",{className:"button-AMZ",target:"_blank",rel:"nofollow"},"Compra en Amazon"))),(0,t.createElement)("div",{className:"container-AMZ"},g.url&&(0,t.createElement)("img",{src:g.url,alt:"",className:"product-AMZ"}),(0,t.createElement)("h3",{className:"title-AMZ"},r),(0,t.createElement)("h3",{className:"text-AMZ"},m),(0,t.createElement)("a",{href:u,target:"_blank"},(0,t.createElement)("button",{className:"button-AMZ",target:"_blank",rel:"nofollow"},"Compra en Amazon"))),(0,t.createElement)("div",{className:"container-AMZ"},b.url&&(0,t.createElement)("img",{src:b.url,alt:"",className:"product-AMZ"}),(0,t.createElement)("h3",{className:"title-AMZ"},o),(0,t.createElement)("h3",{className:"text-AMZ"},i),(0,t.createElement)("a",{href:d,target:"_blank"},(0,t.createElement)("button",{className:"button-AMZ",target:"_blank",rel:"nofollow"},"Compra en Amazon"))))}})})();