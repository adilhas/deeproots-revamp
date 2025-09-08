import { transporter } from './mailer';
import { render } from '@react-email/render';
import React from 'react';
import TwelveHrsLeftDealRoom from '@/emails/TwelveHrsLeftDealRoom';
import TwoHrsLeftDealRoom from '@/emails/TwoHrsBeforeDealRoom';
import DealRoomExpiredMail from '@/emails/DealRoomExpiredMail';
export async function sendSeedReminder(
  email: string,
  type: '12h' | '22h' | 'declined_by_system',
  props: { fullName: string; url: string }
) {
  let subject = '';
  let html = '';

  if (type === '12h') {
    subject = '12-hour Reminder: Deal Room Access Expires Soon';
    html = await render(
      React.createElement(TwelveHrsLeftDealRoom, {
        fullName: props?.fullName,
        url: props.url,
      })
    );
  } else if (type === '22h') {
    subject = 'Final Reminder: Deal Room Expires in 2 Hours';
    html = await render(
      React.createElement(TwoHrsLeftDealRoom, {
        fullName: props?.fullName,
        url: props.url,
      })
    );
  } else {
    subject = 'Deal Room Automatically Declined';
    html = await render(
      React.createElement(DealRoomExpiredMail, {
        fullName: props?.fullName,
        url: props.url,
      })
    );
  }

  await transporter.sendMail({
    from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
    to: email,
    subject,
    html,
  });
}
