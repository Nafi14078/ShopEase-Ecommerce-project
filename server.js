import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoute.js";
import cors from 'cors';
import passport from './config/passportConfig.js';
import session from 'express-session';

// Configure env
dotenv.config();

// Database config
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Session middleware for passport
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/v1/auth', authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use('/api/v1/product', productRoutes);
app.use("/api/v1/admin", userRoutes);

// Google Auth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard'); // Redirect after successful login
    }
);

app.get('/auth/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// Default Route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ShopEase</h1>");
});

// PORT
const PORT = process.env.PORT || 8081;

// Run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});
