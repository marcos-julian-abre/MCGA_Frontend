import axios from 'axios'

/*const API_URL = '/api/goals/'*/
const API_URL = 'https://abremernmcga.onrender.com';

const createGoal = async (goalData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }    
    const response = await axios.post(`${API_URL}/api/goals/`, goalData, config)

    return response.data
  }

  
const getGoals = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }    
    const response = await axios.get(`${API_URL}/api/goals/`, config)

    return response.data
  }

  const deleteGoal = async (goalId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }    
    const response = await axios.delete(`${API_URL}/api/goals/` + goalId, config)

    return response.data
  }


  const goalService = {
    createGoal,
    getGoals,
    deleteGoal
  }

  export default goalService