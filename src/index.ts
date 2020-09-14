import { config } from 'dotenv';config();
import { Server } from './server';
function main() {
  const app = new Server(4000);
  app.listen();
}
main();
