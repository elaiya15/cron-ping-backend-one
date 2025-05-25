import fetch from 'node-fetch';
import { urlsToPing } from '../config/urls.js';

export async function runPingTask() {
  for (const url of urlsToPing) {
    const start = Date.now();
    try {
      const response = await fetch(url);
      const duration = Date.now() - start;
      console.log(`[SUCCESS] ${url} - ${response.status} - ${duration}ms`);
    } catch (err) {
      const duration = Date.now() - start;
      console.error(`[ERROR] ${url} - ${err.message} - ${duration}ms`);
    }
  }
}
