const prefixUrl = '/api/v1';

export const services = [
  {
    prefixUrlService: `${prefixUrl}/product`,
    baseUrlService: `http://localhost:3001`,
  },
  {
    prefixUrlService: `${prefixUrl}/image`,
    baseUrlService: `http://localhost:3002`,
  },
];
