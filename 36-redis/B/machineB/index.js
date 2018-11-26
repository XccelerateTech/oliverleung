// From machine B, try to get the message by using the command RPOP. Try to repeat the process for multiple messages. The messages should be in the exact same order as the order of LPUSH.

const redis = require('redis');

// set up our connection details - refer to redis.conf file
const client = redis.createClient({
  host: 'localhost',
  port: 6379,
  password: 'password' // might be auth_pass: 'password'
});

function scheduleGetJob() {
  setTimeout(getJob, 5000);
}

function getJob() {
  client.rpop('messageQueue', (err, reply) => { // removes and gets the last element of messageQueue
    if (err) {
      console.log(err);
      scheduleGetJob();
      return;
    }

    if (reply === null) {
      console.log('There is nothing to retrieve');
      // run again
      scheduleGetJob();
      return;
    }

    // we want the data to be readable to client, regardless of whether reply is null or not
    const job = JSON.parse(reply);
    console.log(job); // check the data

    console.log('Processing job, msg: ' + job.msg + ' date: ' + job.date); setTimeout(function () {
      console.log('Job done. Ready for a new job')
      scheduleGetJob();
    }, 10000); // the underlying function will run for only 10 seconds
  })
}

scheduleGetJob();