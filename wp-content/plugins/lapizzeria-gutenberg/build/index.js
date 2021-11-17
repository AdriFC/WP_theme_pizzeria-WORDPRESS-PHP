!function(){"use strict";var e,t,a=window.wp.element,l=window.React;function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n.apply(this,arguments)}function o(a){return l.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:25.16,height:23.954},a),e||(e=l.createElement("path",{fill:"#1B6606",d:"M-.405-1.612h27.09v27.255H-.405z"})),t||(t=l.createElement("g",{fill:"#FFF"},l.createElement("path",{d:"M2.965 18.784V5.228h3.293v10.703h5.246v2.853H2.965zM23.316 9.402c0 .792-.146 1.459-.439 2.001a3.62 3.62 0 01-1.188 1.312 5.255 5.255 0 01-1.723.728 8.844 8.844 0 01-2.029.229H16.31v5.112h-3.275V5.228h4.979c.74 0 1.433.073 2.077.22.645.148 1.206.383 1.685.709.479.325.855.754 1.131 1.282.273.53.409 1.185.409 1.963zm-3.273.018c0-.319-.063-.581-.191-.785s-.3-.362-.517-.478a2.165 2.165 0 00-.737-.229 6.053 6.053 0 00-.852-.058H16.31v3.197h1.377c.307 0 .601-.025.882-.076a2.39 2.39 0 00.756-.269c.224-.127.398-.297.526-.508.128-.209.192-.473.192-.794z"}))))}const{registerBlockType:r}=wp.blocks,{RichText:i,InspectorControls:c,ColorPalette:s,BlockControls:m,AlignmentToolbar:u}=wp.editor,{PanelBody:g}=wp.components;r("lapizzeria/boxes",{title:"Pizzeria Cajas",icon:{src:o},category:"lapizzeria",attributes:{headingBox:{type:"string",source:"html",selector:".box h2"},textoBox:{type:"string",source:"html",selector:".box p"},colorFondo:{type:"string"},colorTexto:{type:"string"},alineacionContenido:{type:"string",default:"center"}},edit:e=>{console.log(e);const{attributes:{headingBox:t,textoBox:l,colorFondo:n,colorTexto:o,alineacionContenido:r},setAttributes:d}=e;return console.log(t),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(c,null,(0,a.createElement)(g,{title:"Color de fondo",initialOpen:!0},(0,a.createElement)("div",{className:"components-base-control"},(0,a.createElement)("div",{className:"components-base-control__field"},(0,a.createElement)("label",{className:"components-base-control__label"},"Color de fondo"),(0,a.createElement)(s,{onChange:e=>{d({colorFondo:e})},value:n})))),(0,a.createElement)(g,{title:"Color de texto",initialOpen:!1},(0,a.createElement)("div",{className:"components-base-control"},(0,a.createElement)("div",{className:"components-base-control__field"},(0,a.createElement)("label",{className:"components-base-control__label"},"Color de texto"),(0,a.createElement)(s,{onChange:e=>{d({colorTexto:e})},value:o}))))),(0,a.createElement)(m,null,(0,a.createElement)(u,{onChange:onChangeAlinearContenido})),(0,a.createElement)("div",{className:"Box",style:{backgroundColor:n,textAlign:r}},(0,a.createElement)("h2",{style:{color:o}},(0,a.createElement)(i,{placeholder:"Agrega el encabezado",onChange:e=>{d({headingBox:e})},value:t})),(0,a.createElement)("p",{style:{color:o}},(0,a.createElement)(i,{placeholder:"Agrega el texto",onChange:e=>{d({textoBox:e})},value:l}))))},save:e=>{console.log(e);const{attributes:{headingBox:t,textoBox:l,colorFondo:n,colorTexto:o,alineacionContenido:r}}=e;return(0,a.createElement)("div",{className:"Box",style:{backgroundColor:n,textAlign:r}},(0,a.createElement)("h2",{style:{color:o}},(0,a.createElement)(i.Content,{value:t})),(0,a.createElement)("p",{style:{color:o}},(0,a.createElement)(i.Content,{value:l})))}});const{registerBlockType:d}=wp.blocks,{withSelect:p}=wp.data,{RichText:E,InspectorControls:b}=wp.editor,{PanelBody:h,RangeControl:v,SelectControl:C,TextControl:N}=wp.components;d("lapizzeria/menu",{title:"La Pizzeria Menu",icon:{src:o},category:"lapizzeria",attributes:{cantidadMostrar:{type:"number"},categoriaMenu:{type:"number"},tituloBloque:{type:"string",default:"Titulo Bloque"}},edit:p(((e,t)=>{console.log(t);const{attributes:{cantidadMostrar:a,categoriaMenu:l},setAttributes:n}=t;return{categorias:e("core").getEntityRecords("taxonomy","categoria-menu"),especialidades:e("core").getEntityRecords("postType","especialidades",{"categoria-menu":l,per_page:a||4}),onChangeCantidadMostrar:e=>{n({cantidadMostrar:parseInt(e)})},onChangeCategoriaMenu:e=>{n({categoriaMenu:e})},onChangeTituloBloque:e=>{n({tituloBloque:e})},props:t}}))((({categorias:e,especialidades:t,onChangeCantidadMostrar:l,onChangeCategoriaMenu:n,onChangeTituloBloque:o,props:r})=>{const{attributes:{cantidadMostrar:i,categoriaMenu:c,tituloBloque:s}}=r;if(!t)return"Cargando...";if(t&&0===t.length)return"No hay resultados";if(!e)return console.log("No hay categorias"),null;if(e&&0===e.length)return console.log("No hay resultados"),null;e.forEach((e=>{e.label=e.name,e.value=e.id}));const m=[{value:"",label:" -- Todos -- "},...e];return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(b,null,(0,a.createElement)(h,{title:"Cantidad a Mostrar",initialOpen:!0},(0,a.createElement)("div",{className:"components-base-control"},(0,a.createElement)("div",{className:"components-base-control__field"},(0,a.createElement)("label",{className:"components-base-control__label"},"Cantidad a Mostrar"),(0,a.createElement)(v,{onChange:l,min:2,max:10,value:i||4})))),(0,a.createElement)(h,{title:"Categoría de Especialidad",initialOpen:!1},(0,a.createElement)("div",{className:"components-base-control"},(0,a.createElement)("div",{className:"components-base-control__field"},(0,a.createElement)("label",{className:"components-base-control__label"},"Categoría de Especialidad"),(0,a.createElement)(C,{options:m,onChange:n,value:c})))),(0,a.createElement)(h,{title:"Titulo Bloque",initialOpen:!1},(0,a.createElement)("div",{className:"components-base-control"},(0,a.createElement)("div",{className:"components-base-control__field"},(0,a.createElement)("label",{className:"components-base-control__label"},"Titulo Bloque"),(0,a.createElement)(N,{onChange:o,value:s}))))),(0,a.createElement)("h2",{className:"titulo-menu"},s),(0,a.createElement)("ul",{className:"nuestro-menu"},t.map((e=>(0,a.createElement)("li",null,(0,a.createElement)("img",{src:e.imagen_destacada}),(0,a.createElement)("div",{className:"platillo"},(0,a.createElement)("div",{className:"precio-titulo"},(0,a.createElement)("h3",null,e.title.rendered),(0,a.createElement)("p",null,"$ ",e.precio)),(0,a.createElement)("div",{className:"contenido-platillo"},(0,a.createElement)("p",null,(0,a.createElement)(E.Content,{value:e.content.rendered.substring(0,180)})))))))))})),save:()=>null});const{registerBlockType:y}=wp.blocks,{MediaUpload:z}=wp.editor,{IconButton:x}=wp.components;y("lapizzeria/galeria",{title:"La Pizzeria Galeria",icon:{src:o},category:"lapizzeria",attributes:{imagenes:{type:"array"}},edit:e=>{const{attributes:{imagenes:t=[]},setAttributes:l}=e;return console.log(t),(0,a.createElement)("div",{className:"galeria-pizzeria"},(0,a.createElement)(z,{onSelect:e=>{const a={thumb:e.sizes.medium.url,full:e.sizes.full.url,id:e.id};l({imagenes:[...t,a]})},type:"image",render:({open:e})=>(0,a.createElement)(x,{className:"lapizzeria-agregar-imagen",onClick:e,icon:"format-image",showTooltip:"true",label:"Cambiar Imagen"})}),(0,a.createElement)("h2",{className:"texto-primario"},"Galería"),(0,a.createElement)("ul",{className:"listado-imagenes"},t.map(((e,n)=>(0,a.createElement)("li",{className:"imagen"},(0,a.createElement)("div",{className:"borrar-imagen",onClick:()=>(e=>{const a=t.filter(((t,a)=>a!==e));l({imagenes:a})})(n)},(0,a.createElement)("span",{className:"dashicons\r dashicons-trash"})),(0,a.createElement)("img",{src:e.thumb}))))))},save:e=>{const{attributes:{imagenes:t=[]}}=e;return 0===t.length?(0,a.createElement)("p",null,"No hay imágenes"):(0,a.createElement)("div",{className:"galeria-pizzeria"},(0,a.createElement)("h2",{className:"texto-primario"},"Galería"),(0,a.createElement)("ul",{className:"listado-imagenes"},t.map((e=>(0,a.createElement)("li",{className:"imagen"},(0,a.createElement)("a",{href:e.full,"data-lightbox":"galeria"},(0,a.createElement)("img",{src:e.thumb})))))))}});const{registerBlockType:B}=wp.blocks,{MediaUpload:f,RichText:w,URLInputButton:k,BlockControls:q,AlignmentToolbar:T,InspectorControls:H}=wp.editor,{IconButton:_,PanelBody:I,TextControl:M}=wp.components;B("lapizzeria/hero",{title:"La Pizzeria Hero",icon:{src:o},category:"lapizzeria",attributes:{imagenHero:{type:"string",selector:".hero-block"},tituloHero:{type:"string",source:"html",selector:".hero-block h1"},textoHero:{type:"string",source:"html",selector:".hero-block p"},urlHero:{type:"string",source:"attribute",attribute:"href"},alinearContenido:{type:"string",default:"center"},alturaHero:{type:"number"}},supports:{align:["wide","full"]},edit:e=>{const{attributes:{imagenHero:t,tituloHero:l,textoHero:n,urlHero:o,alinearContenido:r,alturaHero:i},setAttributes:c}=e;return console.log(e),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(H,null,(0,a.createElement)(I,{title:"Altura Hero",initialOpen:!0},(0,a.createElement)("div",{className:"components-base-control"},(0,a.createElement)("div",{className:"components-base-control__field"},(0,a.createElement)("label",{className:"components-base-control__label"},"Altura en Pixeles"),(0,a.createElement)(M,{type:"number",min:300,max:700,step:10,onChange:e=>{c({alturaHero:parseInt(e)})},value:i||500}))))),(0,a.createElement)("div",{className:"hero-block",style:{backgroundImage:`linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url( ${t} )`,textAlign:r,height:`${i||500}px`}},(0,a.createElement)(q,null,(0,a.createElement)(T,{onChange:e=>{c({alinearContenido:e})},value:r})),(0,a.createElement)(f,{onSelect:e=>{c({imagenHero:e.sizes.full.url})},type:"image",render:({open:e})=>(0,a.createElement)(_,{className:"lapizzeria-agregar-imagen",onClick:e,icon:"format-image",showTooltip:"true",label:"Cambiar Imagen"})}),(0,a.createElement)("div",{className:"contenido-hero"},(0,a.createElement)("h1",{className:"titulo"},(0,a.createElement)(w,{placeholder:"Agrega el Titulo del Hero",onChange:e=>{c({tituloHero:e})},value:l})),(0,a.createElement)("p",null,(0,a.createElement)(w,{placeholder:"Agrega el Texto del Hero",onChange:e=>{c({textoHero:e})},value:n})),(0,a.createElement)("div",null,(0,a.createElement)("a",{href:o,className:"boton boton-primario"},"Leer Más")),(0,a.createElement)(k,{onChange:e=>{c({urlHero:e})},url:o}))))},save:e=>{const{attributes:{imagenHero:t,tituloHero:l,textoHero:n,urlHero:o,alinearContenido:r,alturaHero:i}}=e;return(0,a.createElement)("div",{className:"hero-block",style:{backgroundImage:`linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url( ${t} )`,textAlign:r,height:`${i||500}px`}},(0,a.createElement)("div",{className:"contenido-hero"},(0,a.createElement)("h1",{className:"titulo"},(0,a.createElement)(w.Content,{value:l})),(0,a.createElement)("p",null,(0,a.createElement)(w.Content,{value:n})),(0,a.createElement)("div",null,(0,a.createElement)("a",{href:o,className:"boton boton-primario"},"Leer Más"))))}});const{registerBlockType:A}=wp.blocks,{MediaUpload:F,RichText:P,URLInputButton:R,BlockControls:L,AlignmentToolbar:O}=wp.editor,{IconButton:$}=wp.components;A("lapizzeria/textoimagen",{title:"Pizzeria Texto e Imagen",icon:{src:o},category:"lapizzeria",attributes:{imagenFondo:{type:"string",selector:".ingredientes-bloque"},tituloBloque:{type:"string",source:"html",selector:".texto-ingredientes h1"},textoBloque:{type:"string",source:"html",selector:".texto-ingredientes p"},enlaceBloque:{type:"string",source:"attribute",attribute:"href"},imagenBloque:{type:"string",source:"attribute",selector:".imagen-ingredientes img",attribute:"src",default:o}},supports:{align:["wide","full"]},edit:e=>{const{attributes:{imagenFondo:t,tituloBloque:l,textoBloque:n,enlaceBloque:o,imagenBloque:r},setAttributes:i}=e;return(0,a.createElement)("div",{className:"ingredientes-bloque",style:{backgroundImage:`url(${t})`}},(0,a.createElement)(F,{onSelect:e=>{i({imagenFondo:e.sizes.full.url})},type:"image",render:({open:e})=>(0,a.createElement)($,{className:"lapizzeria-agregar-imagen",onClick:e,icon:"format-image",showTooltip:"true",label:"Cambiar Imagen"})}),(0,a.createElement)("div",{className:"contenido-ingredientes"},(0,a.createElement)("div",{className:"texto-ingredientes"},(0,a.createElement)("h1",{className:"titulo"},(0,a.createElement)(P,{placeholder:"Agrega el título del hero",onChange:e=>{i({tituloBloque:e})},value:l})),(0,a.createElement)("p",null,(0,a.createElement)(P,{placeholder:"Agrega el texto del hero",onChange:e=>{i({textoBloque:e})},value:n})),(0,a.createElement)("div",null,(0,a.createElement)("a",{href:o,className:"boton boton-secundario"},"Leer más")),(0,a.createElement)(R,{onChange:e=>{i({enlaceBloque:e})},url:o})),(0,a.createElement)("div",{className:"imagen-ingredientes"},(0,a.createElement)("img",{src:r}),(0,a.createElement)(F,{onSelect:e=>{i({imagenBloque:e.sizes.full.url})},type:"image",render:({open:e})=>(0,a.createElement)($,{className:"lapizzeria-agregar-imagen",onClick:e,icon:"format-image",showTooltip:"true",label:"Cambiar Imagen"})}))))},save:e=>{const{attributes:{imagenFondo:t,tituloBloque:l,textoBloque:n,enlaceBloque:o,imagenBloque:r}}=e;return(0,a.createElement)("div",{className:"ingredientes-bloque",style:{backgroundImage:`url(${t})`}},(0,a.createElement)("div",{className:"contenido-ingredientes"},(0,a.createElement)("div",{className:"texto-ingredientes"},(0,a.createElement)("h1",{className:"titulo"},(0,a.createElement)(P.Content,{value:l})),(0,a.createElement)("p",null,(0,a.createElement)(P.Content,{value:n})),(0,a.createElement)("div",null,(0,a.createElement)("a",{href:o,className:"boton boton-secundario"},"Leer más"))),(0,a.createElement)("div",{className:"imagen-ingredientes"},(0,a.createElement)("img",{src:r}))))}});const{registerBlockType:S}=wp.blocks,{MediaUpload:U,InnerBlocks:j}=wp.editor,{IconButton:G}=wp.components;S("lapizzeria/contenedor",{title:"Pizzeria Contenedor",icon:{src:o},category:"lapizzeria",attributes:{imagenFondo:{type:"string",selector:".bloque-contenedor"}},edit:e=>{const{attributes:{imagenFondo:t},setAttributes:l}=e;return(0,a.createElement)("div",{className:"bloque-contenedor",style:{backgroundImage:`url(${t})`}},(0,a.createElement)("div",{className:"contenido-bloque"},(0,a.createElement)("div",{className:"imagen-fondo"},(0,a.createElement)(U,{onSelect:e=>{l({imagenFondo:e.sizes.full.url})},type:"image",render:({open:e})=>(0,a.createElement)(G,{className:"lapizzeria-agregar-imagen",onClick:e,icon:"format-image",showTooltip:"true",label:"Cambiar Imagen"})})),(0,a.createElement)("div",{className:"bloques-internos"},(0,a.createElement)(j,null))))},save:e=>{const{attributes:{imagenFondo:t}}=e;return(0,a.createElement)("div",{className:"bloque-contenedor",style:{backgroundImage:`url(${t})`}},(0,a.createElement)("div",{className:"contenido-bloque"},(0,a.createElement)("div",{className:"imagen-fondo"}),(0,a.createElement)("div",{className:"bloques-internos"},(0,a.createElement)(j.Content,null))))}})}();