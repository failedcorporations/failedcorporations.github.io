import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img alt={props.imageAlt} src={props.imageSrc} className="hero9-image" />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  image1Alt: 'Failed Corporations Image',
  action1: 'Learn More',
  action2: 'Get Started',
  heading1: 'Exploring Corporate Failures',
  image1Src:
    'https://images.unsplash.com/photo-1659018966845-4112f1c0181a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTIzOTcxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  imageSrc: '/pexels-pixabay-210607-1500w.jpg',
  imageAlt: 'image',
  content1:
    'Discover the stories behind some of the biggest corporate failures in history.',
}

Hero9.propTypes = {
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  content1: PropTypes.string,
}

export default Hero9
