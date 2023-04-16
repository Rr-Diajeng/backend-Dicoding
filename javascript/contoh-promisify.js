import fs from 'fs';
import {promisify} from 'util';

const readFilePromise = promisify(fs.readFile);

readFilePromise('./javascript/data.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));