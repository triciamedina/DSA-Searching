const BST = require('./BST');

function main() {
    let tree = new BST();

    tree.insert(25, 25);
    tree.insert(15, 15);
    tree.insert(50, 50);
    tree.insert(10, 10);
    tree.insert(24, 24);
    tree.insert(35, 35);
    tree.insert(70, 70);
    tree.insert(4, 4);
    tree.insert(12, 12);
    tree.insert(18, 18);
    tree.insert(31, 31);
    tree.insert(44, 44);
    tree.insert(66, 66);
    tree.insert(90, 90);
    tree.insert(22, 22);

    // console.log(tree.inOrder())
    // console.log(tree.preOrder())
    console.log(tree.postOrder())
}

main();