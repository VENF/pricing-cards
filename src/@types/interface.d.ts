//declaration all interfaces
interface IServer {
  settings(): void;
  middlewares(): void;
  routes(): void;
  listen(): void;
}