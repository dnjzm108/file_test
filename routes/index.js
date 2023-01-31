const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: "uploads/" });
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploads', upload.single('user_file'), (req, res, next) => {
  console.log(req.file);
  res.redirect('/')
});

router.get('/download11/:id/:test', (req, res, next) => {
  try {
    console.log(req.params.id);
    console.log(req.params.test);
    console.log('들어옴');
    const path = '/Users/boaz/Desktop/upload/uploads/'
    const file = 'test.js'
    const stream = fs.createReadStream(path + file);
    stream.pipe(res);

    //     res.setHeader('Content-Disposition','attachment; filename="'+file+'"')
    //     res.sendFile(path)
    // console.log(res.setHeader);
    //  res.download('/Users/boaz/Desktop/upload/uploads/','f2ba41894c1bd83239052d2ae6cf52f8')

  } catch (e) {
    console.log(e);
  }
  // res.redirect('/')
})
module.exports = router;
