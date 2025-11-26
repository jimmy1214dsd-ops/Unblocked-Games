const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/proxy/resource', createProxyMiddleware({
    target: 'https://cdn.jsdelivr.net',
    changeOrigin: true,
    pathRewrite: {
        '^/proxy/resource': '/gh/PlanetDogeCodes/EagletcraftX@main/egcfixed.xml',
    },
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
