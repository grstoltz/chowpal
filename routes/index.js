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

<<<<<<< HEAD
router.get('/api/food', (req, res) => {
  console.log('******************************************');
  console.log('Hello food');
  res.json({
    message: 'Router testing food route',
  });
});

router.get('/api/user', (req, res) => {
  console.log('******************************************');
  console.log('Hello User');
  res.json({
    message: 'Router testing user route',
  });
});
=======
>>>>>>> cedd314753cc9a55c621c0b65faaa207ce1fdb1b

// If no API routes are hit, send the React app
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

module.exports = router;
