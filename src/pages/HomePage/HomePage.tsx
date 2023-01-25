import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './HomePage.scss'
import { RootState } from '../../redux/store'

export interface IHomePageProps {
  // TODO
  // children: JSX.Element
}

const HomePage = (props: IHomePageProps): JSX.Element => {
  const navigate = useNavigate()
  const { isVisited } = useSelector((state: RootState) => state.firstVisit)

  useEffect(() => {
    if (!isVisited) {
      navigate('/first')
    }
  }, [navigate, isVisited])

  return <div className="HomePage">HomePage</div>
}

export default HomePage
