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

    findNodeWithoutDependencies() {
        const keys = [...this.nodes.keys()];

        for (let key of keys) {
            if (!this.nodes.get(key).length) {
                return key;
            }
        }
    }
}


function getOrder(projects, dependencies) {
    if (!projects || !dependencies) {
        throw new Error('Invalid arguments');
    }

    const graph = new Graph();
    const order = [];

    projects.forEach(project => graph.addNode(project));
    dependencies.forEach(dep => graph.addEdge(dep[1], dep[0]));

    let cleanDep = graph.findNodeWithoutDependencies();

    if (!cleanDep) {
        throw new Error('Circular dependencies');
    }

    while (cleanDep) {
        order.push(cleanDep);
        graph.removeNode(cleanDep);

        cleanDep = graph.findNodeWithoutDependencies();
    }

    return order;
}

let projects = ['a', 'b', 'c', 'd', 'e', 'f'];
let dependencies = [['d', 'a'], ['b', 'f'], ['d', 'b'], ['a', 'f'], ['c', 'd']];


getOrder(projects, dependencies);
