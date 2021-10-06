import { Request, Response, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { services } from '../constants/services';

export function ReverseProxyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const service = services.find((service) =>
    req.originalUrl.startsWith(service.originalUrl),
  );

  const proxy = createProxyMiddleware({
    target: `${service.target}`,
    pathRewrite: {
      [service.originalUrl]: '',
    },
    secure: false,
    onProxyReq: (proxyReq, req: Request) => {
      console.log(
        `[NestMiddleware]: Proxying ${req.method} request originally made to '${req.originalUrl}'...`,
      );
    },
  });

  proxy(req, res, next);
}
