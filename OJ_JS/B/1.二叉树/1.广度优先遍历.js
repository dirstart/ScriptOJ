let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
};

// 广度优先遍历
const breadthFirst = (node) => {
    if (!node) {
        return;
    }
    
    let pre = [];
    pre.push(node);
    while(pre.length !== 0) {
        node = pre.shift();
        console.log(node.value);
        // 利用了一次只脱一层的特性
        if (node.left) {
            pre.push(node.left);
        }

        if (node.right) {
            pre.push(node.right);
        }
    }
};

breadthFirst(tree);