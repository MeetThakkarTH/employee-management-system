#!/usr/bin/env node

/**
 * Load env variables
 */
import dotenv from 'dotenv';
dotenv.config();

/**
 * Module dependencies.
 */
import app from './app';
import http from 'http';
import logger from './lib/logging';

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string): number {
  const port = parseInt(val, 10);

  if (isNaN(port) || port < 0) {
    // named pipe
    throw new Error(`Invalid port ${port}`);
  }

  return port;
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;
  logger.info('Listening on ' + bind);
}

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
