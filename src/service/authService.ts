import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setAccessToken } from '../features/authSlice'
import { dataAuth, loginData } from '../data/authApi'

export const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState<dataAuth>({
    email: '',
    password: '',
    access_token: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await loginData(formData)
    toast.success(response.message)

    if (response.result && response.result.accessToken) {
      dispatch(setAccessToken(response.result.accessToken))

      navigate('/pokemon-list')
    } else {
      toast.error(response.message)
    }
  }

  return {
    formData,
    handleInputChange,
    handleLogin
  }
}
