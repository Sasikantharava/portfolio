const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorMiddleware');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Trust proxy - IMPORTANT for Render deployment
app.set('trust proxy', 1); // Trust first proxy

// Security middleware
app.use(helmet());

// Enhanced CORS configuration
const allowedOrigins = [
  'https://portfolio-kappa-henna-90.vercel.app',
  'https://portfolio-kappa-henna-90.vercel.app/',
  'http://localhost:3000',
  'http://localhost:3001'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Also check without trailing slash
    const originWithoutSlash = origin.endsWith('/') ? origin.slice(0, -1) : origin;
    if (allowedOrigins.includes(originWithoutSlash)) {
      return callback(null, true);
    }
    
    // Check if origin matches the environment variable (with or without slash)
    const envUrl = process.env.CLIENT_URL;
    if (envUrl) {
      const envUrlWithoutSlash = envUrl.endsWith('/') ? envUrl.slice(0, -1) : envUrl;
      const originToCheck = origin.endsWith('/') ? origin.slice(0, -1) : origin;
      
      if (envUrlWithoutSlash === originToCheck) {
        return callback(null, true);
      }
    }
    
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Handle preflight requests
app.options('*', cors());

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/contact', require('./routes/contactRoutes'));

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    ip: req.ip,
    forwardedFor: req.headers['x-forwarded-for']
  });
});

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log(`Trust proxy setting: ${app.get('trust proxy')}`);
  console.log(`Allowed CORS origins: ${allowedOrigins.join(', ')}`);
});