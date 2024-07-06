const fs = require('fs');
const path = require('path');

const directory = './pictures/Editorial';  // Adjust directory path as necessary

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const imagePaths = files.filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'))
                           .map(file => path.join(directory, file));

  const jsonData = {
    images: imagePaths
  };

  fs.writeFile('editorial.json', JSON.stringify(jsonData, null, 2), err => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file has been generated successfully.');
    }
  });
});
