class Graph{
    constructor(){
        this.adjacency = {}
    }
    addVertex(vertex){
        if(!this.adjacency[vertex]){
        this.adjacency[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacency[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacency[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacency[vertex1].add(vertex2)
        this.adjacency[vertex2].add(vertex1)
        
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacency[vertex1].has(vertex2) &&
            this.adjacency[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
              this.adjacency[vertex1].delete(vertex2)
              this.adjacency[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
       if(!this.adjacency[vertex]){
        return
       }
       for(let adjacencyVertex of this.adjacency[vertex]){
        this.removeEdge(vertex,adjacencyVertex)
       }
       delete this.adjacency[vertex]
    }
    bfs(startingVertex){
      let queue = []
      const visited = {}
      queue.push(startingVertex)
      visited[startingVertex] = true
      while(queue.length >0){
        let currentVertex = queue.shift()
        console.log(currentVertex);
        for(let neighbor of this.adjacency[currentVertex]){
            if(!visited[neighbor] ==true){
                queue.push(neighbor)
                visited[neighbor] = true
            }
        }
      }
    }
    dfs(startingVertex){
      let visited = {}
      const dfsRcursive = (vertex)=>{
        if(!vertex) return
        visited[vertex] = true
        console.log(vertex);
        for(let neighbor of this.adjacency[vertex]){
            if(!visited[neighbor]){
                dfsRcursive(neighbor)
            }
        }
        
      }
      dfsRcursive(startingVertex)
    }
    display(){
        for(let vertex in this.adjacency){
             console.log(vertex + '->'+[...this.adjacency[vertex]]);
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