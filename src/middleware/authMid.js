const authMid = (req, res, next) => {
  
    const token = req.headers['authorization'];

    
    if (!token) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }

   
    if (token !== '12345') {
        return res.status(403).json({ message: 'Token inválido.' });
    }

    
    next();
};

export default authMid;
