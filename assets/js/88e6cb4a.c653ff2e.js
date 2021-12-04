"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[710],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={},l="Triage guide",u={unversionedId:"contributing/triage-guide",id:"contributing/triage-guide",isDocsHomePage:!1,title:"Triage guide",description:"How do I join the triage team?",source:"@site/docs/contributing/triage-guide.md",sourceDirName:"contributing",slug:"/contributing/triage-guide",permalink:"/contributing/triage-guide",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/triage-guide.md",tags:[],version:"current",lastUpdatedBy:"TED Vortex (Teodor-Eugen Du\u021bulescu)",lastUpdatedAt:1638587601,formattedLastUpdatedAt:"12/4/2021",frontMatter:{},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/contributing/code-of-conduct"},next:{title:"Introduction to storybook",permalink:"/technical/introduction-to-storybook"}},c=[{value:"How do I join the triage team?",id:"how-do-i-join-the-triage-team",children:[],level:2},{value:"Issue triage process",id:"issue-triage-process",children:[],level:2},{value:"Approaches and best practices for getting into triage contributions",id:"approaches-and-best-practices-for-getting-into-triage-contributions",children:[],level:2},{value:"Labeling good first issues",id:"labeling-good-first-issues",children:[],level:2},{value:"Removal of triage role",id:"removal-of-triage-role",children:[],level:2},{value:"Other helpful hints:",id:"other-helpful-hints",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"triage-guide"},"Triage guide"),(0,o.kt)("h2",{id:"how-do-i-join-the-triage-team"},"How do I join the triage team?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Sign up for ",(0,o.kt)("a",{parentName:"li",href:"https://opensauced.pizza"},"opensauced.pizza")),(0,o.kt)("li",{parentName:"ol"},"Leave a reply in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-sauced/open-sauced/discussions/638"},"invite discussion"),".")),(0,o.kt)("h2",{id:"issue-triage-process"},"Issue triage process"),(0,o.kt)("p",null,"When a new issue or pull request is opened the issue will be labeled with ",(0,o.kt)("inlineCode",{parentName:"p"},"needs triage"),". If a triage team member is available they can help make sure all the required information is provided. Depending on the issue or PR there are several next labels they can add for further classification:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"needs triage"),": This can be kept if the triager is unsure which next steps to take"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"awaiting more info"),": If more info has been requested from the author, apply this label."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"question"),": User questions that do not appear to be bugs or enhancements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"discuss"),": Topics for discussion. Might end in an ",(0,o.kt)("inlineCode",{parentName:"li"},"enhancement")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"question")," label."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bug"),": Issues that present a reasonable conviction there is a reproducible bug."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enhancement"),": Issues that are found to be a reasonable candidate feature additions.")),(0,o.kt)("p",null,"In all cases, issues may be closed by maintainers if they don't receive a timely response when further information is sought, or when additional questions are asked."),(0,o.kt)("h2",{id:"approaches-and-best-practices-for-getting-into-triage-contributions"},"Approaches and best practices for getting into triage contributions"),(0,o.kt)("p",null,"Review the project's contribution guideline if present. In a nutshell, commit to the community's standards and values. Review the documentation, for most of the projects it is just the README.md, and make sure you understand the key APIs, semantics, configurations, and use cases."),(0,o.kt)("p",null,"It might be helpful to write your own test apps to re-affirm your understanding of the key functions. This may identify some gaps in documentation, record those as they might be good PR's to open. Skim through the issue backlog; identify low hanging issues and mostly new ones. From those, attempt to recreate issues based on the OP description and ask questions if required. No question is a bad question!"),(0,o.kt)("h2",{id:"labeling-good-first-issues"},"Labeling good first issues"),(0,o.kt)("p",null,"Issues labeled as ",(0,o.kt)("inlineCode",{parentName:"p"},"good first issue")," represent a curated list of easy contributions for new contributors. These issues are meant to help folks make their first contribution to open-source and should not require an excessive amount of research or triaging on the contributor's part."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"All good first issues should include one or more of the following: a solution, a suggestion for a solution, links to components, or in which issue occurs.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Issues that ",(0,o.kt)("inlineCode",{parentName:"li"},"needs triage")," cannot be labeled as ",(0,o.kt)("inlineCode",{parentName:"li"},"good first issues"),"."),(0,o.kt)("li",{parentName:"ul"},"It is better to have no ",(0,o.kt)("inlineCode",{parentName:"li"},"good first issue")," labeled issues than to have a ",(0,o.kt)("inlineCode",{parentName:"li"},"good first issue")," confusing enough to deter a contributor from contributing. ")),(0,o.kt)("h2",{id:"removal-of-triage-role"},"Removal of triage role"),(0,o.kt)("p",null,"There are a few cases where members can be removed as triagers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Breaking the ",(0,o.kt)("a",{parentName:"li",href:"/contributing/code-of-conduct"},"CoC")," or ",(0,o.kt)("a",{parentName:"li",href:"/contributing/introduction-to-contributing"},"project contributor guidelines")),(0,o.kt)("li",{parentName:"ul"},"Abuse or misuse of the role as deemed by the TC"),(0,o.kt)("li",{parentName:"ul"},"Lack of participation for more than 6 months")),(0,o.kt)("p",null,"If any of these happen we will discuss as a part of the triage portion of the regular TC meetings. If you have questions feel free to reach out to any of the TC members."),(0,o.kt)("h2",{id:"other-helpful-hints"},"Other helpful hints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When reviewing the list of open issues there are some common types and suggested actions:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"New/unattended issues or simple questions: A good place to start"),(0,o.kt)("li",{parentName:"ul"},"Hard bugs & ongoing discussions: always feel free to chime in and help"),(0,o.kt)("li",{parentName:"ul"},"Issues that imply gaps in documentation: open PRs with changes or help the user to do so"))),(0,o.kt)("li",{parentName:"ul"},"For recurring issues, it is helpful to create functional examples to demonstrate (publish as gists or a repo)"),(0,o.kt)("li",{parentName:"ul"},"Review and identify the maintainers. If necessary, at-mention one or more of them if you are unsure what to do"),(0,o.kt)("li",{parentName:"ul"},"Make sure all your interactions are professional, welcoming and respectful to the parties involved.")))}d.isMDXComponent=!0}}]);