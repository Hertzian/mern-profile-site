import axios from 'axios'

export const getPlaces = async () => {
  try {
    console.log('getPlaces action')
    // const res = await axios.get(`/api/places/get-all`)
    // return res.data
  } catch (err) {
    console.log(err)
  }
}
