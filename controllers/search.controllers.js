const Filehound = require('filehound');
const dotenv = require('dotenv');
dotenv.config();
const ext = process.env.EXT;

exports.find = (req, res) => {
    if(!req.params.type) {
        res.status(400).send('NO TYPE GIVEN');
        return console.error('Type not received!');
    }
    if(!req.query.search) {
        res.status(400).send('NO TEXT GIVEN');
        return console.error('Text not received!');
    }
    else {
        let dir = 'docs';
        if(req.params.type=='freze')
            dir = process.env.FOLDER_FREZE;
        else
            dir = process.env.FOLDER_STRUNGURI;
        
        
        let file = req.query.search;
        
        Filehound.create()
        .paths(dir)
        .glob('*'+file.toUpperCase()+'*'+ext)
        .find((err, Files) => {
            if (err) return console.error("handle err", err);
            var EndFiles = [];
        Files.forEach(File => {
            if(File.match(/^[a-zA-Z0-9\\ ]*\\VALID\\\w+.[a-zA-Z]{3}/gi)) {
                EndFiles.push(File);
            }  
        });
        console.log(EndFiles);
        if(EndFiles.length > 0) {
            res.json(Object.assign({}, EndFiles));
        }
        else
            res.status(404).send();

        });
    }
    

}