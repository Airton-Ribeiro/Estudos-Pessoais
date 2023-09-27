exports.middlewareGlobal = (req, res, next) => { 
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
}
// module.exports = (req, res, next) => { 
    //     next();
    // }
    exports.outroMiddleware = (req, res, next) => { 
        console.log('Sou seu outro middleware');
        next();
    }