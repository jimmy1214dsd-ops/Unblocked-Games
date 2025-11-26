const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy endpoint
app.use('/proxy', createProxyMiddleware({
    target: 'https://www.notes4free4all.com',
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '', // Remove '/proxy' from the request path
    },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
