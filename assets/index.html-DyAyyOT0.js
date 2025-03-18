import{_ as d,c as e,a as s,o as i}from"./app-CrXfN5x-.js";const a={};function n(o,t){return i(),e("div",null,t[0]||(t[0]=[s(`<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h2><table><thead><tr><th></th><th></th><th>说明</th></tr></thead><tbody><tr><td><code>-a</code></td><td><code>--text</code></td><td>不要忽略二进制数据。</td></tr><tr><td><code>-A &lt;显示行数&gt;</code></td><td><code>--after-context=&lt;显示行数&gt;</code></td><td>除了显示符合范本样式的那一行之外，并显示该行之后的内容。</td></tr><tr><td><code>-b</code></td><td><code>--byte-offset</code></td><td>在显示符合范本样式的那一行之外，并显示该行之前的内容。</td></tr><tr><td><code>-B &lt;显示行数&gt;</code></td><td><code>--before-context=&lt;显示行数&gt;</code></td><td>除了显示符合样式的那一行之外，并显示该行之前的内容。</td></tr><tr><td><code>-c</code></td><td><code>--count</code></td><td>计算符合范本样式的列数。</td></tr><tr><td><code>-C &lt;显示行数&gt;</code></td><td><code>--context=&lt;显示行数&gt;</code> 或 <code>-&lt;显示行数&gt;</code></td><td>除了显示符合范本样式的那一列之外，并显示该列之前后的内容。</td></tr><tr><td><code>-d&lt;进行动作&gt;</code></td><td><code>--directories=&lt;动作&gt;</code></td><td>当指定要查找的是目录而非文件时，必须使用这项参数，否则grep命令将回报信息并停止动作。</td></tr><tr><td><code>-e &lt;范本样式&gt;</code></td><td><code>--regexp=&lt;范本样式&gt;</code></td><td>指定字符串作为查找文件内容的范本样式。</td></tr><tr><td><code>-E</code></td><td><code>--extended-regexp</code></td><td>将范本样式为延伸的普通表示法来使用，意味着使用能使用扩展正则表达式。</td></tr><tr><td><code>-f &lt;范本文件&gt;</code></td><td><code>--file=&lt;规则文件&gt;</code></td><td>指定范本文件，其内容有一个或多个范本样式，让grep查找符合范本条件的文件内容，格式为每一列的范本样式。</td></tr><tr><td><code>-F</code></td><td><code>--fixed-regexp</code></td><td>将范本样式视为固定字符串的列表。</td></tr><tr><td><code>-G</code></td><td><code>--basic-regexp</code></td><td>将范本样式视为普通的表示法来使用。</td></tr><tr><td><code>-h</code></td><td><code>--no-filename</code></td><td>在显示符合范本样式的那一列之前，不标示该列所属的文件名称。</td></tr><tr><td><code>-H</code></td><td><code>--with-filename</code></td><td>在显示符合范本样式的那一列之前，标示该列的文件名称。</td></tr><tr><td><code>-i</code></td><td><code>--ignore-case</code></td><td>忽略字符大小写的差别。</td></tr><tr><td><code>-l</code></td><td><code>--file-with-matches</code></td><td>列出文件内容符合指定的范本样式的文件名称。</td></tr><tr><td><code>-L</code></td><td><code>--files-without-match</code></td><td>列出文件内容不符合指定的范本样式的文件名称。</td></tr><tr><td><code>-n</code></td><td><code>--line-number</code></td><td>在显示符合范本样式的那一列之前，标示出该列的编号。</td></tr><tr><td><code>-P</code></td><td><code>--perl-regexp</code></td><td>PATTERN 是一个 Perl 正则表达式</td></tr><tr><td><code>-q</code></td><td><code>--quiet或--silent</code></td><td>不显示任何信息。</td></tr><tr><td><code>-R</code>/<code>-r</code></td><td><code>--recursive</code></td><td>此参数的效果和指定“-d recurse”参数相同。</td></tr><tr><td><code>-s</code></td><td><code>--no-messages</code></td><td>不显示错误信息。</td></tr><tr><td><code>-v</code></td><td><code>--revert-match</code></td><td>反转查找。</td></tr><tr><td><code>-V</code></td><td><code>--version</code></td><td>显示版本信息。</td></tr><tr><td><code>-w</code></td><td><code>--word-regexp</code></td><td>只显示全字符合的列。</td></tr><tr><td><code>-x</code></td><td><code>--line-regexp</code></td><td>只显示全列符合的列。</td></tr><tr><td><code>-y</code></td><td></td><td>此参数效果跟“-i”相同。</td></tr><tr><td><code>-o</code></td><td></td><td>只输出文件中匹配到的部分。</td></tr><tr><td><code>-m &lt;num&gt;</code></td><td><code>--max-count=&lt;num&gt;</code></td><td>找到num行结果后停止查找，用来限制匹配行数</td></tr></tbody></table><h2 id="规则表达式" tabindex="-1"><a class="header-anchor" href="#规则表达式"><span>规则表达式</span></a></h2><div class="language-shell" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">^</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 锚定行的开始 如：&#39;^grep&#39;匹配所有以grep开头的行。    </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">$</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 锚定行的结束 如：&#39;grep$&#39; 匹配所有以grep结尾的行。</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">.</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 匹配一个非换行符的字符 如：&#39;gr.p&#39;匹配gr后接一个任意字符，然后是p。    </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 匹配零个或多个先前字符 如：&#39;*grep&#39;匹配所有一个或多个空格后紧跟grep的行。    </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">.</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">*</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     # 一起用代表任意字符。   </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     # 匹配一个指定范围内的字符，如&#39;[Gg]rep&#39;匹配Grep和grep。    </span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">^</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    # 匹配一个不在指定范围内的字符，如：&#39;[^A-Z]rep&#39; 匹配不包含 A-Z 中的字母开头，紧跟 rep 的行</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">..</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # 标记匹配字符，如&#39;(love)&#39;，love被标记为1。    </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 锚定单词的开始，如:&#39;&lt;grep&#39;匹配包含以grep开头的单词的行。    </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      # 锚定单词的结束，如&#39;grep&gt;&#39;匹配包含以grep结尾的单词的行。    </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{m}</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   # 重复字符x，m次，如：&#39;0{5}&#39;匹配包含5个o的行。    </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{m,}</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  # 重复字符x,至少m次，如：&#39;o{5,}&#39;匹配至少有5个o的行。    </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">x</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{m,n}</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> # 重复字符x，至少m次，不多于n次，如：&#39;o{5,10}&#39;匹配5--10个o的行。   </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">\\w</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     # 匹配文字和数字字符，也就是[A-Za-z0-9]，如：&#39;G\\w*p&#39;匹配以G后跟零个或多个文字或数字字符，然后是p。   </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">\\W</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     # \\w的反置形式，匹配一个或多个非单词字符，如点号句号等。   </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">\\b</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     # 单词锁定符，如: &#39;\\bgrep\\b&#39;只匹配grep。</span></span></code></pre></div>`,4)]))}const c=d(a,[["render",n],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/memorandum/grep/","title":"git","lang":"zh-CN","frontmatter":{"title":"git","icon":"logos:git-icon","createTime":"2025/03/13 08:11:10","permalink":"/memorandum/grep/","description":"参数 规则表达式","head":[["meta",{"property":"og:url","content":"https://blog.l0v3ch4n.top/memorandum/grep/"}],["meta",{"property":"og:site_name","content":"L0v3ch4n"}],["meta",{"property":"og:title","content":"git"}],["meta",{"property":"og:description","content":"参数 规则表达式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-13T03:42:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-13T03:42:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-13T03:42:00.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":3.51,"words":1052},"git":{"updatedTime":1741837320000,"contributors":[{"name":"L0v3ch4n","username":"L0v3ch4n","email":"cuberwei0@163.com","commits":1,"avatar":"https://avatars.githubusercontent.com/L0v3ch4n?v=4","url":"https://github.com/L0v3ch4n"}]},"autoDesc":true,"filePathRelative":"notes/memorandum/grep.md"}');export{c as comp,p as data};
