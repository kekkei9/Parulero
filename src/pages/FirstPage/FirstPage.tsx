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
  const { theme } = useSelector((state: RootState) => state.theme)
  const [themeColor, setThemeColor] = useState('')

  useEffect(() => {
    theme === 'dark' ? setThemeColor('#fff') : setThemeColor('#000')
  }, [theme])

  return (
    <div className="FirstPage flex flex-col h-screen items-center justify-center" style={{ backgroundColor: `${themeColor}` }}>
      {step >= 0 && step <= 3 && (
        <div className="flex flex-col items-center inverted">
          <div>
            <div className="text-5xl">Hi there! I'm kekkei</div>
          </div>
          <Collapse in={step >= 1} className="text-3xl">
            Oh!
          </Collapse>
          <Collapse in={step >= 2} className="text-3xl">
            {theme === 'dark' ? "It's kinda flashy here" : "It's a little dark here"}
          </Collapse>
          <Collapse in={step >= 3} className="text-3xl">
            Click the circle or 'Next' to light it up
          </Collapse>
          <Collapse in={step >= 3} className="text-3xl">
            <div className="rounded-full w-12 h-12 change-theme-btn" style={{ backgroundColor: `${themeColor}`, color: 'transparent' }}>
              Hi
            </div>
          </Collapse>
        </div>
      )}
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
