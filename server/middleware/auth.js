import jwt from "jsonwebtoken";
export const auth = (req, res, next) => {
        const token = req.headers.authorization;
        try {
            jwt.verify(token, process.env.JWT_SECRET);
            //with help of jet secrete we vwrify the token it is signature in token
            next();

        } catch (e) {
            res.json({ success: false, message: "invalid token is" })
        }
    }
    // import jwt from "jsonwebtoken";

// export const auth = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         return res.status(401).json({ success: false, message: "Token not provided" });
//     }

//     const token = authHeader.split(" ")[1]; // get the actual token part

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         // Optional: attach user info to request
//         req.user = decoded;
//         next();
//     } catch (e) {
//         res.status(403).json({ success: false, message: "Invalid token" });
//     }
// };