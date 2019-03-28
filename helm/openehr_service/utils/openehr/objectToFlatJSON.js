/*

 ----------------------------------------------------------------------------
 |                                                                          |
 | Copyright (c) 2019 Ripple Foundation Community Interest Company          |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Rob Tweed, M/Gateway Developments Ltd                            |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  7 February 2019

*/

var traverse = require('traverse');
var tools = require('../../../utils/tools');

function flatten(obj) {
  var flatObj = {};

  var outputObj = traverse(obj).map(function(node) {
    if (this.isLeaf) {
      var flatPath = '';
      var slash = '';
      var colon = '';
      var lastPathIndex = this.path.length - 1;
      var pathArr = this.path;
      pathArr.forEach(function(path, index) {
        if (tools.isNumeric(path)) {
          flatPath = flatPath + colon + path
        }
        else {
          if (index === lastPathIndex && path[0] === '|' && tools.isNumeric(pathArr[index -1])) slash = '';
          flatPath = flatPath + slash + path;
        }
        slash = '/';
        colon = ':';
      });
      flatObj[flatPath] = node;
    }
  });
  return flatObj;
}

module.exports = flatten;
