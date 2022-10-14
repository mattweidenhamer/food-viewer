const axios = require('axios')

exports.handler = async (events) => {
    const term = events.queryStringParameters.term || "chinese"
    const location = events.queryStringParameters.location || "20176"

    console.log(">>>> term:",term)
    console.log(">>>> location", location)

    const response = await axios({
            method: 'get',
            url: "https://api.yelp.com/v3/businesses/search",
            params : {
                term : term,
                location : location,
                limit : 50
            },
        headers : {
            Authorization: "Bearer"
        }
    }
    )

    const data = response.data

    return {
        statusCode: 200,
        body : JSON.stringify(data)
    }

}