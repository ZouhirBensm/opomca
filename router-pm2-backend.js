const express = require('express');
const router_pm2 = express.Router();

require('dotenv').config();



router_pm2.post('/monitoring-notification', (req, res) => {
  console.log("\n/pm2/monitoring-notification endpoint HIT!\n")
  const { process } = req.body;
  
  require('child_process').exec(
    `echo "PM2 CRASH: ${process.name}" | mail -s "ALERT" 8196644106@txt.bell.ca`,
    (err) => { if (err) console.error(err) }
  );
  
  res.send('OK');
});


module.exports = router_pm2;