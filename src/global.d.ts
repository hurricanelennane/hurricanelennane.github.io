// src/global.d.ts
export {};

declare global {
  interface Window {
    pendo: any; // You can replace `any` with a more specific type if you know the shape of the pendo object.
  }
}