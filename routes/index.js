const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const authRoutes = require('./auth');

// API Routes
router.use('/api', apiRoutes);

router.use('/auth', authRoutes);

router.get('/api/test', (req, res) => {
  console.log('Hello');
  res.json({
    message: 'Router testing',
  });
});

module.exports = router;
