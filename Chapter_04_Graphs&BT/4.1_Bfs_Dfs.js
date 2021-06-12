class Graph {
    nodes = new Map();

    addNode(name) {
        this.nodes.set(name, []);
    }

    addEdge(start, destination) {
        if (!this.nodes.get(start)) {
            this.addNode(start);
        }

        if (!this.nodes.get(destination)) {
            this.addNode(destination);
        }

        this.nodes.get(start).push(destination);

        return this;
    }

    removeItemFromList(item, list) {
        const index = list.indexOf(item);

        if (index === -1) {
            return;
        }

        list.splice(index, 1);
    }

    removeNode(name) {
        const nodes = this.nodes.keys();

        for (let node of nodes) {
            if (node !== name) {
                const neighbours = this.nodes.get(node);
                this.removeItemFromList(name, neighbours);
            } else {
                this.nodes.delete(name);
            }
        }
    }

    removeEdge(start, destination) {
        const startNodes = this.nodes.get(start);
        const destinationNodes = this.nodes.get(destination);

        this.removeItemFromList(start, destinationNodes);
        this.removeItemFromList(destination, startNodes);
    }

    dfs(searchedName, startNode) {
        if (!searchedName || !startNode) {
            throw new Error('Bad arguments');
        }

        const explored = new Map();
        const stack = [startNode];

        explored.set(startNode, true);

        while (stack.length) {
            const currNode = stack.shift();

            if (currNode === searchedName) {
                return [currNode, this.nodes.get(currNode)];
            }

            const adjacencies = this.nodes.get(currNode);

            for (let item of adjacencies) {
                if (!explored.has(item)) {
                    explored.set(item, true);
                    stack.unshift(item);
                }
            }
        }

        return false;
    }

    bfs(searchedName, startNode) {
        if (!searchedName || !startNode) {
            throw new Error('Bad arguments');
        }

        const queue = [startNode];
        const explored = new Map();

        explored.set(startNode, true);

        while (queue.length) {
            const currNode = queue.shift();

            if (currNode === searchedName) {
                return [currNode, this.nodes.get(currNode)];
            }

            const adjacencies = this.nodes.get(currNode);

            for (let node of adjacencies) {
                if (!explored.has(node)) {
                    queue.push(node);

                    explored.set(node, true);
                }
            }
        }

        return false;
    }
}


let graph = new Graph();

graph
    .addEdge('A', 'B')
    .addEdge('B', 'B1')
    .addEdge('B', 'B2')
    .addEdge('B', 'B3')
    .addEdge('A', 'C')
    .addEdge('C', 'C1')
    .addEdge('C', 'C2')
    .addEdge('C', 'C3')
    .addEdge('A', 'D')
    .addEdge('D', 'D1')
    .addEdge('D', 'D2')
    .addEdge('D', 'D3')
    .addEdge('A', 'E')
    .addEdge('E', 'E1')
    .addEdge('E', 'E2')
    .addEdge('E', 'E3')
    .addEdge('A', 'F')
    .addEdge('F', 'F1')
    .addEdge('F', 'F2')
    .addEdge('F', 'F3')

graph.bfs('B1', 'A')
graph.dfs('B1', 'A')
