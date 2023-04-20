# SQL 语句

SQL 语句主要分为四类

- DQL（数据查询语言）: 查询语句，凡是 select 语句都是 DQL。
- DML（数据操作语言）：insert delete update，对表当中的数据进行增删改。
- DDL（数据定义语言）：create drop alter，对表结构的增删改。
- TCL（事务控制语言）：commit 提交事务，rollback 回滚事务。(TCL 中的 T 是 Transaction)
- DCL（数据控制语言）: grant 授权、revoke 撤销权限等。

## 查询 （DQL）

**基础查询**

```sql
SELECT
	字段1, 字段2, 字段3, ...
FROM
	表名;
```

查询员工的年薪？

```sql
-- 字段可以参与数学运算
SELECT
	ename,
	sal * 12
FROM
	emp;

-- 可以使用 as 关键字取别名, as 可以省略
SELECT
	ename '姓名',
	sal * 12 AS '年薪'
FROM
	emp;
```

**条件查询**

```sql
SELECT
	字段1, 字段2, 字段3, ...
FROM
	表名
WHERE
	条件;

-- 执行顺序：先from，然后where，最后select
```

查询工资等于 5000 的员工姓名？

```sql
SELECT
	ename
FROM
	emp
WHERE
	sal = 5000;
```

查询 SMITH 的工资？

```sql
SELECT
	sal
FROM
	emp
WHERE
	ename = 'SMITH';

-- 字符串使用单引号括起来。
```

找出工资在 1100 和 3000 之间的员工，包括 1100 和 3000？

```sql
SELECT
	ename, sal
FROM
	emp
WHERE
	sal >= 1100 AND sal <= 3000;


SELECT
	ename,
	sal
FROM
	emp
WHERE
	sal BETWEEN 1100
	AND 3000;
--  between...and...是闭区间 [1100 ~ 3000]
```

找出哪些人津贴为 NULL？

```sql
-- 在数据库当中NULL不是一个值，代表什么也没有，为空。
-- 空不是一个值，不能用等号衡量。
-- 必须使用 is null或者is not null

SELECT
	ename,
	sal,
	comm
FROM
	emp
WHERE
	comm IS NULL;

-- 找出哪些人津贴不为NULL？
SELECT
	ename,
	sal,
	comm
FROM
	emp
WHERE
	comm IS NOT NULL;
```

找出哪些人没有津贴？

```sql
SELECT
	ename,
	sal,
	comm
FROM
	emp
WHERE
	comm IS NULL
	OR comm = 0;
```

找出工作岗位是 MANAGER 和 SALESMAN 的员工？

```SQL
SELECT
	ename,
	job
FROM
	emp
WHERE
	job = 'MANAGER'
	OR job = 'SALESMAN';

SELECT
	ename,
	job
FROM
	emp
WHERE
	job IN ( 'SALESMAN', 'MANAGER' );
-- 	not in 不包括
```

模糊查询`like`

` % 代表任意多个字, _ 代表任意1个字符`

找出名字当中含有 O 的？

```sql
SELECT
	ename
FROM
	emp
WHERE
	ename LIKE '%O%';
```

找出名字中第二个字母是 A 的？

```sql
SELECT
	ename
FROM
	emp
WHERE
	ename LIKE '_A%';
```

找出名字中最后一个字母是 T 的？

```sql
SELECT
	ename
FROM
	emp
WHERE
	ename LIKE '%T';
```

找出名字中有下划线的？

```sql
SELECT NAME
FROM
	t_user
WHERE
	NAME LIKE '%\_%';
```

**排序**

按照工资升序，找出员工名和薪资？

```sql
SELECT
	ename,
	sal
FROM
	emp
ORDER BY
	sal;

-- 默认是升序。 asc表示升序，desc表示降序。
SELECT
	ename,
	sal
FROM
	emp
ORDER BY
	sal DESC;
```

找出工作岗位是 SALESMAN 的员工，并且要求按照薪资的降序排列。

```sql
SELECT
	ename,
	job,
	sal
FROM
	emp
WHERE
	job = 'SALESMAN'
ORDER BY
	sal DESC;
```

