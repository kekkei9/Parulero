import React from 'react'
import { useNavigate } from 'react-router-dom'
import './FirstPage.scss'

export interface IFirstPageProps {
  // TODO
  // children: JSX.Element
}

const FirstPage = (props: IFirstPageProps): JSX.Element => {
  const navigate = useNavigate()

  return <div className="FirstPage">FirstPage</div>
}

export default FirstPage