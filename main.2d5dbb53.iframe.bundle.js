(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{285:function(module,exports,__webpack_require__){(exports=__webpack_require__(419)(!1)).push([module.i,".Syk2pkIMz4yw5FElq-Kkv{appearance:button;text-decoration:none;background-color:#fff;color:#000;padding:.25rem .65rem;border-radius:.15rem;border:1px solid #282c34}.Syk2pkIMz4yw5FElq-Kkv:hover{color:initial;text-decoration:none}",""]),exports.locals={button:"Syk2pkIMz4yw5FElq-Kkv"},module.exports=exports},286:function(module,exports,__webpack_require__){(exports=__webpack_require__(419)(!1)).push([module.i,"._2o-Iq1u7-bUKK2jsNojOyq{padding:1rem 1.5rem}._2LBMQYBDuRjVKBspySnyqr{padding:1.5rem 0;margin-bottom:1rem;font-size:1rem;color:rgba(0,0,0,.85);font-weight:500;border-bottom:1px solid #f0f0f0}",""]),exports.locals={card:"_2o-Iq1u7-bUKK2jsNojOyq",header:"_2LBMQYBDuRjVKBspySnyqr"},module.exports=exports},466:function(module,exports,__webpack_require__){__webpack_require__(467),__webpack_require__(621),__webpack_require__(622),__webpack_require__(831),__webpack_require__(832),__webpack_require__(837),__webpack_require__(838),__webpack_require__(834),__webpack_require__(833),__webpack_require__(839),__webpack_require__(840),__webpack_require__(841),module.exports=__webpack_require__(827)},534:function(module,exports){},622:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(334)},827:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(334).configure)([__webpack_require__(828),__webpack_require__(829)],module,!1)}).call(this,__webpack_require__(189)(module))},828:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=828},829:function(module,exports,__webpack_require__){var map={"./components/scss/button/index.stories.tsx":835,"./components/scss/card/index.stories.tsx":836};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=829},835:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Basic",(function(){return index_stories_Basic})),__webpack_require__.d(__webpack_exports__,"DynamicVariables",(function(){return index_stories_DynamicVariables}));__webpack_require__(8);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(104),objectWithoutProperties=__webpack_require__(445),injectStylesIntoStyleTag=__webpack_require__(209),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),index_module=__webpack_require__(285),index_module_default=__webpack_require__.n(index_module),options={insert:"head",singleton:!1},button_index_module=(injectStylesIntoStyleTag_default()(index_module_default.a,options),index_module_default.a.locals||{}),jsx_runtime=__webpack_require__(55),button_Button=(react_default.a.createElement,function Button(_ref){var children=_ref.children,props=Object(objectWithoutProperties.a)(_ref,["children"]);return Object(jsx_runtime.jsx)("a",Object.assign({},props,{target:"_blank",href:"https://pankod.github.io/superplate/",rel:"noopener noreferrer",className:button_index_module.button,"data-testid":"btn",children:children}))});button_Button.displayName="Button";try{button_Button.displayName="Button",button_Button.__docgenInfo={description:"",displayName:"Button",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/scss/button/index.tsx#Button"]={docgenInfo:button_Button.__docgenInfo,name:"Button",path:"src/components/scss/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}react_default.a.createElement,__webpack_exports__.default={title:"Button",component:button_Button,decorators:[esm.b]};var index_stories_Basic=function Basic(){return Object(jsx_runtime.jsx)(button_Button,{children:"Submit"})};index_stories_Basic.displayName="Basic";var index_stories_DynamicVariables=function DynamicVariables(){var label=Object(esm.a)("label",["Submit","Cancel"],"Docs");return Object(jsx_runtime.jsx)(button_Button,{children:label})};index_stories_DynamicVariables.displayName="DynamicVariables",index_stories_Basic.parameters=Object.assign({storySource:{source:"(): JSX.Element => <ScssButton>Submit</ScssButton>"}},index_stories_Basic.parameters),index_stories_DynamicVariables.parameters=Object.assign({storySource:{source:'(): JSX.Element => {\n  const label = select("label", ["Submit", "Cancel"], "Docs");\n  return <ScssButton>{label}</ScssButton>;\n}'}},index_stories_DynamicVariables.parameters)},836:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DynamicVariables",(function(){return index_stories_DynamicVariables}));__webpack_require__(8);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(104),injectStylesIntoStyleTag=__webpack_require__(209),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),index_module=__webpack_require__(286),index_module_default=__webpack_require__.n(index_module),options={insert:"head",singleton:!1},card_index_module=(injectStylesIntoStyleTag_default()(index_module_default.a,options),index_module_default.a.locals||{}),jsx_runtime=__webpack_require__(55),card_Card=(react_default.a.createElement,function Card(_ref){var title=_ref.title,children=_ref.children;return Object(jsx_runtime.jsxs)("div",{className:card_index_module.card,children:[Object(jsx_runtime.jsx)("div",{className:card_index_module.header,children:title}),Object(jsx_runtime.jsx)("div",{children:children})]})});card_Card.displayName="Card";try{card_Card.displayName="Card",card_Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/scss/card/index.tsx#Card"]={docgenInfo:card_Card.__docgenInfo,name:"Card",path:"src/components/scss/card/index.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}react_default.a.createElement,__webpack_exports__.default={title:"Card",component:card_Card,decorators:[esm.b]};var index_stories_DynamicVariables=function DynamicVariables(){var label=Object(esm.a)("title",["Title 1","Title 2"],"Title Test");return Object(jsx_runtime.jsx)("div",{style:{width:"25%"},children:Object(jsx_runtime.jsx)(card_Card,{title:label,children:Object(jsx_runtime.jsx)("div",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quidem culpa adipisci eveniet ipsa ea incidunt corrupti vero perferendis blanditiis!"})})})};index_stories_DynamicVariables.displayName="DynamicVariables",index_stories_DynamicVariables.parameters=Object.assign({storySource:{source:'(): JSX.Element => {\n  const label = select("title", ["Title 1", "Title 2"], "Title Test");\n  return (\n    <div style={{ width: "25%" }}>\n      <ScssCard title={label}>\n        <div>\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quidem\n          culpa adipisci eveniet ipsa ea incidunt corrupti vero perferendis\n          blanditiis!\n        </div>\n      </ScssCard>\n    </div>\n  );\n}'}},index_stories_DynamicVariables.parameters)},841:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(37),__webpack_require__(45),__webpack_require__(823),__webpack_require__(31),__webpack_require__(32),__webpack_require__(824),__webpack_require__(825),__webpack_require__(826);var client_api=__webpack_require__(846),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[466,2,3]]]);