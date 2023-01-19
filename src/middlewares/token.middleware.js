const tokenInterceptor = (req, res, next) => {
    const {token} = req.cookies;
    if(!token) {
        return res.status(401).end();
    }
    req.token = token;
    next();
}

module.exports = tokenInterceptor;