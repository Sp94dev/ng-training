import { webSocket } from 'rxjs/webSocket';

export const WSExample = () => {
  const socket = new WebSocket(
    'wss://ws.eodhistoricaldata.com/ws/crypto?api_token=demo'
  );
  // Real time operations:
  // Many Angular applications require real-time updates from server-side data sources,
  // such as chat applications or live data feeds. Reactive programming enables seamless
  // integration of real-time updates by providing tools for handling WebSocket connections
  // or other streaming data sources.

  // Establishing WebSocket connection
  const socket$ = webSocket(
    'wss://ws.eodhistoricaldata.com/ws/crypto?api_token=demo'
  );

  // Subscribing to real-time updates
  socket$.subscribe(
    (data) => console.log('Received data:', data),
    (error) => console.error('Error:', error),
    () => console.log('WebSocket connection closed')
  );
};
