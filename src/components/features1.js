import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src="/enronlogo-1400w.jpg"
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature1ImageAlt: 'Enron Image',
  sectionTitle: 'Key Features',
  feature2ImageAlt: 'Theranos Image',
  sectionDescription:
    'Explore the key features of our website showcasing failed corporations.',
  feature3ImageAlt: 'Lehman Brothers Image',
  feature2Description:
    'Discover the collapse of Lehman Brothers, a pivotal event in the 2008 financial crisis.',
  feature3Title: 'FTX',
  slogan: 'Unveiling the downfall of corporate giants',
  feature1Title: 'Enron',
  feature2Title: 'Lehman Brothers',
  feature2ImageSrc: '/lehman-brothers-logo-png-transparent-1965546661-300h.png',
  mainAction: 'Discover More',
  feature1Description:
    'Learn about the infamous Enron scandal and its impact on the business world.',
  feature3Description:
    'Explore the downfall of FTX, a significant event in the cryptocurrency industry.',
  feature3ImageSrc: '/ftx-logo-1-999329829-300h.jpeg',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1603297638322-c7a08d52966c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTIzOTcxNnw&ixlib=rb-4.0.3&q=80&w=1080',
  secondaryAction: 'Learn More',
}

Features1.propTypes = {
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  slogan: PropTypes.string,
  feature1Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  mainAction: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  secondaryAction: PropTypes.string,
}

export default Features1
