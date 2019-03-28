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

  11 February 2019

*/

/*

Top 3 Things summary

  GET /api/patients/9999999000/top3Things

Returns empty array or latest in format

*/

var tools = require('../../../utils/tools');

function getTop3ThingsSummary(args, finished) {

  var patientId = args.patientId;

  // override patientId for PHR Users - only allowed to see their own data

  if (args.session.role === 'phrUser') patientId = args.session.nhsNumber;

  var valid = tools.isPatientIdValid(patientId);
  if (valid.error) return finished(valid);

  var doc = this.db.use('Top3Things');

  var sourceId = doc.$(['byPatient', patientId, 'latest']).value;
  if (sourceId === '') {
    return finished({
      api: 'getPatientTop3ThingsSummary',
      use: 'results',
      results: []
    });
  }

  var top3 = doc.$(['bySourceId', sourceId]).getDocument();
  var summary = {
    api: 'getPatientTop3ThingsSummary',
    use: 'results',
    results: [{
      source: 'QEWDDB',
      sourceId: sourceId,
      dateCreated: top3.date,
      name1: top3.data.name1,
      name2: top3.data.name2,
      name3: top3.data.name3
    }]
  };

  finished(summary);
}

module.exports = getTop3ThingsSummary;
