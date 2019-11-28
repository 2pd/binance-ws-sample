#!/usr/bin/env node

const WebSocket = require('ws');

const ws = new WebSocket("wss://stream.binance.com:9443/ws/bnbbtc@depth");

ws.on('open', function open() {
  console.log('opening connection')
})

ws.on('message', function incoming(message) {
  console.log('message received');
  console.log(message);
})

ws.on('error', function(error) {
  console.log('received error:', error);
  process.exit(1);
});
