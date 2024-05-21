/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/NodeModule.js":
/*!***************************!*\
  !*** ./src/NodeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
class Node {
  constructor(data, leftNode, rightNode) {
    this.data = data;
    this.left = leftNode;
    this.right = rightNode;
  }
  getData() {
    return this.data;
  }
  setLeftNode(newNode) {
    this.left = newNode;
  }
  setRightNode(newNode) {
    this.right = newNode;
  }
}


/***/ }),

/***/ "./src/TreeModule.js":
/*!***************************!*\
  !*** ./src/TreeModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tree: () => (/* binding */ Tree)
/* harmony export */ });
/* harmony import */ var _NodeModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeModule.js */ "./src/NodeModule.js");

class Tree {
  constructor(array, root, BST) {
    this.array = this.SortAndRemoveDuplicates(array);
    this.BST = [];
  }
  SortAndRemoveDuplicates(unsortedArray) {
    let sortedArray = unsortedArray.sort((a, b) => a - b);
    const uniqueArray = sortedArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    return uniqueArray;
  }
  BuildBST = (array, start, end) => {
    //Build a balanced binary search tree recursively.
    if (start > end) {
      return null;
    }
    if (!array) {
      array = this.array;
    }
    const middle = Math.floor((start + end) / 2);
    const TreeNode = new _NodeModule_js__WEBPACK_IMPORTED_MODULE_0__.Node(array[middle]);
    this.BST.push(TreeNode);
    TreeNode.setLeftNode(this.BuildBST(array, start, middle - 1));
    TreeNode.setRightNode(this.BuildBST(array, middle + 1, end));
    return TreeNode;
  };

  findData(root, data) {
    //run until we find the lowest left node the "in-order predecessor"
    if (data > root.right.data && data < root.right.data) {
      if (data == root.data) {
        return root;
      } else return "ERROR -- NOT FOUND";
    }
    if (data < root.left) {
      this.findData(root.left, data);
    } else if (data > root.right) {
      this.findData(node.right, data);
    }
  }

