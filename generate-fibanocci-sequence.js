var fibGenerator = function*() {
    let a = 0, b = 1;
    yield a;
    yield b;
    
    while (true) {
        const next = a + b;
        yield next;
        a = b;
        b = next;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 * ...
 */
