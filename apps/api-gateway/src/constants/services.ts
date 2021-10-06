const prefixUrl = '/api/v1';

export const services = [
  {
    originalUrl: `${prefixUrl}/product`,
    target: `http://localhost:3001`,
  },
  {
    originalUrl: `${prefixUrl}/image`,
    target: `http://localhost:3002`,
  },
];
