import cookies from 'browser-cookies';
import moment from 'moment';
import PT from 'prop-types';
import React from 'react';

import { config, isomorphy } from 'topcoder-react-utils';

import FacebookIcon from './icons/icon-fb.svg';
import YouTubeIcon from './icons/icon-youtube.svg';
import LinkedInIcon from './icons/icon-linkedln.svg';
import TwitterIcon from './icons/icon-twitter.svg';
import InstagramIcon from './icons/icon-instagram.svg';
import TCLogo from './icons/TC-logo-inverted.svg';
import DiscordIcon from './icons/icon-discord.svg';

import './style.scss';

function Link({
  children,
  to,
  openNewTab,
}) {
  return (
    <li styleName="link">
      <a href={to} target={openNewTab ? '_blank' : '_self'}>
        {children}
      </a>
    </li>
  );
}

Link.defaultProps = {
  openNewTab: false,
};

Link.propTypes = {
  to: PT.string.isRequired,
  children: PT.node.isRequired,
  openNewTab: PT.bool,
};

export default function TopcoderFooter() {
  const base = config.URL.BASE;
  const authUrl = config.URL.AUTH;
  const retUrl = isomorphy.isClientSide() ? encodeURIComponent(window.location.href) : '';
  const loggedIn = isomorphy.isClientSide() && cookies.get('tcjwt') !== null;
  const currentYear = moment().year();
  return (
    <div styleName="footer" role="contentinfo">
      <div styleName="footer-wrap">
        <div styleName="logo-wrap"><TCLogo /></div>
        <div styleName="navi-links">
          <div styleName="navi-col">
            <h4 styleName="navi-col-title">COMPETE</h4>
            <div styleName="sep-line" />
            <ul styleName="navi-col-links">
              <Link to={`${base}/challenges`}>All Challenges</Link>
              <Link to={`${base}/community/arena`}>Competitive Programming</Link>
              <Link to={`${base}/gigs`}>Gig Work</Link>
              <Link to={`${base}/community/practice`}>Practice</Link>
            </ul>
          </div>
          <div styleName="navi-col">
            <h4 styleName="navi-col-title">TRACKS</h4>
            <div styleName="sep-line" />
            <ul styleName="navi-col-links">
              <Link to={`${base}/thrive/tracks?track=Competitive%20Programming`}>Competitive Programming</Link>
              <Link to={`${base}/thrive/tracks?track=Data%20Science&tax=`}>Data Science</Link>
              <Link to={`${base}/thrive/tracks?track=Design&tax=`}>Design</Link>
              <Link to={`${base}/thrive/tracks?track=Development&tax=`}>Development</Link>
              <Link to={`${base}/thrive/tracks?track=QA&tax=`}>QA</Link>
            </ul>
          </div>
          <div styleName="navi-col">
            <h4 styleName="navi-col-title">COMMUNITY</h4>
            <div styleName="sep-line" />
            <ul styleName="navi-col-links">
              <Link to={`${base}/blog`}>Blog</Link>
              <Link to={`${base}/community/events`}>Events Calendar</Link>
              <Link to={`${config.URL.FORUMS_VANILLA}`}>Forums</Link>
              <Link to={`${base}/community/member-programs`}>Programs</Link>
              <Link to={`${base}/community/statistics`}>Statistics</Link>
              <Link to={`${base}/community/member-programs/topcoder-open`}>TCO</Link>
              <Link to={`${base}/thrive`}>Thrive</Link>
              <Link to="https://discord.gg/topcoder" openNewTab>Discord</Link>
            </ul>
          </div>
          <div styleName="navi-col">
            <h4 styleName="navi-col-title">HELP CENTER</h4>
            <div styleName="sep-line" />
            <ul styleName="navi-col-links">
              <Link to={`${base}/thrive/tracks?track=Topcoder&tax=Getting%20Paid`}>Getting Paid</Link>
              <Link to={`${base}/thrive/tracks?track=Topcoder&tax=FAQ`}>FAQ</Link>
              <Link to={`${base}/thrive/tracks?track=Topcoder`}>General Info</Link>
              <Link to="mailto:support@topcoder.com">Website Help</Link>
            </ul>
          </div>
          <div styleName="navi-col">
            <h4 styleName="navi-col-title">ABOUT</h4>
            <div styleName="sep-line" />
            <ul styleName="navi-col-links">
              <Link to={`${base}/community/contact`}>Contact Us</Link>
              {!loggedIn
                && <Link to={`${authUrl}?utm_source=community&utm_campaign=tc-footer&utm_medium=promotion&retUrl=${retUrl}`}>Join Community</Link>
              }
              <Link to={`${base}/community/learn`}>About Community</Link>
              <Link to={`${base}/community/changelog`}>Changelog</Link>
              <Link to={`${base}/contact-us/`}>Talk to Sales</Link>
            </ul>
          </div>
          <div styleName="navi-col">
            <h4 styleName="navi-col-title">FOLLOW US</h4>
            <div styleName="sep-line" />
            <div styleName="social-icons">
              <a href="https://www.facebook.com/topcoder/" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
              <a href="https://www.youtube.com/c/TopcoderOfficial" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
              <a href="https://www.linkedin.com/company/topcoder" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
              <a href="https://twitter.com/topcoder" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
              <a href="https://www.instagram.com/topcoder" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
              <a href="https://discord.gg/topcoder" target="_blank" rel="noopener noreferrer"><DiscordIcon /></a>
            </div>
          </div>
        </div>
        <div styleName="sep-line" />
        <div styleName="mobile-navi">
          <div styleName="mobile-navi-col">
            <a href={`${base}/challenges`}>COMPETE</a>
            <a href={`${base}/thrive`}>TRACKS</a>
          </div>
          <div styleName="mobile-navi-col">
            <a href={`${base}/community/learn`}>COMMUNITY</a>
            <a href={`${base}/thrive/tracks?track=Topcoder&tax=Help%20Articles`}>HELP CENTER</a>
          </div>
          <div styleName="mobile-navi-col">
            <a href={`${base}/community/contact`}>Contact Us</a>
          </div>
        </div>
        <div styleName="mobile-only social-icons">
          <a href="https://www.facebook.com/topcoder/" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
          <a href="https://www.youtube.com/c/TopcoderOfficial" target="_blank" rel="noopener noreferrer"><YouTubeIcon /></a>
          <a href="https://www.linkedin.com/company/topcoder" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
          <a href="https://twitter.com/topcoder" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
          <a href="https://www.instagram.com/topcoder" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
          <a href="https://discord.gg/topcoder" target="_blank" rel="noopener noreferrer"><DiscordIcon /></a>
        </div>
        <div styleName="bottom">
          <span styleName="copyright-notice">
            {`© ${currentYear} Topcoder`}
            <a href={`${base}/policy`} styleName="link">Policies</a>
          </span>
        </div>
      </div>
    </div>
  );
}
