class Node {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
};

class LinkedList{
    constructor(){
        this.header  = null;
    }
    add(item){
        let newNode = new Node(item, null);
        if (this.header == null)
            this.header = newNode;
        else{
            let current = this.header;
            while (current.next != null)
                current = current.next;
            current.next = newNode;
        }

    };

    remove(item){
        if (item === null || this.header === null)
            return null;
        if (this.header.data === item)
            this.header = this.header.next;
        let current = this.header;
        while (current.next != null){
            if (current.next.data === item)
                break;
            current = current.next;
        }
       if (current.next == null)
            return null;
        current.next = current.next.next;
        return item;
    };

    print(){
        if (this.header === null)
            return;
        let current = this.header;
        let str = "{";
        while (current.next != null){
            str += current.data + ",";
            current = current.next;
        }
        str += current.data + "}";
        console.log(str);
    };
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3}; 
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};