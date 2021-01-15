import React from 'react'
import classNames from 'classnames'
import { SectionProps } from '../components/utils/SectionProps'
import Button from '../components/elements/Button'

const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

class BookOfHopr extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props

    const outerClasses = classNames(
      'hero section center-content cursor',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    )

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    )

    return (
      <section
        {...props}
        className={outerClasses}
        style={{
          height: '1060px',
          backgroundImage: `url(${require('../components/assets/images/book-of-hopr-cover.jpg')})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div
          className={innerClasses}
          style={{
            height: '100%',
          }}
        >
          <div className="hero-content">
            <div className="container-sm">
              <div>
                <Button
                  color="primary"
                  tag="a"
                  href={require(`../components/assets/documents/Book_of_HOPR_v1.pdf`)}
                  target="_blank"
                  className="reveal-from-top"
                  rel="noopener noreferrer"
                  data-reveal-delay="300"
                >
                  Download Book Of HOPR
                </Button>
              </div>
            </div>
          </div>
        </div>{' '}
      </section>
    )
  }
}

BookOfHopr.propTypes = propTypes
BookOfHopr.defaultProps = defaultProps

export default BookOfHopr
