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

  5 June 2018

*/

function addPatientDataToCache(results, patientId, host, heading, qewdSession) {
  //console.log('** adding data to session cache');
  //console.log('patientId: ' + patientId);
  //console.log('host: ' + host);
  //console.log('templateId: ' + templateId);
  //console.log('heading: ' + heading);
  //console.log('-------');

  var headingCache = qewdSession.$('headings');
  var cacheBySourceId = headingCache.$('bySourceId');
  var cacheByPatientId = headingCache.$(['byPatientId', patientId, heading]);
  var cacheByHeading = headingCache.$('byHeading');

  results.forEach(function(result) {
    //console.log('*** result = ' + JSON.stringify(result, null, 2));
    var sourceId = host + '-' + result.uid.split('::')[0];
    //console.log('cacheing result for ' + sourceId);
    var date;
    if (result.context && result.context.start_time) { 
      date = result.context.start_time.value;
      if (date.indexOf('UTC') !== -1) date = date.split('UTC')[0];
      date = new Date(date).getTime();
      cacheByPatientId.$(['byDate', date, sourceId]).value = '';
    }
    cacheByPatientId.$(['byHost', host, sourceId]).value = '';
    cacheByHeading.$([heading, sourceId]).value = '';

    var cacheBySourceId = headingCache.$(['bySourceId', sourceId]);
    if (date) cacheBySourceId.$('date').value = date;
    cacheBySourceId.$('heading').value = heading;
    cacheBySourceId.$('patientId').value = patientId;
    cacheBySourceId.$('uid').value = result.uid;
    cacheBySourceId.$('host').value = host;
    cacheBySourceId.$('jumperFormatData').setDocument(result);
    cacheBySourceId.$('data').delete(); // temporary - get rid of standard data cache
  });
  //console.log('results cached');
}

module.exports = addPatientDataToCache;
