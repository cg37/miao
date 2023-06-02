const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
  ];
  function buildGraph(edges) {
    let graph = Object.create(null)
    function addEdge(from, to) {
      if(graph[from] === null) {
        graph[from] = [to]
      } else {
        graph[form].push(to)
      }
    }
    let edgesMap = edges.map(it=>it.split('-'))
    for (let [from, to] of edgesMap){
      addEdge(from, to)
      addEdge(to, from)
    }
    return graph
  }


  // class buildGraph{
  //   constructor(){
  //     this.graph = Object.create(null)
  //   }
  //   addEdge(from, to){
  //     if(graph[fram]===null) {
  //       graph[from] = [to]
  //     } else {
  //       this.graph[from].push(to)
  //     }
  //   }
  // }
