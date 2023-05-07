/**
 * Represents a single node in a linked list.
 *
 * @class Node
 * @template T
 */
class Node {
    /**
     * Creates an instance of Node.
     * @param {T} value. The value to store in the node.
     * @param {Node} next. Link to the next node.
     * @memberof Node
     */
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
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
        // code here
    }
    
    /**
     * Inserts a node at the beginning of the list.
     *
     * @param {Node<T>} node. The node to insert.
     * @memberof LinkedList
     */
    addFirst(node) {
        // code here
    }
    
    /**
     * Inserts a node at the end of the list.
     *
     * @param {Node<T>} node. The node to insert.
     * @memberof LinkedList
     */
    addLast(node) {
        // code here
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
        // code here
    }
    
    /**
     * Removes the first node in the list.
     *
     * @returns {Node<T> | null} The removed node, or null if the list is empty.
     * @memberof LinkedList
     */
    removeFirst() {
        // code here
    }
    
    /**
     * Removes the last node in the list.
     *
     * @returns {Node<T> | null} The removed node, or null if the list is empty.
     * @memberof LinkedList
     */
    removeLast() {
        // code here
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
        // code here
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
        // code here
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
        // code here
    }
}

module.exports = {LinkedList, Node}
