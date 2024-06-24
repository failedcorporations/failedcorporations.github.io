import React from 'react'

import PropTypes from 'prop-types'

import './footer1.css'

const Footer1 = (props) => {
  return (
    <footer className="footer1-footer1 thq-section-padding">
      <div className="footer1-max-width thq-section-max-width">
        <div className="footer1-content">
          <div className="footer1-newsletter">
            <div className="footer1-actions">
              <div className="footer1-form">
                <div className="footer1-container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="footer1-text-input thq-input"
                  />
                </div>
                <button className="thq-button-outline footer1-button">
                  <span className="thq-body-small">{props.action1}</span>
                </button>
              </div>
              <span className="footer1-content2 thq-body-small">
                {props.content2}
              </span>
            </div>
          </div>
          <div className="footer1-links">
            <div className="footer1-column1">
              <strong className="thq-body-large footer1-column1-title">
                {props.column1Title}
              </strong>
              <div className="footer1-footer-links">
                <span className="thq-body-small">{props.link1}</span>
                <span className="thq-body-small">{props.link2}</span>
                <span className="thq-body-small">{props.link3}</span>
                <span className="thq-body-small">{props.link4}</span>
                <span className="thq-body-small">{props.link5}</span>
              </div>
            </div>
            <div className="footer1-column2">
              <strong className="thq-body-large footer1-column2-title">
                {props.column2Title}
              </strong>
              <div className="footer1-footer-links1">
                <span className="thq-body-small">{props.link6}</span>
                <span className="thq-body-small">{props.link7}</span>
                <span className="thq-body-small">{props.link8}</span>
                <span className="thq-body-small">{props.link9}</span>
                <span className="thq-body-small">{props.link10}</span>
              </div>
            </div>
            <div className="footer1-column3"></div>
          </div>
        </div>
        <div className="footer1-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer1-row">
            <span className="thq-body-small">{props.content3}</span>
            <div className="footer1-footer-links2">
              <span className="thq-body-small">{props.privacyLink}</span>
              <span className="thq-body-small">{props.termsLink}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer1.defaultProps = {
  privacyLink: 'Privacy Policy',
  logoAlt: 'Failed Corporations Logo',
  link6: 'Failed Companies',
  link9: 'Join Us',
  link4: 'Terms and Conditions',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link10: 'Support',
  column2Title: 'Explore More',
  content2: 'Stay updated with the latest news and articles.',
  cookiesLink: 'Cookie Policy',
  action1: 'Subscribe',
  link5: 'Privacy Policy',
  column1Title: 'Company Information',
  socialLinkTitleCategory: 'Connect with Us',
  link1: 'About Us',
  content3: 'Join our community to learn more about failed corporations.',
  link8: 'Newsletter',
  link3: 'FAQs',
  link2: 'Contact Us',
  termsLink: 'Terms and Conditions',
  link7: 'Blog',
}

Footer1.propTypes = {
  privacyLink: PropTypes.string,
  logoAlt: PropTypes.string,
  link6: PropTypes.string,
  link9: PropTypes.string,
  link4: PropTypes.string,
  logoSrc: PropTypes.string,
  link10: PropTypes.string,
  column2Title: PropTypes.string,
  content2: PropTypes.string,
  cookiesLink: PropTypes.string,
  action1: PropTypes.string,
  link5: PropTypes.string,
  column1Title: PropTypes.string,
  socialLinkTitleCategory: PropTypes.string,
  link1: PropTypes.string,
  content3: PropTypes.string,
  link8: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  termsLink: PropTypes.string,
  link7: PropTypes.string,
}

export default Footer1
