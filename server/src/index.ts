// server/src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';
import routes from './geminiAPI/router';

const app = express();

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});

// Essential middleware
app.use(cors());
app.use(express.json());

// Mount auth routes
app.use('/api/auth', authRoutes);

// Test route to verify server is working
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Route
app.post("/survey/send", (req, res) => {
  const { input } = req.body;

  if (input) {

    const surveyAPICall: string = `You sent: "${input}"`

    res.json({ message: surveyAPICall });
  } else {
    res.status(400).json({ message: "Invalid input" });
  }
});


// Mount Gemini API routes
app.use('/api/gemini', routes);



// All other routes - 404 handler should be last
app.use('*', (req, res) => {
  console.error(`404: Route not found - ${req.method} ${req.originalUrl}`);
  res.status(404).json({ message: 'Not found' });
});




// MongoDB connection
const MONGODB_URI = "mongodb+srv://melodies:9ELjuATE8tCkM5pI@melodies.5abfe.mongodb.net/?retryWrites=true&w=majority&appName=melodies";
mongoose.connect(MONGODB_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

  


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



