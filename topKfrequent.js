/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const root = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapifyDown();
        }

        return root;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIdx = this.heap.length - 1;

        while (currentIdx > 0) {
            const parentIdx = Math.floor((currentIdx - 1) / 2);
            if (this.heap[currentIdx][0] < this.heap[parentIdx][0]) {
                this.swap(currentIdx, parentIdx);
                currentIdx = parentIdx;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let currentIdx = 0;

        while (true) {
            const leftChildIdx = 2 * currentIdx + 1;
            const rightChildIdx = 2 * currentIdx + 2;
            let smallestChildIdx = currentIdx;

            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx][0] < this.heap[smallestChildIdx][0]) {
                smallestChildIdx = leftChildIdx;
            }

            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx][0] < this.heap[smallestChildIdx][0]) {
                smallestChildIdx = rightChildIdx;
            }

            if (smallestChildIdx !== currentIdx) {
                this.swap(currentIdx, smallestChildIdx);
                currentIdx = smallestChildIdx;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

function topKFrequent(nums, k) {
    const frequencyMap = new Map();

    // Count the frequency of each element
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Use a min heap to keep track of k most frequent elements
    const minHeap = new MinHeap();

    for (const [num, freq] of frequencyMap.entries()) {
        minHeap.push([-freq, num]);

        if (minHeap.heap.length > k) {
            minHeap.pop();
        }
    }

    // Extract the result from the min heap
    const result = [];
    while (!minHeap.isEmpty()) {
        result.push(minHeap.pop()[1]);
    }

    return result.reverse();
}