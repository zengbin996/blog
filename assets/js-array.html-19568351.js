import{_ as a,p as r,q as i,t as n,a1 as e}from"./framework-822ca1a4.js";const d={},l=e(`<h1 id="javascript-数组" tabindex="-1"><a class="header-anchor" href="#javascript-数组" aria-hidden="true">#</a> JavaScript 数组</h1><p>数组可以用来存储一组有序的数据集合，数组里面可以存放任意数据类型的数据。</p><h4 id="创建数组" tabindex="-1"><a class="header-anchor" href="#创建数组" aria-hidden="true">#</a> 创建数组</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一 字面量创建
var arr = [];
var arr = [1, 2, 3, 4, &#39;a&#39;, &#39;b&#39;, [1, 2, 5]];

//方式二 构造函数创建
var arr = new Array(5); //只有一个值代表数组长度
var arr = new Array(1, 2, 3, 4, &#39;t&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组遍历" tabindex="-1"><a class="header-anchor" href="#数组遍历" aria-hidden="true">#</a> 数组遍历</h4><p>当我们需要数组中某个元素是，通过<code>arr[subscript]</code>就可取出来（这个下标从 0 开始）。并且每一个数组都已一个<code>length</code>属性，代表数组的长度，我们可以用这个属性来遍历数组</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i &lt; arr.length; i++) {
    console.log(arr[i]);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="增删元素" tabindex="-1"><a class="header-anchor" href="#增删元素" aria-hidden="true">#</a> 增删元素</h4><ul><li><code>arr.push()</code> 接收一个或多个参数，把这些值依次追加到指定数组的最后</li><li><code>arr.pop()</code>移除数组的最后一项，并返回该项的值</li><li><code>arr.unshift()</code> 接收一个或多个参数，把这些值依次追加到指定数组的开始</li><li><code>arr.shift()</code> 移除数组的第一项，并返回该项的值</li><li><code>arr.splice(开始删除元素的位置, 删除的个数,替换的元素1,替换的元素2,...)</code>可以同时实现删除，添加或替换</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5, 6];
arr.splice(0, 2, 8, 9);
console.log(arr); //[8, 9, 3, 4, 5, 6]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h4><p><code>arr.sort(function)</code>接收一个函数作为参数，在函数里面指定排序方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 233, 32, 43, 51, 666];
//按照第一位字符的ASCII大小排序
arr.sort()
console.log(arr); // [1, 233, 32, 43, 51, 666]

var arr = [1, 233, 32, 43, 51, 666];
//按照大小排序
arr.sort((a, b) =&gt; a - b);
console.log(arr); // [1, 32, 43, 51, 233, 666]

var arr = [{
        age: 18,
        name: &quot;张三&quot;
    },
    {
        age: 20,
        name: &quot;李四&quot;
    },
    {
        age: 15,
        name: &quot;王五&quot;
    },

]
//按照对象属性排序
arr.sort((a, b) =&gt; a.age - b.age);
console.log(arr);
// (3) [{…}, {…}, {…}]
// 0: {age: 15, name: &quot;王五&quot;}
// 1: {age: 18, name: &quot;张三&quot;}
// 2: {age: 20, name: &quot;李四&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数组其他方法" tabindex="-1"><a class="header-anchor" href="#数组其他方法" aria-hidden="true">#</a> 数组其他方法</h4><ul><li><code>arr.forEach(function)</code> 循环遍历数组</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var arr = [1, 2, 3, 4, 5, 6];
arr.forEach((value, index, arr) =&gt; {
    //第一个参数为数组的项，第二个参数为数组的下标，第三个参数为数组本身
    console.log(value,index + &quot;，&quot;);// 1 0，  2 1，  3 2，  4 3，  5 4，  6 5
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,17),s=e('<p>console.log(result); //true</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;hr&gt;\n- ``arr.some(function)`` 针对数组的元素做些判断，如果有一个为true，则返回的结果为true\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>var arr = [1, 2, 3, 4, 5, 6]; var result = arr.some((value, index) =&gt; { return value == 1; })</p><p>console.log(result); //true</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;hr&gt;\n- ``arr.filter(function)`` 针对数组的元素做些判断，满足的元素会以一个数组返回\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>var arr = [1, 2, 3, 4, 5, 6]; var result = arr.filter((value, index) =&gt; { return value &gt; 3; })</p><p>console.log(result); //[4, 5, 6]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;hr&gt;\n\n- ``arr.map(function)`` 返回一个新数组\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>var arr = [1, 2, 3, 4, 5, 6]; var result = arr.map((value, index) =&gt; { return value &gt; 3; })</p><p>console.log(result); // [false, false, false, true, true, true]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- ``arr.join(str)`` 将数组拼接成字符串\n- ``arr.concat(arr1)``数组拼接\n- ``arr.reverse()``倒序并返回\n- ``arr.indexOf(查找项)`` 查找数组中是否有指定字符\n- ``arr.slice(开始位置,结束位置)`` 结束指定内容并返回\n- ``Array.isArray(arr)`` 判断arr是不是数组\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11);function v(t,c){return r(),i("div",null,[l,n(" - ``arr.every(function)`` 针对数组的元素做些判断，如果结果都为true，则返回的结果为true ``` var arr = [1, 2, 3, 4, 5, 6]; var result = arr.every((value, index) => { return !isNaN(value); }) "),s])}const o=a(d,[["render",v],["__file","js-array.html.vue"]]);export{o as default};
