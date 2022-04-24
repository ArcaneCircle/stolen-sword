import path from 'path';
import fs from 'fs';
import { execFile } from 'child_process';
import filesize from 'filesize';
import advzip from 'advzip-bin';
import JSZip from 'jszip';

const zip = () => ({
  name: 'zip',
  generateBundle(_, bundle) {
    const distPath = path.join(__dirname, '..', 'dist');
    const zipPath = path.join(distPath, 'stolen-sword.xdc');
    const { source } = bundle['index.html'];

    if (!fs.existsSync(distPath)) fs.mkdirSync(distPath);
    
    let zip = new JSZip();
    zip.file('index.html', source);
    fs.readFile(path.join(__dirname, '..', 'manifest.toml'), (err, data) => {
        zip.file('manifest.toml', data);
        fs.readFile(path.join(__dirname, '..', 'icon.png'), (err, data) => {
            zip.file('icon.png', data);
            zip.generateNodeStream({
                type:'nodebuffer',
                compression: "DEFLATE",
                compressionOptions: {
                    level: 9
                }
            })
                .pipe(fs.createWriteStream(zipPath))
                .on('finish', () => {
                    execFile(advzip, ['--recompress', '--shrink-extra', zipPath], err => {
                        console.log(err ? err : 'ZIP file minified!', filesize(fs.statSync(zipPath).size));
                    });
                });
        });
    });
  }
});

export default zip;
