import {useState} from 'react'

import {
  MainContainer,
  HooksTitle,
  HooksImage,
  ContentContainer,
  CustomButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [readMore, setReadMore] = useState(false)

  const onToggleRead = () => {
    setReadMore(prevState => !prevState)
  }

  const shortText = reactHooksDescription.slice(0, 170)

  return (
    <MainContainer>
      <ContentContainer>
        <HooksTitle>React Hooks</HooksTitle>
        <p>Hooks are a new addition to React</p>
        <HooksImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {readMore ? <p>{reactHooksDescription}</p> : <p>{shortText}</p>}

        <CustomButton type="button" onClick={onToggleRead}>
          {readMore ? 'Read Less' : 'Read More'}
        </CustomButton>
      </ContentContainer>
    </MainContainer>
  )
}

export default ReadMore
