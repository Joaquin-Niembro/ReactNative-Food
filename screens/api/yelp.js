import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer N0mVa8yc4xAhXi5O6iozLzzyxKd4469W6wfC6yPjSDKrHyJBjegnAMG7Y1tgA9wa8L_ELIG25emNf3ZxS_o1suVMbc3wRN5-cc7MqdeN7RXnEIJ-W83k4WheUMjGX3Yx'
    }
})