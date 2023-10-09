import{_ as n,p as s,q as a,a1 as e}from"./framework-e0dd9823.js";const l={},i=e(`<h1 id="sql-语句" tabindex="-1"><a class="header-anchor" href="#sql-语句" aria-hidden="true">#</a> SQL 语句</h1><p>SQL 语句主要分为四类</p><ul><li>DQL（数据查询语言）: 查询语句，凡是 select 语句都是 DQL。</li><li>DML（数据操作语言）：insert delete update，对表当中的数据进行增删改。</li><li>DDL（数据定义语言）：create drop alter，对表结构的增删改。</li><li>TCL（事务控制语言）：commit 提交事务，rollback 回滚事务。(TCL 中的 T 是 Transaction)</li><li>DCL（数据控制语言）: grant 授权、revoke 撤销权限等。</li></ul><h2 id="查询-dql" tabindex="-1"><a class="header-anchor" href="#查询-dql" aria-hidden="true">#</a> 查询 （DQL）</h2><p><strong>基础查询</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	字段<span class="token number">1</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span>
	表名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询员工的年薪？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 字段可以参与数学运算</span>
<span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	sal <span class="token operator">*</span> <span class="token number">12</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>

<span class="token comment">-- 可以使用 as 关键字取别名, as 可以省略</span>
<span class="token keyword">SELECT</span>
	ename <span class="token string">&#39;姓名&#39;</span><span class="token punctuation">,</span>
	sal <span class="token operator">*</span> <span class="token number">12</span> <span class="token keyword">AS</span> <span class="token string">&#39;年薪&#39;</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>条件查询</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	字段<span class="token number">1</span><span class="token punctuation">,</span> 字段<span class="token number">2</span><span class="token punctuation">,</span> 字段<span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">FROM</span>
	表名
<span class="token keyword">WHERE</span>
	条件<span class="token punctuation">;</span>

<span class="token comment">-- 执行顺序：先from，然后where，最后select</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询工资等于 5000 的员工姓名？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	sal <span class="token operator">=</span> <span class="token number">5000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询 SMITH 的工资？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	sal
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	ename <span class="token operator">=</span> <span class="token string">&#39;SMITH&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 字符串使用单引号括起来。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出工资在 1100 和 3000 之间的员工，包括 1100 和 3000？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span> sal
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	sal <span class="token operator">&gt;=</span> <span class="token number">1100</span> <span class="token operator">AND</span> sal <span class="token operator">&lt;=</span> <span class="token number">3000</span><span class="token punctuation">;</span>


<span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	sal
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	sal <span class="token operator">BETWEEN</span> <span class="token number">1100</span>
	<span class="token operator">AND</span> <span class="token number">3000</span><span class="token punctuation">;</span>
<span class="token comment">--  between...and...是闭区间 [1100 ~ 3000]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出哪些人津贴为 NULL？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 在数据库当中NULL不是一个值，代表什么也没有，为空。</span>
<span class="token comment">-- 空不是一个值，不能用等号衡量。</span>
<span class="token comment">-- 必须使用 is null或者is not null</span>

<span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	sal<span class="token punctuation">,</span>
	comm
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	comm <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- 找出哪些人津贴不为NULL？</span>
<span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	sal<span class="token punctuation">,</span>
	comm
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	comm <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出哪些人没有津贴？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	sal<span class="token punctuation">,</span>
	comm
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	comm <span class="token operator">IS</span> <span class="token boolean">NULL</span>
	<span class="token operator">OR</span> comm <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出工作岗位是 MANAGER 和 SALESMAN 的员工？</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>SELECT
	ename,
	job
FROM
	emp
WHERE
	job = &#39;MANAGER&#39;
	OR job = &#39;SALESMAN&#39;;

SELECT
	ename,
	job
FROM
	emp
WHERE
	job IN ( &#39;SALESMAN&#39;, &#39;MANAGER&#39; );
-- 	not in 不包括
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模糊查询<code>like</code></p><p><code> % 代表任意多个字, _ 代表任意1个字符</code></p><p>找出名字当中含有 O 的？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	ename <span class="token operator">LIKE</span> <span class="token string">&#39;%O%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出名字中第二个字母是 A 的？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	ename <span class="token operator">LIKE</span> <span class="token string">&#39;_A%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出名字中最后一个字母是 T 的？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	ename <span class="token operator">LIKE</span> <span class="token string">&#39;%T&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出名字中有下划线的？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> NAME
<span class="token keyword">FROM</span>
	t_user
<span class="token keyword">WHERE</span>
	NAME <span class="token operator">LIKE</span> <span class="token string">&#39;%\\_%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>排序</strong></p><p>按照工资升序，找出员工名和薪资？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	sal
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sal<span class="token punctuation">;</span>

<span class="token comment">-- 默认是升序。 asc表示升序，desc表示降序。</span>
<span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	sal
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sal <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出工作岗位是 SALESMAN 的员工，并且要求按照薪资的降序排列。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	job<span class="token punctuation">,</span>
	sal
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	job <span class="token operator">=</span> <span class="token string">&#39;SALESMAN&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
	sal <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>分组函数</strong></p><blockquote><p>count 计数 sum 求和 avg 平均值 max 最大值 min 最小值</p></blockquote><p>所有的分组函数都是对“某一组”数据进行操作的。所有的分组函数都是对“某一组”数据进行操作的。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 找出工资总和？</span>
<span class="token keyword">SELECT</span>
<span class="token function">sum</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>

<span class="token comment">-- 找出最高工资？</span>
<span class="token keyword">SELECT</span>
<span class="token function">max</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>

<span class="token comment">-- 找出最低工资？</span>
<span class="token keyword">SELECT</span>
<span class="token function">min</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>

<span class="token comment">-- 找出平均工资？</span>
<span class="token keyword">SELECT</span>
<span class="token function">avg</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>

<span class="token comment">-- 找出总人数？</span>
<span class="token keyword">SELECT</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>

<span class="token keyword">SELECT</span>
	<span class="token function">count</span><span class="token punctuation">(</span> ename <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>分组函数一共 5 个。 分组函数还有另一个名字：多行处理函数。 多行处理函数的特点：输入多行，最终输出的结果是 1 行。 分组函数自动忽略 NULL。</p></blockquote><p>查询补助合计?</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token function">sum</span><span class="token punctuation">(</span> comm <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>
<span class="token comment">-- 等价</span>
<span class="token keyword">SELECT</span>
	<span class="token function">sum</span><span class="token punctuation">(</span> comm <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	comm <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
<span class="token comment">-- 不需要额外添加这个过滤条件。sum函数自动忽略NULL。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出工资高于平均工资的员工？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span>
	sal
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	sal <span class="token operator">&gt;</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">avg</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span> <span class="token keyword">FROM</span> emp <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- where 后面不可以直接使用分组函数 因为group by是在where执行之后才会执行的</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL 语句 执行顺序</p><blockquote><p>SELECT 5</p><p>.. FROM 1</p><p>.. WHERE 2</p><p>.. GROUP BY 3</p><p>.. HAVING 4</p><p>.. ORDER BY 6</p><p>..</p></blockquote><p><code>count(*)</code>和<code>count(具体的某个字段)</code>，他们有什么区别？</p><blockquote><p><code>count(*)</code>:不是统计某个字段中数据的个数，而是统计总记录条数。（和某个字段无关） <code>count(comm)</code>: 表示统计 comm 字段中不为 NULL 的数据总数量。</p></blockquote><p><strong>单行处理函数</strong></p><p>计算每个员工的年薪？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span> <span class="token punctuation">(</span> sal <span class="token operator">+</span> comm <span class="token punctuation">)</span><span class="token operator">*</span> <span class="token number">12</span> <span class="token keyword">AS</span> yearsal
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>
<span class="token comment">-- 以上查询语句错误 所有数据库都是这样规定的，只要有NULL参与的运算结果一定是NULL。</span>

<span class="token keyword">SELECT</span>
	ename<span class="token punctuation">,</span><span class="token punctuation">(</span>
	sal <span class="token operator">+</span> ifnull<span class="token punctuation">(</span> comm<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">*</span> <span class="token number">12</span> <span class="token keyword">AS</span> yearsal
<span class="token keyword">FROM</span>
	emp<span class="token punctuation">;</span>

<span class="token comment">-- ifnull() 空处理函数？</span>
<span class="token comment">-- ifnull(可能为NULL的数据,被当做什么处理) ： 属于单行处理函数。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>GROUP BY 和 HAVING</strong></p><blockquote><p><code>GROUP BY</code> ： 按照某个字段或者某些字段进行分组。 <code>HAVING</code>: <code>having</code>是对分组之后的数据进行再次过滤。</p></blockquote><p>找出每个工作岗位的最高薪资。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token function">max</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span><span class="token punctuation">,</span>
	job
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	job<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：分组函数一般都会和 group by 联合使用，这也是为什么它被称为分组函数的原因。 并且任何一个分组函数（count sum avg max min）都是在 group by 语句执行结束之后才会执行的。 当一条 sql 语句没有 group by 的话，整张表的数据会自成一组。 当一条语句中有 group by 的话，select 后面只能跟分组函数和参与分组的字段。</p></blockquote><p>每个工作岗位的平均薪资？</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	job<span class="token punctuation">,</span>
	<span class="token function">avg</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	job<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出每个部门不同工作岗位的最高薪资。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	deptno<span class="token punctuation">,</span>
	job<span class="token punctuation">,</span>
	<span class="token function">max</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	deptno<span class="token punctuation">,</span>
	job<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出每个部门的最高薪资，要求显示薪资大于 2900 的数据。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token function">max</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span><span class="token punctuation">,</span>
	deptno
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">WHERE</span>
	sal <span class="token operator">&gt;</span> <span class="token number">2900</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	deptno<span class="token punctuation">;</span>

<span class="token comment">-- 建议能够使用where过滤的尽量使用where。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>找出每个部门的平均薪资，要求显示薪资大于 2000 的数据。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	deptno<span class="token punctuation">,</span>
	<span class="token function">avg</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	emp
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	deptno
<span class="token keyword">HAVING</span>
	<span class="token function">avg</span><span class="token punctuation">(</span> sal <span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">2000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66),p=[i];function c(d,t){return s(),a("div",null,p)}const u=n(l,[["render",c],["__file","sql.html.vue"]]);export{u as default};
