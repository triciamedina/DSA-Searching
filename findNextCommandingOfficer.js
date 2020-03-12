//                           Captain Picard (5)
//                         /                \
//                Commander Riker (3)      Commander Data (6)
//                  /         \                      \
//            Lt. Cmdr.   Lt. Cmdr.                Lt. Cmdr.
//            Worf (2)    LaForge (4)              Crusher (8)
//              /                                   /
//        Lieutenant (1)                      Lieutenant (7)
//        security-officer                    Selar

// Breadth-first search

const BST = require('./BST');

function main() {
    let USSEnterprise = new BST();

    USSEnterprise.insert(5, 'Captain Picard');
    USSEnterprise.insert(3, 'Commander Riker');
    USSEnterprise.insert(2, 'Lt. Cmdr. Worf');
    USSEnterprise.insert(4, 'Lt. Cmdr. LaForge');
    USSEnterprise.insert(1, 'Lieutenant security-officer');
    USSEnterprise.insert(6, 'Commander Data');
    USSEnterprise.insert(8, 'Lt. Cmdr. Crusher');
    USSEnterprise.insert(8, 'Lieutenant Selar');

    console.log(USSEnterprise.bfs());
}

main()