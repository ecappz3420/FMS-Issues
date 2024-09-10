import axios from "axios";

export async function refreshAccessToken() {
    try {
        const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
            params: {
                refresh_token: process.env.REFRESH_TOKEN,
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET,
                grant_type: 'refresh_token',
            }

        })
        const { access_token } = response.data;
        process.env.ZOHO_ACCESS_TOKEN = access_token;
        return access_token;
    } catch (error) {
        console.error('Failed to refresh Zoho access token', error);
        throw error;
    }

}

export async function getRecords(id, accessToken, reportName) {
    try {
        const criteria = encodeURIComponent(`Reported_By=${id}`);
        const response = await axios.get(`https://www.zohoapis.com/creator/v2.1/data/dhaqane/fms/report/${reportName}?criteria=${criteria}`, {
            headers: {
                Authorization: `Zoho-oauthtoken ${accessToken}`,
                Accept: 'application/json'
            },
        })
        console.log('Fetched Records:', response.data);
        return response.data;
    }
    catch (err) {
        console.error('Failed to get records', err);
        throw err;
    }
}

export async function checkUsers(phone, pin, access_token) {
    try {
        const criteria = encodeURIComponent(`(Phone_Number=="${phone}") && (PIN_Number=${pin})`);
        const response = await axios.get(`https://www.zohoapis.com/creator/v2.1/data/dhaqane/fms/report/Users?criteria=${criteria}`, {
            headers: {
                Authorization: `Zoho-oauthtoken ${access_token}`,
                Accept: 'application/json'
            },
        })
        console.log('Fetched Records:', response.data.data[0]);
        return response.data.data[0];
    }
    catch (error) {
        console.log("Invalid Entries");
        throw error;
    }
}

export async function fetchVehicles(access_token) {
    try {
        const response = await axios.get("https://www.zohoapis.com/creator/v2.1/data/dhaqane/fms/report/Vehicles", {
            headers: {
                Authorization: `Zoho-oauthtoken ${access_token}`,
                Accept: 'application/json'
            }
        })
        return response.data.data;
    } catch (error) {
        console.log("Invalid Enteries");
        throw error;
    }
}

export async function createIssue(formData, access_token) {
    try {
        const response = axios.post("https://www.zohoapis.com/creator/v2.1/data/dhaqane/fms/form/Issue",
            {
                "data": JSON.stringify(formData)
            } ,{
            headers: {
                Authorization: `Zoho-oauthtoken ${access_token}`,
                Accept: 'application/json'
            }
        })
        console.log(response);
        return response;
    }
    catch (err) {
        console.log(err);
        throw err
    }
}