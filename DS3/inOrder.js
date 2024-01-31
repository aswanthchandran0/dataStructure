class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){
      const newNode = new Node(value)
        if(this.isEmpty()){
     this.root = newNode
        }else{
 this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value < root.value){
         if(root.left == null){
            root.left = newNode
         }else{
            this.insertNode(root.left,newNode)
         }
        }else{
           if(root.right == null){
            root.right = newNode
           }else{
            this.insertNode(root.right,newNode)
           }
        }
}
      search(root,value){
        if(!root){
            return false
        }else{
            if(value == root.value){
                return true
            }else if(value < root.value){
               return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
      }
      preorder(root){
              if(root){
                console.log(root.value);
                this.preorder(root.left)
                this.preorder(root.right)
              }
      }
      inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
      }
}


const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.inOrder(bst.root)
