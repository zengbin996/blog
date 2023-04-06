# JavaScript 递归获取字节的 id

```js
function getId(arr, id, ids = []) {
  if (id) {
    for (let item of arr) {
      if (item.id == id) {
        ids.push(item.id);
        getId(item.children, false, ids);
      } else {
        getId(item.children, id, ids);
      }
    }
  } else {
    for (let i of arr) {
      ids.push(i.id);
      if (i.children) {
        getId(i.children, false, ids);
      }
    }
  }
  return ids;
}

//获取所有父节点
export const findParents = (childrenId, arr, path = []) => {
  for (let i = 0; i < arr.length; i++) {
    let tmpPath = path.concat();
    tmpPath.push(arr[i].id);
    if (childrenId == arr[i].id) {
      return tmpPath;
    }
    if (arr[i].children) {
      let findResult = findParents(childrenId, arr[i].children, tmpPath);
      if (findResult) {
        return findResult;
      }
    }
  }
};

//获取所有子节点
export const findChildren = (id, tree, temporary = []) => {
  if (!id) {
    tree.forEach((item) => {
      temporary.push(item.id);
      if (item.children) {
        findChildren(false, item.children, temporary);
      }
    });
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

//获取所有兄弟节点
export const findSiblings = (id, tree, temporary = []) => {
  if (tree.find((item) => item.id === id)) {
    tree.forEach((item) => temporary.push(item.id));
    return temporary;
  }

  tree.forEach((item) => {
    if (item.children) {
      findSiblings(id, item.children, temporary);
    }
  });

  return temporary;
};

//获取节点名称
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
