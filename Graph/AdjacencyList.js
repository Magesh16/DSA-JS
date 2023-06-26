class Graph{
    constructor(){
        this.adjList = new Map();
    }
    addVertex(vertex){
        this.adjList.set(vertex, []);
    }
    addEdge(vertex1, vertex2){
        if(!this.adjList.has(vertex1)){
            addVertex(vertex1);
        }
        if(!this.adjList.has(vertex2)){
            addVertex(vertex2);
        }
        this.adjList.get(vertex1).push(vertex2);
        this.adjList.get(vertex2).push(vertex1);
    }
    removeEdge(vertex1,vertex2){
        this.adjList.set(vertex1, this.adjList.get(vertex1).filter(v => v!== vertex2));
        this.adjList.set(vertex2, this.adjList.get(vertex2).filter(v => v!== vertex1));
    }
    removeVertex(vertex){
        while(this.adjList.get(vertex).length!=0){
            let adjVertex = this.adjList.get(vertex)[0];
            this.removeEdge(adjVertex,vertex);
        }
        this.adjList.delete(vertex)
    }

    bfs(start){
        let queue =[start];
        let visited ={};
        let res =[];
        let list = Object.fromEntries(this.adjList)
        visited[start] =true;
        let curr;
        while(queue.length>0){
            curr = queue.shift();
            res.push(curr);
            list[curr].forEach(neighbour => {
                    if(!visited[neighbour]){
                        visited[neighbour] =true;
                        queue.push(neighbour);
                    }
            });
    }
    return res;
}

dfs(start){
    let stack =[start];
    let res =[];
    let visited  ={};
    let list = Object.fromEntries(this.adjList)
    let curr;
    visited[start] =true;
    while(stack.length>0){
        curr = stack.pop();
        res.push(curr);
        list[curr].forEach(neighbour=>{
            if(!visited[neighbour]){
                visited[neighbour] =true;
                stack.push(neighbour);
            }
        })
    }
    return res;
}

    print(){
        for(let [key,value] of this.adjList){
            console.log(key+ "->" + value);
        }
}
}
let graph = new Graph();
graph.addVertex(10);
graph.addVertex(20);
graph.addVertex(30);
graph.addVertex(40);
graph.addEdge(10,20);
graph.addEdge(20,30);
graph.addEdge(30,40);
graph.addEdge(40,10);
graph.addEdge(10,30);
graph.addEdge(20,40);
graph.print();
console.log(graph.bfs(20));
console.log(graph.dfs(10));
// graph.removeVertex(10);
// graph.removeEdge(20,40);

graph.print()




