function Conexo(graph){
	var stack = require('../Profundidade/profundidade')(graph,true);
	require('../Conexo/transposto')(graph);
	var vertexs = graph.getAdjacencyList()
		,componentsCount = 0;

	vertexs.forEach(function(adjacent){
		adjacent.state = 'white';
	})
console.log(stack)

	for(var i = stack.length-1;i>=0;i--){

		var index = stack[i]
		,node = vertexs[index-1];
			console.log(node.value)
		if(node.state == "white"){
			dfsVisit(node);
			componentsCount++;
		}
	}

	function dfsVisit(vertex){
		vertex.state = 'grey';
		vertex.component = componentsCount;				
		vertex.edges.forEach(function(adjacent){
			if(adjacent.state == "white"){
				adjacent.pred = vertex;
				dfsVisit(adjacent);
			}
		})
		vertex.state = 'black';
	}

	return componentsCount;
}

module.exports = Conexo;