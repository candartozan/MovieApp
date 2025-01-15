declare module '*.png' {
  const value: any;
  export = value;
}

declare module '@env' {
  export const API_URL: string;
  export const API_KEY: string;
}
