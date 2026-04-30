# JavaScript 递归获取树节点 ID

在树形结构数据中，经常需要根据某个节点 ID 递归查找其所有子节点、父节点或兄弟节点的 ID。以下提供几个常用的工具函数。

---

## 获取指定节点及其所有子节点的 ID

传入目标 `id` 时，先找到该节点，再递归收集其所有后代节点 ID；不传 `id`（或传 `false`）时，直接收集所有节点 ID。

```js
function getId(arr, id, ids = []) {
  if (id) {
    for (let item of arr) {
      if (item.id == id) {
        ids.push(item.id);
        // 找到目标节点后，递归收集其所有子节点
        getId(item.children || [], false, ids);
      } else {
        getId(item.children || [], id, ids);
      }
    }
  } else {
    // 递归收集全部节点 ID
    for (let item of arr) {
      ids.push(item.id);
      if (item.children) {
        getId(item.children, false, ids);
      }
    }
  }
  return ids;
}
```

---

## 获取所有父节点 ID（路径）

从根节点向下递归查找目标节点，返回从根到目标节点的完整路径（包含目标节点自身的 ID）。

```js
/**
 * 查找目标节点的祖先路径
 * @param {string|number} childrenId 目标子节点 ID
 * @param {Array} arr 树形数据
 * @param {Array} path 当前路径（递归内部使用）
 * @returns {Array|undefined} 路径数组，未找到返回 undefined
 */
export const findParents = (childrenId, arr, path = []) => {
  for (let i = 0; i < arr.length; i++) {
    // 复制当前路径，避免污染其他分支
    let tmpPath = path.concat();
    tmpPath.push(arr[i].id);

    if (childrenId == arr[i].id) {
      return tmpPath; // 找到目标，返回路径
    }

    if (arr[i].children) {
      let findResult = findParents(childrenId, arr[i].children, tmpPath);
      if (findResult) {
        return findResult;
      }
    }
  }
};
```

---

## 获取指定节点的所有子节点 ID

递归查找目标节点，收集其所有后代节点的 ID（包含目标节点自身）。

```js
/**
 * 查找指定节点及其所有子节点的 ID
 * @param {string|number|false} id 目标节点 ID，false 表示直接收集当前层所有节点
 * @param {Array} tree 树形数据
 * @param {Array} temporary 结果数组（递归内部使用）
 * @returns {Array} ID 数组
 */
export const findChildren = (id, tree, temporary = []) => {
  if (!id) {
    // 收集当前数组的所有节点及其子节点
    tree.forEach((item) => {
      temporary.push(item.id);
      if (item.children) {
        findChildren(false, item.children, temporary);
      }
    });
    return temporary;
  }

  tree.forEach((item) => {
    if (item.id === id) {
      temporary.push(item.id);
      if (item.children) {
        findChildren(false, item.children, temporary);
      }
    } else {
      if (item.children) {
        findChildren(id, item.children, temporary);
      }
    }
  });

  return temporary;
};
```

---

## 获取所有兄弟节点 ID

找到目标节点所在的层级，返回该层级中所有节点的 ID（包含目标节点自身）。

```js
/**
 * 查找目标节点的所有兄弟节点 ID（含自身）
 * @param {string|number} id 目标节点 ID
 * @param {Array} tree 树形数据
 * @param {Array} temporary 结果数组（递归内部使用）
 * @returns {Array} 同级所有节点的 ID 数组
 */
export const findSiblings = (id, tree, temporary = []) => {
  // 判断目标节点是否在当前层级
  if (tree.find((item) => item.id === id)) {
    tree.forEach((item) => temporary.push(item.id));
    return temporary;
  }

  // 向子节点递归查找
  tree.forEach((item) => {
    if (item.children) {
      findSiblings(id, item.children, temporary);
    }
  });

  return temporary;
};
```

---

## 获取节点名称

根据 ID 在树中查找对应节点，返回其名称字段（此处为 `dictValue`，可按实际字段名修改）。

```js
/**
 * 根据 ID 查找节点名称
 * @param {string|number} id 目标节点 ID
 * @param {Array} tree 树形数据
 * @param {Array} temporary 结果数组（递归内部使用）
 * @returns {string|undefined} 节点名称，未找到返回 undefined
 */
export const findNodeName = (id, tree = [], temporary = []) => {
  tree.forEach((item) => {
    if (item.id == id) {
      temporary.push(item.dictValue);
    } else if (item.children) {
      findNodeName(id, item.children, temporary);
    }
  });

  return temporary[0];
};
```
