(()=>{var e={69:()=>{}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}(()=>{"use strict";s(69);const e=class{constructor(e,t){this._container=document.querySelector(e),this._items=t?t.items:[],this._renderer=t?t.renderCallback:()=>{}}appendItem(e){this._container.append(e)}prependItem(e){this._container.prepend(e)}renderItems(){this._items.forEach((e=>this._renderer(e)))}},t="https://mesto.nomoreparties.co/v1/cohort-16",i="f1f27dcb-4c71-4cd5-a34d-2e8f5fd4811e",n={formSelector:".popup__form",inputSelector:".popup__input",submitSelector:".popup__save-button",inactiveButtonClass:"button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},r=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),o=document.querySelector(".profile__update-button"),c=(document.querySelector("#name-input"),document.querySelector("#job-input"),".elements__list"),l="PATCH",h="DELETE",d=class{constructor(e){this._popupOpened="popup_opened",this._handleEscClose=e=>{"Escape"===e.key&&this.close()},this._handleScreenClickClose=e=>{e.target.classList.contains(this._popupOpened)&&this.close()},this._handleButtonClose=e=>{e.target.classList.contains("popup__close-button")&&this.close()},this._popup=document.querySelector(e)}open(){this._popup.classList.add(this._popupOpened),this._setEventListeners()}close(){this._popup.classList.remove(this._popupOpened),this._removeEventListeners()}_setEventListeners(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._handleButtonClose),this._popup.addEventListener("click",this._handleScreenClickClose)}_removeEventListeners(){document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._handleButtonClose),this._popup.removeEventListener("click",this._handleScreenClickClose)}},u=class extends d{constructor(e,t){super(e),this._handleSubmit=e=>{e.preventDefault(),this._handleSubmitCallback(this._getInputValues())},this.open=()=>{super.open(),this._setEventListeners()},this.close=()=>{super.close(),this._reset(),this._removeEventListeners()},this._form=this._popup.querySelector(".popup__form"),this._handleSubmitCallback=t.handleSubmitCallback}_getInputValues(){const e=this._form.querySelectorAll(".popup__input");return Array.from(e).reduce(((e,t)=>{const s=t;return Object.assign(Object.assign({},e),{[s.name]:s.value})}),{})}_reset(){const e=this._form.querySelector(".popup__save-button");this._form.reset(),e.classList.add("button_inactive")}_setEventListeners(){super._setEventListeners(),this._form.addEventListener("submit",this._handleSubmit)}_removeEventListeners(){super._removeEventListeners(),this._form.removeEventListener("submit",this._handleSubmit)}};class _ extends Error{constructor(e){super(e.message),this.name="ApiError",this.status=e.status,this.statusText=e.statusText}parseErrorToJson(){return JSON.stringify({message:this.message,name:this.name,status:this.status,statusText:this.statusText})}}const p=_;const m=class{constructor(e){this._baseUrl=e._baseUrl,this._headers=e._headers}_checkResponceStatus(e){return new Promise(((t,s)=>e.ok?t(e.json()):s(new p({message:`Error: ${e.status} - ${e.statusText}`,status:e.status,statusText:e.statusText}))))}static getInitialData(e){return t=this,s=void 0,n=function*(){const t="function"==typeof e?[e]:Array.isArray(e)?[...e]:[];return Promise.all(t.map((e=>e())))},new((i=void 0)||(i=Promise))((function(e,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function o(e){try{c(n.throw(e))}catch(e){r(e)}}function c(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i((function(e){e(s)}))).then(a,o)}c((n=n.apply(t,s||[])).next())}));var t,s,i,n}};var v=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function o(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,o)}c((i=i.apply(e,t||[])).next())}))};const b=new class extends m{constructor(e,t){super({_baseUrl:e,_headers:t}),this.getUser=()=>v(this,void 0,void 0,(function*(){try{const e=yield fetch(`${this._baseUrl}/users/me`,{method:"GET",headers:Object.assign({},this._headers)});return this._checkResponceStatus(e)}catch(e){return e}}))}editProfile(e){return v(this,void 0,void 0,(function*(){try{const t=yield fetch(`${this._baseUrl}/users/me`,{method:l,headers:Object.assign({},this._headers),body:JSON.stringify({name:e.name,about:e.about})});return this._checkResponceStatus(t)}catch(e){return e}}))}updateAvatar(e){return v(this,void 0,void 0,(function*(){try{const t=yield fetch(`${this._baseUrl}/users/me/avatar`,{method:l,headers:Object.assign({},this._headers),body:JSON.stringify({avatar:e})});return this._checkResponceStatus(t)}catch(e){return e}}))}}(t,{Authorization:i,Accept:"application/json","Content-Type":"application/json"});var k=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function o(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,o)}c((i=i.apply(e,t||[])).next())}))};const f=new class extends m{constructor(e,t){super({_baseUrl:e,_headers:t}),this.getCards=()=>k(this,void 0,void 0,(function*(){try{const e=yield fetch(`${this._baseUrl}/cards`,{method:"GET",headers:Object.assign({},this._headers)});return this._checkResponceStatus(e)}catch(e){return e}}))}addCard(e){return k(this,void 0,void 0,(function*(){try{const t=yield fetch(`${this._baseUrl}/cards`,{method:"POST",headers:Object.assign({},this._headers),body:JSON.stringify({name:e.name,link:e.link})});return this._checkResponceStatus(t)}catch(e){return e}}))}deleteCard(e){return k(this,void 0,void 0,(function*(){try{const t=yield fetch(`${this._baseUrl}/cards/${e}`,{method:h,headers:Object.assign({},this._headers)});return this._checkResponceStatus(t)}catch(e){return e}}))}likeCard(e){return k(this,void 0,void 0,(function*(){try{const t=yield fetch(`${this._baseUrl}/cards/likes/${e}`,{method:"PUT",headers:Object.assign({},this._headers)});return this._checkResponceStatus(t)}catch(e){return e}}))}dislikeCard(e){return k(this,void 0,void 0,(function*(){try{const t=yield fetch(`${this._baseUrl}/cards/likes/${e}`,{method:h,headers:Object.assign({},this._headers)});return this._checkResponceStatus(t)}catch(e){return e}}))}}(t,{Authorization:i,Accept:"application/json","Content-Type":"application/json"});var y=function(e,t,s,i){return new(s||(s=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function o(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(a,o)}c((i=i.apply(e,t||[])).next())}))};const C=new class{constructor(){this._loaderElement=document.querySelector(".loader"),this.start=()=>{this._loaderElement.classList.add("loader_active")},this.stop=()=>{this._loaderElement.classList.remove("loader_active")}}},S=new class{constructor(e){this._id="",this._name=document.querySelector(e.titleSelector),this._about=document.querySelector(e.subtitleSelector),this._avatar=document.querySelector(e.avatarSelector)}set setAvatar(e){this._avatar.src=e}set setName(e){this._name.textContent=e}set setAbout(e){this._about.textContent=e}get getId(){return this._id}set setUser(e){this._id=e._id,this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}get getUser(){return{_id:this._id,name:this._name.textContent||"",about:this._about.textContent||"",avatar:this._avatar.src||""}}}({titleSelector:".profile__title",subtitleSelector:".profile__subtitle",avatarSelector:".profile__avatar"}),L=new class extends d{constructor(e){super(e),this.open=(e,t)=>{this._title.textContent=e||"",this._image.src=t||"",this._image.alt=e||"",super.open()},this._image=document.querySelector(".popup__card-img"),this._title=document.querySelector(".popup__title-img")}}(".popup_type_image"),g=new u(".popup_type_update-avatar",{handleSubmitCallback:e=>{I(g,e.link)}}),E=new u(".popup_type_profile",{handleSubmitCallback:e=>{q(E,e.name,e.about)}}),x=new u(".popup_type_add-card",{handleSubmitCallback:e=>{O(x,e.place,e.link)}}),w=new class extends d{constructor(e,t){super(e),this._itemId="",this._itemMarkup=null,this._handleSubmit=e=>{e.preventDefault(),this._itemId&&this._itemMarkup&&this._handleSubmitCallback(this._itemId,this._itemMarkup)},this.open=()=>{super.open(),this._setEventListeners()},this.close=()=>{super.close(),this._removeEventListeners()},this._form=this._popup.querySelector(".popup__form"),this._handleSubmitCallback=t.handleSubmitCallback}_setEventListeners(){super._setEventListeners(),this._form.addEventListener("submit",this._handleSubmit)}_removeEventListeners(){super._removeEventListeners(),this._form.removeEventListener("submit",this._handleSubmit)}set setItemId(e){this._itemId=e}set setItemMarkup(e){this._itemMarkup=e}}(".popup_type_confirm",{handleSubmitCallback:(e,t)=>{D(w,e,t)}}),I=(e,t="")=>y(void 0,void 0,void 0,(function*(){try{const s=yield b.updateAvatar(t);s&&(S.setAvatar=s.avatar,e.close())}catch(e){console.error(e)}})),q=(e,t="",s="")=>y(void 0,void 0,void 0,(function*(){try{const i=yield b.editProfile({name:t,about:s});i&&(S.setName=i.name,S.setAbout=i.about,e.close())}catch(e){console.error(e)}})),O=(t,s="",i="")=>y(void 0,void 0,void 0,(function*(){try{const n=yield f.addCard({name:s,link:i});if(n){const s=T(n).getView();new e(c).prependItem(s),t.close()}}catch(e){console.error(e)}})),D=(e,t,s)=>y(void 0,void 0,void 0,(function*(){try{(yield f.deleteCard(t))&&(s.remove(),e.close())}catch(e){console.error(e)}})),T=e=>new class{constructor(e,t){this._isLiked=!1,this._cardSelector=e,this._data=t.data,this._handleClickCallback=t.handleClickCallback,this._handleLikeCallback=t.handleLikeCallback,this._handleDislikeCallback=t.handleDislikeCallback,this._handleDeleteCallback=t.handleDeleteCallback,this._likeNumbers=this._data.likes.length}_getTemplate(){return document.querySelector(this._cardSelector).content.cloneNode(!0).children[0]}get getLikeState(){return this._isLiked}get getId(){return this._data._id}checkLike(e,t){if(this._data.likes.some((t=>t._id===e))){const e=t.querySelector(".elements__like-button");this._isLiked=!0,e.classList.add("elements__like-button_active")}}checkOwner(e,t){var s;this._data.owner._id===e||null===(s=t.querySelector(".elements__delete-card"))||void 0===s||s.remove()}_like(e,t){this._isLiked=!0,this._likeNumbers++,e.textContent=this._likeNumbers.toString(),t.classList.add("elements__like-button_active")}_dislike(e,t){this._isLiked=!1,this._likeNumbers--,e.textContent=this._likeNumbers.toString(),t.classList.remove("elements__like-button_active")}_handleClick(e,t){this._handleClickCallback(e,t)}_handleDelete(e){this._handleDeleteCallback(e)}_handleLike(e,t){this._handleLikeCallback(this._data._id),this._like(e,t)}_handleDislike(e,t){this._handleDislikeCallback(this._data._id),this._dislike(e,t)}_handleChangeLike(e,t){this._isLiked?this._handleDislike(e,t):this._handleLike(e,t)}_setEventListeners(e,t){e.querySelector(".elements__delete-card").addEventListener("click",(t=>{t.stopPropagation(),this._handleDelete(e)}));const s=e.querySelector(".elements__like-button");s.addEventListener("click",(e=>{e.stopPropagation(),this._handleChangeLike(t,s)})),e.addEventListener("click",(()=>this._handleClick(this._data.name,this._data.link)))}getView(){const e=this._getTemplate(),t=e.querySelector(".elements__img"),s=e.querySelector(".elements__title"),i=e.querySelector(".elements__like-count");return this._setEventListeners(e,i),t.src=this._data.link,t.alt=this._data.name,s.textContent=this._data.name,i.textContent=this._likeNumbers.toString(),e}}("#template-card",{data:e,handleClickCallback:(e,t)=>{L.open(e,t)},handleDeleteCallback:t=>{w.setItemId=e._id,w.setItemMarkup=t,w.open()},handleLikeCallback:e=>{(e=>{y(void 0,void 0,void 0,(function*(){try{yield f.likeCard(e)}catch(e){console.error(e)}}))})(e)},handleDislikeCallback:e=>{(e=>{y(void 0,void 0,void 0,(function*(){try{yield f.dislikeCard(e)}catch(e){console.error(e)}}))})(e)}});y(void 0,void 0,void 0,(function*(){try{C.start();const t=yield m.getInitialData([b.getUser,f.getCards]),[s,i]=t;S.setUser=s;const l=i.map((e=>T(e))),h=new e(c,{items:l,renderCallback:e=>{const t=e.getView(),s=S.getId;e.checkLike(s,t),e.checkOwner(s,t),h.appendItem(t)}});h.renderItems(),r.addEventListener("click",E.open),o.addEventListener("click",g.open),a.addEventListener("click",x.open),[...document.forms].forEach((e=>{new class{constructor(e,t){this._form=e,this._validationConfig=t,this._handleSubmitEvent=e=>{e.preventDefault(),this._changeSubmitState(!1)}}_showError(e,t){const s=this._form.querySelector(`#${e.id}-error`);s.textContent=t,e.classList.add(this._validationConfig.inputErrorClass),s.classList.add(this._validationConfig.errorClass)}_hideError(e){const t=this._form.querySelector(`#${e.id}-error`);t.textContent="",e.classList.remove(this._validationConfig.inputErrorClass),t.classList.remove(this._validationConfig.errorClass)}_changeSubmitState(e){const t=this._form.querySelector(this._validationConfig.submitSelector);e?(t.disabled=!0,t.classList.add(this._validationConfig.inactiveButtonClass)):(t.disabled=!1,t.classList.remove(this._validationConfig.inactiveButtonClass))}_checkInputValidity(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}_hasInvalidInput(e){return e.some((e=>!e.validity.valid))}_getFormInputs(){return[...this._form.querySelectorAll(this._validationConfig.inputSelector)]}_handleInputEvent(e,t){const s=this._hasInvalidInput(e);this._checkInputValidity(t),this._changeSubmitState(s)}_setEventListeners(e){e.forEach((t=>{t.addEventListener("input",(()=>this._handleInputEvent(e,t)))}))}_removeEventListeners(e){e.forEach((t=>{t.removeEventListener("input",(()=>this._handleInputEvent(e,t)))}))}enable(){const e=this._getFormInputs();0!==e.length&&(this._changeSubmitState(!0),this._form.addEventListener("submit",this._handleSubmitEvent),this._setEventListeners(e))}disable(){const e=this._getFormInputs();this._form.removeEventListener("submit",this._handleSubmitEvent),this._removeEventListeners(e)}}(e,n).enable()}))}catch(e){console.error(e)}finally{C.stop()}}))})()})();