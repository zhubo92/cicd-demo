import{b0 as o,b1 as r}from"./index-ht37-DqN.js";import{u as t}from"./user-CpQyPzKy.js";const n=o("userInfo",{state:()=>({username:"",accessToken:"",roles:["common"]}),getters:{},actions:{storeUserLogin(s){return t(s).then(e=>(this.username=e.data.username,this.roles=e.data.roles,this.accessToken=e.data.accessToken,e))}},persist:{key:"userInfo",storage:sessionStorage,pick:["accessToken"]}});function u(){return n(r)}export{u};
