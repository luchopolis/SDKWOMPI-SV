const axios = require('axios')
const config = require('../util/config')

const generateToken = async (client_id,client_secret) => {
    if(!client_id){
        console.error('Param required: client_id')
    }else if(!client_id && !client_secret){
        console.error('Params required: client_id, client_secret')
    }
    else if(!client_secret){
        console.error('Param required: client_secret')
    }else{
        const data = {
            'grant_type': 'client_credentials',
            'audience': 'wompi_api',
            'client_id': client_id,
            'client_secret': client_secret
        }

        try {
            const response = await axios({
                method: "POST",
                url: config.URL_TOKEN,
                data:new URLSearchParams(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })

            return response.data.access_token
        } catch (error) {
            if (error) throw new Error(error)
        }
    }
}

module.exports = { generateToken }