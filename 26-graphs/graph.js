// We are building an undirected graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // this if checks to avoid duplication
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}
