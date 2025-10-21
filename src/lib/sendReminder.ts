import { transporter } from './mailer';
import { render } from '@react-email/render';
import React from 'react';
import TwelveHrsLeftDealRoom from '@/emails/TwelveHrsLeftDealRoom';
import TwoHrsLeftDealRoom from '@/emails/TwoHrsBeforeDealRoom';
import DealRoomExpiredMail from '@/emails/DealRoomExpiredMail';
import PreApprovalReminder from '@/emails/PreApprovalReminder';
export async function sendSeedReminder(
  email: string,
  type: '12h' | '2h' | 'declined_by_system' | 'preApproval_pending',
  props: { fullName: string; url: string }
) {
  let subject = '';
  let html = '';

  switch (type) {
    case '12h':
      subject = '12-hour Reminder: Deal Room Access Expires Soon';
      html = await render(
        React.createElement(TwelveHrsLeftDealRoom, {
          fullName: props.fullName,
          url: props.url,
        })
      );
      break;

    case '2h':
      subject = 'Final Reminder: Deal Room Expires in 2 Hours';
      html = await render(
        React.createElement(TwoHrsLeftDealRoom, {
          fullName: props.fullName,
          url: props.url,
        })
      );
      break;

    case 'declined_by_system':
      subject = 'Your Deal Room Expired and Declined';
      html = await render(
        React.createElement(DealRoomExpiredMail, {
          fullName: props.fullName,
          url: props.url,
        })
      );
      break;

    case 'preApproval_pending':
      subject = 'Reminder: Complete Your Pre-Approval to Proceed';
      html = await render(
        React.createElement(PreApprovalReminder, {
          fullName: props.fullName,
          url: props.url,
        })
      );
      break;
  }

  await transporter.sendMail({
    from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
    to: email,
    subject,
    html,
  });
}
