//config Environment
interface IConfig {
  MONGODB_URI: string;
}
let URI: string;
process.env.NODE_ENV != 'pro'
  ? (URI = process.env.MONGODB_URI_DEV || '')
  : (URI = process.env.MONGODB_URI || '');

export const config: IConfig = {
  MONGODB_URI: URI
};
