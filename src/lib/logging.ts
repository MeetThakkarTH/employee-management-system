import bunyan from 'bunyan';

const logger = bunyan.createLogger({
  name: 'employee-management-system',
  streams: [
    // Log to the console at 'info' and above
    { stream: process.stdout, level: 'info' },
  ],
});

export default logger;
