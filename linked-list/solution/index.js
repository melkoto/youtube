/**
 * Represents a single node in a linked list.
 *
 * @class Node
 * @template T
 */
class Node {
    /**
     * Creates an instance of Node.
     * @param {T} value The value to store in the node.
     * @memberof Node
     */
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Represents a linked list data structure.
 *
 * @class LinkedList
 * @template T
 */
class LinkedList {
    /**
     * Creates an instance of LinkedList.
     * @memberof LinkedList
     */
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    
    /**
     * Inserts a node at a specified index in the list.
     *
     * @param {number} index. The index to insert the node at.
     * @param {Node<T>} node. The node to insert.
     * @throws {Error} If the index is out of bounds.
     * @memberof LinkedList
     */
    addAt(index, node) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) {
            return this.addFirst(node);
        }
        if (index === this.size) {
            return this.addLast(node);
        }
        
        let prev = null;
        let curr = this.head;
        let i = 0;
        
        while (i < index) {
            prev = curr;
            curr = curr.next;
            i++;
        }
        
        prev.next = node;
        node.next = curr;
        this.size++;
    }
    
    /**
     * Inserts a node at the beginning of the list.
     *
     * @param {Node<T>} node. The node to insert.
     * @memberof LinkedList
     */
    addFirst(node) {
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    
    /**
     * Inserts a node at the end of the list.
     *
     * @param {Node<T>} node. The node to insert.
     * @memberof LinkedList
     */
    addLast(node) {
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    
    /**
     * Removes a node at a specified index in the list.
     *
     * @param {number} index. The index to remove the node at.
     * @throws {Error} If the index is out of bounds.
     * @returns {Node<T>} The removed node.
     * @memberof LinkedList
     */
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) {
            return this.removeFirst();
        }
        if (index === this.size - 1) {
            return this.removeLast();
        }
        
        let prev = null;
        let curr = this.head;
        let i = 0;
        
        while (i < index) {
            prev = curr;
            curr = curr.next;
            i++;
        }
        
        prev.next = curr.next;
        curr.next = null;
        this.size--;
        
        return curr;
    }
    
    /**
     * Removes the first node in the list.
     *
     * @returns {Node<T> | null} The removed node, or null if the list is empty.
     * @memberof LinkedList
     */
    removeFirst() {
        if (this.size === 0) {
            return null;
        }
        const removedNode = this.head;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        removedNode.next = null;
        this.size--;
        
        return removedNode;
    }
    
    /**
     * Removes the last node in the list.
     *
     * @returns {Node<T> | null} The removed node, or null if the list is empty.
     * @memberof LinkedList
     */
    removeLast() {
        if (this.size === 0) {
            return null;
        }
        const removedNode = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let curr = this.head;
            let prev = null;
            while (curr.next !== null) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        removedNode.next = null;
        this.size--;
        
        return removedNode;
    }
    
    /**
     * Returns the node at a specified index in the list.
     *
     * @param {number} index. The index of the node to return.
     * @throws {Error} If the index is out of bounds.
     * @returns {Node<T>} The node at the specified index.
     * @memberof LinkedList
     */
    getAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        
        let curr = this.head;
        let i = 0;
        
        while (i < index) {
            curr = curr.next;
            i++;
        }
        
        return curr;
    }
    
    /**
     * Creates a linked list from an array of values.
     *
     * @static
     * @template T
     * @param {T[]} arr. The array of values to create the linked list from.
     * @returns {LinkedList<T>} The linked list created from the array.
     * @memberof LinkedList
     */
    static linkedListFromArray(arr) {
        const list = new LinkedList();
        arr.forEach(value => {
            list.addLast(new Node(value));
        });
        return list;
    }
    
    /**
     * Creates an array of values from the nodes in the linked list.
     *
     * @static
     * @template T
     * @param {LinkedList<T>} linkedList. The linked list to create an array from.
     * @returns {T[]} The array of values from the nodes in the linked list.
     * @memberof LinkedList
     */
    static arrayFromLinkedList(linkedList) {
        const arr = [];
        let curr = linkedList.head;
        while (curr !== null) {
            arr.push(curr.value);
            curr = curr.next;
        }
        return arr;
    }
}

module.exports = {LinkedList, Node}
