// AIzaSyC62bRMa4ic6CtQxhH49cNoXPclzJi51GQ

const { google } = require('googleapis');

// const sheetId = '1e12hI7NS2p5UpRTGMnkxG3Spgkh63HrXmdToSrqnfQA'
// const tabName = 'Sheet1'
// const range = 'A:E'

// Get api client
export async function _getGoogleSheetClient() {
    
    const authClient = await new google.auth.GoogleAuth({   
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return google.sheets({
      version: 'v4',
      auth: authClient
    });
}

// Read values from document 
export async function _readGoogleSheet(googleSheetClient: any, sheetId: string, tabName: string, range: string) {
    
    const res = await googleSheetClient.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: `${tabName}!${range}`,
    });
  
    return res.data.values;
}