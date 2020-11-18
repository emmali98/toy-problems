// 224 ms, 56.2 mb
var Trie = function(val) {
  this.value = val === undefined ? '' : val;
  this.nodes = [];
};

/*
* Inserts a word into the trie.
*/
Trie.prototype.insert = function(word) {
  if (word === '') {
      let end = new Trie('.');
      this.nodes.push(end);
  } else if (!this.startsWith(word[0])) {
      let newNode = new Trie(word[0]);
      this.nodes.push(newNode);
      newNode.insert(word.slice(1));
  } else {
      for (let node of this.nodes) {
          if (node.value === word[0]) {
              node.insert(word.slice(1));
          }
      }
  }
};

/**
* Returns if the word is in the trie.
*/
Trie.prototype.search = function(word) {
  return this.startsWith(word + '.');
};

/**
* Returns if there is any word in the trie that starts with the given prefix.
*/
Trie.prototype.startsWith = function(prefix) {
  if (prefix === '') return true;
  for (let node of this.nodes) {
      if (node.value === prefix[0]) {
          return node.startsWith(prefix.slice(1));
      }
  }
  return false;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
