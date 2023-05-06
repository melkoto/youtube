const { LinkedList, Node } = require('./LinkedList');

describe('LinkedList', () => {
    let list;
    
    beforeEach(() => {
        list = new LinkedList();
    });
    
    test('addFirst()', () => {
        list.addFirst(new Node(1));
        expect(list.size).toBe(1);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(1);
    });
    
    test('addLast()', () => {
        list.addLast(new Node(1));
        list.addLast(new Node(2));
        expect(list.size).toBe(2);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(2);
    });
    
    test('addAt(index, node)', () => {
        list.addAt(0, new Node(1));
        list.addAt(1, new Node(3));
        list.addAt(1, new Node(2));
        expect(list.size).toBe(3);
        expect(list.getAt(0).value).toBe(1);
        expect(list.getAt(1).value).toBe(2);
        expect(list.getAt(2).value).toBe(3);
    });
    
    test('getAt(index)', () => {
        list.addLast(new Node(1));
        list.addLast(new Node(2));
        list.addLast(new Node(3));
        expect(list.getAt(0).value).toBe(1);
        expect(list.getAt(1).value).toBe(2);
        expect(list.getAt(2).value).toBe(3);
    });
    
    test('removeFirst()', () => {
        list.addLast(new Node(1));
        list.addLast(new Node(2));
        const removedNode = list.removeFirst();
        expect(removedNode.value).toBe(1);
        expect(list.size).toBe(1);
        expect(list.head.value).toBe(2);
    });
    
    test('removeLast()', () => {
        list.addLast(new Node(1));
        list.addLast(new Node(2));
        const removedNode = list.removeLast();
        expect(removedNode.value).toBe(2);
        expect(list.size).toBe(1);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(1);
    });
    
    test('removeAt(index)', () => {
        list.addLast(new Node(1));
        list.addLast(new Node(2));
        list.addLast(new Node(3));
        const removedNode = list.removeAt(1);
        expect(removedNode.value).toBe(2);
        expect(list.size).toBe(2);
        expect(list.getAt(0).value).toBe(1);
        expect(list.getAt(1).value).toBe(3);
    });
    
    test('addAt(index, node) edge cases', () => {
        expect(() => list.addAt(-1, new Node(1))).toThrow("Index out of bounds");
        expect(() => list.addAt(1, new Node(1))).toThrow("Index out of bounds");
    });
    
    test('get(index) edge cases', () => {
        expect(() => list.getAt(-1)).toThrow("Index out of bounds");
        expect(() => list.getAt(0)).toThrow("Index out of bounds");
    });
    
    test('remove(index) edge cases', () => {
        expect(() => list.removeAt(-1)).toThrow("Index out of bounds");
        expect(() => list.removeAt(0)).toThrow("Index out of bounds");
    });
    
    test('removeFirst() on empty list', () => {
        const removedNode = list.removeFirst();
        expect(removedNode).toBeNull();
        expect(list.size).toBe(0);
    });
    
    test('removeLast() on empty list', () => {
        const removedNode = list.removeLast();
        expect(removedNode).toBeNull();
        expect(list.size).toBe(0);
    });
    
    test('throws error on invalid index', () => {
        list.addLast(new Node(1));
        expect(() => list.getAt(1)).toThrow("Index out of bounds");
        expect(() => list.addAt(2, new Node(2))).toThrow("Index out of bounds");
        expect(() => list.removeAt(1)).toThrow("Index out of bounds");
    });
    
    test('adding and removing nodes in different orders', () => {
        list.addLast(new Node(1));
        list.addLast(new Node(2));
        list.addFirst(new Node(0));
        list.removeAt(1);
        expect(list.size).toBe(2);
        expect(list.head.value).toBe(0);
        expect(list.tail.value).toBe(2);
    });
    
    test("creates an empty list from an empty array", () => {
        const list = LinkedList.linkedListFromArray([]);
        expect(list.size).toBe(0);
        expect(list.head).toBe(null);
        expect(list.tail).toBe(null);
    });
    
    test("creates a list with one node from an array with one value", () => {
        const list = LinkedList.linkedListFromArray([42]);
        expect(list.size).toBe(1);
        expect(list.head.value).toBe(42);
        expect(list.tail.value).toBe(42);
    });
    
    test("creates a list with multiple nodes from an array with multiple values", () => {
        const list = LinkedList.linkedListFromArray([1, 2, 3]);
        expect(list.size).toBe(3);
        expect(list.head.value).toBe(1);
        expect(list.tail.value).toBe(3);
        expect(list.head.next.value).toBe(2);
        expect(list.head.next.next.value).toBe(3);
    });
    
    test("creates an empty array from an empty list", () => {
        const list = new LinkedList();
        const arr = LinkedList.arrayFromLinkedList(list);
        expect(arr).toEqual([]);
    });
    
    test("creates an array with one value from a list with one node", () => {
        const node = new Node(42);
        const list = new LinkedList();
        list.addFirst(node);
        const arr = LinkedList.arrayFromLinkedList(list);
        expect(arr).toEqual([42]);
    });
    
    test("creates an array with multiple values from a list with multiple nodes", () => {
        const list = LinkedList.linkedListFromArray([1, 2, 3]);
        const arr = LinkedList.arrayFromLinkedList(list);
        expect(arr).toEqual([1, 2, 3]);
    });
});
