"use strict";(self.webpackChunkbooks_store_template=self.webpackChunkbooks_store_template||[]).push([[633],{633:(et,p,l)=>{l.r(p),l.d(p,{ProductsModule:()=>tt});var a=l(6814),m=l(2519),s=l(5854),t=l(5879),u=l(617);function C(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-icon",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.stepBack())}),t._uU(1,"chevron_left"),t.qZA()}}function w(o,r){if(1&o&&(t.TgZ(0,"div",5)(1,"span",6),t._uU(2),t.qZA()()),2&o){const e=r.$implicit;t.xp6(2),t.hij(" ",e," ")}}let _=(()=>{class o{constructor(){this.posts=[],this.slice=[1,2,3,4,5],this.currentPage=1,this.totalPages=10}stepForward(){this.slice.push(this.slice[this.slice.length-1]+1),this.slice.shift()}stepBack(){this.slice.unshift(this.slice[0]-1),this.slice.pop()}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["cmp-cmm-paginator"]],inputs:{posts:"posts"},decls:7,vars:4,consts:[[1,"row","justify-content-end","align-items-center","flex-row"],[1,"m-0",2,"width","fit-content"],["class","p-0 cursor-pointer",3,"click",4,"ngIf"],["class","p-2 d-flex justify-content-center align-items-center mx-1 rounded","style","background: #DFDDDE;width: 30px;height: 30px;",4,"ngFor","ngForOf"],[1,"p-0","cursor-pointer",3,"click"],[1,"p-2","d-flex","justify-content-center","align-items-center","mx-1","rounded",2,"background","#DFDDDE","width","30px","height","30px"],[1,"m-0"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2),t.qZA(),t.YNc(3,C,2,0,"mat-icon",2),t.YNc(4,w,3,1,"div",3),t.TgZ(5,"mat-icon",4),t.NdJ("click",function(){return i.stepForward()}),t._uU(6,"chevron_right"),t.qZA()()),2&n&&(t.xp6(2),t.AsE(" ",i.currentPage," DE ",i.totalPages," P\xc1GINAS "),t.xp6(1),t.Q6J("ngIf",i.slice[0]>1),t.xp6(1),t.Q6J("ngForOf",i.slice))},dependencies:[u.Hw,a.sg,a.O5]})}return o})();var g=l(3811);const y=function(){return{priceColor:"#E88A10"}};function T(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"cmp-cmm-product-card-v2",6),t.NdJ("addProduct",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.navigate(i))}),t.qZA()()}if(2&o){const e=r.$implicit;t.xp6(1),t.Q6J("product",e)("configStyle",t.DdM(2,y))}}let P=(()=>{class o{onResize(e){this.smallMode=window.innerWidth<=767}constructor(e){this.router=e,this.products=[{image:s.Wc.product5,title:"PADRE RICO PADRE POBRE",brand:"Robert T. Kiyosaki",price:"14,00",previousprice:"27,00",currency:"$",id:"5"},{image:s.Wc.product6,title:"UN CUENTO PERFECTO",brand:"EL\xcdSABET BENAVENT",price:"14,00",previousprice:"27,00",currency:"$",id:"6"},{image:s.Wc.product7,title:"H\xc1BITOS AT\xd3MICOS",brand:"JAMES CLEAR",price:"14,00",previousprice:"27,00",currency:"$",id:"7"},{image:s.Wc.product8,title:"EL PERFUME",brand:"PATRIC S\xdcSKIND",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product17,title:"8 RULES OF LOVE",brand:"JAY SHETTY",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product18,title:"A COUR OF FROST",brand:"SARAH J. MAAS",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product19,title:"21 LESSONS FOR THE CENTURY",brand:"YUVAL NOAH HARARI",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product20,title:"LA TIERRA PROMETIDA",brand:"BARACK OBAMA",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product5,title:"PADRE RICO PADRE POBRE",brand:"Robert T. Kiyosaki",price:"14,00",previousprice:"27,00",currency:"$",id:"5"},{image:s.Wc.product6,title:"UN CUENTO PERFECTO",brand:"EL\xcdSABET BENAVENT",price:"14,00",previousprice:"27,00",currency:"$",id:"6"},{image:s.Wc.product7,title:"H\xc1BITOS AT\xd3MICOS",brand:"JAMES CLEAR",price:"14,00",previousprice:"27,00",currency:"$",id:"7"},{image:s.Wc.product8,title:"EL PERFUME",brand:"PATRIC S\xdcSKIND",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product17,title:"8 RULES OF LOVE",brand:"JAY SHETTY",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product18,title:"A COUR OF FROST",brand:"SARAH J. MAAS",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product19,title:"21 LESSONS FOR THE CENTURY",brand:"YUVAL NOAH HARARI",price:"14,00",previousprice:"27,00",currency:"$",id:"8"},{image:s.Wc.product20,title:"LA TIERRA PROMETIDA",brand:"BARACK OBAMA",price:"14,00",previousprice:"27,00",currency:"$",id:"8"}],this.items=[],this.smallMode=!1}ngOnInit(){this.smallMode=window.innerWidth<=767}navigate(e){this.router.navigate(["/Productos/Detalle"])}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["pag-products-layout"]],hostBindings:function(n,i){1&n&&t.NdJ("resize",function(d){return i.onResize(d)},!1,t.Jf7)},decls:5,vars:2,consts:[[1,"row","mx-auto","w-100","bg-white"],[1,"col-12","my-5"],[1,"row","g-0","w-100","justify-content-start","mt-5"],["class","col-12 col-sm-6 col-md-4 d-flex justify-content-start mb-5",4,"ngFor","ngForOf"],[1,"col-12","px-4",3,"posts"],[1,"col-12","col-sm-6","col-md-4","d-flex","justify-content-start","mb-5"],[1,"w-100","d-flex","justify-content-center",3,"product","configStyle","addProduct"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"section",1)(2,"div",2),t.YNc(3,T,2,3,"div",3),t._UZ(4,"cmp-cmm-paginator",4),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("ngForOf",i.products),t.xp6(1),t.Q6J("posts",i.products))},dependencies:[a.sg,_,g._]})}return o})();var f=l(6385),x=l(5216);function Z(o,r){if(1&o&&(t.TgZ(0,"div",29)(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"span",8),t._uU(4),t.qZA()()),2&o){const e=r.$implicit;t.xp6(2),t.Oqu(e.key+":"),t.xp6(2),t.Oqu(e.value)}}function A(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",17)(1,"div",18)(2,"div",19),t._UZ(3,"img",20),t.TgZ(4,"div",21)(5,"h4",22),t._uU(6),t.qZA(),t.TgZ(7,"span",23),t._uU(8),t.qZA(),t.YNc(9,Z,5,2,"div",24),t.ALo(10,"keyvalue"),t.TgZ(11,"span",23),t._uU(12),t.qZA()()(),t.TgZ(13,"div",25)(14,"div",26)(15,"mat-icon",27),t.NdJ("click",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.removeProductUnit(c))}),t._uU(16,"remove"),t.qZA(),t.TgZ(17,"span",8),t._uU(18),t.qZA(),t.TgZ(19,"mat-icon",27),t.NdJ("click",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.addProductUnit(c))}),t._uU(20,"add"),t.qZA()(),t.TgZ(21,"div",12),t._uU(22),t.qZA(),t.TgZ(23,"mat-icon",28),t.NdJ("click",function(){const c=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.removeFromKart(c))}),t._uU(24,"delete"),t.qZA()()()()}if(2&o){const e=r.$implicit;t.xp6(3),t.Q6J("src",e.mainImage,t.LSH),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu("by "+e.brand),t.xp6(1),t.Q6J("ngForOf",t.lcZ(10,7,e.aditionalInfo)),t.xp6(3),t.Oqu("sku: "+e.sku),t.xp6(6),t.Oqu(e.quantity),t.xp6(4),t.hij(" ",e.price+" "+e.currency," ")}}const h=function(o){return{customBorderRadius:o}};let O=(()=>{class o{constructor(e){this.router=e,this.products=[],this.preBill=[],this.config={}}addProductUnit(e){e.quantity+=1}removeProductUnit(e){e.quantity-=1,e.quantity<1&&(e.quantity=1)}removeFromKart(e){this.products.splice(this.products.indexOf(e),1)}navigateBack(){this.router.navigate(["/Productos"])}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["cmp-cmm-products-kart"]],inputs:{products:"products",preBill:"preBill",config:"config"},decls:47,vars:12,consts:[[1,"row","g-0","flex-column","kartBorder"],[1,"col-12","mb-5","p-3",2,"background-color","#F7F7F7"],[1,"cmm-txt-uppercase","text-center","m-0"],[1,"col-12","position-relative"],[1,"row","w-100","g-0"],[1,"col-12","d-none","d-md-flex","justify-content-between","mb-3"],[1,"w-100","d-flex","flex-column","flex-md-row","justify-content-between","align-items-center","px-4"],[1,"kart_item_product"],[1,"cmm-txt-thin-bold"],[1,"kart_item_controls","d-flex","justify-content-between"],["class","col-12 mb-3",4,"ngFor","ngForOf"],[1,"rounded","border","p-4","col-12"],[1,"cmm-txt-thin-bold","cmm-txt-uppercase"],[1,"d-flex","justify-content-between"],[1,"row","g-0","justify-content-end","mt-5",2,"gap","2rem"],[1,"w-fit",3,"outlined","config","click"],[1,"w-fit",3,"config"],[1,"col-12","mb-3"],[1,"border","rounded","w-100","d-flex","flex-column","flex-md-row","justify-content-between","align-items-center","px-4","py-3","kart_item"],[1,"d-flex","justify-content-start","kart_item_product","gap-3"],[2,"max-width","100px","max-height","80px",3,"src"],[1,"d-flex","flex-column","cmm-txt-uppercase","justify-content-center"],[1,"cmm-txt-thin-bold","fs-16"],[1,"fs-12"],["class","fs-12 d-flex gap-1",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center","justify-content-between","gap-4","mt-3","mt-md-0","kart_item_controls"],[1,"border","px-3","py-2","rounded","d-flex","justify-content-between","fs-12",2,"min-width","120px"],[1,"fs-16","cursor-pointer",2,"width","16px !important","height","16px !important",3,"click"],[1,"cursor-pointer",3,"click"],[1,"fs-12","d-flex","gap-1"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"agregado al carrito"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"h4",8),t._uU(10,"Producto"),t.qZA()(),t.TgZ(11,"div",9)(12,"h4",8),t._uU(13,"Cantidad"),t.qZA(),t.TgZ(14,"h4",8),t._uU(15,"Precio"),t.qZA(),t._UZ(16,"div"),t.qZA()()(),t.YNc(17,A,25,9,"div",10),t.qZA()(),t.TgZ(18,"div",11)(19,"h4",12),t._uU(20,"total de la orden"),t.qZA(),t._UZ(21,"mat-divider"),t.TgZ(22,"div",13)(23,"span"),t._uU(24,"Precio"),t.qZA(),t.TgZ(25,"span"),t._uU(26),t.qZA()(),t.TgZ(27,"div",13)(28,"span"),t._uU(29,"Delivery"),t.qZA(),t.TgZ(30,"span"),t._uU(31),t.qZA()(),t.TgZ(32,"div",13)(33,"span"),t._uU(34,"C\xf3digo de DSCTO"),t.qZA(),t.TgZ(35,"span"),t._uU(36),t.qZA()(),t.TgZ(37,"div",13)(38,"span"),t._uU(39,"Total"),t.qZA(),t.TgZ(40,"span"),t._uU(41),t.qZA()()(),t.TgZ(42,"div",14)(43,"cmp-cmm-new-button",15),t.NdJ("click",function(){return i.navigateBack()}),t._uU(44," REGRESAR "),t.qZA(),t.TgZ(45,"cmp-cmm-new-button",16),t._uU(46," PAGAR "),t.qZA()()()),2&n&&(t.xp6(17),t.Q6J("ngForOf",i.products),t.xp6(9),t.Oqu(i.preBill.basePrice+" "+i.preBill.currency),t.xp6(5),t.Oqu(i.preBill.delivery+" "+i.preBill.currency),t.xp6(5),t.Oqu(i.preBill.discount),t.xp6(5),t.Oqu(i.preBill.totalPrice+" "+i.preBill.currency),t.xp6(2),t.Q6J("outlined",!0)("config",t.VKq(8,h,i.config.customButtonsBorderRadius)),t.xp6(2),t.Q6J("config",t.VKq(10,h,i.config.customButtonsBorderRadius)))},dependencies:[f.d,u.Hw,a.sg,x.O,a.Nd],styles:[".kartBorder[_ngcontent-%COMP%]{padding-bottom:150px!important}.kart_item[_ngcontent-%COMP%]{height:150px}.kart_item_product[_ngcontent-%COMP%]{width:25%}.kart_item_controls[_ngcontent-%COMP%]{width:60%}@media (max-width: 992px){.kart_item[_ngcontent-%COMP%]{height:200px}.kart_item_product[_ngcontent-%COMP%]{width:40%}}@media (max-width: 767px){.kart_item[_ngcontent-%COMP%]{height:230px}}@media (max-width: 767px){.kart_item_product[_ngcontent-%COMP%], .kart_item_controls[_ngcontent-%COMP%]{width:100%}}"]})}return o})(),b=(()=>{class o{constructor(){this.productsList=[{images:[],mainImage:s.Wc.product5,name:"PADRE RICO PADRE POBRE",brand:"Robert T. Kiyosaki",sku:"krogm93746917",price:"14,00",previousPrice:"27,00",quantity:1,currency:"$",id:"5"},{id:"3",images:[s.Wc.product20],mainImage:s.Wc.product6,name:"Never split the difference",brand:"Chris Voss",sku:"krogm93746917",price:"175.00",previousPrice:"",currency:"$",quantity:1,aditionalInfo:[{title:"sinopsis",texts:["El prestigioso ex negociador internacional del FBI Chris Voss, especializado en secuestros con rehenes, nos ense\xf1a un m\xe9todo de negociaci\xf3n rompedor: t\xe1cticas para negociaciones duras que son aplicables en m\xfaltiples aspectos de nuestras vidas."]}]},{id:"3",images:[s.Wc.product20],mainImage:s.Wc.product6,name:"H\xc1BITOS AT\xd3MICOS",brand:"JAMES CLEAR",sku:"krogm93746917",price:"175.00",previousPrice:"",currency:"$",quantity:1}],this.prebill={basePrice:175,delivery:175,totalPrice:175,discount:"_ US$",currency:"US$"}}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["pag-products-overview-layout"]],decls:2,vars:2,consts:[[1,"row","bg-white","w-100","mx-auto"],[1,"col-12","mt-5",3,"products","preBill"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"cmp-cmm-products-kart",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("products",i.productsList)("preBill",i.prebill))},dependencies:[O]})}return o})();function I(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",8),t.NdJ("mousedown",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.scrollUp())})("mouseup",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.stopScrolling())}),t.TgZ(1,"mat-icon",9),t._uU(2,"keyboard_arrow_up"),t.qZA()()}}const q=function(o,r){return[o,r]};function U(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const c=t.CHM(e).index,d=t.oxw();return t.KtG(d.currentImageIndex=c)})("mouseover",function(){const c=t.CHM(e).index,d=t.oxw();return t.KtG(d.currentImageIndex=c)}),t._UZ(1,"img",11),t.qZA()}if(2&o){const e=r.$implicit,n=r.index,i=t.oxw();t.Q6J("ngClass",t.WLB(3,q,i.currentImageIndex==n&&i.images.length>1?"choosen_border":"",i.displayShadow?"shadowBorder":"")),t.xp6(1),t.Q6J("src",e,t.LSH)("alt",e)}}function k(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",12),t.NdJ("mousedown",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.scrollDown())})("mouseup",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.stopScrolling())}),t.TgZ(1,"mat-icon",9),t._uU(2,"keyboard_arrow_down"),t.qZA()()}}let E=(()=>{class o{onResize(e){this.calculateScrollPortion()}constructor(){this.images=[],this.currentImageIndex=0,this.itemSize=0,this.displayShadow=!0}ngOnInit(){this.calculateScrollPortion()}calculateScrollPortion(){let e=document.querySelector(".other_images_column")?.clientHeight,n=document.querySelector(".other_images_column")?.clientWidth,i=document.querySelector(".other_images_column")?.children.length;window.innerWidth>767?0!=i&&(this.itemSize=e/i):0!=i&&(this.itemSize=n/i)}scrollUp(){clearInterval(this.scrollDownInterval),this.scrollUpInterval=setInterval(()=>{document.querySelector(".other_images_column")?.scrollBy({top:-50,left:0,behavior:"smooth"})},150)}scrollDown(){clearInterval(this.scrollUpInterval),this.scrollDownInterval=setInterval(()=>{document.querySelector(".other_images_column")?.scrollBy({top:100,left:0,behavior:"smooth"})},150)}stopScrolling(){clearInterval(this.scrollDownInterval),clearInterval(this.scrollUpInterval)}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["cmp-cmm-product-detail-grid"]],hostBindings:function(n,i){1&n&&t.NdJ("resize",function(d){return i.onResize(d)},!1,t.Jf7)},inputs:{images:"images",displayShadow:"displayShadow"},decls:8,vars:6,consts:[[1,"d-flex","flex-column-reverse","justify-content-between","flex-md-row","w-100","h-100","image_grid","gap-3","p-2","position-relative"],[1,"other_images_column","d-flex","flex-row","flex-md-column","px-1"],["class","arrow_up_container d-none d-md-flex justify-content-center align-items-center cursor-pointer",3,"mousedown","mouseup",4,"ngIf"],["class","other_images_container bg-white cursor-pointer d-flex align-items-center justify-content-center my-1",3,"ngClass","click","mouseover",4,"ngFor","ngForOf"],["class","arrow_down_container d-none d-md-flex justify-content-center align-items-center cursor-pointer",3,"mousedown","mouseup",4,"ngIf"],[1,"main_image_column","bg-white","d-flex","justify-content-center","align-items-center","flex-grow-1",3,"ngClass"],[1,"main_image_container","cursor-pointer","d-flex","justify-content-center","align-items-center"],[1,"main_image",3,"src","alt"],[1,"arrow_up_container","d-none","d-md-flex","justify-content-center","align-items-center","cursor-pointer",3,"mousedown","mouseup"],[1,"fs-30","text-white"],[1,"other_images_container","bg-white","cursor-pointer","d-flex","align-items-center","justify-content-center","my-1",3,"ngClass","click","mouseover"],[1,"other_image",3,"src","alt"],[1,"arrow_down_container","d-none","d-md-flex","justify-content-center","align-items-center","cursor-pointer",3,"mousedown","mouseup"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,I,3,0,"div",2),t.YNc(3,U,2,6,"div",3),t.YNc(4,k,3,0,"div",4),t.qZA(),t.TgZ(5,"div",5)(6,"div",6),t._UZ(7,"img",7),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("ngIf",i.images.length>1),t.xp6(1),t.Q6J("ngForOf",i.images),t.xp6(1),t.Q6J("ngIf",i.images.length>1),t.xp6(1),t.Q6J("ngClass",i.displayShadow?"shadowBorder":""),t.xp6(2),t.Q6J("src",i.images[i.currentImageIndex],t.LSH)("alt",i.images[i.currentImageIndex]))},dependencies:[u.Hw,a.mk,a.sg,a.O5],styles:[".image_grid[_ngcontent-%COMP%]{height:100%;max-height:500px;width:100%;overflow:hidden}.other_images_column[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;max-width:30%}.main_image_column[_ngcontent-%COMP%]{max-width:65%}.other_images_container[_ngcontent-%COMP%]{width:200px;height:200px;max-width:100%;aspect-ratio:1}.other_images_container[_ngcontent-%COMP%]:hover{border:1px solid black;border-style:inset}.other_image[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.main_image_container[_ngcontent-%COMP%]{width:100%;max-height:100%;aspect-ratio:16/9}.main_image[_ngcontent-%COMP%]{max-width:100%}.choosen_border[_ngcontent-%COMP%]{border:1px solid black;border-style:inset}.arrow_up_container[_ngcontent-%COMP%]{position:absolute;top:.5rem;background-color:#0000001a;width:200px;max-width:calc(30% - .875rem)}.arrow_up_container[_ngcontent-%COMP%]:hover, .arrow_down_container[_ngcontent-%COMP%]:hover{background-color:#0000004d}.arrow_down_container[_ngcontent-%COMP%]{position:absolute;bottom:.5rem;width:200px;max-width:calc(30% - .875rem);background-color:#0000001a}@media (max-width: 767px){.other_images_container[_ngcontent-%COMP%]{width:150px;height:150px}.other_images_column[_ngcontent-%COMP%]{max-width:100%;overflow-x:auto;overflow-y:hidden}.other_image[_ngcontent-%COMP%]{min-width:150px;max-width:none}.main_image_column[_ngcontent-%COMP%]{max-width:100%}.main_image_container[_ngcontent-%COMP%]{width:100%;height:100%;max-height:50vw;aspect-ratio:1}.image_grid[_ngcontent-%COMP%]{max-height:none}}"]})}return o})();const F=["textContainers"];function M(o,r){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e.text)}}function B(o,r){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.Oqu(e)}}function R(o,r){if(1&o&&(t.TgZ(0,"div",22)(1,"div",23)(2,"div",24,25),t.YNc(4,M,2,1,"p",26),t.YNc(5,B,2,1,"p",27),t.qZA()()()),2&o){const e=t.oxw().$implicit;t.xp6(4),t.Q6J("ngIf",e.text),t.xp6(1),t.Q6J("ngForOf",e.texts)}}const v=function(o,r,e){return[o,r,e]};function S(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){const c=t.CHM(e).index,d=t.oxw(3);return t.KtG(d.choosenVariant=c)}),t._UZ(1,"div",32),t.qZA()}if(2&o){const e=r.$implicit,n=r.index,i=t.oxw(3);t.Q6J("ngClass",t.kEZ(3,v,n==i.choosenVariant?"scale-1":"",null!=i.config.colorBox&&i.config.colorBox.colorBoxRounded?"rounded":"",null!=i.config.colorBox&&i.config.colorBox.colorBoxBorder?"color_box_border":"")),t.xp6(1),t.Udp("background-color",e.color)}}function D(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",31),t.NdJ("click",function(){const c=t.CHM(e).index,d=t.oxw(3);return t.KtG(d.choosenVariant=c)}),t.TgZ(1,"div",33),t._UZ(2,"img",34),t.qZA()()}if(2&o){const e=r.$implicit,n=r.index,i=t.oxw(3);t.Q6J("ngClass",t.kEZ(2,v,n==i.choosenVariant?"scale-1":"",null!=i.config.colorBox&&i.config.colorBox.colorBoxRounded?"rounded":"",null!=i.config.colorBox&&i.config.colorBox.colorBoxBorder?"color_box_border":"")),t.xp6(2),t.Q6J("src",e.image,t.LSH)}}function J(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",35),t.NdJ("click",function(){const c=t.CHM(e).index,d=t.oxw(3);return t.KtG(d.choosenSize=c)}),t.TgZ(1,"span",36),t._uU(2),t.qZA()()}if(2&o){const e=r.$implicit,n=r.index,i=t.oxw(3);t.Q6J("ngClass",n==i.choosenSize?"scale-1 bg-black":""),t.xp6(1),t.Q6J("ngClass",n==i.choosenSize?"text-white":""),t.xp6(1),t.Oqu(e.text)}}function N(o,r){if(1&o&&(t.TgZ(0,"div",22)(1,"div",28),t.YNc(2,S,2,7,"div",29),t.YNc(3,D,3,6,"div",29),t.YNc(4,J,3,3,"div",30),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("ngForOf",e.colorVariants),t.xp6(1),t.Q6J("ngForOf",e.imageVariants),t.xp6(1),t.Q6J("ngForOf",e.textVariants)}}function H(o,r){if(1&o&&(t.TgZ(0,"div",19)(1,"div",20)(2,"span",18),t._uU(3),t.qZA()(),t.YNc(4,R,6,2,"div",21),t.YNc(5,N,5,3,"div",21),t.qZA()),2&o){const e=r.$implicit;t.xp6(3),t.hij("",e.title,":"),t.xp6(1),t.Q6J("ngIf",!e.type),t.xp6(1),t.Q6J("ngIf","variants"==e.type)}}const L=function(){return{}};let j=(()=>{class o{constructor(){this.mainImageIndex=0,this.choosenVariant=0,this.choosenSize=0,this.config={}}ngAfterViewInit(){console.log(this.textContainers?.nativeElement.children[0].clientHeight)}addProductUnit(){this.product.quantity+=1}removeProductUnit(){this.product.quantity-=1,this.product.quantity<1&&(this.product.quantity=1)}changeMainImageIndex(e){e?(this.mainImageIndex+=1,this.mainImageIndex>=this.product.images.length&&(this.mainImageIndex=0)):(this.mainImageIndex-=1,this.mainImageIndex<0&&(this.mainImageIndex=this.product.images.length-1))}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["cmp-cmm-product-detail"]],viewQuery:function(n,i){if(1&n&&t.Gf(F,5),2&n){let c;t.iGM(c=t.CRH())&&(i.textContainers=c.first)}},inputs:{product:"product",config:"config"},decls:34,vars:8,consts:[[1,"row","g-0","justify-content-evenly","align-items-start","bg-white"],[1,"col-lg-7"],[3,"images"],[1,"col-lg-5","d-flex","justify-content-center"],[1,"d-flex","flex-column","w-100","align-items-start","ps-4","ps-sm-5"],[1,"fs-34","cmm-txt-thin-bold"],[1,"fs-32","cmm-txt-thin-bold"],[1,"fs-34","cmm-txt-thin-bold","my-4"],[1,"w-100"],["class","row g-0 w-100 my-4",4,"ngFor","ngForOf"],[1,"d-flex","mt-4","flex-column"],[1,"mb-3"],[1,"row","g-0","align-items-center","justify-content-between","justify-content-xl-between"],[1,"col-sm-6","col-xl-6","mb-3","border","d-flex","align-items-center",2,"width","fit-content"],[1,"border","p-2","cursor-pointer",3,"click"],[1,"px-5"],[1,"col-sm-6","col-xl-6","mb-3"],[1,"w-100",2,"max-width","200px",3,"config"],[1,"cmm-txt-thin-bold"],[1,"row","g-0","w-100","my-4"],[1,"d-flex","gap-1","mb-3"],["class","col-12",4,"ngIf"],[1,"col-12"],[1,"d-flex","overflow-hidden","flex-column"],[1,"overflow-hidden"],["textContainers",""],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"d-flex"],["class","color_box me-1 cursor-pointer",3,"ngClass","click",4,"ngFor","ngForOf"],["class","color_box me-1 cursor-pointer d-flex align-items-center justify-content-center",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"color_box","me-1","cursor-pointer",3,"ngClass","click"],[1,"w-100","h-100",2,"border-radius","inherit"],[1,"w-100","h-100"],["alt","",1,"w-100","h-100",2,"border-radius","inherit",3,"src"],[1,"color_box","me-1","cursor-pointer","d-flex","align-items-center","justify-content-center",3,"ngClass","click"],[1,"fs-12","cmm-txt-thin-bold",3,"ngClass"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"cmp-cmm-product-detail-grid",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"span",5),t._uU(6),t.qZA(),t.TgZ(7,"span",6),t._uU(8),t.qZA(),t.TgZ(9,"span",7),t._uU(10),t.qZA(),t._UZ(11,"mat-divider",8)(12,"mat-divider",8),t.TgZ(13,"div",8),t.YNc(14,H,6,3,"div",9),t._UZ(15,"mat-divider",8),t.qZA(),t.TgZ(16,"div",8)(17,"div",10)(18,"span",11),t._uU(19,"CANTIDAD:"),t.qZA(),t.TgZ(20,"div",12)(21,"div",13)(22,"div",14),t.NdJ("click",function(){return i.removeProductUnit()}),t.TgZ(23,"mat-icon"),t._uU(24,"expand_more"),t.qZA()(),t.TgZ(25,"span",15),t._uU(26),t.qZA(),t.TgZ(27,"div",14),t.NdJ("click",function(){return i.addProductUnit()}),t.TgZ(28,"mat-icon"),t._uU(29,"expand_less"),t.qZA()()(),t.TgZ(30,"div",16)(31,"cmp-cmm-new-button",17)(32,"span",18),t._uU(33," AGREGAR AL CARRITO "),t.qZA()()()()()()()()()),2&n){let c;t.xp6(2),t.Q6J("images",i.product.images),t.xp6(4),t.Oqu(i.product.name),t.xp6(2),t.Oqu(i.product.brand),t.xp6(2),t.Oqu("REF. "+i.product.price),t.xp6(4),t.Q6J("ngForOf",i.product.aditionalInfo),t.xp6(12),t.Oqu(i.product.quantity),t.xp6(5),t.Q6J("config",null!==(c=i.config.button)&&void 0!==c?c:t.DdM(7,L))}},dependencies:[f.d,u.Hw,a.mk,a.sg,a.O5,x.O,E],styles:[".product_detail_image[_ngcontent-%COMP%]{background-size:contain;background-repeat:no-repeat;background-position:center}.color_box[_ngcontent-%COMP%]{width:30px;height:20px}.color_box_border[_ngcontent-%COMP%]{border:1px solid black}"]})}return o})();const $=function(){return{priceColor:"#E88A10"}};function Q(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"cmp-cmm-product-card-v2",7),t.NdJ("addProduct",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.navigate(i))}),t.qZA()()}if(2&o){const e=r.$implicit;t.xp6(1),t.Q6J("product",e)("configStyle",t.DdM(2,$))}}const G=function(){return{customBorderRadius:"10px",customHeight:"48px"}},K=function(){return{colorBoxBorder:!0}},W=function(o,r){return{button:o,colorBox:r}},Y=[{path:"",component:P},{path:"Carrito",component:b},{path:"Detalle",component:(()=>{class o{constructor(e){this.router=e,this.looks=[],this.product={id:"1",images:[s.Wc.product20],mainImage:s.Wc.product6,name:"Never split the difference",brand:"Chris Voss",price:"175.00",quantity:1,currency:"S",aditionalInfo:[{title:"sinopsis",texts:["El prestigioso ex negociador internacional del FBI Chris Voss, especializado en secuestros con rehenes, nos ense\xf1a un m\xe9todo de negociaci\xf3n rompedor: t\xe1cticas para negociaciones duras que son aplicables en m\xfaltiples aspectos de nuestras vidas."]}]},this.products=[{image:s.Wc.product5,title:"PADRE RICO PADRE POBRE",brand:"Robert T. Kiyosaki",price:"14,00",previousprice:"27,00",currency:"$",id:"5"},{image:s.Wc.product6,title:"UN CUENTO PERFECTO",brand:"EL\xcdSABET BENAVENT",price:"14,00",previousprice:"27,00",currency:"$",id:"6"},{image:s.Wc.product7,title:"H\xc1BITOS AT\xd3MICOS",brand:"JAMES CLEAR",price:"14,00",previousprice:"27,00",currency:"$",id:"7"}],this.promos=[],this.items=[],this.smallMode=!1}navigate(e){this.router.navigate(["/Productos/Detalle"])}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["pag-products-detail-layout"]],decls:6,vars:9,consts:[[1,"row","mx-auto","bg-white","w-100"],[1,"my-5","bg-white","w-100",3,"product","config"],[1,"col-12","my-5"],[1,"row","g-0","w-100","justify-content-start","mt-5"],["class","col-12 col-sm-6 col-md-4 d-flex justify-content-start mb-5",4,"ngFor","ngForOf"],[1,"col-12","px-4",3,"posts"],[1,"col-12","col-sm-6","col-md-4","d-flex","justify-content-start","mb-5"],[1,"w-100","d-flex","justify-content-center",3,"product","configStyle","addProduct"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"cmp-cmm-product-detail",1),t.TgZ(2,"section",2)(3,"div",3),t.YNc(4,Q,2,3,"div",4),t._UZ(5,"cmp-cmm-paginator",5),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("product",i.product)("config",t.WLB(6,W,t.DdM(4,G),t.DdM(5,K))),t.xp6(3),t.Q6J("ngForOf",i.products),t.xp6(1),t.Q6J("posts",i.products))},dependencies:[a.sg,_,j,g._]})}return o})()}];let V=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(Y),m.Bz]})}return o})();var z=l(4766),X=l(8081);let tt=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[a.ez,X.I,z.n,V]})}return o})()}}]);