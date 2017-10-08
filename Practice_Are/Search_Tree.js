const treeData = [{
  title: '0-0',
  key: '0-0',
  children: [{
    title: '0-0-0',
    key: '0-0-0',
    children: [
      { title: '0-0-0-0', key: '0-0-0-0' },
      { title: '0-0-0-1', key: '0-0-0-1' },
      { title: '0-0-0-2', key: '0-0-0-2' },
    ],
  }, {
    title: '0-0-1',
    key: '0-0-1',
    children: [
      { title: '0-0-1-0', key: '0-0-1-0' },
      { title: '0-0-1-1', key: '0-0-1-1' },
      { title: '0-0-1-2', key: '0-0-1-2' },
    ],
  }, {
    title: '0-0-2',
    key: '0-0-2',
  }],
}, {
  title: '0-1',
  key: '0-1',
  children: [
    { title: '0-1-0-0', key: '0-1-0-0' },
    { title: '0-1-0-1', key: '0-1-0-1' },
    { title: '0-1-0-2', key: '0-1-0-2' },
  ],
}, {
  title: '0-2',
  key: '0-2',
}];

// console.log(treeData);


// 生成树的地方
const dataList=[];
const generateList=(data)=>{
  for(let i=0;i<data.length;i++){
    const node = data[i];
    const key = node.key;
    dataList.push({key,title:key});

    if(node.children){
      generateList(node.children,node.key);
    }
  }
}

generateList(treeData);
console.log(dataList);

// 获取父母
const getParentKey=(key,tree)=>{
  let parentKey;
  for(let i=0;i<tree.length;i++){
    const node=tree[i];
    if(node.children){
      if(node.children.some(item=>item.key===key)){
        parentKey=node.key;
      }else if(getParentKey(key,node.children)){
        parentKey=getParentKey(key,node.children);
      }
    }
  }
  return parentKey;
}