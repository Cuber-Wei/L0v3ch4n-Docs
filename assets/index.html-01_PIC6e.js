import{_ as o,c as t,a as c,o as d}from"./app-CrXfN5x-.js";const i={};function a(n,e){return d(),t("div",null,e[0]||(e[0]=[c('<div class="hint-container tip"><p class="hint-container-title">提问</p><ol><li>简单说说你对 <code>vuex</code> 的理解</li></ol></div><h3 id="回答策略" tabindex="-1"><a class="header-anchor" href="#回答策略"><span>回答策略</span></a></h3><ol><li>说明 <code>vuex</code> 的定义</li><li><code>vuex</code> 解决了什么问题</li><li>什么时候需要 <code>vuex</code></li><li>具体用法</li><li>简述原理，优缺点等</li></ol><h2 id="回答" tabindex="-1"><a class="header-anchor" href="#回答"><span>回答</span></a></h2><blockquote><p><strong>官网定义:</strong></p><p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p></blockquote><ol><li><code>vuex</code> 是 <code>vue</code> 官方开源并维护的状态管理库，它以 <strong>全局的方式集中管理应用状态</strong>，并保证应用状态变更的可预测性。</li><li><code>vuex</code> 主要解决的问题是多组件之间状态共享的问题，利用各种组件通信方式，我们虽然能够做到状态共享，但是往往需要在多个组件之间保持状态的一致性，这种模式很容易出现问题，也会使程序逻辑变得复杂。 <code>vuex</code> 通过把组件的共享状态抽取出来，以全局单例模式管理，这样任何组件都能用一致的方式获取和修改状态，响应式的数据也能够保证简洁的单向数据流动，我们的代码将变得更结构化且易维护。</li><li><code>vuex</code> 并非必须的，它帮我们管理共享状态，但却带来更多的概念和框架。 如果我们不打算开发大型单页应用或者我们的应用并没有大量全局的状态需要维护，完全没有使用 <code>vuex</code> 的必要。 一个简单的 <code>store</code> 模式就足够了。反之， <code>vuex</code> 将会成为自然而然的选择。 引用 <code>Redux</code> 的作者 <code>Dan Abramov</code> 的话说就是：Flux 架构就像眼镜：您自会知道什么时候需要它。</li><li>我在使用 <code>vuex</code> 过程中有如下理解：首先是对核心概念的理解和运用，将全局状态放入 <code>state</code> 对象中， 它本身一棵状态树，组件中使用 <code>store</code> 实例的state访问这些状态； 然后有配套的 <code>mutation</code> 方法修改这些状态，并且只能用 <code>mutation</code> 修改状态， 在组件中调用 <code>commit</code> 方法提交 <code>mutation</code> ；如果应用中有异步操作或者复杂逻辑组合， 我们需要编写 <code>action</code> ，执行结束如果有状态修改仍然需要提交 <code>mutation</code> ， 组件中调用这些 <code>action</code> 使用 <code>dispatch</code> 方法派发。最后是模块化， 通过 <code>modules</code> 选项组织拆分出去的各个子模块，在访问状态时注意添加子模块的名称， 如果子模块有设置 <code>namespace</code> ，那么在提交 <code>mutation</code> 和派发 <code>action</code> 时还需要额外的命名空间前缀。</li><li><code>vuex</code> 在实现单项数据流时需要做到数据的响应式，通过源码的学习发现是借用了 <code>vue</code> 的数据响应化特性实现的，它会利用Vue将 <code>state</code> 作为 <code>data</code> 对其进行响应化处理，从而使得这些状态发生变化时，能够通知组件重新渲染。</li></ol>',6)]))}const u=o(i,[["render",a],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/interview/vuex/","title":"对vuex的理解","lang":"zh-CN","frontmatter":{"title":"对vuex的理解","createTime":"2025/03/14 13:54:41","permalink":"/interview/vuex/","description":"提问 简单说说你对 vuex 的理解 回答策略 说明 vuex 的定义 vuex 解决了什么问题 什么时候需要 vuex 具体用法 简述原理，优缺点等 回答 官网定义: Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。 vuex 是 vue 官方...","head":[["meta",{"property":"og:url","content":"https://blog.l0v3ch4n.top/interview/vuex/"}],["meta",{"property":"og:site_name","content":"L0v3ch4n"}],["meta",{"property":"og:title","content":"对vuex的理解"}],["meta",{"property":"og:description","content":"提问 简单说说你对 vuex 的理解 回答策略 说明 vuex 的定义 vuex 解决了什么问题 什么时候需要 vuex 具体用法 简述原理，优缺点等 回答 官网定义: Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。 vuex 是 vue 官方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-14T07:08:59.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-14T07:08:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"对vuex的理解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-14T07:08:59.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.68,"words":803},"git":{"updatedTime":1741936139000,"contributors":[{"name":"L0v3ch4n","username":"L0v3ch4n","email":"cuberwei0@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/L0v3ch4n?v=4","url":"https://github.com/L0v3ch4n"}]},"autoDesc":true,"filePathRelative":"notes/interview/Vue3/07-对vuex的理解.md"}');export{u as comp,l as data};
