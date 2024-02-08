class Graph{
  constructor(){
    this.adjacencyList = {}
  }
   addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set()
    }
   }
   addEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addvertex(vertex1)
    }
    if(!this.adjacencyList[vertex2]){
      this.addvertex(vertex2)
    }
    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
   }
   hasEdge(vertex1,vertex2){
      return ( this.adjacencyList[vertex1].has(vertex2)&& this.adjacencyList[vertex2].has(vertex1) )
   }
   removeEdge(vertex1,vertex2){
     this.adjacencyList[vertex1].delete(vertex2)
     this.adjacencyList[vertex2].delete(vertex1)
   }
   removeVertex(vertex){
     if(!this.adjacencyList[vertex]){
      return
     }
      for(let adjacencyVertex of this.adjacencyList[vertex]){
        this.removeEdge(adjacencyVertex,vertex)
      }
      delete this.adjacencyList[vertex]
   }
   bfs(startingVertex){
       let queue = []
       let visited = {}
       queue.push(startingVertex)
       visited[startingVertex] = true
       while(queue.length >0){
           let currentVertex = queue.shift()
           console.log(currentVertex);
           for(let neighbor of this.adjacencyList[currentVertex] ){
                 if(!visited[neighbor]){
                  queue.push(neighbor)
                  visited[neighbor] = true
                 }
           }
       }
   }

   dfs(startingVertex){
    let visited = {}
    const dfsRcursive = (vertex) =>{
      if(!vertex)return
      visited[vertex] = true 
      console.log(vertex);
      for(let neighbor of this.adjacencyList[vertex]){
        if(!visited[neighbor]){
           dfsRcursive(neighbor)
        }
      }
    }
    dfsRcursive(startingVertex)

   }
   
   display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + '->'+ [...this.adjacencyList[vertex]]);
    }
   }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge("A","B")
graph.addEdge("B","C")

graph.bfs("A")
console.log(graph.hasEdge("A",'B'));