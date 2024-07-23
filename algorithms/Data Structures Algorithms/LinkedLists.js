class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// const myNode = new Node(4);

// console.log(myNode);


class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++
        return this;

    }

    pop() {
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while( temp.next ) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.nex = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = null
        }
        return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length ) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;

    }

    set(index, value) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert(index, value){
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return false;
        const newNode = new Node(value);
        const temp = this.get(index -1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;

    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        const before = this.get(index -1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;

    }

}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
// myLinkedList.push(7);
// myLinkedList.push(23);
// myLinkedList.pop();
// myLinkedList.unshift(9);
// myLinkedList.shift();
// console.log(myLinkedList.get(10));
// myLinkedList.set(1, 4);
// myLinkedList.set(1, 4);
// myLinkedList.insert(1, 1);


//     myLinkedList.push(7);
//         myLinkedList.unshift(3);
// myLinkedList.insert(1, 11);
// myLinkedList.remove(1);
// myLinkedList.pop();
// myLinkedList.shift();
// myLinkedList.remove(2)
myLinkedList.reverse();


console.log(myLinkedList);




// How it looks a linked list

myLinkedList = {
    head: {
        value: 11,
        next: {
            value: 3,
            next: {
                value: 23,
                next: {
                    value: 7,
                    next: {
                        value: 4,
                        next: null
                    }
                }
            }
        }
    }
}

////////////////       Notes         /////////////////////////////
/*
Linked Lists do not have index like arrays
Linked Lists have a varialbe head, a varialbe tail and each item points to the next
to the next, and last item points to null
Node Terminated List
Linked List can be all over the place in memory, not like arrays that are continuos next to each other.
Poping something from the end of a Linked List is a 0(n)
Unshifting at beginning is a 0(1);
Removing (shifting) at the beginning is also 0(1)
Inserting in the middle 0(n)
Removing from the middle 0(n)
Finding an item 0(n) by value or by index

Pop and Look by index is much better for Arrays
Shift and Unshift Linked List are much better

*/