  RemoveNode(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(root, data) {
    function findMin(node) {
      //run until we find the lowest left node the "in-order predecessor"
      while (node.left != null) {
        node = node.left;
      }
      return node;
    }

    //Empty case
    if (root === null) {
      return root;
    }

    if (data < root.data) {
      root.left = this.removeNode(root.left, data);
    } else if (data > root.data) {
      root.right = this.removeNode(root.right, data);
    } else {
      // Node to be removed is found
      //
      //If there is no children, set the root to null
      if (root.left == null && root.right == null) {
        return null;
      }
      //else if there is one child, return it as the new root node
      else if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }
      //If there are more than one child, find the successor on the left side of its tree
      //continue removing until we have a stable tree
      else {
        let successor = findMin(root.right);
        root.data = successor.data;
        root.right = this.removeNode(root.right, successor.data);
      }
    }
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
  insertNode(Node) {
    //Handles inserting a node.
    //If less than, then left, if greater than, then right.
    const data = this.getBSTRoot().getData();
    if (data == null) {
      this.BST.push(Node);
    } else {
      seekPlace(this.getBSTRoot(), Node);
    }
  }
  seekPlace(currentNode, Node) {
    //Given a node, seek its place recursively.
    if (currentNode.getData() == Node.getData()) {
      return "ERROR -- balanced trees don't allow dupes";
    }
    if (currentNode.getData() < Node.getData()) {
      if (currentNode.right === null) {
        currentNode.setRightNode(Node);
        return true;
      } else {
        seekPlace(currentNode.right, Node);
      }
    } else if (currentNode.getData() > Node.getData()) {
      if (currentNode.left === null) {
        currentNode.setLeftNode(Node);
        return true;
      } else {
        seekPlace(currentNode.left, Node);
      }
      if (root == null) {
        return root;
      }
    }
  }
  //
  //Getters
  getArray() {
    return this.array;
  }
  getBSTRoot() {
    return this.BST[0];
  }
  //
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeModule.js */ "./src/TreeModule.js");


function OnEntry() {
  const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const BSTree = new _TreeModule_js__WEBPACK_IMPORTED_MODULE_0__.Tree(unsortedArray);
  BSTree.BuildBST(null, 0, BSTree.getArray().length);
  BSTree.prettyPrint(BSTree.getBSTRoot());
  BSTree.RemoveNode(BSTree.getBSTRoot(), 67);
}

OnEntry();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ2hDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sRUFBRSx5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ2pFO0FBQ0EscUNBQXFDLE9BQU8sRUFBRSx5QkFBeUI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25KQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QztBQUNBO0FBQ0EscUJBQXFCLGdEQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnN0Ly4vc3JjL05vZGVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYnN0Ly4vc3JjL1RyZWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYnN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGF0YSwgbGVmdE5vZGUsIHJpZ2h0Tm9kZSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdE5vZGU7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0Tm9kZTtcbiAgfVxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cbiAgc2V0TGVmdE5vZGUobmV3Tm9kZSkge1xuICAgIHRoaXMubGVmdCA9IG5ld05vZGU7XG4gIH1cbiAgc2V0UmlnaHROb2RlKG5ld05vZGUpIHtcbiAgICB0aGlzLnJpZ2h0ID0gbmV3Tm9kZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVNb2R1bGUuanNcIjtcbmV4cG9ydCBjbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoYXJyYXksIHJvb3QsIEJTVCkge1xuICAgIHRoaXMuYXJyYXkgPSB0aGlzLlNvcnRBbmRSZW1vdmVEdXBsaWNhdGVzKGFycmF5KTtcbiAgICB0aGlzLkJTVCA9IFtdO1xuICB9XG4gIFNvcnRBbmRSZW1vdmVEdXBsaWNhdGVzKHVuc29ydGVkQXJyYXkpIHtcbiAgICBsZXQgc29ydGVkQXJyYXkgPSB1bnNvcnRlZEFycmF5LnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcbiAgICBjb25zdCB1bmlxdWVBcnJheSA9IHNvcnRlZEFycmF5LmZpbHRlcigodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4gICAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVuaXF1ZUFycmF5O1xuICB9XG4gIEJ1aWxkQlNUID0gKGFycmF5LCBzdGFydCwgZW5kKSA9PiB7XG4gICAgLy9CdWlsZCBhIGJhbGFuY2VkIGJpbmFyeSBzZWFyY2ggdHJlZSByZWN1cnNpdmVseS5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIWFycmF5KSB7XG4gICAgICBhcnJheSA9IHRoaXMuYXJyYXk7XG4gICAgfVxuICAgIGNvbnN0IG1pZGRsZSA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuICAgIGNvbnN0IFRyZWVOb2RlID0gbmV3IE5vZGUoYXJyYXlbbWlkZGxlXSk7XG4gICAgdGhpcy5CU1QucHVzaChUcmVlTm9kZSk7XG4gICAgVHJlZU5vZGUuc2V0TGVmdE5vZGUodGhpcy5CdWlsZEJTVChhcnJheSwgc3RhcnQsIG1pZGRsZSAtIDEpKTtcbiAgICBUcmVlTm9kZS5zZXRSaWdodE5vZGUodGhpcy5CdWlsZEJTVChhcnJheSwgbWlkZGxlICsgMSwgZW5kKSk7XG4gICAgcmV0dXJuIFRyZWVOb2RlO1xuICB9O1xuXG4gIGZpbmREYXRhKHJvb3QsIGRhdGEpIHtcbiAgICAvL3J1biB1bnRpbCB3ZSBmaW5kIHRoZSBsb3dlc3QgbGVmdCBub2RlIHRoZSBcImluLW9yZGVyIHByZWRlY2Vzc29yXCJcbiAgICBpZiAoZGF0YSA+IHJvb3QucmlnaHQuZGF0YSAmJiBkYXRhIDwgcm9vdC5yaWdodC5kYXRhKSB7XG4gICAgICBpZiAoZGF0YSA9PSByb290LmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICB9IGVsc2UgcmV0dXJuIFwiRVJST1IgLS0gTk9UIEZPVU5EXCI7XG4gICAgfVxuICAgIGlmIChkYXRhIDwgcm9vdC5sZWZ0KSB7XG4gICAgICB0aGlzLmZpbmREYXRhKHJvb3QubGVmdCwgZGF0YSk7XG4gICAgfSBlbHNlIGlmIChkYXRhID4gcm9vdC5yaWdodCkge1xuICAgICAgdGhpcy5maW5kRGF0YShub2RlLnJpZ2h0LCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICBSZW1vdmVOb2RlKGRhdGEpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLnJlbW92ZU5vZGUodGhpcy5yb290LCBkYXRhKTtcbiAgfVxuXG4gIHJlbW92ZU5vZGUocm9vdCwgZGF0YSkge1xuICAgIGZ1bmN0aW9uIGZpbmRNaW4obm9kZSkge1xuICAgICAgLy9ydW4gdW50aWwgd2UgZmluZCB0aGUgbG93ZXN0IGxlZnQgbm9kZSB0aGUgXCJpbi1vcmRlciBwcmVkZWNlc3NvclwiXG4gICAgICB3aGlsZSAobm9kZS5sZWZ0ICE9IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIC8vRW1wdHkgY2FzZVxuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbiAgICBpZiAoZGF0YSA8IHJvb3QuZGF0YSkge1xuICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5yZW1vdmVOb2RlKHJvb3QubGVmdCwgZGF0YSk7XG4gICAgfSBlbHNlIGlmIChkYXRhID4gcm9vdC5kYXRhKSB7XG4gICAgICByb290LnJpZ2h0ID0gdGhpcy5yZW1vdmVOb2RlKHJvb3QucmlnaHQsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb2RlIHRvIGJlIHJlbW92ZWQgaXMgZm91bmRcbiAgICAgIC8vXG4gICAgICAvL0lmIHRoZXJlIGlzIG5vIGNoaWxkcmVuLCBzZXQgdGhlIHJvb3QgdG8gbnVsbFxuICAgICAgaWYgKHJvb3QubGVmdCA9PSBudWxsICYmIHJvb3QucmlnaHQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vZWxzZSBpZiB0aGVyZSBpcyBvbmUgY2hpbGQsIHJldHVybiBpdCBhcyB0aGUgbmV3IHJvb3Qgbm9kZVxuICAgICAgZWxzZSBpZiAocm9vdC5sZWZ0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJvb3QucmlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKHJvb3QucmlnaHQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcm9vdC5sZWZ0O1xuICAgICAgfVxuICAgICAgLy9JZiB0aGVyZSBhcmUgbW9yZSB0aGFuIG9uZSBjaGlsZCwgZmluZCB0aGUgc3VjY2Vzc29yIG9uIHRoZSBsZWZ0IHNpZGUgb2YgaXRzIHRyZWVcbiAgICAgIC8vY29udGludWUgcmVtb3ZpbmcgdW50aWwgd2UgaGF2ZSBhIHN0YWJsZSB0cmVlXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGV0IHN1Y2Nlc3NvciA9IGZpbmRNaW4ocm9vdC5yaWdodCk7XG4gICAgICAgIHJvb3QuZGF0YSA9IHN1Y2Nlc3Nvci5kYXRhO1xuICAgICAgICByb290LnJpZ2h0ID0gdGhpcy5yZW1vdmVOb2RlKHJvb3QucmlnaHQsIHN1Y2Nlc3Nvci5kYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcmV0dHlQcmludChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJldHR5UHJpbnQoXG4gICAgICAgIG5vZGUucmlnaHQsXG4gICAgICAgIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLFxuICAgICAgICBmYWxzZVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfVxuICBpbnNlcnROb2RlKE5vZGUpIHtcbiAgICAvL0hhbmRsZXMgaW5zZXJ0aW5nIGEgbm9kZS5cbiAgICAvL0lmIGxlc3MgdGhhbiwgdGhlbiBsZWZ0LCBpZiBncmVhdGVyIHRoYW4sIHRoZW4gcmlnaHQuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0QlNUUm9vdCgpLmdldERhdGEoKTtcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICB0aGlzLkJTVC5wdXNoKE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWVrUGxhY2UodGhpcy5nZXRCU1RSb290KCksIE5vZGUpO1xuICAgIH1cbiAgfVxuICBzZWVrUGxhY2UoY3VycmVudE5vZGUsIE5vZGUpIHtcbiAgICAvL0dpdmVuIGEgbm9kZSwgc2VlayBpdHMgcGxhY2UgcmVjdXJzaXZlbHkuXG4gICAgaWYgKGN1cnJlbnROb2RlLmdldERhdGEoKSA9PSBOb2RlLmdldERhdGEoKSkge1xuICAgICAgcmV0dXJuIFwiRVJST1IgLS0gYmFsYW5jZWQgdHJlZXMgZG9uJ3QgYWxsb3cgZHVwZXNcIjtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnROb2RlLmdldERhdGEoKSA8IE5vZGUuZ2V0RGF0YSgpKSB7XG4gICAgICBpZiAoY3VycmVudE5vZGUucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUuc2V0UmlnaHROb2RlKE5vZGUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlZWtQbGFjZShjdXJyZW50Tm9kZS5yaWdodCwgTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50Tm9kZS5nZXREYXRhKCkgPiBOb2RlLmdldERhdGEoKSkge1xuICAgICAgaWYgKGN1cnJlbnROb2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudE5vZGUuc2V0TGVmdE5vZGUoTm9kZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Vla1BsYWNlKGN1cnJlbnROb2RlLmxlZnQsIE5vZGUpO1xuICAgICAgfVxuICAgICAgaWYgKHJvb3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9cbiAgLy9HZXR0ZXJzXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG4gIGdldEJTVFJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuQlNUWzBdO1xuICB9XG4gIC8vXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9UcmVlTW9kdWxlLmpzXCI7XG5cbmZ1bmN0aW9uIE9uRW50cnkoKSB7XG4gIGNvbnN0IHVuc29ydGVkQXJyYXkgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdO1xuICBjb25zdCBCU1RyZWUgPSBuZXcgVHJlZSh1bnNvcnRlZEFycmF5KTtcbiAgQlNUcmVlLkJ1aWxkQlNUKG51bGwsIDAsIEJTVHJlZS5nZXRBcnJheSgpLmxlbmd0aCk7XG4gIEJTVHJlZS5wcmV0dHlQcmludChCU1RyZWUuZ2V0QlNUUm9vdCgpKTtcbiAgQlNUcmVlLlJlbW92ZU5vZGUoQlNUcmVlLmdldEJTVFJvb3QoKSwgNjcpO1xufVxuXG5PbkVudHJ5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=