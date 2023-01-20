import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FirstPage.scss'
import Button from '@mui/material/Button'
import { Collapse } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export interface IFirstPageProps {
  // TODO
  // children: JSX.Element
}

const FirstPage = (props: IFirstPageProps): JSX.Element => {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [circleClicked, setCircleClicked] = useState(false)
  const [circleCnt, setCircleCnt] = useState(0)
  const { theme } = useSelector((state: RootState) => state.theme)

  const themeColor = (bool) => ((theme === 'dark' ? !bool : bool) ? '#fff' : '#000')

  const toggleTheme = () => {
    setCircleClicked((prev) => !prev)
  }

  return (
    <div className="FirstPage flex flex-col h-screen items-center justify-center" style={{ backgroundColor: '#000' }}>
      <div className="theme-change-container">
        <div
          className={`dark-mode-spread ${(() => {
            if (theme === 'dark') {
              return circleClicked ? '' : 'active'
            }
            return circleClicked ? 'active' : ''
          })()}`}
          style={{ backgroundColor: '#fff' }}
        />
      </div>
      {step >= 0 && step <= 3 && (
        <div className="flex flex-col items-center">
          <div>
            <div className="text-5xl mixBlendDiff">Hi there! I'm kekkei</div>
          </div>

          <Collapse in={step >= 1} className="text-3xl mixBlendDiff">
            Oh!
          </Collapse>
          <Collapse in={step >= 2} className="text-3xl mixBlendDiff">
            {theme === 'dark' ? "It's kinda flashy here" : "It's a little dark here"}
          </Collapse>
          <Collapse in={step >= 3} className="text-3xl mixBlendDiff">
            {`Click the circle or 'Next' to ${theme === 'dark' ? 'turn off the light' : 'light it up'}`}
          </Collapse>
        </div>
      )}
      <Collapse in={step === 3} className="text-3xl">
        <div className="change-theme-btn" style={{ backgroundColor: `${themeColor(true)}` }} onClick={toggleTheme} onKeyDown={toggleTheme} role="presentation" />
      </Collapse>

      <div className="flex flex-row m-5">
        <Button variant="contained" onClick={() => setStep((prev) => prev - 1)}>
          Previous
        </Button>
        <Button variant="contained" className="ml-5" onClick={() => setStep((prev) => prev + 1)}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default FirstPage
