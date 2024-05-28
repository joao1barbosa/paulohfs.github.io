"use strict";(self.webpackChunkpaulohernane_me=self.webpackChunkpaulohernane_me||[]).push([[5473],{469:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(4848),t=a(5680);const o={id:"Quiz-a2-q2",title:"Quiz A2Q2",tags:["ODB","DB"]},s=void 0,i={id:"databases/exercicies/Quiz-a2-q2",title:"Quiz A2Q2",description:"Mostre todos os comandos usados para executar as solicita\xe7\xf5es abaixo, bem como o resultado de cada comando.",source:"@site/my-brain/databases/exercicies/quiz-a2-q2.md",sourceDirName:"databases/exercicies",slug:"/databases/exercicies/Quiz-a2-q2",permalink:"/my-brain/databases/exercicies/Quiz-a2-q2",draft:!1,unlisted:!1,tags:[{label:"ODB",permalink:"/my-brain/tags/odb"},{label:"DB",permalink:"/my-brain/tags/db"}],version:"current",frontMatter:{id:"Quiz-a2-q2",title:"Quiz A2Q2",tags:["ODB","DB"]},sidebar:"myBrainSidebar",previous:{title:"Quiz A2Q2",permalink:"/my-brain/databases/exercicies/Quiz-a2-q1"},next:{title:"Quiz A3Q1",permalink:"/my-brain/databases/exercicies/Quiz-a3-q1"}},c={},l=[];function u(e){const n={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Mostre todos os comandos usados para executar as solicita\xe7\xf5es abaixo, bem como o resultado de cada comando."}),"\n",(0,r.jsx)(n.p,{children:"(a) Crie uma tabela relacional chamada PROFISSIONAL_TAB com as seguintes colunas: empregado PROFISSIONAL_TYPE e departamento INTEGER."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE PROFISSIONAL_TAB (\n    EMPREGADO PROFISSIONAL_TYPE,\n    DEPARTAMENTO INTEGER\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"(b) Visualize a estrutura da tabela criada com o comando DESCRIBE."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"DESCRIBE PROFISSIONAL_TAB;\n"})}),"\n",(0,r.jsx)(n.p,{children:"(c) Usando o m\xe9todo construtor de PROFISSIONAL_TYPE, insira uma linha na tabela PROFISSIONAL_TAB com os seguintes dados: 100, 'Jos\xe9', SYSDATE e 10."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO PROFISSIONAL_TAB\nVALUES (\n    PROFISSIONAL_TYPE(100, 'Jos\xe9', SYSDATE),\n    10\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"(d) Agora, sem usar o m\xe9todo construtor, tente inserir outra linha na tabela PROFISSIONAL_TAB com os seguintes dados: 101, 'Maria', SYSDATE e 11. Voc\xea conseguiu inserir a segunda linha? Qual a sua conclus\xe3o?"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO PROFISSIONAL_TAB\nVALUES (\n    101, \n    'Maria', \n    SYSDATE,\n    11\n);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Esse comando n\xe3o funcionou e retornou o seguinte erro:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'Error at line 1/13: ORA-00913: too many values\nORA-06512: at "SYS.WWV_DBMS_SQL_APEX_230100", line 797\nORA-06512: at "SYS.DBMS_SYS_SQL", line 1658\nORA-06512: at "SYS.WWV_DBMS_SQL_APEX_230100", line 782\nORA-06512: at "APEX_230100.WWV_FLOW_DYNAMIC_EXEC", line 2035'}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"INSERT INTO PROFISSIONAL_TAB"}),"\n",(0,r.jsx)(n.li,{children:"VALUES ("}),"\n",(0,r.jsx)(n.li,{children:"101, 'Maria', SYSDATE,"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"(e) Com um comando SELECT, mostre todas as linhas e colunas da tabela PROFISSIONAL_TAB."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM PROFISSIONAL_TAB;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5680:(e,n,a)=>{a.d(n,{RP:()=>l});var r=a(6540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=r.createContext({}),l=function(e){var n=r.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(a),p=t,O=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return a?r.createElement(O,s(s({ref:n},d),{},{components:a})):r.createElement(O,s({ref:n},d))}));d.displayName="MDXCreateElement"}}]);