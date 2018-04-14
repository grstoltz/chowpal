const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
// API Routes
router.use('/api', apiRoutes);

router.use('/auth', authRoutes);

router.get('/api/test', (req, res) => {
  console.log('Hello');
  res.json({
    message: 'Router testing',
  });
});

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
