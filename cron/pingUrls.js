import cron from 'node-cron';
import { runPingTask } from '../tasks/pingTask.js';

cron.schedule('*/5 * * * *', () => {
  console.log(`[CRON] Running ping task at ${new Date().toISOString()}`);
  runPingTask();
});
