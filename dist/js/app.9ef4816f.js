(function(){"use strict";var e={1447:function(e,t,n){var r={};n.r(r),n.d(r,{close:function(){return Te},fork:function(){return Se},home:function(){return E},leftArrow:function(){return Oe},loading:function(){return Xe},logo:function(){return K},logout:function(){return re},rightArrow:function(){return $e},star:function(){return Ce},triangle:function(){return de}});var o=n(9242),s=n(7139),i=n(6265),a=n.n(i);const l="https://api.github.com",c=({url:e,method:t="get",data:n={},headers:r={}})=>a()({url:e,method:t,data:n,baseURL:l,headers:r}),d=e=>e<10?`0${e}`:e,u=(e="javascript")=>{const t=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),o=[r.getFullYear(),d(r.getMonth()+1),d(r.getDate()+1)].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q",`language:${e} created:>${o}`),c({url:`/search/repositories?${t}`})},p=({owner:e,repo:t})=>{const n="application/vnd.github.v3.html+json";return c({url:`/repos/${e}/${t}/readme`,headers:{accept:n}})};var m={namespaced:!0,state:{data:[]},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},mutations:{SET_TRENDINGS:(e,t)=>{e.data=t},SET_README:(e,t)=>{e.data=e.data.map((e=>(t.id===e.id&&(e.readme=t.content),e)))}},actions:{async fetchTrendings({state:e,commit:t,rootState:n}){try{const{data:e}=await u();t("SET_TRENDINGS",e.items)}catch(r){throw console.log(r),r}},async fetchReadme({commit:e,getters:t},{id:n,owner:r,repo:o}){const s=t.getRepoById(n);if(void 0===s.readme)try{const{data:t}=await p({owner:r,repo:o});e("SET_README",{id:n,content:t})}catch(i){throw console.log(i),i}}}},v=(0,s.MT)({modules:{users:m}}),h=n(3396);function g(e,t,n,r,o,s){const i=(0,h.up)("router-view");return(0,h.wg)(),(0,h.j4)(i)}var C={name:"App",methods:{...(0,s.nv)({fetchTrendings:"users/fetchTrendings"})},async created(){await this.fetchTrendings()}},w=n(7477);const f=(0,w.Z)(C,[["render",g]]);var _=f,L=n(2483);const b={class:"hat"},y={class:"header"},S={class:"logo"},x={class:"stories-list"},D={class:"maincontent"};function Z(e,t,n,r,o,s){const i=(0,h.up)("icon"),a=(0,h.up)("navigation-menu"),l=(0,h.up)("story-user-item"),c=(0,h.up)("Header"),d=(0,h.up)("library");return(0,h.wg)(),(0,h.iD)(h.HY,null,[(0,h._)("div",b,[(0,h.Wm)(c,null,{navigation:(0,h.w5)((()=>[(0,h._)("div",y,[(0,h._)("div",S,[(0,h.Wm)(i,{name:"logo"})]),(0,h.Wm)(a,{photo:"https://picsum.photos/200/300"})])])),content:(0,h.w5)((()=>[(0,h._)("ul",x,[((0,h.wg)(!0),(0,h.iD)(h.HY,null,(0,h.Ko)(e.users,((t,n)=>((0,h.wg)(),(0,h.iD)("li",{class:"stories-item",key:t.id,ref_for:!0,ref:"item"},[(0,h.Wm)(l,{obj:s.getStoryData(t),onOnPress:t=>e.$router.push({name:"stories",params:{initialSlide:n}})},null,8,["obj","onOnPress"])])))),128))])])),_:1})]),(0,h._)("main",D,[(0,h.Wm)(d,{remarks:o.remarks,lists:o.lists},null,8,["remarks","lists"])])],64)}const k={class:"c-header"},H={class:"x-container"},V={class:"navigation"},O={key:0,class:"content"};function M(e,t){return(0,h.wg)(),(0,h.iD)("div",k,[(0,h._)("div",H,[(0,h._)("div",V,[(0,h.WI)(e.$slots,"navigation",{},void 0,!0)]),e.$slots.content?((0,h.wg)(),(0,h.iD)("div",O,[(0,h.WI)(e.$slots,"content",{},void 0,!0)])):(0,h.kq)("",!0)])])}const N={},j=(0,w.Z)(N,[["render",M],["__scopeId","data-v-76d85325"]]);var P=j;function I(e,t,n,r,o,s){return(0,h.wg)(),(0,h.j4)((0,h.LL)(n.name))}n(6699);const W={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},$=(0,h._)("path",{d:"M14.0692 4.06704C15.1853 3.12849 16.8147 3.12849 17.9308 4.06704L26.9308 11.6352C27.6087 12.2052 28 13.0456 28 13.9313V26.5C28 27.6046 27.1046 28.5 26 28.5H20.5C19.3954 28.5 18.5 27.6046 18.5 26.5V19.5H13.5V26.5C13.5 27.6046 12.6046 28.5 11.5 28.5H6C4.89543 28.5 4 27.6046 4 26.5V13.9313C4 13.0456 4.39135 12.2052 5.0692 11.6352L14.0692 4.06704Z",fill:"currentColor"},null,-1),q=[$];function A(e,t){return(0,h.wg)(),(0,h.iD)("svg",W,q)}const B={},F=(0,w.Z)(B,[["render",A]]);var E=F;const R={preserveAspectRatio:"none",viewBox:"0 0 175 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T=(0,h.uE)('<path d="M18.6664 10.4756H24.3009C23.5838 5.28933 19.0122 1.63971 13.0832 1.63971C6.15528 1.63971 0.815308 6.63393 0.815308 15.1369C0.815308 23.435 5.80953 28.5829 13.1984 28.5829C19.819 28.5829 24.5443 24.3954 24.5443 17.4931V14.1893H13.5698V18.3639H19.2043C19.1274 21.6166 16.9121 23.6783 13.224 23.6783C9.06217 23.6783 6.43701 20.5665 6.43701 15.0857C6.43701 9.63046 9.16462 6.54429 13.1728 6.54429C16.0285 6.54429 17.9621 8.01694 18.6664 10.4756Z" fill="currentColor"></path><path d="M28.5773 28.2243H34.0325V8.55478H28.5773V28.2243ZM31.3177 6.01925C32.944 6.01925 34.2758 4.7771 34.2758 3.25322C34.2758 1.74215 32.944 0.5 31.3177 0.5C29.7042 0.5 28.3724 1.74215 28.3724 3.25322C28.3724 4.7771 29.7042 6.01925 31.3177 6.01925Z" fill="currentColor"></path><path d="M47.6026 8.55478H43.9017V3.84229H38.4465V8.55478H35.7573V12.6526H38.4465V22.8972C38.4209 26.7517 41.046 28.6597 45.003 28.4932C46.4116 28.442 47.4105 28.1603 47.9611 27.981L47.1031 23.9216C46.8342 23.9728 46.258 24.1009 45.7457 24.1009C44.6572 24.1009 43.9017 23.6911 43.9017 22.18V12.6526H47.6026V8.55478Z" fill="currentColor"></path><path d="M58.5699 28.6085C64.5373 28.6085 68.251 24.5235 68.251 18.4664C68.251 12.3709 64.5373 8.29867 58.5699 8.29867C52.6024 8.29867 48.8888 12.3709 48.8888 18.4664C48.8888 24.5235 52.6024 28.6085 58.5699 28.6085ZM58.5955 24.3826C55.8422 24.3826 54.4336 21.8599 54.4336 18.428C54.4336 14.996 55.8422 12.4605 58.5955 12.4605C61.2975 12.4605 62.7061 14.996 62.7061 18.428C62.7061 21.8599 61.2975 24.3826 58.5955 24.3826Z" fill="currentColor"></path><path d="M79.3975 36.0102C85.0192 36.0102 89.0146 33.449 89.0146 28.4164V8.55478H83.5978V11.8586H83.3929C82.663 10.2579 81.0623 8.29867 77.7712 8.29867C73.4557 8.29867 69.8061 11.6538 69.8061 18.3511C69.8061 24.8948 73.3533 27.9426 77.784 27.9426C80.9214 27.9426 82.6758 26.3675 83.3929 24.7412H83.6234V28.3396C83.6234 31.0416 81.8947 32.0916 79.5256 32.0916C77.1181 32.0916 75.9016 31.0416 75.4534 29.8506L70.4079 30.5293C71.061 33.6283 74.096 36.0102 79.3975 36.0102ZM79.5128 23.8448C76.8364 23.8448 75.3766 21.719 75.3766 18.3255C75.3766 14.9832 76.8108 12.6398 79.5128 12.6398C82.1636 12.6398 83.649 14.8808 83.649 18.3255C83.649 21.7959 82.138 23.8448 79.5128 23.8448Z" fill="currentColor"></path><path d="M92.0936 28.2243H97.5488V17.0962C97.5488 14.6759 99.316 13.0112 101.723 13.0112C102.479 13.0112 103.516 13.1392 104.029 13.3057V8.46514C103.542 8.34989 102.863 8.27305 102.313 8.27305C100.11 8.27305 98.3044 9.55362 97.5873 11.9867H97.3824V8.55478H92.0936V28.2243Z" fill="currentColor"></path><path d="M110.632 28.5957C113.539 28.5957 115.422 27.3279 116.382 25.4967H116.536V28.2243H121.709V14.9576C121.709 10.2707 117.739 8.29867 113.36 8.29867C108.647 8.29867 105.548 10.5525 104.793 14.1381L109.838 14.5478C110.21 13.2417 111.375 12.2812 113.334 12.2812C115.191 12.2812 116.254 13.2161 116.254 14.8296V14.9064C116.254 16.1742 114.909 16.3406 111.49 16.6736C107.597 17.0321 104.101 18.3383 104.101 22.7307C104.101 26.6236 106.88 28.5957 110.632 28.5957ZM112.195 24.8308C110.517 24.8308 109.313 24.0497 109.313 22.5514C109.313 21.0147 110.581 20.2592 112.502 19.9903C113.693 19.8238 115.639 19.5421 116.292 19.1067V21.194C116.292 23.2557 114.589 24.8308 112.195 24.8308Z" fill="currentColor"></path><path d="M124.679 28.2243H130.135V16.4175C130.135 14.2405 131.518 12.7935 133.336 12.7935C135.129 12.7935 136.333 14.0228 136.333 15.9565V28.2243H141.621V16.2126C141.621 14.1765 142.787 12.7935 144.771 12.7935C146.513 12.7935 147.819 13.8819 147.819 16.0717V28.2243H153.262V14.996C153.262 10.7317 150.726 8.29867 147.064 8.29867C144.182 8.29867 141.941 9.77132 141.135 12.0251H140.93C140.302 9.74571 138.292 8.29867 135.59 8.29867C132.939 8.29867 130.929 9.70729 130.109 12.0251H129.878V8.55478H124.679V28.2243Z" fill="currentColor"></path><path d="M174.815 0.768919H170.116L161.664 32.1685H166.364L174.815 0.768919Z" fill="currentColor"></path>',9),z=[T];function Y(e,t){return(0,h.wg)(),(0,h.iD)("svg",R,z)}const U={},J=(0,w.Z)(U,[["render",Y]]);var K=J;const G={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},X=(0,h._)("path",{d:"M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",fill:"currentColor"},null,-1),Q=[X];function ee(e,t){return(0,h.wg)(),(0,h.iD)("svg",G,Q)}const te={},ne=(0,w.Z)(te,[["render",ee]]);var re=ne;const oe={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},se=(0,h._)("path",{d:"M12.7996 10.2603C12.5177 10.5639 12.0432 10.5814 11.7397 10.2996L8 6.77348L4.26033 10.2996C3.9568 10.5814 3.48225 10.5639 3.2004 10.2603C2.91855 9.9568 2.93612 9.48225 3.23966 9.2004L7.48966 5.2004C7.77742 4.9332 8.22257 4.9332 8.51033 5.2004L12.7603 9.2004C13.0639 9.48225 13.0814 9.9568 12.7996 10.2603Z",fill:"currentColor"},null,-1),ie=[se];function ae(e,t){return(0,h.wg)(),(0,h.iD)("svg",oe,ie)}const le={},ce=(0,w.Z)(le,[["render",ae]]);var de=ce;const ue={width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=(0,h._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 1.25C8.14006 1.24991 8.2773 1.28901 8.39624 1.36289C8.51518 1.43676 8.61106 1.54245 8.67304 1.668L10.555 5.483L14.765 6.095C14.9035 6.11511 15.0336 6.17355 15.1405 6.26372C15.2475 6.35388 15.3272 6.47218 15.3704 6.60523C15.4137 6.73829 15.4189 6.8808 15.3854 7.01665C15.352 7.1525 15.2812 7.27628 15.181 7.374L12.135 10.344L12.854 14.536C12.8777 14.6739 12.8624 14.8157 12.8097 14.9454C12.757 15.0751 12.6691 15.1874 12.5559 15.2697C12.4427 15.352 12.3087 15.401 12.1691 15.4111C12.0295 15.4212 11.8899 15.3921 11.766 15.327L8.00004 13.347L4.23404 15.327C4.11023 15.392 3.97071 15.4211 3.83123 15.411C3.69176 15.4009 3.55788 15.352 3.44472 15.2699C3.33157 15.1877 3.24363 15.0755 3.19086 14.946C3.13808 14.8165 3.12255 14.6749 3.14604 14.537L3.86604 10.343L0.818042 7.374C0.717608 7.27632 0.646541 7.15247 0.612894 7.01647C0.579246 6.88047 0.584364 6.73777 0.627666 6.60453C0.670969 6.47129 0.750725 6.35284 0.857898 6.26261C0.96507 6.17238 1.09537 6.11397 1.23404 6.094L5.44404 5.483L7.32704 1.668C7.38902 1.54245 7.48491 1.43676 7.60385 1.36289C7.72279 1.28901 7.86003 1.24991 8.00004 1.25ZM8.00004 3.695L6.61504 6.5C6.56126 6.6089 6.48183 6.70311 6.38359 6.77453C6.28534 6.84595 6.17122 6.89244 6.05104 6.91L2.95404 7.36L5.19404 9.544C5.28119 9.62886 5.3464 9.73365 5.38403 9.84933C5.42166 9.96501 5.43059 10.0881 5.41004 10.208L4.88204 13.292L7.65104 11.836C7.75867 11.7794 7.87845 11.7499 8.00004 11.7499C8.12164 11.7499 8.24141 11.7794 8.34904 11.836L11.119 13.292L10.589 10.208C10.5685 10.0881 10.5774 9.96501 10.615 9.84933C10.6527 9.73365 10.7179 9.62886 10.805 9.544L13.045 7.361L9.94904 6.911C9.82886 6.89344 9.71474 6.84695 9.6165 6.77553C9.51825 6.70411 9.43883 6.6099 9.38504 6.501L8.00004 3.694V3.695Z",fill:"currentColor"},null,-1),me=[pe];function ve(e,t){return(0,h.wg)(),(0,h.iD)("svg",ue,me)}const he={},ge=(0,w.Z)(he,[["render",ve]]);var Ce=ge;const we={width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},fe=(0,h._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 4.25001C5 4.44892 4.92099 4.63969 4.78033 4.78034C4.63968 4.92099 4.44892 5.00001 4.25 5.00001C4.05109 5.00001 3.86033 4.92099 3.71967 4.78034C3.57902 4.63969 3.5 4.44892 3.5 4.25001C3.5 4.05109 3.57902 3.86033 3.71967 3.71968C3.86033 3.57902 4.05109 3.50001 4.25 3.50001C4.44892 3.50001 4.63968 3.57902 4.78033 3.71968C4.92099 3.86033 5 4.05109 5 4.25001ZM5 6.37201C5.50042 6.19509 5.92217 5.84696 6.19073 5.38915C6.45929 4.93134 6.55735 4.39333 6.4676 3.87021C6.37785 3.34709 6.10605 2.87253 5.70025 2.53043C5.29445 2.18832 4.78077 2.00069 4.25 2.00069C3.71924 2.00069 3.20556 2.18832 2.79976 2.53043C2.39396 2.87253 2.12216 3.34709 2.03241 3.87021C1.94265 4.39333 2.04072 4.93134 2.30928 5.38915C2.57784 5.84696 2.99959 6.19509 3.5 6.37201V7.25001C3.5 7.84674 3.73706 8.41904 4.15901 8.841C4.58097 9.26295 5.15327 9.50001 5.75 9.50001H7.25V11.628C6.74932 11.8049 6.3273 12.1532 6.05855 12.6112C5.78981 13.0692 5.69164 13.6075 5.78139 14.1309C5.87115 14.6543 6.14306 15.1291 6.54905 15.4714C6.95504 15.8136 7.46897 16.0014 8 16.0014C8.53104 16.0014 9.04497 15.8136 9.45096 15.4714C9.85695 15.1291 10.1289 14.6543 10.2186 14.1309C10.3084 13.6075 10.2102 13.0692 9.94146 12.6112C9.67271 12.1532 9.25069 11.8049 8.75 11.628V9.50001H10.25C10.8467 9.50001 11.419 9.26295 11.841 8.841C12.263 8.41904 12.5 7.84674 12.5 7.25001V6.37201C13.0004 6.19509 13.4222 5.84696 13.6907 5.38915C13.9593 4.93134 14.0574 4.39333 13.9676 3.87021C13.8778 3.34709 13.6061 2.87253 13.2002 2.53043C12.7944 2.18832 12.2808 2.00069 11.75 2.00069C11.2192 2.00069 10.7056 2.18832 10.2998 2.53043C9.89396 2.87253 9.62216 3.34709 9.53241 3.87021C9.44265 4.39333 9.54072 4.93134 9.80928 5.38915C10.0778 5.84696 10.4996 6.19509 11 6.37201V7.25001C11 7.44892 10.921 7.63969 10.7803 7.78034C10.6397 7.92099 10.4489 8.00001 10.25 8.00001H5.75C5.55109 8.00001 5.36033 7.92099 5.21967 7.78034C5.07902 7.63969 5 7.44892 5 7.25001V6.37201ZM8.75 13.75C8.75 13.9489 8.67099 14.1397 8.53033 14.2803C8.38968 14.421 8.19892 14.5 8 14.5C7.80109 14.5 7.61033 14.421 7.46967 14.2803C7.32902 14.1397 7.25 13.9489 7.25 13.75C7.25 13.5511 7.32902 13.3603 7.46967 13.2197C7.61033 13.079 7.80109 13 8 13C8.19892 13 8.38968 13.079 8.53033 13.2197C8.67099 13.3603 8.75 13.5511 8.75 13.75ZM11.75 5.00001C11.9489 5.00001 12.1397 4.92099 12.2803 4.78034C12.421 4.63969 12.5 4.44892 12.5 4.25001C12.5 4.05109 12.421 3.86033 12.2803 3.71968C12.1397 3.57902 11.9489 3.50001 11.75 3.50001C11.5511 3.50001 11.3603 3.57902 11.2197 3.71968C11.079 3.86033 11 4.05109 11 4.25001C11 4.44892 11.079 4.63969 11.2197 4.78034C11.3603 4.92099 11.5511 5.00001 11.75 5.00001Z",fill:"currentColor"},null,-1),_e=[fe];function Le(e,t){return(0,h.wg)(),(0,h.iD)("svg",we,_e)}const be={},ye=(0,w.Z)(be,[["render",Le]]);var Se=ye;const xe={width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},De=(0,h._)("path",{d:"M8.72228 17.4388L8.56806 17.3056L1.23322 9.9708L1.08692 9.79854C0.740634 9.31559 0.745078 8.65876 1.10023 8.18029L1.23341 8.02607L8.56954 0.692742L8.72378 0.55964C9.26215 0.160342 10.026 0.204864 10.5141 0.693113C11.0021 1.18136 11.0464 1.94525 10.6469 2.48346L10.5137 2.63766L5.52663 7.62504L17.7916 7.62504L17.9782 7.63759C18.5883 7.72036 19.0713 8.20333 19.1541 8.81346L19.1666 9.00004L19.1541 9.18662C19.0713 9.79675 18.5883 10.2797 17.9782 10.3625L17.7916 10.375L5.52663 10.375L10.5126 15.3611L10.6589 15.5333C11.0051 16.0162 11.0008 16.673 10.6457 17.1514L10.5126 17.3056L10.3404 17.4519C9.85749 17.7982 9.20076 17.7938 8.72228 17.4388Z",fill:"currentColor"},null,-1),Ze=[De];function ke(e,t){return(0,h.wg)(),(0,h.iD)("svg",xe,Ze)}const He={},Ve=(0,w.Z)(He,[["render",ke]]);var Oe=Ve;const Me={width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne=(0,h._)("path",{d:"M11.2777 0.561221L11.4319 0.694353L18.7668 8.02919L18.9131 8.20146C19.2594 8.68441 19.2549 9.34124 18.8998 9.81971L18.7666 9.97393L11.4305 17.3073L11.2762 17.4404C10.7379 17.8397 9.97398 17.7951 9.48592 17.3069C8.99785 16.8186 8.95362 16.0547 9.35312 15.5165L9.48629 15.3623L14.4734 10.375H2.20837L2.0218 10.3624C1.41167 10.2796 0.928696 9.79667 0.845925 9.18654L0.833374 8.99996L0.845925 8.81338C0.928696 8.20325 1.41167 7.72028 2.0218 7.63751L2.20837 7.62496H14.4734L9.48739 2.6389L9.34111 2.46665C8.99486 1.98378 8.99924 1.32705 9.35426 0.848571L9.48739 0.694353L9.65964 0.548072C10.1425 0.201816 10.7992 0.206199 11.2777 0.561221Z",fill:"currentColor"},null,-1),je=[Ne];function Pe(e,t){return(0,h.wg)(),(0,h.iD)("svg",Me,je)}const Ie={},We=(0,w.Z)(Ie,[["render",Pe]]);var $e=We;const qe={width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ae=(0,h._)("path",{d:"M0.899054 0.887401L1.01256 0.762563C1.65578 0.119347 2.67513 0.0815103 3.3626 0.649054L3.48744 0.762563L11.75 9.025L20.0126 0.762563C20.696 0.0791457 21.804 0.0791457 22.4874 0.762563C23.1709 1.44598 23.1709 2.55402 22.4874 3.23744L14.225 11.5L22.4874 19.7626C23.1307 20.4058 23.1685 21.4251 22.6009 22.1126L22.4874 22.2374C21.8442 22.8807 20.8249 22.9185 20.1374 22.3509L20.0126 22.2374L11.75 13.975L3.48744 22.2374C2.80402 22.9209 1.69598 22.9209 1.01256 22.2374C0.329146 21.554 0.329146 20.446 1.01256 19.7626L9.275 11.5L1.01256 3.23744C0.369347 2.59422 0.33151 1.57487 0.899054 0.887401L1.01256 0.762563L0.899054 0.887401Z",fill:"white"},null,-1),Be=[Ae];function Fe(e,t){return(0,h.wg)(),(0,h.iD)("svg",qe,Be)}const Ee={},Re=(0,w.Z)(Ee,[["render",Fe]]);var Te=Re;const ze={width:"62",height:"62",viewBox:"0 0 62 62",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ye=(0,h._)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M49.4296 31.0006C49.4296 20.8225 41.1786 12.5715 31.0005 12.5715C30.1721 12.5715 29.5005 11.9 29.5005 11.0715C29.5005 10.2431 30.1721 9.57153 31.0005 9.57153C42.8355 9.57153 52.4296 19.1657 52.4296 31.0006C52.4296 42.8356 42.8355 52.4298 31.0005 52.4298C19.1656 52.4298 9.57141 42.8356 9.57141 31.0006C9.57141 30.1722 10.243 29.5006 11.0714 29.5006C11.8998 29.5006 12.5714 30.1722 12.5714 31.0006C12.5714 41.1788 20.8224 49.4298 31.0005 49.4298C41.1786 49.4298 49.4296 41.1788 49.4296 31.0006Z",fill:"#31AE54"},null,-1),Ue=[Ye];function Je(e,t){return(0,h.wg)(),(0,h.iD)("svg",ze,Ue)}const Ke={},Ge=(0,w.Z)(Ke,[["render",Je]]);var Xe=Ge,Qe={name:"Icon",components:{...r},props:{name:{type:String,required:!0,validator(e){return Object.keys(r).includes(e)}}}};const et=(0,w.Z)(Qe,[["render",I]]);var tt=et,nt=n(2268);const rt={class:"avatar"},ot=["src"],st={class:"username"};function it(e,t,n,r,o,s){return(0,h.wg)(),(0,h.iD)("button",{class:"c-story-user-item",onClick:t[0]||(t[0]=t=>e.$emit("onPress"))},[(0,h._)("div",rt,[(0,h._)("img",{src:n.obj.userAvatar,class:"img",alt:"username avatar"},null,8,ot)]),(0,h._)("div",st,(0,nt.zw)(n.obj.username),1)])}var at={props:{obj:{type:Object,required:!0}},emits:["onPress"]};const lt=(0,w.Z)(at,[["render",it],["__scopeId","data-v-7cc37c76"]]);var ct=lt,dt=JSON.parse('[{"id":"0","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Josh"},{"id":"1","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Andrew"},{"id":"2","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Camille"},{"id":"3","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Marselle"},{"id":"4","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Piter"},{"id":"5","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Can"},{"id":"6","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Iloveanime"},{"id":"7","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Diself"},{"id":"8","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Gartor"},{"id":"9","avatar":"https://avatars.githubusercontent.com/u/77202162?v=4","username":"Camilr"}]'),ut=JSON.parse('[{"id":"0","username":"joshua_l","text":"Enable performance measuring in production, at the user\'s request"},{"id":"1","username":"Camille","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":"2","username":"Marselle","text":"transition-group with flex parent causes removed items to fly"}]'),pt=JSON.parse('[{"id":"1","title":"Vue.js","text":"framework for building interactive web applications ⚡","textDescription":"JavaScript","author":"https://avatars.githubusercontent.com/u/77202162?v=4","authorName":"joshua_l","date":"15 may"},{"id":"2","title":"React.js","text":"JavaScript library used for designing user interfaces","textDescription":"Open source","author":"https://avatars.githubusercontent.com/u/77202162?v=4","authorName":"Camille","date":"15 may"}]');const mt={class:"lib-container"},vt={class:"application"};function ht(e,t,n,r,o,s){const i=(0,h.up)("Expansion");return(0,h.wg)(),(0,h.iD)("div",mt,[(0,h._)("div",vt,[(0,h.Wm)(i,{lists:n.lists,remarks:n.remarks},null,8,["lists","remarks"])])])}const gt={class:"Expansion__list"},Ct={class:"description"},wt={class:"appName"},ft={class:"appDescription"},_t={class:"comments"},Lt={class:"date"};function bt(e,t,n,r,o,s){const i=(0,h.up)("Profile"),a=(0,h.up)("LibraryBtn"),l=(0,h.up)("comments");return(0,h.wg)(),(0,h.iD)("ul",gt,[((0,h.wg)(!0),(0,h.iD)(h.HY,null,(0,h.Ko)(n.lists,(e=>((0,h.wg)(),(0,h.iD)("li",{class:"Expansion__item",key:e.id},[(0,h.Wm)(i,{author:e.author,authorName:e.authorName},null,8,["author","authorName"]),(0,h._)("div",Ct,[(0,h._)("div",wt,(0,nt.zw)(e.title),1),(0,h._)("div",ft,[(0,h._)("b",null,(0,nt.zw)(e.textDescription),1),(0,h.Uk)(" "+(0,nt.zw)(e.text),1)]),(0,h.Wm)(a)]),(0,h._)("div",_t,[(0,h.Wm)(l,{remarks:n.remarks},null,8,["remarks"])]),(0,h._)("div",Lt,(0,nt.zw)(e.date),1)])))),128))])}const yt={class:"author"},St={class:"author__photo"},xt=["src"],Dt={class:"author__name"};function Zt(e,t,n,r,o,s){return(0,h.wg)(),(0,h.iD)("div",yt,[(0,h._)("div",St,[(0,h._)("img",{class:"img",src:n.author,alt:""},null,8,xt)]),(0,h._)("div",Dt,(0,nt.zw)(n.authorName),1)])}var kt={name:"Profile",props:{author:{type:String,required:!0},authorName:{type:String,required:!0}}};const Ht=(0,w.Z)(kt,[["render",Zt],["__scopeId","data-v-0c16380e"]]);var Vt=Ht;const Ot=e=>((0,h.dD)("data-v-38cd905b"),e=e(),(0,h.Cn)(),e),Mt={class:"btns__list"},Nt={class:"btn"},jt={class:"icon"},Pt=(0,h.Uk)(" Star "),It=Ot((()=>(0,h._)("div",{class:"btn__desc"},"156k",-1))),Wt={class:"btn"},$t={class:"icon"},qt=(0,h.Uk)(" Fork "),At=Ot((()=>(0,h._)("div",{class:"btn__desc btn__desc--active"},"4",-1)));function Bt(e,t,n,r,o,s){const i=(0,h.up)("icon");return(0,h.wg)(),(0,h.iD)("ul",Mt,[(0,h._)("li",Nt,[(0,h._)("button",{class:"c-btn c-btn--active",onClick:t[0]||(t[0]=t=>e.$emit("on"))},[(0,h._)("span",jt,[(0,h.Wm)(i,{name:"star"})]),Pt]),It]),(0,h._)("li",Wt,[(0,h._)("button",{class:"c-btn",onClick:t[1]||(t[1]=t=>e.$emit("on"))},[(0,h._)("span",$t,[(0,h.Wm)(i,{name:"fork"})]),qt]),At])])}var Ft={name:"LibraryBtn",components:{icon:tt}};const Et=(0,w.Z)(Ft,[["render",Bt],["__scopeId","data-v-38cd905b"]]);var Rt=Et;const Tt={class:"c-feed"},zt={key:0,class:"comments-list"};function Yt(e,t,n,r,o,s){const i=(0,h.up)("toggler"),a=(0,h.up)("comment");return(0,h.wg)(),(0,h.iD)("div",Tt,[(0,h.Wm)(i,{onOnToggle:s.toggle},null,8,["onOnToggle"]),o.shown?((0,h.wg)(),(0,h.iD)("ul",zt,[((0,h.wg)(!0),(0,h.iD)(h.HY,null,(0,h.Ko)(n.remarks,(e=>((0,h.wg)(),(0,h.iD)("li",{class:"comments-item",key:e.id},[(0,h.Wm)(a,{username:e.username,text:e.text},null,8,["username","text"])])))),128))])):(0,h.kq)("",!0)])}const Ut={class:"c-comment"},Jt={class:"username"};function Kt(e,t,n,r,o,s){return(0,h.wg)(),(0,h.iD)("div",Ut,[(0,h._)("p",null,[(0,h._)("span",Jt,(0,nt.zw)(n.username),1),(0,h.Uk)(" "+(0,nt.zw)(n.text),1)])])}var Gt={name:"Comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};const Xt=(0,w.Z)(Gt,[["render",Kt],["__scopeId","data-v-032f5e33"]]);var Qt=Xt;const en={class:"text"},tn={class:"icon"};function nn(e,t,n,r,o,s){const i=(0,h.up)("icon");return(0,h.wg)(),(0,h.iD)("button",{class:(0,nt.C_)(["button",{active:o.isOpened}]),onClick:t[0]||(t[0]=(...e)=>s.toggle&&s.toggle(...e))},[(0,h._)("span",en,(0,nt.zw)(o.isOpened?"Hide":"Show")+" issues",1),(0,h._)("span",tn,[(0,h.Wm)(i,{name:"triangle"})])],2)}var rn={components:{icon:tt},data(){return{isOpened:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const on=(0,w.Z)(rn,[["render",nn],["__scopeId","data-v-4c00291f"]]);var sn=on,an={name:"Comments",components:{toggler:sn,comment:Qt},props:{remarks:{type:Array,required:!0}},data(){return{shown:!1}},methods:{toggle(e){this.shown=e}}};const ln=(0,w.Z)(an,[["render",Yt],["__scopeId","data-v-8922e856"]]);var cn=ln,dn={name:"Expansion",components:{Profile:Vt,LibraryBtn:Rt,comments:cn},props:{lists:{type:Array,required:!0},remarks:{type:Array,required:!0}}};const un=(0,w.Z)(dn,[["render",bt],["__scopeId","data-v-27fe7cf4"]]);var pn=un,mn={components:{Expansion:pn},props:{remarks:{type:Array,required:!0},lists:{type:Array,required:!0}}};const vn=(0,w.Z)(mn,[["render",ht],["__scopeId","data-v-164a6980"]]);var hn=vn;const gn={class:"navigation-menu"},Cn={class:"navigation-menu__item"},wn={class:"icon"},fn={class:"navigation-menu__item"},_n={class:"image"},Ln=["src"],bn={class:"navigation-menu__item"},yn={class:"icon"};function Sn(e,t,n,r,o,s){const i=(0,h.up)("icon");return(0,h.wg)(),(0,h.iD)("ul",gn,[(0,h._)("li",Cn,[(0,h._)("div",wn,[(0,h.Wm)(i,{name:"home"})])]),(0,h._)("li",fn,[(0,h._)("div",_n,[(0,h._)("img",{class:"profile__photo",src:n.photo},null,8,Ln)])]),(0,h._)("li",bn,[(0,h._)("div",yn,[(0,h.Wm)(i,{name:"logout"})])])])}var xn={components:{icon:tt},props:{photo:{type:String,require:!0}}};const Dn=(0,w.Z)(xn,[["render",Sn],["__scopeId","data-v-c82e138e"]]);var Zn=Dn,kn={name:"welcome",components:{Header:P,icon:tt,storyUserItem:ct,library:hn,navigationMenu:Zn},computed:{...(0,s.rn)({users:e=>e.users.data})},methods:{getStoryData(e){return{id:e.id,userAvatar:e.owner?.avatar_url,username:e.owner?.login,content:e.readme}}},data(){return{stories:dt,remarks:ut,shown:!1,lists:pt}}};const Hn=(0,w.Z)(kn,[["render",Z],["__scopeId","data-v-145df589"]]);var Vn=Hn;const On={class:"wrapper"},Mn={class:"slider-page"},Nn={class:"stories-header"},jn={class:"x-container"},Pn={class:"logo"},In={class:"logo-icon"},Wn={class:"close-btn"},$n={class:"close-icon"},qn={class:"content"};function An(e,t,n,r,o,s){const i=(0,h.up)("icon"),a=(0,h.up)("Slide");return(0,h.wg)(),(0,h.iD)("div",On,[(0,h._)("div",Mn,[(0,h._)("header",Nn,[(0,h._)("div",jn,[(0,h._)("button",Pn,[(0,h._)("div",In,[(0,h.Wm)(i,{name:"logo"})])]),(0,h._)("button",Wn,[(0,h._)("div",$n,[(0,h.Wm)(i,{name:"close",onClick:t[0]||(t[0]=t=>e.$router.push("/"))})])])])]),(0,h._)("div",qn,[(0,h.Wm)(a,{initialSlide:Number(isNaN(e.$route.params.initialSlide)?0:e.$route.params.initialSlide)},null,8,["initialSlide"])])])])}const Bn={class:"slider-container"},Fn={class:"stories-list",ref:"slider"};function En(e,t,n,r,o,s){const i=(0,h.up)("SliderElem");return(0,h.wg)(),(0,h.iD)("div",Bn,[(0,h._)("ul",Fn,[((0,h.wg)(!0),(0,h.iD)(h.HY,null,(0,h.Ko)(e.users,((e,t)=>((0,h.wg)(),(0,h.iD)("li",{class:"stories-item",key:e.id,ref_for:!0,ref:"item"},[(0,h.Wm)(i,{obj:s.getStoryData(e),active:o.slideNdx==t,loading:o.slideNdx==t&&o.loading,btnsShown:s.activeBtns,onOnNextSlide:e=>(s.handleSlide(t+1),s.next()),onOnPrevSlide:e=>(s.handleSlide(t-1),s.prev()),onOnProgressFinish:e=>(s.progress(t),s.handleSlide(t+1))},null,8,["obj","active","loading","btnsShown","onOnNextSlide","onOnPrevSlide","onOnProgressFinish"])])))),128))],512)])}const Rn={class:"card-content"},Tn={class:"left-arrow"},zn={class:"right-arrow"};function Yn(e,t,n,r,o,s){const i=(0,h.up)("icon"),a=(0,h.up)("StoryCard");return(0,h.wg)(),(0,h.iD)("div",{class:(0,nt.C_)(["card",{active:n.active}])},[(0,h._)("div",Rn,[n.active?((0,h.wg)(),(0,h.iD)(h.HY,{key:0},[n.btnsShown.includes("prev")?((0,h.wg)(),(0,h.iD)("button",{key:0,class:"btn btn-prev",onClick:t[0]||(t[0]=t=>e.$emit("onPrevSlide"))},[(0,h._)("div",Tn,[(0,h.Wm)(i,{name:"leftArrow"})])])):(0,h.kq)("",!0)],64)):(0,h.kq)("",!0),(0,h.Wm)(a,{active:o.isActive,obj:n.obj,loading:n.loading,onOnFinish:t[1]||(t[1]=t=>e.$emit("onProgressFinish"))},null,8,["active","obj","loading"]),n.active?((0,h.wg)(),(0,h.iD)(h.HY,{key:1},[n.btnsShown.includes("next")?((0,h.wg)(),(0,h.iD)("button",{key:0,class:"btn btn-next",onClick:t[2]||(t[2]=t=>e.$emit("onNextSlide"))},[(0,h._)("div",zn,[(0,h.Wm)(i,{name:"rightArrow"})])])):(0,h.kq)("",!0)],64)):(0,h.kq)("",!0)])],2)}const Un={class:"story"},Jn={class:"story__header"},Kn={class:"story__main-content"},Gn=["innerHTML"],Xn={class:"story__footer"};function Qn(e,t,n,r,o,s){const i=(0,h.up)("StoryHeader"),a=(0,h.up)("LoadingComponent"),l=(0,h.up)("Placeholder"),c=(0,h.up)("StoryBtn");return(0,h.wg)(),(0,h.iD)("div",Un,[(0,h._)("header",Jn,[(0,h.Wm)(i,{active:n.active,author:n.obj.userAvatar,authorName:n.obj.username,onOnFinish:t[0]||(t[0]=t=>e.$emit("onFinish"))},null,8,["active","author","authorName"])]),(0,h._)("div",Kn,[n.loading?((0,h.wg)(),(0,h.j4)(a,{key:0})):n.obj.content?((0,h.wg)(),(0,h.iD)("div",{key:2,innerHTML:n.obj.content},null,8,Gn)):((0,h.wg)(),(0,h.j4)(l,{key:1,paragraphs:4}))]),(0,h._)("footer",Xn,[(0,h.Wm)(c)])])}const er={class:"story-btn__text"};function tr(e,t,n,r,o,s){return(0,h.wg)(),(0,h.iD)("button",{ref:"followBtn",class:(0,nt.C_)(["story-btn",{active:o.followed}]),type:"submit",onClick:t[0]||(t[0]=(...e)=>s.follow&&s.follow(...e))},[(0,h._)("span",er,(0,nt.zw)(o.followed?"Unfollow":"Follow"),1)],2)}var nr={name:"StoryBtn",data(){return{followed:!1}},emits:["onFollow"],methods:{follow(){this.followed=!this.followed,this.$emit("onFollow",this.followed)}}};const rr=(0,w.Z)(nr,[["render",tr],["__scopeId","data-v-7cbfecb8"]]);var or=rr;const sr={class:"story-header"},ir={class:"story-profile"};function ar(e,t,n,r,o,s){const i=(0,h.up)("ProgressLine"),a=(0,h.up)("Profile");return(0,h.wg)(),(0,h.iD)("div",sr,[(0,h.Wm)(i,{active:n.active,onOnFinish:t[0]||(t[0]=t=>e.$emit("onFinish"))},null,8,["active"]),(0,h._)("div",ir,[(0,h.Wm)(a,{author:n.author,authorName:n.authorName},null,8,["author","authorName"])])])}const lr={ref:"progressCurrent",class:"progress__current"};function cr(e,t,n,r,o,s){return(0,h.wg)(),(0,h.iD)("div",{class:(0,nt.C_)(["progress",{active:n.active}])},[(0,h._)("div",lr,null,512)],2)}var dr={name:"ProgressLine",props:{active:{type:Boolean,required:!0}},emits:["onFinish"],methods:{emitOnFinish(){this.$emit("onFinish")}},mounted(){this.$refs.progressCurrent.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount(){this.$refs.progressCurrent.removeEventListener("transitionend",this.emitOnFinish)}};const ur=(0,w.Z)(dr,[["render",cr],["__scopeId","data-v-7e8394f6"]]);var pr=ur,mr={name:"StoryHeader",components:{Profile:Vt,ProgressLine:pr},emits:["onFinish"],props:{author:{type:String,required:!0},authorName:{type:String,required:!0},active:{type:Boolean,required:!0}}};const vr=(0,w.Z)(mr,[["render",ar],["__scopeId","data-v-16b7e679"]]);var hr=vr,gr=n.p+"img/Placeholder.b4d37ca1.svg",Cr=n.p+"img/FakeParagraphs.8e0d2a69.svg";const wr=e=>((0,h.dD)("data-v-281c47fe"),e=e(),(0,h.Cn)(),e),fr=wr((()=>(0,h._)("div",{class:"fake-photo"},[(0,h._)("img",{class:"placeholder-svg",src:gr,alt:""})],-1))),_r=wr((()=>(0,h._)("img",{src:Cr,alt:""},null,-1))),Lr=[_r];function br(e,t,n,r,o,s){return(0,h.wg)(),(0,h.iD)(h.HY,null,[fr,((0,h.wg)(!0),(0,h.iD)(h.HY,null,(0,h.Ko)(n.paragraphs,(e=>((0,h.wg)(),(0,h.iD)("div",{class:"fake-paragraphs",key:e},Lr)))),128))],64)}var yr={name:"Placeholder",props:{paragraphs:{type:Number,required:!0}}};const Sr=(0,w.Z)(yr,[["render",br],["__scopeId","data-v-281c47fe"]]);var xr=Sr;const Dr={class:"loading-window"},Zr={class:"loading-icon"};function kr(e,t,n,r,o,s){const i=(0,h.up)("icon");return(0,h.wg)(),(0,h.iD)("div",Dr,[(0,h._)("div",Zr,[(0,h.Wm)(i,{name:"loading"})])])}var Hr={name:"LoadingComponent",components:{icon:tt}};const Vr=(0,w.Z)(Hr,[["render",kr],["__scopeId","data-v-64d4c4dd"]]);var Or=Vr,Mr={name:"StoryCard",components:{StoryHeader:hr,StoryBtn:or,Placeholder:xr,LoadingComponent:Or},emits:["onFinish"],props:{obj:Object,active:Boolean,loading:Boolean}};const Nr=(0,w.Z)(Mr,[["render",Qn],["__scopeId","data-v-38cb5092"]]);var jr=Nr,Pr={name:"Controls",components:{StoryCard:jr,icon:tt},emits:["onPrevSlide","onNextSlide","onProgressFinish"],props:{obj:{type:Object,required:!0},active:{type:Boolean,required:!0},loading:{type:Boolean,required:!0},btnsShown:{type:Array,default:()=>["next","prev"],validator(e){return e.every((e=>"next"===e||"prev"===e))}}},data(){return{isActive:!1}},watch:{active(){this.isActive=this.active}},mounted(){setTimeout((()=>{this.isActive=this.active}),0)}};const Ir=(0,w.Z)(Pr,[["render",Yn],["__scopeId","data-v-6a4c8cbe"]]);var Wr=Ir,$r={components:{SliderElem:Wr},data(){return{slideNdx:0,sliderPosition:0,loading:!1,btnsShown:!0}},props:{initialSlide:{type:Number}},computed:{...(0,s.rn)({users:e=>e.users.data}),activeBtns(){return!1===this.btnsShown?[]:0===this.slideNdx?["next"]:this.slideNdx===this.users.length-1?["prev"]:["next","prev"]}},methods:{...(0,s.nv)({fetchReadme:"users/fetchReadme"}),prev(){console.log("prev")},next(){console.log("next")},progress(e){console.log("progress"),console.log(this.slideNdx===e)},async fetchReadmeForActiveSlide(){const{id:e,owner:t,name:n}=this.users[this.slideNdx];await this.fetchReadme({id:e,owner:t.login,repo:n})},getStoryData(e){return{id:e.id,userAvatar:e.owner?.avatar_url,username:e.owner?.login,content:e.readme}},moveSlider(e){const t=this.$refs.slider,n=this.$refs.item[e],r=parseInt(getComputedStyle(n).getPropertyValue("width"),10);this.slideNdx=e,console.log(this.slideNdx),this.sliderPosition=-r*e,t.style.transform=`translateX(${this.sliderPosition}px)`},async loadReadme(){this.loading=!0,this.btnsShown=!1;try{await this.fetchReadmeForActiveSlide()}catch(e){throw console.log(e),e}finally{this.loading=!1,this.btnsShown=!0}},async handleSlide(e){this.moveSlider(e),await this.loadReadme()}},async mounted(){this.initialSlide&&(this.slideNdx=this.initialSlide,await this.handleSlide(this.slideNdx)),await this.loadReadme()}};const qr=(0,w.Z)($r,[["render",En],["__scopeId","data-v-2e3ad085"]]);var Ar=qr,Br={name:"Stories",components:{Slide:Ar,icon:tt}};const Fr=(0,w.Z)(Br,[["render",An],["__scopeId","data-v-cd8721d2"]]);var Er=Fr,Rr=[{path:"/",component:Vn},{path:"/stories",name:"stories",component:Er}],Tr=(0,L.p7)({history:(0,L.r5)(),routes:Rr});const zr=(0,o.ri)(_);zr.use(Tr),zr.use(v),zr.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,s){if(!r){var i=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],s=e[d][2];for(var a=!0,l=0;l<r.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/gitogram-svetoslav-shaunin/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,s,i=r[0],a=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var d=l(n)}for(t&&t(r);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1447)}));r=n.O(r)})();
//# sourceMappingURL=app.9ef4816f.js.map