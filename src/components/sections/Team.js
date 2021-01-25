import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Image from '../elements/Image'
import Button from '../elements/Button'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const isCompany = false

const ProfilesCompany = () => {
  return (
    <>
      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
        <div className="tiles-item-inner">
          <div className="team-item-header">
            <a href="https://www.linkedin.com/in/scbuergel/" target="_blank" rel="noopener noreferrer">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/team/sebastian_burgel.png')}
                  alt="Image of Dr. Sebastian Bürgel"
                  width={180}
                  height={180}
                />
              </div>
            </a>
          </div>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Dr. Sebastian Bürgel</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Founder</div>
            {/* <p className="m-0 text-sm"></p> */}
          </div>
        </div>
      </div>

      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
        <div className="tiles-item-inner">
          <a href="https://www.linkedin.com/in/robert-kiel-176878161/" target="_blank" rel="noopener noreferrer">
            <div className="team-item-header">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/team/robert_kiel.png')}
                  alt="Image of Robert Kiel"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </a>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Robert Kiel</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Co-Founder, Crypto</div>
            {/* <p className="m-0 text-sm"></p> */}
          </div>
        </div>
      </div>

      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
        <div className="tiles-item-inner">
          <a href="https://www.linkedin.com/in/rikkrieger/" target="_blank" rel="noopener noreferrer">
            <div className="team-item-header">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/team/rik_krieger.png')}
                  alt="Image of Rik Krieger, eMBA"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </a>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Rik Krieger, eMBA</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Co-Founder, Commercial</div>
            {/* <p className="m-0 text-sm"></p> */}
          </div>
        </div>
      </div>

      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
        <div className="tiles-item-inner">
          <a href="https://www.linkedin.com/in/meredith55/" target="_blank" rel="noopener noreferrer">
            <div className="team-item-header">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/team/meredith_bachma.png')}
                  alt="Image of Meredith Bachman"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </a>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Meredith Bachman</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Graphic Designer</div>
            {/* <p className="m-0 text-sm"></p> */}
          </div>
        </div>
      </div>

      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="450">
        <div className="tiles-item-inner">
          <a href="https://www.linkedin.com/in/jjperezaguinaga/" target="_blank" rel="noopener noreferrer">
            <div className="team-item-header">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/team/jose_aguinaga.png')}
                  alt="Image of José Aguinaga"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </a>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">José Aguinaga</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Head of Engineering</div>
            {/* <p className="m-0 text-sm"></p> */}
          </div>
        </div>
      </div>

      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="600">
        <div className="tiles-item-inner">
          <a href="https://www.linkedin.com/in/stevennonis/" target="_blank" rel="noopener noreferrer">
            <div className="team-item-header">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/team/steven_nonis.png')}
                  alt="Image of Steven Nonis"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </a>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Steven Nonis</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Software Engineer</div>
            {/* <p className="m-0 text-sm"></p> */}
          </div>
        </div>
      </div>

      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="600">
        <div className="tiles-item-inner">
          <a href="https://www.linkedin.com/in/peterbraden/" target="_blank" rel="noopener noreferrer">
            <div className="team-item-header">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/team/peter_braden.png')}
                  alt="Image of Peter Braden"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </a>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Peter Braden</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Software Engineer</div>
            {/* <p className="m-0 text-sm"></p> */}
          </div>
        </div>
      </div>

      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="750">
        <div className="tiles-item-inner">
          <div className="team-item-header">
            <div className="team-item-image mb-24">
              <Image
                src={require('@hoprnet/assets/images/team/the_wandering_editor.png')}
                alt="Image of The Wandering Editor"
                width={180}
                height={180}
              />
            </div>
          </div>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">The Wandering Editor</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Content Creator</div>
            {/* <p className="m-0 text-sm"></p> */}
          </div>
        </div>
      </div>

      <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="750">
        <div className="tiles-item-inner">
          <div className="team-item-header">
            <div className="team-item-image mb-24">
              <Image
                src={require('@hoprnet/assets/images/team/matthew_edwards.png')}
                alt="Image of The Matthew Edwards"
                width={180}
                height={180}
              />
            </div>
          </div>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Matthew Edwards</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Community Manager</div>
          </div>
        </div>
      </div>
    </>
  )
}

