import axios from 'axios'

export const ExampleAxios= () => {

    const fetchData= async () => {
        const {data} = await axios.get ("https://69067c12ee3d0d14c135e9b3.mockapi.io/api/v1/actividades") 
       // console.log (data)
    }
    fetchData ()
    return (
        <>
        <div>ExampleAxios</div>
        </>
    )
}

export default ExampleAxios

//https://69067c12ee3d0d14c135e9b3.mockapi.io/api/v1/actividades