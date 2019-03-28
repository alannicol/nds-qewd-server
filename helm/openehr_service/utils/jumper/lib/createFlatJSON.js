/*

 ----------------------------------------------------------------------------
 | ripple-openehr-jumper: Automated OpenEHR Template Access                 |
 |                                                                          |
 | Copyright (c) 2016-18 Ripple Foundation Community Interest Company       |
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

  25 July 2018

*/

function getSource(id, extra) {
  var pieces = id.split('/');
  pieces.shift(); // remove first element
  pieces.forEach(function(piece, index) {
    if (piece.indexOf(':0') !== -1) {
      pieces[index] = piece.split(':0')[0];
    }
  });
  if (extra && extra !== '') pieces.push(extra);
  return '=> either(' + pieces.join('.') + ', <!delete>)';
}

function getDVText(id) {
  var pieces = id.split('/');
  pieces.shift(); // remove first element
  pieces.forEach(function(piece, index) {
    if (piece.indexOf(':0') !== -1) {
      pieces[index] = piece.split(':0')[0];
    }
  });
  return '=> dvText(' + pieces.join('.') + ')';
}

function removePunctuation(string) {
  if (string.indexOf('__') !== -1) string = string.split('__').join('_');
  return string.replace(/[.,\/#!$%\^&\*;:?{}=`~()]/g,"");
}

/*

function getPaths(obj, path, paths, host) {

  console.log('*** getPaths');
  //console.log('obj = ' + JSON.stringify(obj));
  console.log('path = ' + path);
  //console.log('paths: ' + JSON.stringify(paths));
  console.log('-----------');

  obj.forEach(function(node) {
    console.log('** node.id = ' + node.id);

    if (typeof node.id === 'undefined') {
      //return; // ignore these nodes

      if (node.children) {
        var currentPath = path + node.aql_path;
        getPaths(node.children, currentPath, paths, host);
      }
      return;
    }

    var type;
    if (host === 'marand') {
      type = node.rmType;
    }
    else {
      type = node.type;
      if (node.constraints) {
        if (node.constraints[0]) {
          if (node.constraints[0].type) type = node.constraints[0].type;
        }
      }
    }

    //if (node.id === 'context' && node.aqlPath === '/context') return; // ignore these
    if (node.aqlPath === '/context/start_time') return; // ignore these
    if (node.aqlPath === '/context/setting') return; // ignore these
    if (node.id === 'composer' && node.aqlPath === '/composer') return; // ignore this
    if (node.id === 'language' && type === 'CODE_PHRASE' && !node.children) return; // ignore this
    if (node.id === 'encoding' && type === 'CODE_PHRASE' && !node.children) return; // ignore this
    if (node.id === 'subject' && type === 'PARTY_PROXY' && !node.children) return; // ignore this
    var currentPath = path;

    var tree_structure = false;
    if (node.type === 'ITEM_TREE' && (node.id === 'tree' || node.id === 'structure')) tree_structure = true;
    if (node.type === 'HISTORY' && node.id === 'event_series') tree_structure = true;
    if (node.type === 'POINT_EVENT') tree_structure = true;

    if (!tree_structure) {
      if (currentPath !== '') currentPath = currentPath + '/';
      currentPath = currentPath + removePunctuation(node.id);
    }
    console.log('*** node = ' + JSON.stringify(node));
    console.log('node.max = ' + node.max);

    if (node.children) {
      if (!tree_structure && node.max === -1) currentPath = currentPath + ':0';
      getPaths(node.children, currentPath, paths, host);
    }
    else if (!tree_structure) {
      if (type === 'DV_CODED_TEXT') {
        if (node.max === -1) currentPath = currentPath + ':0';
        paths.push({
          id: getSource(currentPath, 'value'),
          path: currentPath + '|value'
        });
        paths.push({
          id: getSource(currentPath, 'code'),
          path: currentPath + '|code'
        });
        paths.push({
          id: getSource(currentPath, 'terminology'),
          path: currentPath + '|terminology'
        });
      }
      else if (type === 'DV_TEXT') {
        if (node.max === -1) currentPath = currentPath + ':0';
        paths.push({
          id: getDVText(currentPath),
          path: currentPath
        });
        paths.push({
          id: getSource(currentPath, 'value'),
          path: currentPath + '|value'
        });
        paths.push({
          id: getSource(currentPath, 'code'),
          path: currentPath + '|code'
        });
        paths.push({
          id: getSource(currentPath, 'terminology'),
          path: currentPath + '|terminology'
        });
      }
      else if (type === 'ISM_TRANSITION') {
        paths.push({
          id: getSource(currentPath, 'value'),
          path: currentPath + '/current_state|code'
        });
      }
      else if (type === 'DV_QUANTITY') {
        paths.push({
          id: getSource(currentPath, 'magnitude'),
          path: currentPath + '|magnitude'
        });
      }
      else {
        paths.push({
          id: getSource(currentPath),
          path: currentPath
        });
      }
    }
  });
}

*/

function createFlatJSONTemplate(metaDataArray) {

  console.log('\n** createFlatJSONTemplate');
  console.log('** metaDataArray: ' + JSON.stringify(metaDataArray, null, 2));

  /*

  var templateTree;
  var host;
  if (webTemplate.webTemplate) {
    // marand version
    templateTree = webTemplate.webTemplate.tree;
    host = 'marand';
  }
  else {
    templateTree = webTemplate.tree;
    host = 'ethercis';
  }

  var path = '';

  var paths = [
    {id: "=> either(composer.value, 'Dr Tony Shannon')", path: 'ctx/composer_name'},
    {id: "=> either(facility_id, '999999-345')", path: 'ctx/health_care_facility|id'},
    {id: "=> either(facility_name, 'Rippleburgh GP Practice')", path: 'ctx/health_care_facility|name'},
    {id: '== NHS-UK', path: 'ctx/id_namespace'},
    {id: '== 2.16.840.1.113883.2.1.4.3', path: 'ctx/id_scheme'},
    {id: '== en', path: 'ctx/language'},
    {id: '== GB', path: 'ctx/territory'},
    {id: '=> now()', path: 'ctx/time'}
  ];

  */

  var paths = {
    "ctx/composer_name": "=> either(composer.value, 'Dr Tony Shannon')",
    "ctx/health_care_facility|id": "=> either(facility_id, '999999-345')",
    "ctx/health_care_facility|name": "=> either(facility_name, 'Rippleburgh GP Practice')",
    "ctx/id_namespace": "NHS-UK",
    "ctx/id_scheme": "2.16.840.1.113883.2.1.4.3",
    "ctx/language": "en",
    "ctx/territory": "GB",
    "ctx/time": "=> now()"
  };

  metaDataArray.forEach(function(field) {
    if (!field.aqlPath.startsWith('/content[')) return; // ignore for now
 
    var flatJson = field.flatJSONPath; // + '/' + field.id;
    var type = field.type;
    var path = '';
    var dot = '';
    field.path.forEach(function(name) {
      path = path + dot + name;
      dot = '.';
    });


    if (type === 'DV_CODED_TEXT' || type === 'DV_TEXT') {
      if (type === 'DV_TEXT') {
        paths[flatJson] = '=> dvText(' + path + ')';
      }
      paths[flatJson + '|value'] = '=> either(' + path + '.value, <!delete>)';
      paths[flatJson + '|code'] = '=> either(' + path + '.code, <!delete>)';
      paths[flatJson + '|terminology'] = '=> either(' + path + '.terminology, <!delete>)';
    }
    else if (type === 'ISM_TRANSITION') {
      paths[flatJson + '/current_state|code'] = '=> either(' + path + '.value, <!delete>)';
    }
    else if (type === 'DV_QUANTITY') {
      paths[flatJson + '|magnitude'] = '=> either(' + path + '.value, <!delete>)';
    }
    else if (type === 'DV_PROPORTION') {
      paths[flatJson + '|numerator'] = '=> either(' + path + '.value, <!delete>)';
    }
    else {
      //paths[flatJson] = '=> either(' + path + ', <!delete>)';
      paths[flatJson] = '=> either(' + path + '.value, <!delete>)';
    }

  });


  return paths;
}

module.exports = createFlatJSONTemplate;

