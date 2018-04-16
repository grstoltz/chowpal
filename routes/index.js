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

<<<<<<< HEAD
=======
router.get('/api/test/food', (req, res) => {
  console.log('******************************************');
  console.log('Hello food');
  res.json({
    message: 'Router testing food route',
  });
});

router.get('/api/test/user', (req, res) => {
  console.log('******************************************');
  console.log('Hello User');
  res.json({
    message: 'Router testing user route',
  });
});

>>>>>>> 60e0b1248ee4ccb220a91e33506620ced297659d
// If no API routes are hit, send the React app
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

module.exports = router;
