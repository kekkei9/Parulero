import React from 'react'
import { useNavigate } from 'react-router-dom'
import './TemplateName.scss'

export interface ITemplateNameProps {
  // TODO
  // children: JSX.Element
}

const TemplateName = (props: ITemplateNameProps): JSX.Element => {
  const navigate = useNavigate()

  return <div className="TemplateName">TemplateName</div>
}

export default TemplateName