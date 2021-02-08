/**
 * The modal used for gig referral flow
 */

/* global window */

import { isEmpty } from 'lodash';
import PT from 'prop-types';
import React from 'react';
import { Modal, PrimaryButton } from 'topcoder-react-ui-kit';
import { config, Link } from 'topcoder-react-utils';
import TextInput from 'components/GUIKit/TextInput';
import Textarea from 'components/GUIKit/Textarea';
import tc from 'components/buttons/themed/tc.scss';
import ContentBlock from 'components/Contentful/ContentBlock';
import LoadingIndicator from 'components/LoadingIndicator';
import modalStyle from './modal.scss';

/** Themes for buttons
 * those overwrite PrimaryButton style to match achieve various styles.
 * Should implement pattern of classes.
 */
const buttonThemes = {
  tc,
};

// help article link
const HELP_INFO_LINK = '/community/getting-the-gig';

function ReferralModal({
  profile,
  onCloseButton,
  onSendClick,
  isReferrSucess,
  formErrors,
  formData,
  onFormInputChange,
  isReferrError,
  referralId,
}) {
  return (
    <Modal
      onCancel={onCloseButton}
      theme={modalStyle}
    >
      { !isEmpty(profile) ? (
        <div className={modalStyle.referrals}>
          {
            !isReferrSucess && !isReferrError && referralId ? (
              <div className={modalStyle.referrForm}>
                <ContentBlock id="4b3SIWDVWtXLFN43j044fy" />
                <TextInput
                  placeholder="Email Referral"
                  label="Email Referral"
                  onChange={val => onFormInputChange('email', val)}
                  errorMsg={formErrors.email}
                  value={formData.email}
                  required
                />
                <div className={modalStyle.margin}>
                  <Textarea
                    placeholder="Email Message"
                    label="Email Message"
                    onChange={val => onFormInputChange('body', val)}
                    errorMsg={formErrors.body}
                    value={formData.body}
                    required
                  />
                </div>
                <div className={modalStyle.ctaButtons}>
                  <PrimaryButton
                    onClick={onCloseButton}
                    theme={{
                      button: buttonThemes.tc['primary-white-md'],
                    }}
                  >
                    CANCEL
                  </PrimaryButton>
                  <PrimaryButton
                    onClick={onSendClick}
                    theme={{
                      button: buttonThemes.tc['primary-green-md'],
                    }}
                    disabled={!isEmpty(formErrors)}
                  >
                    SEND INVITE
                  </PrimaryButton>
                </div>
              </div>
            ) : null
          }
          {
            !referralId && (
            <div className={modalStyle.referrForm}>
              <p style={{ textAlign: 'center' }}>Loading your personal referral form...</p>
              <LoadingIndicator />
            </div>
            )
          }
          {
            isReferrSucess ? (
              <div className={modalStyle.referrSucess}>
                <h3 className={modalStyle.title}>CONGRATULATIONS!</h3>
                <p className={modalStyle.sucessMsg}>Your referral has been sent.</p>
                <div className={modalStyle.ctaButtons}>
                  <PrimaryButton
                    onClick={onCloseButton}
                    theme={{
                      button: buttonThemes.tc['primary-green-md'],
                    }}
                  >
                    CLOSE
                  </PrimaryButton>
                  <Link to="/gigs" className={buttonThemes.tc['primary-white-md']}>FIND ANOTHER GIG</Link>
                </div>
              </div>
            ) : null
          }
          {
            isReferrError ? (
              <div className={modalStyle.referrSucess}>
                <h3 className={modalStyle.title}>OOPS!</h3>
                <p className={modalStyle.loginMsg}>{isReferrError.message}</p>
                <p>Looks like there is a problem on our end. Please try again.<br />If this persists please contact <a href="mailto:support@topcoder.com">support@topcoder.com</a>.</p>
                <div className={modalStyle.ctaButtons}>
                  <PrimaryButton
                    onClick={onCloseButton}
                    theme={{
                      button: buttonThemes.tc['primary-green-md'],
                    }}
                  >
                    CLOSE
                  </PrimaryButton>
                  <Link to="/gigs" className={buttonThemes.tc['primary-white-md']}>FIND ANOTHER GIG</Link>
                </div>
              </div>
            ) : null
          }
        </div>
      ) : (
        <div className={modalStyle.loginRequired}>
          <h3 className={modalStyle.title}>WARNING</h3>
          <p className={modalStyle.loginMsg}>You must be a Topcoder member to refer!</p>
          <div className={modalStyle.ctaButtons}>
            <Link to={HELP_INFO_LINK} className={buttonThemes.tc['primary-white-md']} openNewTab="true">FIND OUT MORE</Link>
            <PrimaryButton
              onClick={() => {
                let retUrl = window.location.href;
                retUrl += retUrl.match('\\?') ? '&referr=true' : '?referr=true';
                window.location = `${config.URL.AUTH}/member/registration?retUrl=${encodeURIComponent(retUrl)}`;
              }}
              theme={{
                button: buttonThemes.tc['primary-green-md'],
              }}
            >
              REGISTER
            </PrimaryButton>
          </div>
        </div>
      )}
    </Modal>
  );
}

ReferralModal.defaultProps = {
  profile: null,
  referralId: null,
};

ReferralModal.propTypes = {
  profile: PT.shape(),
  onCloseButton: PT.func.isRequired,
  onSendClick: PT.func.isRequired,
  isReferrSucess: PT.bool.isRequired,
  formErrors: PT.shape().isRequired,
  formData: PT.shape().isRequired,
  onFormInputChange: PT.func.isRequired,
  isReferrError: PT.shape().isRequired,
  referralId: PT.string,
};

export default ReferralModal;