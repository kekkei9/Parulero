import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FirstPage.scss'
import Button from '@mui/material/Button'
import { Collapse } from '@mui/material'
import { useSelector } from 'react-redux'
import LightIcon from '@mui/icons-material/Light'
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
    setCircleCnt((prev) => prev + 1)
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

      {/* Gretting 1 */}
      <Collapse in={step <= 3}>
        <div className="flex flex-col items-center mixBlendDiff text-3xl">
          <Collapse in={step >= 0} className="text-5xl">
            Hi there! I'm kekkei
          </Collapse>

          <Collapse in={step >= 1}>Oh!</Collapse>
          <Collapse in={step >= 2}>{theme === 'dark' ? "It's kinda flashy here" : "It's a little dark here"}</Collapse>
          <Collapse in={step >= 3}>
            <div className="flex flex-col items-center">
              <div>{`Click the light bulb or 'Next' to ${theme === 'dark' ? 'turn off the light' : 'light it up'}`}</div>
              <LightIcon className="change-theme-btn" onClick={toggleTheme} />
              <Collapse in={circleClicked}>{circleCnt >= 1 && circleCnt <= 3 ? 'Okay! Click next to continue' : 'Okay !!! Click Next please'}</Collapse>
              <Collapse in={!circleClicked}>{circleCnt >= 1 && circleCnt <= 3 ? 'Click the light bulb or next to continue' : 'Okay then click the light bulb'}</Collapse>
            </div>
          </Collapse>
        </div>
      </Collapse>

      {/* Greeting2 */}

      <Collapse in={step <= 7}>
        <div className="flex flex-col items-center text-3xl mixBlendDiff">
          <Collapse in={step >= 4} className="text-5xl">
            Next is to choose your music genre
          </Collapse>
          <Collapse in={step >= 5}>Now choose 3 out of 6 pictures below</Collapse>
        </div>
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
