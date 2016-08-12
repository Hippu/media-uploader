import * as express from "express";
import * as multer from "multer";
import * as mime from "mime";
var helmet = require('helmet');
var upload = multer({ dest: 'uploads/', limits: {fileSize: 25 * 1024 * 1024} });
var app = express();
import * as fs from "fs";
import fileToHash from "./filetohash";

app.use(helmet());

app.post('/upload', upload.single('uploadedFile'), function(req, res, next) {
    let filenamePromise = fileToHash(req.file.path);
    let extension = mime.extension(req.file.mimetype);
    filenamePromise.then(filename => {
      fs.rename(
          req.file.path,
          `media/images/${filename}.${extension}`
      );
      res.end();
    })
});

app.get('/filelist', function(req, res) {
    fs.readdir('media/images/', function(err, files) {
        if (!err) {
            console.log(files);
            res.json(files);
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.use(
    express.static('static')
);
app.use(
    express.static('media')
);

app.listen(3000, function() {
    console.log('Listening on 3000');
});
