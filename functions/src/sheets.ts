const { google } = require('googleapis');

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

export async function _updateSessionRow(googleSheetClient: any, sheetId: string, tabName: string, range: string, data: {[x: string]: any}) {

	// const res  = await googleSheetClient.spreadsheets.values.append({
	// 	spreadsheetId: sheetId,
	// 	range: `${tabName}!${range}`,
	// 	valueInputOption: 'USER_ENTERED',
	// 	insertDataOption: 'INSERT_ROWS',
	// 	resource: {
	// 		"majorDimension": "ROWS",
	// 		"values": data
	// 	},
	// })

	const res = await googleSheetClient.spreadsheets.values.update({
		valueInputOption: "USER_ENTERED",
		range: `${tabName}!${range}`,
		spreadsheetId: sheetId,
		resource: {
			majorDimension: "ROWS",
			values: data
		}
		
	})

	return res.data.values
}