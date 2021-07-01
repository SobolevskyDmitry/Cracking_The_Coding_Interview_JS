const A = [4, 3, 2, 1];
const B = [];
const C = [];


function move(n, source, target, buffer) {
    if (!source || !target || !buffer) {
        throw new Error('Bad arguments');
    }

    if (n <= 0) {
        return;
    }

    //Move n - 1 disks from source to buffer, so they are out of the way
    move(n - 1, source, buffer, target)

    //Move the nth disk from source to target
    target.push(source.pop())

    // Display our progress
    console.log('##############\n',)
    console.log('A', A);
    console.log('B', B);
    console.log('C', C);

    // Move the n - 1 disks that we left on buffer onto target
    move(n - 1, buffer, target, source)
}

move(4, A, C, B)
