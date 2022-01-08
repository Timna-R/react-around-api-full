(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(18),i=n.n(c),s=n(9),r=(n(29),n(23)),u=n(14),l=n(3),p=n(2),d=n(4),h="http://localhost:3000",j=function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))},b=n(19),m=n(20),f=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(b.a)(this,e),this.customFetch=function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))},this._baseUrl=n,this._headers=a}return Object(m.a)(e,[{key:"getInitialCards",value:function(e){return this.customFetch("".concat(this._baseUrl,"/cards"),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{authorization:"Bearer ".concat(e)})})}},{key:"getUserInfo",value:function(e){return this.customFetch("".concat(this._baseUrl,"/users/me"),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{authorization:"Bearer ".concat(e)})})}},{key:"setUserInfo",value:function(e,t){return this.customFetch("".concat(this._baseUrl,"/users/me"),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})})}},{key:"setProfilePicture",value:function(e,t){return this.customFetch("".concat(this._baseUrl,"/users/me/avatar"),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),method:"PATCH",body:JSON.stringify({avatar:e.avatar})})}},{key:"creatCard",value:function(e,t){return this.customFetch("".concat(this._baseUrl,"/cards"),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),method:"POST",body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e,t){return this.customFetch("".concat(this._baseUrl,"/cards/").concat(e),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),method:"DELETE"})}},{key:"likeCard",value:function(e,t){return this.customFetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),method:"PUT"})}},{key:"disLikeCard",value:function(e,t){return this.customFetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{headers:Object(l.a)(Object(l.a)({},this._headers),{},{authorization:"Bearer ".concat(t)}),method:"DELETE"})}}]),e}())({baseUrl:"http://localhost:3000"}),_=n(0);var O=function(e){var t=e.email,n=e.onLogoutClick,a=Object(d.h)();return Object(_.jsxs)("header",{className:"header",children:[Object(_.jsx)("div",{className:"logo"}),Object(_.jsxs)("div",{className:"header__login",children:["/users/me"===a.pathname&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("p",{className:"header__paragraph",children:t}),Object(_.jsx)(s.b,{to:"/signin",children:Object(_.jsx)("p",{className:"header__link header__link_logout",onClick:n,children:"Log out"})})]}),"/signin"===a.pathname&&Object(_.jsx)(s.b,{to:"/signup",children:Object(_.jsx)("p",{className:"header__link header__paragraph",children:"Sign Up"})}),"/signup"===a.pathname&&Object(_.jsx)(s.b,{to:"/signin",children:Object(_.jsx)("p",{className:"header__link header__paragraph",children:"Log In"})})]})]})},g=o.a.createContext();var v=function(e){var t=o.a.useContext(g),n=t.values,a=t.handleChange,c=e.title,i=e.onSubmit,r=e.buttonText,u=e.linkTo,l=e.paragraphLoggin,p=e.paragraphLink;return Object(_.jsxs)("div",{className:"login",children:[Object(_.jsx)("h3",{className:"login__title",children:c}),Object(_.jsxs)("form",{onSubmit:i,className:"login__form",children:[Object(_.jsx)("input",{id:"input-login-email",className:"login__input",required:!0,name:"email",placeholder:"Email",type:"text",value:n.email||"",onChange:a}),Object(_.jsx)("input",{id:"input-login-password",className:"login__input",required:!0,name:"password",placeholder:"Password",type:"password",value:n.password||"",onChange:a}),Object(_.jsx)("button",{type:"submit",className:"login__button",children:r})]}),Object(_.jsxs)("div",{className:"login__signup",children:[Object(_.jsx)("p",{children:l}),Object(_.jsx)(s.b,{to:u,children:Object(_.jsx)("p",{className:"login__signup_link",children:p})})]})]})};var x=function(e){var t=e.values,n=e.handleLogin,a=e.openInfoToolTip,o=e.setIsSuccess;return Object(_.jsx)(v,{title:"Log in",onSubmit:function(e){if(e.preventDefault(),!t.email||!t.password){var c=new Error("One or more of the fields were not provided");return c.statusCode=400,o(!1),a(),c}n()},buttonText:"Log in",linkTo:"/signup",paragraphLoggin:"Not a member yet?",paragraphLink:"Sign up here"})};var C=function(e){var t=e.isOpen,n=e.isSuccess,a=e.onClose,c=o.a.useState(""),i=Object(p.a)(c,2),s=i[0],r=i[1];return o.a.useEffect((function(){return r(n?"Success! You have now been registered.":"Oops, something went wrong! Please try again."),s}),[n,s]),Object(_.jsx)("div",{className:"popup popup_type_info-tooltip ".concat(t?"popup_open":""),children:Object(_.jsxs)("div",{className:"popup__container popup__container_theme_edit popup__container_theme_success ",children:[Object(_.jsx)("button",{onClick:a,type:"button",className:"popup__close-button ".concat("popup__close-button_login-form"),"aria-label":"close button"}),Object(_.jsx)("div",{className:"login__image ".concat(n?"login__image_success":"login__image_fail")}),Object(_.jsx)("h3",{className:"login__title login__title_success",children:s})]})})};var k=function(e){var t=e.values,n=e.handleSignUp,a=e.openInfoToolTip,o=e.setIsSuccess;return Object(_.jsx)(v,{title:"Sign up",onSubmit:function(e){if(e.preventDefault(),!t.email||!t.password){var c=new Error("One of the fields was filled in incorrectly");return c.statusCode=400,o(!1),a(),c}n()},buttonText:"Sign up",linkTo:"/signin",paragraphLoggin:"Already a member?",paragraphLink:"Log in here!"})},N=n(24),S=["component"],y=function(e){var t=e.component,n=Object(N.a)(e,S);return Object(_.jsx)(d.b,{children:function(){return n.loggedIn?Object(_.jsx)(t,Object(l.a)({},n)):Object(_.jsx)(d.a,{to:"/signin"})}})};var T=function(e){var t=o.a.useContext(g).currentUser,n=e.card,a=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,s=n.owner===t._id?"cards__delete-button":"cards__delete-button_hidden",r=n.likes.some((function(e){return e===t._id})),u="cards__heart-like ".concat(r?"cards__heart-like_full":"");return Object(_.jsxs)("li",{className:"cards__item",children:[Object(_.jsx)("button",{type:"button",className:s,onClick:function(){i(n)}}),Object(_.jsx)("div",{className:"cards__image",style:{backgroundImage:"url(".concat(n.link,")")},onClick:function(){a(n)}}),Object(_.jsxs)("div",{className:"cards__about",children:[Object(_.jsx)("h2",{className:"cards__title",children:n.name}),Object(_.jsxs)("div",{className:"cards__likes",children:[Object(_.jsx)("button",{type:"button",className:u,onClick:function(){c(n)}}),Object(_.jsx)("span",{className:"cards__heart-like-count",children:n.likes.length})]})]})]})};var w=function(e){var t=o.a.useContext(g).currentUser,n=e.onEditAvatarClick,a=e.onEditProfileClick,c=e.onAddPlaceClick,i=e.onCardClick,s=e.onCardLike,r=e.onCardDelete,u=e.cards;return Object(_.jsxs)("main",{className:"content",children:[Object(_.jsxs)("section",{className:"profile",children:[Object(_.jsxs)("div",{onClick:n,className:"profile__image",children:[Object(_.jsx)("img",{className:"profile__profile-picture",src:t.avatar,alt:"Avatar"}),Object(_.jsx)("div",{className:"profile__edit-image"})]}),Object(_.jsxs)("div",{className:"profile__info",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{className:"profile__name",children:t.name})," ",Object(_.jsx)("p",{className:"profile__about",children:t.about})," "]}),Object(_.jsx)("button",{onClick:a,type:"button",className:"profile__edit","aria-label":"edit profile button"})]}),Object(_.jsx)("button",{onClick:c,type:"button",className:"profile__add-button","aria-label":"edit image button"})]}),Object(_.jsx)("section",{className:"elements",children:Object(_.jsx)("ul",{className:"cards",children:u.map((function(e){return Object(_.jsx)(T,{card:e,onCardClick:i,onCardLike:s,onCardDelete:r},e._id)}))})})]})};var E=function(){return Object(_.jsx)("footer",{className:"footer",children:Object(_.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Around The U.S."})})};var L=function(e){var t=e.name,n=e.isOpen,a=e.onClose,o=e.title,c=e.children,i=e.onSubmit,s=e.buttonText;return Object(_.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(n?"popup_open":""),children:Object(_.jsxs)("div",{className:"popup__container popup__container_theme_edit",children:[Object(_.jsx)("button",{onClick:a,type:"button",className:"popup__close-button","aria-label":"close button"}),Object(_.jsx)("h3",{className:"popup__title",children:o}),Object(_.jsxs)("form",{className:"popup__form popup__form_type_edit",name:t,onSubmit:i,children:[c,Object(_.jsx)("button",{type:"submit",className:"popup__button","aria-label":"submit button",children:s})]})]})})};var U=function(e){var t=o.a.useContext(g).currentUser,n=e.isOpen,a=e.onClose,c=e.onUpdateUser,i=e.buttonText,s=o.a.useState(""),r=Object(p.a)(s,2),u=r[0],l=r[1],d=o.a.useState(""),h=Object(p.a)(d,2),j=h[0],b=h[1];return o.a.useEffect((function(){l(t.name),b(t.about)}),[t,n]),Object(_.jsxs)(L,{name:"edit",title:"Edit profile",isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),c({name:u,about:j})},buttonText:i,children:[Object(_.jsx)("input",{id:"input-name",type:"text",className:"popup__input popup__input_type_name",value:u||"",onChange:function(e){l(e.target.value)},name:"name",placeholder:"Name",minLength:"2",maxLength:"40"}),Object(_.jsx)("span",{id:"input-name-error"}),Object(_.jsx)("input",{id:"input-about",type:"text",className:"popup__input popup__input_type_about",value:j||"",onChange:function(e){b(e.target.value)},name:"about",placeholder:"about",minLength:"2",maxLength:"200"}),Object(_.jsx)("span",{id:"input-about-error"})]})};var I=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,c=e.buttonText,i=o.a.useRef({});return o.a.useEffect((function(){i.current.value=""}),[t]),Object(_.jsxs)(L,{name:"edit-profile-picture",title:"Change profile picture",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:i.current.value})},buttonText:c,children:[Object(_.jsx)("input",{id:"input-profile-picture",type:"url",className:"popup__input popup__input_type_profile-picture",ref:i,name:"avatar",placeholder:"Profile picture link",required:!0}),Object(_.jsx)("span",{id:"input-profile-picture-error"})]})};var P=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlaceSubmit,c=e.buttonText,i=o.a.useState(""),s=Object(p.a)(i,2),r=s[0],u=s[1],l=o.a.useState(""),d=Object(p.a)(l,2),h=d[0],j=d[1];return o.a.useEffect((function(){u(""),j("")}),[t]),Object(_.jsxs)(L,{name:"add-card",title:"New place",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:r,link:h})},buttonText:c,children:[Object(_.jsx)("input",{id:"input-card-title",type:"text",className:"popup__input popup__input_type_card-title",value:r,onChange:function(e){u(e.target.value)},name:"name",placeholder:"Title",minLength:"1",maxLength:"30",required:!0}),Object(_.jsx)("span",{id:"input-card-title-error"}),Object(_.jsx)("input",{id:"input-image",type:"url",className:"popup__input popup__input_type_image",value:h,onChange:function(e){j(e.target.value)},name:"link",placeholder:"Image link",required:!0}),Object(_.jsx)("span",{id:"input-image-error"})]})};var A=function(e){var t=e.isOpen,n=e.onClose,a=e.onCardDelete,o=e.card;return Object(_.jsx)(L,{name:"delete-card",title:"Are you sure?",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a(o)},buttonText:"Yes"})};var D=function(e){var t=e.name,n=e.card;return Object(_.jsx)("div",{className:"popup popup_type_".concat(t," ").concat(e.isOpen?"popup_open":""),children:Object(_.jsxs)("div",{className:"popup__container popup__container_theme_image",children:[Object(_.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__close-button","aria-label":"close button"}),Object(_.jsxs)("figure",{children:[Object(_.jsx)("img",{className:"popup__image",src:n.link,alt:n.name}),Object(_.jsx)("figcaption",{className:"popup__image-title",children:n.name})]})]})})};var F=function(){var e=Object(d.g)(),t=o.a.useState({email:"",password:""}),n=Object(p.a)(t,2),a=n[0],c=n[1],i=o.a.useState(!1),s=Object(p.a)(i,2),b=s[0],m=s[1],v=o.a.useState(!1),N=Object(p.a)(v,2),S=N[0],T=N[1],L=o.a.useState(!1),F=Object(p.a)(L,2),B=F[0],z=F[1],J=o.a.useState(!1),q=Object(p.a)(J,2),H=q[0],Y=q[1],G=o.a.useState(!1),M=Object(p.a)(G,2),R=M[0],K=M[1],Q=o.a.useState(!1),V=Object(p.a)(Q,2),W=V[0],X=V[1],Z=o.a.useState(!1),$=Object(p.a)(Z,2),ee=$[0],te=$[1],ne=o.a.useState(!1),ae=Object(p.a)(ne,2),oe=ae[0],ce=ae[1],ie=o.a.useState({}),se=Object(p.a)(ie,2),re=se[0],ue=se[1],le=o.a.useState([]),pe=Object(p.a)(le,2),de=pe[0],he=pe[1],je=o.a.useState([]),be=Object(p.a)(je,2),me=be[0],fe=be[1],_e=o.a.useState("Save"),Oe=Object(p.a)(_e,2),ge=Oe[0],ve=Oe[1],xe=o.a.useState("Create"),Ce=Object(p.a)(xe,2),ke=Ce[0],Ne=Ce[1],Se=o.a.useState({name:"",about:"",avatar:"https://i.imagesup.co/images2/38c8c6871241795530bae71a06c75ae7e1908765.jpg",owner:"",_id:""}),ye=Object(p.a)(Se,2),Te=ye[0],we=ye[1],Ee=o.a.useState(localStorage.getItem("token")),Le=Object(p.a)(Ee,2),Ue=Le[0],Ie=Le[1];function Pe(){te(!0)}function Ae(){T(!1),z(!1),Y(!1),X(!1),K(!1),te(!1)}return o.a.useEffect((function(){f.getInitialCards(Ue).then((function(e){he(e.data)})).catch((function(e){return console.log(e)}))}),[]),o.a.useEffect((function(){var e=function(e){"Escape"===e.key&&Ae()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),o.a.useEffect((function(){if(Ue)(function(e){return j("".concat(h,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e),credentials:"include"}}).then((function(e){return e}))})(Ue).then((function(t){t&&(c({email:t.data.email}),m(!0),f.getUserInfo(Ue).then((function(e){we(e.data)})).catch((function(e){return console.log(e)})),e.push("/users/me"))})).catch((function(e){var t=new Error("The provided token is invalid");t.statusCode=401,console.log("Error: ".concat(t.statusCode,"; ").concat(t.message," ").concat(Ue))}));else{var t=new Error("Token not provided or provided in the wrong format");t.statusCode=400,console.log("Error: ".concat(t.statusCode,"; ").concat(t.message))}}),[e]),o.a.useEffect((function(){f._headers={Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(Ue)}}),[Ue]),Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(g.Provider,{value:{currentUser:Te,values:a,handleChange:function(e){var t=e.target,n=t.name,o=t.value;c(Object(l.a)(Object(l.a)({},a),{},Object(u.a)({},n,o)))}},children:[Object(_.jsxs)("div",{className:"page",children:[Object(_.jsx)(O,{email:a.email,onLogoutClick:function(){localStorage.getItem("token")&&(localStorage.removeItem("token"),Ie(""),c({email:"",password:""}),ce(!1),m(!1))}}),Object(_.jsxs)(d.d,{children:[Object(_.jsx)(d.b,{path:"/signin",children:Object(_.jsx)(x,{values:a,handleLogin:function(){(function(e){var t=e.email,n=e.password;return j("".concat(h,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",credentials:"include"},body:JSON.stringify({email:t,password:n})}).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e}))})(a).then((function(t){if(console.log(Ue),!t){var n=new Error("The user with the specified email not found");throw n.statusCode=401,n}if(t.token)return localStorage.setItem("token",t.token),Ie(t.token),m(!0),f.getUserInfo(t.token).then((function(e){console.log(e.data),we(e.data),console.log(Ue),f.getInitialCards(t.token).then((function(e){return he(e.data)}))})).catch((function(e){return console.log(e.message)})),void e.push("/users/me")})).catch((function(e){ce(!1),Pe(),console.log(e)}))},openInfoToolTip:Pe,setIsSuccess:ce})}),Object(_.jsx)(d.b,{path:"/signup",children:Object(_.jsx)(k,{values:a,handleSignUp:function(){(function(e){var t=e.email,n=e.password;return j("".concat(h,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",credentials:"include"},body:JSON.stringify({email:t,password:n})}).then((function(e){return e}))})(a).then((function(t){if(!t){var n=new Error("The user with the specified email not found");throw n.statusCode=401,n}ce(!0),Pe(),e.push("/signin")})).catch((function(e){ce(!1),Pe(),console.log(e)}))},openInfoToolTip:Pe,setIsSuccess:ce})}),Object(_.jsx)(y,{path:"/",loggedIn:b,component:w,onEditProfileClick:function(){T(!0)},onEditAvatarClick:function(){Y(!0)},onAddPlaceClick:function(){z(!0)},onCardClick:function(e){ue(e),X(!0)},onCardLike:function(e){e.likes.some((function(e){return e._id===Te.id}))?f.disLikeCard(e._id,Ue).then((function(t){he((function(n){return n.map((function(n){return n._id===e._id?t.data:n}))}))})).catch((function(e){return console.log(e)})):f.likeCard(e._id,Ue).then((function(t){he((function(n){return n.map((function(n){return n._id===e._id?t.data:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){K(!0),fe(e)},cards:de})]}),Object(_.jsx)(E,{})]}),Object(_.jsx)(C,{isOpen:ee,isSuccess:oe,onClose:Ae}),Object(_.jsx)(U,{isOpen:S,onClose:Ae,onUpdateUser:function(e){ve("Saving..."),f.setUserInfo(e,Ue).then((function(e){we(e.data),Ae()})).catch((function(e){return console.log(e)})).finally((function(){ve("Save")}))},buttonText:ge}),Object(_.jsx)(P,{isOpen:B,onClose:Ae,onAddPlaceSubmit:function(e){Ne("Creating..."),f.creatCard(e,Ue).then((function(e){he([e.data].concat(Object(r.a)(de))),Ae()})).catch((function(e){return console.log(e)})).finally((function(){Ne("Create")}))},buttonText:ke}),Object(_.jsx)(I,{isOpen:H,onClose:Ae,onUpdateAvatar:function(e){ve("Saving..."),f.setProfilePicture(e,Ue).then((function(e){we(e.data),Ae()})).catch((function(e){return console.log(e)})).finally((function(){ve("Save")}))},buttonText:ge}),Object(_.jsx)(A,{isOpen:R,onClose:Ae,onCardDelete:function(e){console.log(e._id),f.deleteCard(e._id,Ue).then((function(){var t=de.filter((function(t){return e._id!==t._id}));he(t),Ae()})).catch((function(e){return console.log(e)}))},card:me}),Object(_.jsx)(D,{name:"image",card:re,isOpen:W,onClose:Ae})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))};i.a.render(Object(_.jsx)(o.a.StrictMode,{children:Object(_.jsx)(s.a,{children:Object(_.jsx)(F,{})})}),document.getElementById("root")),B()}},[[39,1,2]]]);
//# sourceMappingURL=main.5d5fb772.chunk.js.map