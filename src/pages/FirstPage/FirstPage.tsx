import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FirstPage.scss'
import Button from '@mui/material/Button'
import { Collapse } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import LightIcon from '@mui/icons-material/Light'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { RootState } from '../../redux/store'
import { setVisited } from '../../redux/firstVisit/firstVisit.slice'

export interface IFirstPageProps {
  // TODO
  // children: JSX.Element
}

const FirstPage = (props: IFirstPageProps): JSX.Element => {
  const MAX_STEP = 7

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [step, setStep] = useState(0)
  const [circleClicked, setCircleClicked] = useState(false)
  const [circleCnt, setCircleCnt] = useState(0)
  const { theme } = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    if (step > MAX_STEP) {
      // write to local to know that first page passed
      window.localStorage.setItem('isVisited', 'true')

      dispatch(setVisited())

      // home navigate
      navigate('/')
    }
  }, [step, navigate, dispatch])

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
  ]

  const themeColor = (bool) => ((theme === 'dark' ? !bool : bool) ? '#fff' : '#000')

  const toggleTheme = () => {
    setCircleCnt((prev) => prev + 1)
    setCircleClicked((prev) => !prev)
  }

  return (
    <div className="FirstPage flex flex-col h-screen items-center justify-center text-3xl" style={{ backgroundColor: '#000' }}>
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
        <div className="flex flex-col items-center mixBlendDiff">
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

      <Collapse in={step <= 5}>
        <div className="flex flex-col items-center mixBlendDiff">
          <Collapse in={step >= 4} className="text-5xl">
            Next is to choose your music genre
          </Collapse>
          <Collapse in={step >= 5}>
            <div>
              Now choose 3 out of 6 pictures below
              <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </Collapse>
        </div>
      </Collapse>

      {/* Greeting 3 ~ END */}

      <Collapse in={step <= 7}>
        <div className="flex flex-col items-center mixBlendDiff">
          <Collapse in={step >= 6}>Okay! Now I know your types of music</Collapse>
          <Collapse in={step >= 7}>Let's go</Collapse>
        </div>
      </Collapse>

      <div className="flex gap-5 m-5">
        <Button variant="contained" onClick={() => setStep((prev) => prev - 1)}>
          Previous
        </Button>
        <Button variant="contained" onClick={() => setStep((prev) => prev + 1)}>
          {step < MAX_STEP ? 'Next' : 'Finish'}
        </Button>
      </div>
    </div>
  )
}

export default FirstPage
