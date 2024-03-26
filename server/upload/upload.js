const multer = require('multer');

// Set up disk storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'frontend/public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;