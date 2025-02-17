import { csvLines } from './csvLines.js'


function csvToJson(csvData) {
  return csvData.map(line => {
    const [rawFileName, rawDuration] = line.split(',');
    const duration = parseInt(rawDuration.trim(), 10);


    const [id, rest] = rawFileName.split('_');

 
    const trimmedRest = rest.trim();
   
    const [_, titleWithExtension] = trimmedRest.split(/\s+(.+)/);


    const title = titleWithExtension.replace(/\.mp4$/, '');

    return {
      id,
      title,
      duration
    }
  });
}

const result = csvToJson(csvLines);
console.log(result);