**分组函数**

> count 计数
> sum 求和
> avg 平均值
> max 最大值
> min 最小值

所有的分组函数都是对“某一组”数据进行操作的。所有的分组函数都是对“某一组”数据进行操作的。

```sql
-- 找出工资总和？
SELECT
sum( sal )
FROM
	emp;

-- 找出最高工资？
SELECT
max( sal )
FROM
	emp;

-- 找出最低工资？
SELECT
min( sal )
FROM
	emp;

-- 找出平均工资？
SELECT
avg( sal )
FROM
	emp;

-- 找出总人数？
SELECT
count(*)
FROM
	emp;

SELECT
	count( ename )
FROM
	emp;
```

> 分组函数一共 5 个。
> 分组函数还有另一个名字：多行处理函数。
> 多行处理函数的特点：输入多行，最终输出的结果是 1 行。
> 分组函数自动忽略 NULL。

查询补助合计?

```sql
SELECT
	sum( comm )
FROM
	emp;
-- 等价
SELECT
	sum( comm )
FROM
	emp
WHERE
	comm IS NOT NULL;
-- 不需要额外添加这个过滤条件。sum函数自动忽略NULL。
```

找出工资高于平均工资的员工？

```sql
SELECT
	ename,
	sal
FROM
	emp
WHERE
	sal > ( SELECT avg( sal ) FROM emp );

-- where 后面不可以直接使用分组函数 因为group by是在where执行之后才会执行的

```

SQL 语句 执行顺序

> SELECT 5
>
> ..
> FROM 1
>
> ..
> WHERE 2
>
> ..
> GROUP BY 3
>
> ..
> HAVING 4
>
> ..
> ORDER BY 6
>
> ..

`count(*)`和`count(具体的某个字段)`，他们有什么区别？

> `count(*)`:不是统计某个字段中数据的个数，而是统计总记录条数。（和某个字段无关）
> `count(comm)`: 表示统计 comm 字段中不为 NULL 的数据总数量。

**单行处理函数**

计算每个员工的年薪？

```sql
SELECT
	ename, ( sal + comm )* 12 AS yearsal
FROM
	emp;
-- 以上查询语句错误 所有数据库都是这样规定的，只要有NULL参与的运算结果一定是NULL。

SELECT
	ename,(
	sal + ifnull( comm, 0 ))* 12 AS yearsal
FROM
	emp;

-- ifnull() 空处理函数？
-- ifnull(可能为NULL的数据,被当做什么处理) ： 属于单行处理函数。
```

**GROUP BY 和 HAVING**

> `GROUP BY` ： 按照某个字段或者某些字段进行分组。
> `HAVING`: `having`是对分组之后的数据进行再次过滤。

找出每个工作岗位的最高薪资。

```sql
SELECT
	max( sal ),
	job
FROM
	emp
GROUP BY
	job;
```

> 注意：分组函数一般都会和 group by 联合使用，这也是为什么它被称为分组函数的原因。
> 并且任何一个分组函数（count sum avg max min）都是在 group by 语句执行结束之后才会执行的。
> 当一条 sql 语句没有 group by 的话，整张表的数据会自成一组。
> 当一条语句中有 group by 的话，select 后面只能跟分组函数和参与分组的字段。

每个工作岗位的平均薪资？

```sql
SELECT
	job,
	avg( sal )
FROM
	emp
GROUP BY
	job;
```

找出每个部门不同工作岗位的最高薪资。

```sql
SELECT
	deptno,
	job,
	max( sal )
FROM
	emp
GROUP BY
	deptno,
	job;
```

找出每个部门的最高薪资，要求显示薪资大于 2900 的数据。

```sql
SELECT
	max( sal ),
	deptno
FROM
	emp
WHERE
	sal > 2900
GROUP BY
	deptno;

-- 建议能够使用where过滤的尽量使用where。
```

找出每个部门的平均薪资，要求显示薪资大于 2000 的数据。

```sql
SELECT
	deptno,
	avg( sal )
FROM
	emp
GROUP BY
	deptno
HAVING
	avg( sal ) > 2000;
```
