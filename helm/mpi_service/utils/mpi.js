const { config } = require('../../configuration/global_config.json');
const { pg } = require('pg');

function query(query) {

}

function createConnectionString() {
    
}

/*module.exports = function (args, finished) {

    console.log(config);
    pool.query('SELECT * FROM mpi."Patient"', (error, client, done) => {
      console.log(error);
      console.log(client);
      console.log(done);
  
    });
  } */
  /* function processFindPatient(error, results) {
    
    console.log(error);
    console.log(results);
    if (!error) {
      
    } else {
      throw error;
    } 
    
    response.status(200).json(results.rows)
  } 
  
  module.exports = function(args, finished) {
  
    if(args.patientId.exists) {
  
  
    } else {
      return finished({error: 'Missing or invalid patient identifier'});
    }
  
    return finished(patientId);
  }; */