const ProfilesAssociation = () => {
  return (
    <>
      {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
        <div className="tiles-item-inner">
          <a href="https://www.linkedin.com/in/cluchsinger/" target="_blank" rel="noopener noreferrer">
            <div className="team-item-header">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/partners/catrina_luchsinger.jpg')}
                  alt="Board member 02"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </a>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Dr. Catrina Luchsinger</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Board Member</div>
            <p className="m-0 text-sm"></p>
          </div>
        </div>
      </div> */}

      {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
        <div className="tiles-item-inner">
          <a href="https://www.linkedin.com/in/ronald-kogens/" target="_blank" rel="noopener noreferrer">
            <div className="team-item-header">
              <div className="team-item-image mb-24">
                <Image
                  src={require('@hoprnet/assets/images/partners/ronald_kogens.jpg')}
                  alt="Board member 03"
                  width={180}
                  height={180}
                />
              </div>
            </div>
          </a>
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">Ronald Kogens</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Board Member</div>
            <p className="m-0 text-sm"></p>
          </div>
        </div>
      </div> */}

      {!isCompany && (
        <div className="mt-24" style={{ width: '100%' }}>
          The HOPR protocol is a digital commons that is currently being built by{' '}
          <a
            href="https://hopr.swiss/who-is-HOPR#team"
            target="_blank"
            rel="noopener noreferrer"
            className="text-color-high underline"
          >
            HOPR Services AG
          </a>
          .
        </div>
      )}

      {/* <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
        <div className="tiles-item-inner">
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-4">HOPR Services AG</h5>
            <div className="team-item-role text-xs fw-500 mb-8">Platform development</div>
          </div>
        </div>
      </div> */}

      <div className="tiles-item reveal-from-bottom mt-32" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
        <div className="tiles-item-inner">
          <div className="team-item-content">
            <h5 className="team-item-name mt-0 mb-12">Grant Receivers</h5>
            <div className="team-item-role text-xs fw-500 mb-8">
              <ul>
                <li>Avado, CH</li>
                <li>Empathy PR, US</li>
                <li>S.N. NONI CORPORATION LTD, CY</li>
                <li>The Wandering Editor, UK</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const PeopleBuilding = () => {
  return (
    <div className="center-content  ">
      <div className="container-sm">
        <h2>People building the HOPR Network</h2>
      </div>
      <div className="helper-grid">
        {/*  */}

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <div className="team-item-header">
              <a href="https://www.linkedin.com/in/scbuergel/" target="_blank" rel="noopener noreferrer">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/sebastian_burgel.png')}
                    alt="Image of Dr. Sebastian Bürgel"
                    width={180}
                    height={180}
                  />
                </div>
              </a>
            </div>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Dr. Sebastian Bürgel</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Founder</div>
              {/* <p className="m-0 text-sm"></p> */}
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="https://www.linkedin.com/in/robert-kiel-176878161/" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/robert_kiel.png')}
                    alt="steven_nonis"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Robert Kiel</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Co-Founder, Crypto</div>
              {/* <p className="m-0 text-sm"></p> */}
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="https://www.linkedin.com/in/rikkrieger/" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/rik_krieger.png')}
                    alt="steven_nonis"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Rik Krieger, eMBA</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Co-Founder, Commercial</div>
              {/* <p className="m-0 text-sm"></p> */}
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="https://www.linkedin.com/in/meredith55/" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/meredith_bachma.png')}
                    alt="meredith_bachma"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Meredith Bachman</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Graphic Designer</div>
              {/* <p className="m-0 text-sm"></p> */}
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="https://www.linkedin.com/in/jjperezaguinaga/" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/jose_aguinaga.png')}
                    alt="jose_aguinaga"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">José Aguinaga</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Head of Engineering</div>
              {/* <p className="m-0 text-sm"></p> */}
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="https://www.linkedin.com/in/stevennonis/" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/steven_nonis.png')}
                    alt="steven_nonis"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Steven Nonis</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Software Engineer</div>
              {/* <p className="m-0 text-sm"></p> */}
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="https://www.linkedin.com/in/peterbraden/" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/peter_braden.png')}
                    alt="Peter Braden"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Peter Braden</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Software Engineer</div>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/reinhard_schmidt.jpg')}
                    alt="Reinhard Schmidt"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Reinhard Schmidt</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Graphic Designer</div>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <span target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/the_wandering_editor.png')}
                    alt="Content Creator"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </span>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">The Wandering Editor</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Content Creator</div>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <span target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/matthew_edwards.png')}
                    alt="Community Manager"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </span>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Matthew Edwards</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Community Manager</div>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/simona_fontanella.png')}
                    alt="Simona Fontanella"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Simona Fontanella</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Operations Manager</div>
            </div>
          </div>
        </div>

        <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
          <div className="tiles-item-inner">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <div className="team-item-header">
                <div className="team-item-image mb-24">
                  <Image
                    src={require('@hoprnet/assets/images/team/menglu_wang.png')}
                    alt="Menglu Wang"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
            </a>
            <div className="team-item-content">
              <h5 className="team-item-name mt-0 mb-4">Menglu Wang</h5>
              <div className="team-item-role text-xs fw-500 mb-8">Chinese Community Manager</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

class Team extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props

    const outerClasses = classNames(
      'team section center-content cursor',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    )

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    )

    const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

    const sectionHeader = {
      title: isCompany ? 'Team' : 'Board Of Association',
      paragraph: undefined,
    }

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className={tilesClasses}>
              <div className="width-full ">
                <PeopleBuilding />
              </div>
              {isCompany ? <ProfilesCompany tilesClasses={tilesClasses} /> : <ProfilesAssociation tilesClasses />}
            </div>

            {!isCompany && (
              <div>
                Do you want to become a member of the association?
                <br />
                <br />
                <Button
                  color={props.invertColor ? 'secondary' : 'primary'}
                  tag="a"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeiZ76QfvcbpbBJk-DJDE5IfYmzkuUfUOM-j4btBviTbBNn2w/viewform?usp=sf_link&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

Team.propTypes = propTypes
Team.defaultProps = defaultProps

export default Team
