const fs = require("fs");
const dotenv = require('dotenv');

dotenv.config();

exports.pdf = (req, res) => {
    try {
        var path = req.query.file;
        if (fs.existsSync(path)) {
            var file = fs.createReadStream(path);
            var fileName = path.split("\\");
            console.error(fileName[2]);
            file.pipe(res.writeHead(200,{'Content-Disposition': 'filename=' + fileName[2],'Content-Type': 'application/pdf'}));
        } else {
            console.error("FILE NOT FOUND");
            res.status(404).send();
        }
    } catch(err) {
        console.error(err);
        res.status(404).send();
    }

}

exports.pdf2jpg = (req, res) => {
    var PDFImage = require('pdf-image').PDFImage;
    var path = req.query.file;
    var pageNumber = 0;
    try {
        var pdfImage = new PDFImage(path,{graphicsMagick: true,
            convertOptions: {
              "-quality": "100",
              "-density": "200"
            }});
        pdfImage.convertPage(pageNumber).then(function (imagePath) {
            if (fs.existsSync(imagePath)) {
                var file = fs.createReadStream(imagePath);
                var fileName = imagePath.split("\\");
                console.error('File generated:'+fileName[2]);
                file.on('end', function() {
                    fs.unlink(imagePath, function() {
                      console.log('File deleted:'+fileName[2]);
                    });
                  });
                file.pipe(res.writeHead(200,{'Content-Disposition': 'filename=' + fileName[2],'Content-Type': 'image/png'}));
            } else {
                console.error("GENERATION IMPOSIBLE");
                res.status(404).send();
            }
          }, function (err) {
            res.status(500).send(err);
          });
    } catch(err) {
        console.error(err);
        res.status(404).send();
    }
}