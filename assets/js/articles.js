/* articles.js — Full Article Content Database for 60YR Support Hub */

const ARTICLE_DB = {

  /* =====================================================================
     BUYER ARTICLES
  ===================================================================== */

  b1: {
    title: 'How to Purchase a Game Account on 60YR',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b4','b2','b5'],
    content: `
      <p>Buying a game account on 60YR is quick and secure. Follow the complete step-by-step process below to ensure a safe and smooth transaction.</p>

      <h2>Step 1 — Browse &amp; Find Your Account</h2>
      <p>Use the search bar or browse by game category to find the account you want. You can filter by:</p>
      <ul>
        <li>Game title (e.g. Genshin Impact, League of Legends, Valorant, PUBG Mobile)</li>
        <li>Region / server</li>
        <li>Rank, level, or in-game items</li>
        <li>Price range</li>
        <li>Seller rating and verification status</li>
      </ul>
      <div class="article-callout">
        <p><strong>Tip:</strong> Look for listings from <strong>Verified Sellers</strong> — they hold a gold badge and have passed our identity verification process.</p>
      </div>

      <h2>Step 2 — Review the Listing Carefully</h2>
      <p>Before purchasing, read the full listing description including:</p>
      <ul>
        <li>Account rank, level, and in-game assets</li>
        <li>Server/region restrictions</li>
        <li>Whether the original email is included</li>
        <li>Screenshots or video proof provided by the seller</li>
        <li>Any noted history (bans, reports, previous ownership)</li>
      </ul>

      <h2>Step 3 — Add to Cart &amp; Checkout</h2>
      <p>Click <strong>"Buy Now"</strong> and proceed to checkout. Select your preferred payment method (credit/debit card, PayPal, etc.) and confirm the order. Your payment is held in escrow — the seller does not receive funds until you confirm delivery.</p>

      <h2>Step 4 — Receive Account Credentials</h2>
      <p>After successful payment, the seller has <strong>24 hours</strong> to deliver the account login credentials through the 60YR secure platform. You will receive an email and in-app notification when credentials are ready.</p>
      <div class="article-callout warn">
        <p><strong>Important:</strong> Never communicate account credentials outside of the 60YR platform. Off-platform deals are NOT covered by Buyer Protection.</p>
      </div>

      <h2>Step 5 — Log In &amp; Verify Account Content</h2>
      <p>After receiving the credentials, log in to the game account and verify that it matches the listing description:</p>
      <ul>
        <li>Check the rank, level, characters, skins, currency balance, and other items listed</li>
        <li>Confirm the account region/server is correct</li>
        <li>Review the account history for any discrepancies</li>
      </ul>

      <h2>Step 6 — Change Binding (Email &amp; Phone Rebinding)</h2>
      <p>Once content is verified, immediately rebind the account to your own contact information:</p>
      <ol>
        <li>Change the account password to one only you know</li>
        <li>Update the linked email address to your personal email</li>
        <li>Update the linked phone number to your own number</li>
        <li>Enable Two-Factor Authentication (2FA) on the account</li>
      </ol>
      <div class="article-callout warn">
        <p><strong>Critical:</strong> Complete rebinding <strong>before</strong> confirming the order. Once you confirm receipt, the transaction is final and funds are released to the seller. If the original owner can still access the account, you will not be protected after confirmation.</p>
      </div>

      <h2>Step 7 — Confirm Receipt</h2>
      <p>After verifying the account content and completing rebinding, click <strong>"Confirm Receipt"</strong> in your 60YR dashboard. This releases the escrowed payment to the seller. You have a <strong>48-hour window</strong> after receiving credentials to confirm or open a dispute.</p>

      <div class="article-callout">
        <p><strong>Auto-Confirmation:</strong> If you do not take any action within 48 hours, the order may be auto-confirmed. Always act within the window to protect yourself.</p>
      </div>
    `
  },

  b2: {
    title: 'Payment Methods Accepted on 60YR',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b1','b3','b8'],
    content: `
      <p>60YR supports a variety of payment methods to make purchasing game accounts easy and accessible worldwide.</p>

      <h2>Accepted Payment Methods</h2>
      <ul>
        <li><strong>Credit / Debit Card</strong> — Visa, Mastercard, American Express</li>
        <li><strong>PayPal</strong> — Fast and widely available globally</li>
        <li><strong>60YR Wallet</strong> — Pre-loaded balance for instant checkout</li>
        <li><strong>Alipay / WeChat Pay</strong> — Available for users in supported regions</li>
      </ul>

      <h2>Payment Security</h2>
      <p>All card payments are processed through PCI-DSS compliant payment gateways. 60YR never stores your full card number.</p>

      <div class="article-callout">
        <p><strong>Escrow System:</strong> All payments are held in escrow until you confirm receipt of the account. The seller receives funds only after successful delivery and your confirmation.</p>
      </div>

      <h2>Currency</h2>
      <p>All prices on 60YR are displayed in <strong>USD (US Dollars)</strong>. Your payment provider may charge a currency conversion fee if you pay in a different currency.</p>

      <h2>Payment Failure</h2>
      <p>If your payment fails, check the following:</p>
      <ul>
        <li>Ensure your card has international transactions enabled</li>
        <li>Check your billing address matches your card records</li>
        <li>Try a different payment method</li>
        <li>Contact your bank — some banks block game-related purchases by default</li>
      </ul>
      <p>If the issue persists, contact <a href="mailto:support@60yr.com">support@60yr.com</a> for assistance.</p>
    `
  },

  b3: {
    title: 'How to Check Your Order Status',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b1','b9','b6'],
    content: `
      <p>Tracking your order on 60YR is simple. Here's how to monitor the status of your game account purchase at every stage.</p>

      <h2>Order Status Meanings</h2>
      <div style="overflow-x:auto;margin:16px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="border-bottom:1px solid var(--border);">
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Status</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;color:var(--seller);font-weight:600;">Pending Payment</td>
              <td style="padding:10px 12px;color:var(--text-2);">Your payment is being processed</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;color:var(--accent-lt);font-weight:600;">Awaiting Delivery</td>
              <td style="padding:10px 12px;color:var(--text-2);">Payment confirmed, seller has 24 hours to deliver credentials</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;color:var(--buyer);font-weight:600;">Delivered</td>
              <td style="padding:10px 12px;color:var(--text-2);">Credentials sent — waiting for your verification &amp; confirmation</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;color:var(--warn);font-weight:600;">Dispute Open</td>
              <td style="padding:10px 12px;color:var(--text-2);">A dispute has been raised and is under review</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;color:var(--success);font-weight:600;">Completed</td>
              <td style="padding:10px 12px;color:var(--text-2);">Order confirmed, transaction complete</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How to View Your Orders</h2>
      <ol>
        <li>Log in to your 60YR account</li>
        <li>Click your avatar → <strong>My Orders</strong></li>
        <li>Select any order to view details, messages, and delivery status</li>
      </ol>

      <h2>Order Notifications</h2>
      <p>60YR sends email notifications at each key stage: payment confirmed, credentials delivered, and order completed. Check your spam folder if you don't receive them.</p>
    `
  },

  b4: {
    title: 'Account Delivery &amp; Handover Process',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b1','b9','b5'],
    content: `
      <p>Understanding the account handover process helps ensure a smooth and safe transfer. Here is the complete buyer-side handover workflow on 60YR.</p>

      <h2>The Full Handover Flow</h2>
      <div class="article-callout">
        <p><strong>Overview:</strong> Payment → Seller Delivers Credentials → Buyer Logs In → Buyer Verifies Content → Buyer Rebinds Account → Buyer Confirms Receipt</p>
      </div>

      <h2>Phase 1: Receiving Credentials</h2>
      <p>After your payment is confirmed, the seller will submit the account's login credentials (username/email and password) through 60YR's secure delivery system. You will receive:</p>
      <ul>
        <li>Login email or username</li>
        <li>Current account password</li>
        <li>Any additional recovery information (backup codes, original email if included)</li>
        <li>Notes about the account from the seller</li>
      </ul>

      <h2>Phase 2: Logging In</h2>
      <p>Use the provided credentials to log into the game or the game launcher (Steam, Epic, Battle.net, etc.). Do <strong>not</strong> change the password yet at this stage — first verify the content.</p>

      <h2>Phase 3: Verifying Account Content</h2>
      <p>Thoroughly compare the account with the listing description:</p>
      <ul>
        <li>Check rank, level, achievements, characters, and skins</li>
        <li>Verify in-game currency balance</li>
        <li>Confirm server/region is as advertised</li>
        <li>Check for any active bans or suspensions</li>
        <li>Look for discrepancies vs. the seller's screenshots</li>
      </ul>
      <p>If anything does not match, <strong>open a dispute immediately</strong> before making any changes to the account.</p>

      <h2>Phase 4: Rebinding the Account</h2>
      <p>Once you are satisfied the account matches the listing, proceed to rebind:</p>
      <ol>
        <li><strong>Change the password</strong> to a strong, unique password</li>
        <li><strong>Change the linked email</strong> to your personal email address</li>
        <li><strong>Change the linked phone number</strong> to your phone number</li>
        <li><strong>Enable 2FA</strong> on the new email and game account</li>
        <li>Remove any old recovery methods tied to the previous owner</li>
      </ol>
      <div class="article-callout warn">
        <p><strong>Why rebinding is critical:</strong> Until you rebind, the original owner can potentially recover the account. Rebinding severs the original owner's access. Do this BEFORE confirming the order.</p>
      </div>

      <h2>Phase 5: Confirming the Order</h2>
      <p>After rebinding is complete, return to your 60YR dashboard and click <strong>"Confirm Receipt"</strong>. This releases the payment from escrow to the seller. The transaction is then officially complete.</p>

      <h2>Dispute Window</h2>
      <p>You have <strong>48 hours</strong> from credential delivery to either confirm the order or open a dispute. If you take no action, the system may auto-confirm after 48 hours.</p>
    `
  },

  b5: {
    title: '60YR Refund Policy Explained',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b6','b7','b8'],
    content: `
      <p>60YR's refund policy is designed to protect buyers while being fair to sellers. Here's everything you need to know.</p>

      <h2>When You're Eligible for a Refund</h2>
      <p>You may be eligible for a full or partial refund in the following situations:</p>
      <ul>
        <li>The seller did not deliver the account credentials within 24 hours</li>
        <li>The delivered account does not match the listing description</li>
        <li>The account credentials are invalid, expired, or the account has been banned</li>
        <li>The original owner reclaimed the account within 30 days of your purchase</li>
        <li>The account was misrepresented (e.g., significantly fewer items than advertised)</li>
      </ul>
      <div class="article-callout">
        <p><strong>Note:</strong> Refunds are processed after a dispute investigation is completed. This typically takes 3–5 business days.</p>
      </div>

      <h2>When Refunds Are NOT Available</h2>
      <ul>
        <li>You changed your mind after the order is confirmed</li>
        <li>You violated platform rules (e.g., you changed email before the dispute window expired without raising a dispute)</li>
        <li>The issue was caused by your own actions (e.g., getting the account banned)</li>
        <li>More than 30 days have passed since order completion</li>
        <li>You confirmed the order despite the issue</li>
      </ul>

      <h2>How to Request a Refund</h2>
      <ol>
        <li>Go to <strong>My Orders</strong> in your dashboard</li>
        <li>Select the order and click <strong>"Open Dispute"</strong></li>
        <li>Choose the reason and provide evidence (screenshots, video, etc.)</li>
        <li>Wait for our team to review — usually within 3–5 business days</li>
      </ol>
      <div class="article-callout warn">
        <p><strong>Deadline:</strong> You must open a dispute within <strong>48 hours</strong> of receiving the credentials, or within <strong>30 days</strong> of order completion if a delayed issue arises. After these periods, no refunds can be processed.</p>
      </div>

      <h2>Refund Processing Times</h2>
      <p>Once approved, refunds are returned to your original payment method:</p>
      <ul>
        <li>Credit/Debit Card: 5–10 business days</li>
        <li>PayPal: 1–3 business days</li>
        <li>60YR Wallet: Instant</li>
      </ul>
    `
  },

  b6: {
    title: 'How to Open a Dispute with the Seller',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b5','b7','b4'],
    content: `
      <p>If you encounter a problem with your purchase, 60YR's dispute system is here to help. Here's how to open and manage a dispute effectively.</p>

      <h2>When to Open a Dispute</h2>
      <ul>
        <li>Account was not delivered within 24 hours</li>
        <li>Delivered account doesn't match the listing</li>
        <li>Credentials are incorrect or account is inaccessible</li>
        <li>Account was reclaimed by the original owner</li>
        <li>Account has undisclosed bans or issues</li>
      </ul>

      <div class="article-callout warn">
        <p><strong>Open a dispute BEFORE confirming the order.</strong> Once you click "Confirm Receipt," the transaction is final and a refund cannot be issued.</p>
      </div>

      <h2>How to Open a Dispute</h2>
      <ol>
        <li>Go to <strong>My Orders</strong> and select the relevant order</li>
        <li>Click the <strong>"Open Dispute"</strong> button (available within 48 hours of delivery)</li>
        <li>Select the reason for the dispute from the dropdown</li>
        <li>Write a clear description of the problem</li>
        <li>Upload supporting evidence: screenshots, screen recordings, or photos</li>
        <li>Submit the dispute</li>
      </ol>

      <h2>What Happens After You Submit</h2>
      <p>Our mediation team will:</p>
      <ol>
        <li>Notify the seller of the dispute (seller has 24 hours to respond)</li>
        <li>Review all evidence from both parties</li>
        <li>Make a decision within 3–5 business days</li>
        <li>Notify you of the outcome via email and in-app notification</li>
      </ol>

      <h2>Tips for a Successful Dispute</h2>
      <ul>
        <li>Provide clear screenshots showing the discrepancy</li>
        <li>Do not modify the account before gathering evidence</li>
        <li>Be factual and specific in your description</li>
        <li>Respond promptly to any requests from our team</li>
      </ul>
    `
  },

  b7: {
    title: 'Dispute Resolution Timeline',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b6','b5','b8'],
    content: `
      <p>Understanding the timeline helps you know what to expect when a dispute is in progress.</p>

      <h2>Standard Dispute Timeline</h2>
      <div style="overflow-x:auto;margin:16px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="border-bottom:1px solid var(--border);">
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Stage</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Timeframe</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;font-weight:600;">Dispute Opened</td>
              <td style="padding:10px 12px;color:var(--text-2);">Day 0</td>
              <td style="padding:10px 12px;color:var(--text-2);">You submit the dispute with evidence</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;font-weight:600;">Seller Response</td>
              <td style="padding:10px 12px;color:var(--text-2);">Day 0–1</td>
              <td style="padding:10px 12px;color:var(--text-2);">Seller has 24 hours to respond</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;font-weight:600;">Team Review</td>
              <td style="padding:10px 12px;color:var(--text-2);">Day 1–5</td>
              <td style="padding:10px 12px;color:var(--text-2);">60YR mediation team reviews all evidence</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;font-weight:600;">Decision Made</td>
              <td style="padding:10px 12px;color:var(--text-2);">Day 3–5</td>
              <td style="padding:10px 12px;color:var(--text-2);">Resolution communicated to both parties</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;font-weight:600;">Refund Processed</td>
              <td style="padding:10px 12px;color:var(--text-2);">Day 5–15</td>
              <td style="padding:10px 12px;color:var(--text-2);">Refund issued to original payment method</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Complex Disputes</h2>
      <p>Some disputes involving account reclaim, fraud, or third-party verification may take up to 14 business days. You will be kept informed throughout the process.</p>

      <h2>Appeals</h2>
      <p>If you disagree with the dispute decision, you can appeal within 7 days of the ruling. Provide additional evidence to support your case. Appeals are reviewed by a senior team and are final.</p>
    `
  },

  b8: {
    title: 'Chargeback Information &amp; Policy',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b5','b6','b2'],
    content: `
      <p>A chargeback is a payment reversal initiated through your bank or payment provider. Please read 60YR's policy before initiating a chargeback.</p>

      <h2>Before Initiating a Chargeback</h2>
      <p>We strongly encourage you to <strong>open a dispute through 60YR first</strong>. Our mediation team can typically resolve issues faster than a chargeback process, and you won't risk account suspension.</p>

      <h2>What Happens When You File a Chargeback</h2>
      <ul>
        <li>Your 60YR account will be <strong>immediately suspended</strong> pending investigation</li>
        <li>Any active orders will be paused</li>
        <li>60YR will submit evidence to your payment provider defending the transaction</li>
        <li>If the chargeback is found to be fraudulent, you may be permanently banned and reported</li>
      </ul>

      <h2>Legitimate Chargeback Scenarios</h2>
      <p>A chargeback may be appropriate if:</p>
      <ul>
        <li>You have attempted to resolve through 60YR dispute system and received no response</li>
        <li>You did not authorize the payment (fraud on your payment method)</li>
        <li>60YR failed to process an approved refund within the stated timeframe</li>
      </ul>

      <h2>Unauthorized Charges</h2>
      <p>If you see a charge you do not recognize on your statement:</p>
      <ol>
        <li>Log into 60YR and check your order history</li>
        <li>If it's not your order, immediately change your 60YR password and contact support</li>
        <li>Report to <a href="mailto:support@60yr.com">support@60yr.com</a> with the charge amount and date</li>
      </ol>
    `
  },

  b9: {
    title: 'Account Not Received After Purchase',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b4','b6','b3'],
    content: `
      <p>If you've paid but haven't received the account credentials, here's what to do.</p>

      <h2>Check Your Order Status First</h2>
      <p>Log in and go to <strong>My Orders</strong>. Check the current status:</p>
      <ul>
        <li><strong>"Awaiting Delivery"</strong> — The seller has up to 24 hours to deliver. Check if the deadline has passed.</li>
        <li><strong>"Delivered"</strong> — Credentials have been sent. Check the order details page for the delivery message.</li>
        <li><strong>"Pending Payment"</strong> — Your payment may still be processing. Wait and check again in a few minutes.</li>
      </ul>

      <h2>If 24 Hours Have Passed with No Delivery</h2>
      <p>If the seller has not delivered within 24 hours of your payment confirmation:</p>
      <ol>
        <li>Go to <strong>My Orders</strong> → Select the order</li>
        <li>Click <strong>"Open Dispute"</strong></li>
        <li>Select reason: <em>"Seller did not deliver within 24 hours"</em></li>
        <li>Submit the dispute — our team will review and issue a full refund if the seller cannot deliver</li>
      </ol>

      <h2>Check Spam/Junk Folder</h2>
      <p>Credential delivery notifications are sent by email. Make sure the email from 60YR didn't land in your spam or junk folder.</p>

      <div class="article-callout">
        <p><strong>Note:</strong> Credentials are delivered through the 60YR platform message system, not by email directly. Log in to check the order message thread.</p>
      </div>
    `
  },

  b10: {
    title: 'How to Contact the Seller Directly',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b9','b6','b4'],
    content: `
      <p>60YR provides a built-in messaging system so buyers and sellers can communicate safely without revealing personal contact information.</p>

      <h2>Before Purchase</h2>
      <p>You can message a seller before placing an order by visiting their seller profile and clicking <strong>"Ask a Question"</strong>. Use this to clarify:</p>
      <ul>
        <li>Whether the account is still available</li>
        <li>Specific details about the account content</li>
        <li>Expected delivery time</li>
        <li>Any region/server questions</li>
      </ul>

      <h2>After Purchase</h2>
      <p>Once an order is placed, you can message the seller directly from the order page:</p>
      <ol>
        <li>Go to <strong>My Orders</strong></li>
        <li>Select the relevant order</li>
        <li>Use the <strong>Order Chat</strong> panel to send messages</li>
      </ol>

      <div class="article-callout warn">
        <p><strong>Stay on Platform:</strong> Never move communication to external apps (WhatsApp, Telegram, Discord, etc.). Off-platform communication means you lose Buyer Protection coverage, and scams cannot be investigated.</p>
      </div>

      <h2>If the Seller is Unresponsive</h2>
      <p>If the seller does not respond within a reasonable time (24 hours for post-purchase), contact 60YR Support directly. We can escalate the issue and, if necessary, initiate a refund.</p>
    `
  },

  b11: {
    title: 'How to Leave a Review for a Seller',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b1','b10','p3'],
    content: `
      <p>Reviews help other buyers make informed decisions and motivate sellers to maintain high standards. Here's how to leave a review after your purchase.</p>

      <h2>When Can You Leave a Review?</h2>
      <p>You can leave a review after the order is in <strong>"Completed"</strong> status. Reviews can be submitted within <strong>30 days</strong> of order completion.</p>

      <h2>How to Leave a Review</h2>
      <ol>
        <li>Go to <strong>My Orders</strong> and find the completed order</li>
        <li>Click <strong>"Leave a Review"</strong></li>
        <li>Rate the seller from 1 to 5 stars</li>
        <li>Write a review (50–500 characters, optional but encouraged)</li>
        <li>Submit</li>
      </ol>

      <h2>Review Guidelines</h2>
      <ul>
        <li>Be honest and specific about your experience</li>
        <li>Do not use offensive language or personal attacks</li>
        <li>Do not mention external websites or contact information</li>
        <li>Reviews must relate to the transaction on 60YR</li>
      </ul>

      <h2>Can Reviews Be Edited or Deleted?</h2>
      <p>Reviews can be edited within 24 hours of submission. After that, they are final. If you believe a review violates guidelines, report it and our moderation team will review it.</p>
    `
  },

  b12: {
    title: 'How to Use a Coupon or Promo Code',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b1','b2','b3'],
    content: `
      <p>60YR occasionally offers discount codes, coupons, and promotional offers to buyers. Here's how to apply them.</p>

      <h2>How to Apply a Coupon Code</h2>
      <ol>
        <li>Add the desired listing to your cart</li>
        <li>Proceed to the Checkout page</li>
        <li>Locate the <strong>"Promo Code"</strong> field</li>
        <li>Enter your code exactly as provided (codes are case-sensitive)</li>
        <li>Click <strong>"Apply"</strong> — the discount will be shown immediately</li>
        <li>Complete checkout</li>
      </ol>

      <h2>Coupon Terms &amp; Conditions</h2>
      <ul>
        <li>Each coupon can only be used once per account</li>
        <li>Coupons are non-transferable and cannot be exchanged for cash</li>
        <li>Discount may not apply to all listings — check the coupon terms</li>
        <li>Coupons cannot be combined with other promotions unless stated otherwise</li>
        <li>Expired codes cannot be honored</li>
      </ul>

      <h2>Where to Find Promo Codes</h2>
      <p>60YR promo codes are distributed through:</p>
      <ul>
        <li>60YR official newsletter (subscribe at the footer)</li>
        <li>Social media channels (@60YR on Twitter/X, Discord)</li>
        <li>Special events and seasonal promotions</li>
        <li>Referral program rewards</li>
      </ul>

      <div class="article-callout warn">
        <p><strong>Beware of Scams:</strong> Only use promo codes from official 60YR channels. Third-party "unlimited coupon generators" are scams.</p>
      </div>
    `
  },

  /* =====================================================================
     BUYER — KYC / COMPLIANCE
  ===================================================================== */

  bkyc1: {
    title: 'KYC (Identity Verification) for Buyers',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['baml1','a1','b2'],
    content: `
      <p>60YR operates in compliance with international financial regulations. Know Your Customer (KYC) verification may be required for buyers in certain situations.</p>

      <h2>What is KYC?</h2>
      <p>KYC (Know Your Customer) is an identity verification process used by financial platforms to verify the true identity of their users. It helps prevent fraud, money laundering, underage use, and unauthorized account access.</p>

      <h2>When is KYC Required for Buyers?</h2>
      <ul>
        <li>When your cumulative purchase amount exceeds <strong>$500 USD</strong> in any 30-day period</li>
        <li>When your account is flagged for unusual activity</li>
        <li>When you request payouts or withdrawals above threshold limits</li>
        <li>When required by local law or regulation in your jurisdiction</li>
        <li>When you register from a high-risk region as determined by our compliance system</li>
      </ul>

      <h2>How to Complete KYC</h2>
      <ol>
        <li>Go to <strong>Account Settings → Identity Verification</strong></li>
        <li>Select your country and document type</li>
        <li>Upload a clear photo of your government-issued ID (passport, driver's license, or national ID)</li>
        <li>Take a selfie holding your ID next to your face</li>
        <li>Submit — verification typically completes within 1–2 business days</li>
      </ol>

      <h2>Accepted Documents</h2>
      <ul>
        <li>Passport (any country)</li>
        <li>National Identity Card</li>
        <li>Driver's License (front and back)</li>
      </ul>

      <h2>Data Privacy</h2>
      <p>Your documents are handled by our secure verification partner and are encrypted at rest. They are never shared with sellers or third parties outside of regulatory requirements. For details, see our <a href="#">Privacy Policy</a>.</p>

      <div class="article-callout">
        <p><strong>Note:</strong> KYC verification does not affect your ability to browse or place orders under the threshold. It is only activated when triggered by the conditions above.</p>
      </div>
    `
  },

  baml1: {
    title: 'Anti-Money Laundering (AML) Policy',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['bkyc1','b8','p1'],
    content: `
      <p>60YR, operated by <strong>SEAWORLD TECHNOLOGY LIMITED</strong>, is committed to operating a safe, transparent, and legally compliant marketplace. Our Anti-Money Laundering (AML) policy applies to all users of the platform — buyers and sellers alike. We comply with international AML frameworks including the <strong>FATF (Financial Action Task Force) recommendations</strong> and applicable local regulations. To ensure the integrity of our marketplace, we have partnered with <strong>industry-leading third-party compliance providers</strong> — <a href="https://sumsub.com" target="_blank" rel="noopener">Sumsub</a> for identity verification and <a href="https://forter.com" target="_blank" rel="noopener">Forter</a> for real-time transaction risk intelligence.</p>

      <div class="aml-partner-badges">
        <div class="aml-partner-badge">
          <span class="aml-partner-icon">🛡️</span>
          <div class="aml-partner-info">
            <strong>Sumsub</strong>
            <span>Global Identity Verification &amp; Compliance Platform</span>
          </div>
        </div>
        <div class="aml-partner-badge">
          <span class="aml-partner-icon">🔍</span>
          <div class="aml-partner-info">
            <strong>Forter</strong>
            <span>Real-Time Fraud Prevention &amp; Decision Engine</span>
          </div>
        </div>
      </div>

      <h2>What is Money Laundering?</h2>
      <p>Money laundering is the process of making illegally-obtained funds appear legitimate. In digital marketplaces, this can occur through purchasing virtual goods with stolen payment methods, cycling funds through virtual accounts, or using the platform to convert illicit funds into platform credits or withdrawable cash. Buyers may unknowingly become part of a money laundering chain — for example, by using compromised payment instruments or acting as intermediaries for third-party funds. 60YR takes a zero-tolerance stance on any form of money laundering and has invested heavily in automated and manual detection systems to protect all users.</p>

      <h2>Third-Party Compliance Infrastructure</h2>
      <p>Rather than relying solely on in-house systems, 60YR has integrated <strong>two globally recognized compliance platforms</strong> into our operations. This multi-layered approach ensures that both sellers and buyers are protected — sellers are rigorously verified before any financial activity, and every transaction is continuously monitored for risk signals on both sides of the trade.</p>

      <div class="aml-callout-framework">
        <div class="aml-callout-item">
          <div class="aml-callout-label">Identity Layer</div>
          <div class="aml-callout-desc"><strong>Sumsub</strong> — All sellers must complete Sumsub's multi-stage identity verification before being granted publishing, trading, or payout access. Buyers exceeding purchase thresholds or flagged for unusual activity are also required to complete Sumsub KYC. This includes document authentication, biometric liveness checks, and global compliance screening.</div>
        </div>
        <div class="aml-callout-item">
          <div class="aml-callout-label">Transaction Layer</div>
          <div class="aml-callout-desc"><strong>Forter</strong> — Every purchase and payout is analyzed by Forter's decision engine in real time. From the buyer's perspective, Forter ensures that your payment is processed safely, detects whether your payment instrument has been compromised, and blocks transactions where the other party (seller) poses a fraud risk — protecting you from losing money to bad actors.</div>
        </div>
      </div>

      <h2>Buyer KYC via Sumsub — When and Why</h2>
      <p>While seller KYC verification via Sumsub is mandatory from the start, buyer KYC is <strong>conditional</strong> and triggered by specific risk thresholds. This approach balances regulatory compliance with user convenience — most casual buyers will never need to complete KYC, but high-volume or flagged users will be required to verify their identity.</p>

      <h3>When Buyer KYC is Required</h3>
      <ul>
        <li>When your cumulative purchase amount exceeds <strong>$500 USD</strong> in any 30-day period</li>
        <li>When your account is flagged by Forter for unusual or high-risk activity patterns</li>
        <li>When your payment instrument is associated with previous fraud or chargeback activity</li>
        <li>When required by local law or regulation in your jurisdiction</li>
        <li>When you register from a high-risk region as determined by our compliance system</li>
      </ul>

      <h3>Buyer KYC Verification Flow</h3>
      <p>If KYC is triggered, you will be prompted to complete verification through our integrated Sumsub flow. The process is the same industry-standard technology used for sellers:</p>

      <div class="aml-flow-diagram">
        <div class="aml-flow-step">
          <div class="aml-step-num">1</div>
          <div class="aml-step-body">
            <h3>KYC Triggered</h3>
            <p>When a buyer hits a purchase threshold or is flagged by Forter, the platform automatically displays a KYC prompt in the buyer portal. The prompt explains why verification is required, what documents are needed, and how your data will be handled.</p>
            <div class="aml-step-detail">Required: Government ID or passport, selfie or liveness check, consistent country and personal details</div>
          </div>
        </div>
        <div class="aml-flow-connector"></div>
        <div class="aml-flow-step">
          <div class="aml-step-num">2</div>
          <div class="aml-step-body">
            <h3>Sumsub Identity Checks</h3>
            <p>The buyer completes verification directly on the Sumsub platform:</p>
            <ul>
              <li><strong>Document Upload &amp; Authentication:</strong> AI-powered verification checks for authenticity, expiration, tampering, and consistency</li>
              <li><strong>Selfie / Liveness Check:</strong> Real-time biometric verification — not an uploaded photo or deepfake</li>
              <li><strong>Compliance Screening:</strong> AML/KYC database screening against global watchlists, PEP lists, and sanctions databases</li>
            </ul>
            <div class="aml-step-detail">Sumsub's technology provides 99.8% verification accuracy across 220+ countries and territories</div>
          </div>
        </div>
        <div class="aml-flow-connector"></div>
        <div class="aml-flow-step">
          <div class="aml-step-num">3</div>
          <div class="aml-step-body">
            <h3>Verification Result &amp; Access</h3>
            <p>After Sumsub returns the result:</p>
            <ul>
              <li><strong>Passed:</strong> Buyer verification is complete. Purchase limits are lifted and full account access is restored</li>
              <li><strong>Needs Update:</strong> Buyer is asked to resubmit with corrected documents. Purchases above threshold remain paused until verification is complete</li>
              <li><strong>Failed / High Risk:</strong> Account is flagged for compliance review. Further purchases are restricted until manually reviewed by our compliance team</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="article-callout">
        <p><strong>Buyer KYC is protective, not punitive.</strong> Completing KYC through Sumsub protects you as a buyer — it ensures that your identity is confirmed on the platform, prevents unauthorized use of your payment methods, and gives you access to higher purchase limits and full Buyer Protection benefits.</p>
      </div>

      <h2>Transaction Risk Detection via Forter — Buyer Perspective</h2>
      <p>While Sumsub ensures that users are who they claim to be, <strong>Forter</strong> provides continuous protection for every transaction — including the buyer's side. Here's how Forter protects you as a buyer:</p>

      <h3>How Forter Protects Buyers on 60YR</h3>
      <ul>
        <li><strong>Payment Instrument Verification:</strong> Forter checks whether your payment method (credit card, debit card, etc.) has been previously associated with fraud across its global merchant network — protecting you from using compromised instruments</li>
        <li><strong>Seller Risk Screening:</strong> Before your payment is processed, Forter evaluates the seller's risk profile — if the seller poses a fraud risk (e.g., identity mismatch, suspicious selling patterns), the transaction is blocked to prevent you from losing money</li>
        <li><strong>Structuring Detection:</strong> Forter identifies patterns where a buyer is splitting purchases across multiple transactions or accounts to avoid KYC thresholds — a common money laundering tactic</li>
        <li><strong>Account Clustering Detection:</strong> Forter detects when multiple buyer accounts are operated from the same device or location — indicating potential coordinated fraud rings or a single person using multiple identities</li>
        <li><strong>Cross-Market Intelligence:</strong> Forter processes billions of transactions across its global merchant network (including Nordstrom, Priceline, Instacart, and others), enabling detection of fraud patterns that are invisible in a single platform's data</li>
      </ul>

      <h3>Forter Decision Outputs for Buyer Transactions</h3>
      <p>For each purchase, Forter returns a real-time decision to 60YR's platform:</p>
      <div class="aml-decision-table">
        <div class="aml-decision-row aml-decision-approve">
          <div class="aml-decision-label">Approve</div>
          <div class="aml-decision-desc">Transaction is clean — your purchase proceeds normally and your payment is held in escrow until delivery is confirmed</div>
        </div>
        <div class="aml-decision-row aml-decision-review">
          <div class="aml-decision-label">Review</div>
          <div class="aml-decision-desc">Risk signals detected — your transaction is held for manual compliance review. You will be notified if additional information is needed</div>
        </div>
        <div class="aml-decision-row aml-decision-reject">
          <div class="aml-decision-label">Reject</div>
          <div class="aml-decision-desc">High-confidence fraud or AML violation — transaction is blocked. If you believe this is an error, contact <a href="mailto:compliance@60yr.com">compliance@60yr.com</a></div>
        </div>
      </div>

      <div class="article-callout">
        <p><strong>Why Forter?</strong> Forter is the leading real-time fraud prevention platform, trusted by major global companies. Forter processes over $500B in annual transaction volume and provides <strong>instant, fully automated decisions</strong>. This means suspicious transactions on 60YR are not just flagged — they are <em>actioned</em> immediately, protecting buyers from financial loss before it occurs.</p>
      </div>

      <h2>Multi-Layer AML Enforcement Model</h2>
      <p>60YR's AML enforcement operates on three distinct layers, each reinforced by third-party technology — protecting both buyers and sellers:</p>
      <ul>
        <li><strong>Pre-Entry Layer (Sumsub):</strong> All sellers must complete Sumsub identity verification before listing. Buyers exceeding thresholds or flagged for risk must also verify. Unverified users cannot exceed purchase limits or receive payouts.</li>
        <li><strong>Transaction Layer (Forter):</strong> Every financial transaction — purchases, payouts, refunds — is analyzed by Forter's decision engine in real time. Suspicious transactions are automatically held or rejected before funds move, protecting both parties.</li>
        <li><strong>Post-Event Layer (Manual Review):</strong> Our compliance team conducts periodic audits, investigates flagged patterns, and reviews accounts with cumulative activity exceeding regulatory thresholds. All decisions and evidence are retained for a minimum of 5 years for regulatory audit purposes.</li>
      </ul>

      <h2>Prohibited Activities (AML-Related)</h2>
      <ul>
        <li>Using stolen or unauthorized payment methods</li>
        <li>Conducting transactions on behalf of third parties without disclosure</li>
        <li>Splitting purchases to avoid verification thresholds ("structuring")</li>
        <li>Using multiple accounts to circumvent AML controls</li>
        <li>Purchasing accounts with the intent to resell for profit laundering</li>
        <li>Using payment anonymization tools in connection with platform payments</li>
        <li>Maintaining inconsistent identity information across your account, KYC documents, and payment details</li>
      </ul>

      <h2>Consequences of AML Violations</h2>
      <p>Users found to be engaged in money laundering or related activities will face:</p>
      <ul>
        <li>Immediate account suspension and fund freeze</li>
        <li>Mandatory AML investigation (up to 90 days)</li>
        <li>Reporting to relevant financial intelligence units (FIU) and law enforcement authorities as required by law</li>
        <li>Permanent ban from the 60YR platform</li>
        <li>Potential civil and criminal liability under applicable laws</li>
        <li>Reversal of all transactions associated with the flagged activity</li>
      </ul>

      <h2>Reporting Suspicious Activity</h2>
      <p>If you suspect another user is engaged in money laundering or financial fraud — whether a seller offering suspiciously cheap accounts, or a buyer attempting to use your seller account for laundering — please report them via our platform reporting tool or email <a href="mailto:compliance@60yr.com">compliance@60yr.com</a>. All reports are treated with strict confidentiality. Buyers who report suspicious activity in good faith are protected from liability.</p>

      <div class="article-callout">
        <p><strong>Safe Harbor:</strong> Users who cooperate fully with AML investigations and report suspicious activity voluntarily will receive good-faith protection under 60YR's compliance program.</p>
      </div>

      <div class="article-callout">
        <p><strong>For Sellers:</strong> Sellers have additional AML obligations, including mandatory Sumsub identity verification before any payout access, and enhanced due diligence for high-volume accounts. See our <a href="article.html?id=saml1">Seller AML Policy</a> for complete details.</p>
      </div>

      <div class="article-callout">
        <p><strong>Regulatory Contact:</strong> 60YR's compliance program is overseen by SEAWORLD TECHNOLOGY LIMITED. For regulatory inquiries, contact <a href="mailto:compliance@60yr.com">compliance@60yr.com</a>. Transaction records and KYC data are retained for a minimum of 5 years in compliance with FATF and applicable jurisdiction requirements.</p>
      </div>
    `
  },

  /* =====================================================================
     BUYER — PLATFORM / POLICY
  ===================================================================== */

  p1: {
    title: 'Buyer Protection Policy',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['b5','b6','baml1'],
    content: `
      <p>60YR's Buyer Protection is designed to ensure every purchase is safe, secure, and as described. Here's exactly what is covered.</p>

      <h2>What Buyer Protection Covers</h2>
      <ul>
        <li><strong>Non-delivery:</strong> If the seller fails to deliver within 24 hours, you receive a full refund</li>
        <li><strong>Item not as described:</strong> If the account significantly differs from the listing, you're entitled to a refund</li>
        <li><strong>Invalid credentials:</strong> If the login details provided don't work, you're covered</li>
        <li><strong>Account recovery by original owner:</strong> If the seller reclaims the account within 30 days, you receive a full refund</li>
        <li><strong>Banned accounts:</strong> If the account was banned before delivery and not disclosed, you're covered</li>
      </ul>

      <h2>How Escrow Works</h2>
      <p>All payments are held in escrow by 60YR. The seller does not receive any funds until:</p>
      <ol>
        <li>Credentials have been delivered</li>
        <li>You have had 48 hours to verify and confirm</li>
        <li>You click "Confirm Receipt"</li>
      </ol>

      <h2>Limitations</h2>
      <ul>
        <li>Protection only applies to transactions conducted entirely on the 60YR platform</li>
        <li>Off-platform deals are not covered under any circumstances</li>
        <li>Claims must be submitted within the 48-hour window after delivery</li>
      </ul>
    `
  },

  p2: {
    title: 'Supported Games &amp; Account Types',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['p3','sl2','b1'],
    content: `
      <p>60YR supports a wide range of popular online games. Here's an overview of which games and account types are available on the platform.</p>

      <h2>Supported Game Categories</h2>
      <ul>
        <li><strong>Battle Royale:</strong> PUBG Mobile, PUBG PC, Fortnite, Free Fire</li>
        <li><strong>MOBA:</strong> League of Legends, Dota 2, Honor of Kings, Mobile Legends</li>
        <li><strong>FPS/TPS:</strong> Valorant, CS2, Overwatch 2, Rainbow Six Siege</li>
        <li><strong>RPG / Action:</strong> Genshin Impact, Honkai: Star Rail, Wuthering Waves, Zenless Zone Zero</li>
        <li><strong>MMORPG:</strong> Final Fantasy XIV, World of Warcraft</li>
        <li><strong>Sports:</strong> FIFA/EA FC, NBA 2K series</li>
        <li><strong>Platform Accounts:</strong> Steam, Epic Games, PlayStation Network, Xbox</li>
      </ul>

      <h2>Tradable Account Types</h2>
      <ul>
        <li>Full game accounts with high rank/level</li>
        <li>Accounts with rare skins, characters, or collectibles</li>
        <li>Starter accounts</li>
        <li>Accounts on specific servers/regions</li>
      </ul>

      <h2>Account Types NOT Supported</h2>
      <ul>
        <li>Accounts involving real-money trading prohibited by the game's Terms of Service where enforcement risk is extreme</li>
        <li>Accounts with active, permanent bans</li>
        <li>Accounts obtained through hacking, exploits, or unauthorized methods</li>
        <li>Any accounts listed under our Prohibited Items Policy</li>
      </ul>
      <p>See the full <a href="article.html?id=sl2">Prohibited Listing Types</a> policy for details.</p>
    `
  },

  p3: {
    title: 'Community Rules &amp; Fair Trading Guidelines',
    cat: 'buyer',
    catLabel: 'Buyer Help',
    catHref: 'buyer.html',
    related: ['p1','baml1','sr1'],
    content: `
      <p>60YR is a community-driven marketplace. These rules apply to all users and are designed to maintain a fair, safe, and enjoyable environment.</p>

      <h2>General Conduct</h2>
      <ul>
        <li>Treat all users with respect. Harassment, threats, and abusive language are not tolerated.</li>
        <li>Do not attempt to deceive buyers, sellers, or the platform in any way.</li>
        <li>Report suspicious activity — you help protect the entire community.</li>
      </ul>

      <h2>Trading Rules</h2>
      <ul>
        <li>All trades must be conducted through the 60YR platform.</li>
        <li>Off-platform deals are strictly prohibited and are not covered by any protection.</li>
        <li>Accounts must be as described. Any deliberate misrepresentation will result in sanctions.</li>
        <li>Do not sell the same account to multiple buyers.</li>
      </ul>

      <h2>Account Rules</h2>
      <ul>
        <li>One account per user. Multi-accounting to evade bans or gain advantage is prohibited.</li>
        <li>Do not share your 60YR login credentials with others.</li>
        <li>Purchasing on behalf of a banned user is not permitted.</li>
      </ul>

      <h2>Sanctions</h2>
      <p>Violations may result in warnings, listing removal, account suspension, or permanent bans depending on severity. Repeat offenders will be permanently removed.</p>
    `
  },

  /* =====================================================================
     ACCOUNT ARTICLES
  ===================================================================== */

  a1: {
    title: 'How to Enable Two-Factor Authentication',
    cat: 'buyer',
    catLabel: 'Account &amp; Safety',
    catHref: 'buyer.html#account',
    related: ['a2','a3','a4'],
    content: `
      <p>Two-factor authentication (2FA) adds an extra layer of security to your 60YR account. We strongly recommend enabling it for all accounts.</p>

      <h2>What is 2FA?</h2>
      <p>2FA requires you to enter a one-time code (in addition to your password) every time you log in from a new device. Even if someone knows your password, they cannot access your account without this code.</p>

      <h2>How to Enable 2FA</h2>
      <ol>
        <li>Download an authenticator app (Google Authenticator, Authy, or Microsoft Authenticator)</li>
        <li>Go to <strong>Account Settings → Security → Two-Factor Authentication</strong></li>
        <li>Click <strong>"Enable 2FA"</strong></li>
        <li>Scan the QR code with your authenticator app</li>
        <li>Enter the 6-digit code from the app to confirm</li>
        <li>Save your <strong>backup codes</strong> in a safe place offline!</li>
      </ol>
      <div class="article-callout">
        <p><strong>Important:</strong> Store your backup codes somewhere safe (offline preferred). If you lose access to your authenticator app, backup codes are the only way to recover your account.</p>
      </div>

      <h2>SMS Authentication (Alternative)</h2>
      <p>If you prefer, you can also enable SMS-based 2FA. However, authenticator apps are more secure and recommended over SMS due to SIM-swap attack risks.</p>

      <h2>If You're Locked Out</h2>
      <p>If you lose access to your 2FA device, use one of your saved backup codes to log in. If you've lost both the authenticator and backup codes, contact our support team with your ID verification for account recovery.</p>
    `
  },

  a2: {
    title: 'Forgot Password — Account Recovery',
    cat: 'buyer',
    catLabel: 'Account &amp; Safety',
    catHref: 'buyer.html#account',
    related: ['a1','a3','a4'],
    content: `
      <p>If you've forgotten your password or can't access your 60YR account, follow these steps to recover access.</p>

      <h2>Reset via Email</h2>
      <ol>
        <li>Go to the 60YR login page and click <strong>"Forgot Password?"</strong></li>
        <li>Enter the email address associated with your account</li>
        <li>Check your inbox for a password reset email (check spam if not found)</li>
        <li>Click the reset link and enter your new password</li>
        <li>The reset link expires in 30 minutes</li>
      </ol>

      <h2>No Access to Your Email?</h2>
      <p>If you no longer have access to your registered email:</p>
      <ol>
        <li>Contact support at <a href="mailto:support@60yr.com">support@60yr.com</a></li>
        <li>Provide your username, last known email, and account details</li>
        <li>Submit a photo ID (passport or national ID) for identity verification</li>
        <li>Our team will verify your identity and assist with recovery</li>
      </ol>

      <h2>Password Tips</h2>
      <ul>
        <li>Use at least 12 characters including numbers and symbols</li>
        <li>Never reuse passwords across different services</li>
        <li>Use a password manager for security and convenience</li>
        <li>Never share your password with anyone</li>
      </ul>
    `
  },

  a3: {
    title: 'Suspicious Activity on My Account',
    cat: 'buyer',
    catLabel: 'Account &amp; Safety',
    catHref: 'buyer.html#account',
    related: ['a1','a2','b8'],
    content: `
      <p>If you notice unusual activity on your 60YR account, act quickly. Here's what to do.</p>

      <h2>Signs of Compromised Account</h2>
      <ul>
        <li>Unexpected orders you didn't place</li>
        <li>Account balance changed without your action</li>
        <li>Login from an unknown location or device</li>
        <li>Password or email changed without your knowledge</li>
        <li>New listings created that you didn't add</li>
      </ul>

      <h2>Immediate Steps</h2>
      <ol>
        <li><strong>Change your password immediately</strong></li>
        <li><strong>Enable 2FA</strong> if not already active</li>
        <li>Go to <strong>Account Settings → Active Sessions</strong> and sign out of all unknown devices</li>
        <li>Contact <a href="mailto:support@60yr.com">support@60yr.com</a> and report the suspicious activity</li>
        <li>Check if your email account is also compromised and secure it</li>
      </ol>

      <h2>What 60YR Will Do</h2>
      <p>Once you report suspicious activity, our security team will:</p>
      <ul>
        <li>Investigate the unauthorized access</li>
        <li>Freeze any suspicious transactions</li>
        <li>Assist in recovering lost funds where possible</li>
        <li>Provide a security incident report</li>
      </ul>
    `
  },

  a4: {
    title: 'How to Delete My 60YR Account',
    cat: 'buyer',
    catLabel: 'Account &amp; Safety',
    catHref: 'buyer.html#account',
    related: ['a1','a2','baml1'],
    content: `
      <p>We're sorry to see you go. Here's how to permanently delete your 60YR account.</p>

      <h2>Before You Delete</h2>
      <ul>
        <li>Ensure all pending orders are completed or cancelled</li>
        <li>Withdraw any remaining 60YR account balance</li>
        <li>Download any transaction history you may need for records</li>
        <li>Resolve any open disputes</li>
      </ul>
      <div class="article-callout warn">
        <p><strong>Irreversible:</strong> Account deletion is permanent. All your data, order history, and reviews will be erased and cannot be recovered.</p>
      </div>

      <h2>How to Delete Your Account</h2>
      <ol>
        <li>Go to <strong>Account Settings → Privacy → Delete Account</strong></li>
        <li>Enter your password to confirm identity</li>
        <li>Select a reason for leaving (optional but helps us improve)</li>
        <li>Click <strong>"Delete My Account"</strong></li>
        <li>Check your email for a confirmation link — click it within 24 hours to complete deletion</li>
      </ol>

      <h2>Data Retention</h2>
      <p>In compliance with financial regulations and AML requirements, certain transaction records may be retained for up to 5 years after account deletion, as required by law. Personal information not required for legal compliance will be permanently erased.</p>
    `
  },

  /* =====================================================================
     SELLER ARTICLES
  ===================================================================== */

  s1: {
    title: 'How to Start Selling on 60YR — Complete Guide',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s2','s3','s6'],
    content: `
      <p>Ready to sell game accounts on 60YR? This comprehensive guide walks you through everything you need to know to get started and succeed as a seller.</p>

      <h2>How Selling Works on 60YR</h2>
      <p>60YR operates a <strong>platform-curated marketplace model</strong>. Unlike freeform marketplaces, sellers cannot independently add any listing they choose. Instead, all listings must go through a review and approval process before they are visible to buyers. This ensures quality, compliance, and buyer trust.</p>

      <div class="article-callout">
        <p><strong>Key Principle:</strong> Sellers apply to list specific accounts. 60YR reviews each application and approves listings that meet platform standards. Approved listings are then displayed for buyers to purchase.</p>
      </div>

      <h2>The Seller Application &amp; Listing Flow</h2>
      <ol>
        <li><strong>Register &amp; Verify:</strong> Create a 60YR seller account and complete identity verification (KYC)</li>
        <li><strong>Submit Listing Application:</strong> Fill out the listing application form with full account details, screenshots, and pricing</li>
        <li><strong>Platform Review:</strong> Our compliance and quality team reviews your application (typically within 24–48 hours)</li>
        <li><strong>Approval or Rejection:</strong> You'll receive a notification with the decision. Rejections include a reason so you can correct and resubmit</li>
        <li><strong>Listing Goes Live:</strong> Approved listings appear on the marketplace and are visible to all buyers</li>
        <li><strong>Receive &amp; Fulfill Orders:</strong> When a buyer purchases, deliver credentials within 24 hours through the platform</li>
        <li><strong>Get Paid:</strong> Funds are released after the buyer confirms receipt and the 3-day security period passes</li>
      </ol>

      <h2>Why Does 60YR Review All Listings?</h2>
      <ul>
        <li>To prevent fraudulent or misrepresented accounts from reaching buyers</li>
        <li>To ensure all listed accounts comply with legal and platform requirements</li>
        <li>To maintain high marketplace quality and buyer confidence</li>
        <li>To comply with AML and fraud prevention obligations</li>
      </ul>

      <h2>Seller Prerequisites</h2>
      <ul>
        <li>A verified 60YR account (email verified)</li>
        <li>Completed seller KYC identity verification</li>
        <li>A valid payout method set up (bank or PayPal)</li>
        <li>Game accounts that comply with the <a href="article.html?id=sl2">Permitted Listing Policy</a></li>
      </ul>
    `
  },

  s2: {
    title: 'How to Submit a Listing Application',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s1','sl1','sl2'],
    content: `
      <p>On 60YR, all listings go through a review process before going live. Here's how to submit a listing application correctly to maximize your approval chances.</p>

      <h2>Why Applications Are Required</h2>
      <p>60YR does not allow sellers to freely add any listing to the marketplace. Every account submitted must pass our quality and compliance review. This protects buyers from fraudulent listings and maintains the platform's reputation.</p>

      <h2>How to Submit a Listing Application</h2>
      <ol>
        <li>Go to <strong>Seller Dashboard → Submit Listing</strong></li>
        <li>Select the game and server/region</li>
        <li>Fill in all required account details (rank, level, characters, in-game assets, etc.)</li>
        <li>Upload clear screenshots of the account (in-game, account summary, inventory)</li>
        <li>Set your asking price</li>
        <li>Write a detailed, honest description</li>
        <li>Submit the application and await review</li>
      </ol>

      <h2>Review Timeline</h2>
      <p>Most listing applications are reviewed within <strong>24–48 hours</strong>. During peak periods, review may take up to 72 hours.</p>

      <h2>Common Rejection Reasons</h2>
      <ul>
        <li>Insufficient or blurry screenshots</li>
        <li>Account description doesn't match provided screenshots</li>
        <li>Account type is on the Prohibited Listings list</li>
        <li>Price is inconsistent with market rates (too high or suspected price manipulation)</li>
        <li>Seller has not completed KYC verification</li>
      </ul>

      <h2>After Approval</h2>
      <p>Once approved, your listing will go live on the marketplace. You'll be notified by email and in-app. You can view your active listings in <strong>Seller Dashboard → My Listings</strong>.</p>

      <div class="article-callout">
        <p><strong>Note:</strong> Approval of a listing application does not guarantee a sale. It means the listing has met our quality and compliance standards and is eligible for display on the platform.</p>
      </div>
    `
  },

  s3: {
    title: 'Seller Verification Requirements &amp; FAQ',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s1','sv1','skyc1'],
    content: `
      <p>All sellers on 60YR must complete identity verification before their listings can go live. Here's what's required and why.</p>

      <h2>Why Verification is Required</h2>
      <p>Seller verification protects buyers and the platform. Verified sellers have provided proof of identity, which deters fraudulent sellers, enables dispute resolution, and ensures compliance with financial regulations (AML/KYC).</p>

      <h2>Basic Seller Verification (Required for All)</h2>
      <ul>
        <li>Valid email address (confirmed)</li>
        <li>Phone number (SMS verified)</li>
        <li>Government-issued photo ID (passport, national ID, or driver's license)</li>
        <li>Selfie photo matching the ID</li>
      </ul>

      <h2>Enhanced Verification (For Higher Limits)</h2>
      <ul>
        <li>Proof of address (utility bill, bank statement — not older than 3 months)</li>
        <li>Business registration documents (for business sellers)</li>
        <li>Additional AML questionnaire for sellers processing high volumes</li>
      </ul>

      <h2>Verification Tiers and What They Unlock</h2>
      <div style="overflow-x:auto;margin:16px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="border-bottom:1px solid var(--border);">
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Tier</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Requirements</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Monthly Withdrawal Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Standard</td>
              <td style="padding:10px 12px;color:var(--text-2);">Email + Phone + ID</td>
              <td style="padding:10px 12px;color:var(--text-2);">Up to $2,000</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Verified</td>
              <td style="padding:10px 12px;color:var(--text-2);">Standard + Proof of Address</td>
              <td style="padding:10px 12px;color:var(--text-2);">Up to $10,000</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;">Business</td>
              <td style="padding:10px 12px;color:var(--text-2);">Verified + Business Registration</td>
              <td style="padding:10px 12px;color:var(--text-2);">Unlimited (subject to AML review)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Q: How long does verification take?</strong><br>A: Standard verification typically takes 1–2 business days. Enhanced verification may take up to 5 days.</p>
      <p><strong>Q: What if my ID is in a non-English language?</strong><br>A: Our system accepts IDs in any language. You do not need to provide a translation for standard documents.</p>
      <p><strong>Q: Is my ID data shared with buyers?</strong><br>A: No. Your identity documents are never shared with buyers or other sellers. They are handled by our secure KYC partner and used only for compliance purposes.</p>
    `
  },

  s4: {
    title: 'How to Respond to a Buyer Dispute',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['sd1','s5','sr1'],
    content: `
      <p>When a buyer opens a dispute against your order, it's important to respond quickly and professionally. Here's how to handle it.</p>

      <h2>You'll Receive a Notification</h2>
      <p>When a dispute is opened, you'll receive an email and in-app notification. You have <strong>24 hours</strong> to respond — failure to respond may result in an automatic ruling against you.</p>

      <h2>How to Respond to a Dispute</h2>
      <ol>
        <li>Go to <strong>Seller Dashboard → Orders → Disputed Orders</strong></li>
        <li>Click on the relevant order</li>
        <li>Read the buyer's complaint and review the evidence they've submitted</li>
        <li>Write a clear, factual response addressing each point raised</li>
        <li>Upload your own evidence (screenshots proving delivery, account content, communication logs)</li>
        <li>Submit your response</li>
      </ol>

      <h2>What Evidence to Provide</h2>
      <ul>
        <li>Screenshot of the account at the time of listing creation (with timestamp if possible)</li>
        <li>Screenshot of credentials you delivered</li>
        <li>Any in-platform chat messages with the buyer</li>
        <li>Screen recording of the account if you have one</li>
      </ul>

      <h2>After Submission</h2>
      <p>The 60YR mediation team will review all evidence and reach a decision within 3–5 business days. You will be notified of the outcome. If the ruling goes against you, you can file an appeal within 7 days with additional evidence.</p>

      <div class="article-callout warn">
        <p><strong>Important:</strong> Do not contact the buyer through external channels during a dispute. All communication must go through the 60YR platform dispute system.</p>
      </div>
    `
  },

  s5: {
    title: 'Order Management Guide for Sellers',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s2','s4','so1'],
    content: `
      <p>Efficient order management is key to maintaining high seller ratings and growing your business on 60YR.</p>

      <h2>Viewing Your Orders</h2>
      <p>Go to <strong>Seller Dashboard → Orders</strong> to see all your current and historical orders. Filter by status: Pending, Active, Delivered, Disputed, Completed, or Cancelled.</p>

      <h2>Order Fulfillment Steps</h2>
      <ol>
        <li><strong>Receive Notification:</strong> When an order comes in, you'll be notified immediately via email and app</li>
        <li><strong>Review Order Details:</strong> Confirm the buyer purchased the correct listing</li>
        <li><strong>Prepare Credentials:</strong> Gather the account login details and any supplementary information</li>
        <li><strong>Deliver via Platform:</strong> Submit credentials through the 60YR secure delivery system — never send via external channels</li>
        <li><strong>Monitor Status:</strong> Track whether the buyer has logged in and verified the account</li>
      </ol>

      <h2>24-Hour Delivery Requirement</h2>
      <p>You must deliver account credentials within <strong>24 hours</strong> of order confirmation. Late delivery will:</p>
      <ul>
        <li>Trigger an automatic warning on your seller profile</li>
        <li>Allow the buyer to cancel and receive a full refund</li>
        <li>Negatively impact your seller rating</li>
      </ul>

      <h2>Cancelling an Order</h2>
      <p>You may request to cancel an order if the account has been incorrectly priced, the listing is outdated, or you're unable to fulfill the order. Excessive cancellations will negatively affect your seller metrics and may result in account suspension.</p>
    `
  },

  s6: {
    title: '60YR Fee Schedule &amp; Commission Rates',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s7','s8','s9'],
    content: `
      <p>Understanding 60YR's fee structure helps you price your listings correctly and maximize your earnings.</p>

      <h2>Transaction Commission</h2>
      <p>60YR charges a platform commission on each successful sale. The rate depends on your seller tier:</p>

      <div style="overflow-x:auto;margin:16px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="border-bottom:1px solid var(--border);">
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Seller Tier</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Commission Rate</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Requirements</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">New Seller</td>
              <td style="padding:10px 12px;color:var(--warn);">10%</td>
              <td style="padding:10px 12px;color:var(--text-2);">Default for all new accounts</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Trusted Seller</td>
              <td style="padding:10px 12px;color:var(--seller);">8%</td>
              <td style="padding:10px 12px;color:var(--text-2);">10+ completed sales, 4.5★+ rating</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Verified Seller</td>
              <td style="padding:10px 12px;color:var(--success);">6%</td>
              <td style="padding:10px 12px;color:var(--text-2);">KYC verified + 50+ sales, 4.7★+ rating</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;">Elite Seller</td>
              <td style="padding:10px 12px;color:var(--accent-lt);">5%</td>
              <td style="padding:10px 12px;color:var(--text-2);">Application + 500+ sales, 4.9★+ rating</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Payment Processing Fee</h2>
      <p>A payment processing fee is charged to the buyer at checkout. This is <strong>not deducted from your earnings</strong> — it is paid separately by the buyer.</p>

      <h2>Withdrawal Fees</h2>
      <ul>
        <li><strong>PayPal:</strong> Free (up to $500/month), then 1%</li>
        <li><strong>Bank Transfer:</strong> $1.50 flat fee per transfer</li>
      </ul>

      <h2>No Listing Fees</h2>
      <p>Submitting a listing application on 60YR is <strong>completely free</strong>. You only pay a commission when a sale is successfully completed and confirmed by the buyer.</p>

      <div class="article-callout">
        <p><strong>Example:</strong> You sell an account for $100 as a Verified Seller (6% commission) → You receive $94 before withdrawal fees.</p>
      </div>
    `
  },

  s7: {
    title: 'How to Withdraw Your Earnings',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s6','s8','s9'],
    content: `
      <p>Once your earnings are released to your 60YR account, you can withdraw them to your preferred payment method.</p>

      <h2>How to Initiate a Withdrawal</h2>
      <ol>
        <li>Go to <strong>Seller Dashboard → Wallet → Withdraw</strong></li>
        <li>Select your withdrawal method (PayPal or bank transfer)</li>
        <li>Enter the amount to withdraw (must meet minimum threshold)</li>
        <li>Confirm the withdrawal details</li>
        <li>Submit</li>
      </ol>

      <h2>Minimum Withdrawal Amounts</h2>
      <ul>
        <li>PayPal: $10 minimum</li>
        <li>Bank Transfer: $20 minimum</li>
      </ul>

      <h2>When Are Funds Available to Withdraw?</h2>
      <p>Earnings from completed orders are subject to a <strong>3-day security hold</strong> after the buyer confirms receipt. After the hold, funds appear as "Available" in your account. This hold exists to protect against late disputes.</p>

      <h2>Withdrawal Limits</h2>
      <p>Withdrawal limits depend on your seller verification tier. See the <a href="article.html?id=s3">Seller Verification</a> article for tier limits. Sellers processing large volumes may be subject to additional AML documentation requirements.</p>

      <div class="article-callout warn">
        <p><strong>Tax Reminder:</strong> Earnings from sales may be taxable income in your jurisdiction. 60YR provides annual earning summaries for your records. Consult a local tax advisor.</p>
      </div>
    `
  },

  s8: {
    title: 'Payout Processing Time &amp; Schedule',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s7','s6','s9'],
    content: `
      <p>Here's a breakdown of when you can expect to receive your earnings after a sale.</p>

      <h2>Payout Timeline</h2>
      <div style="overflow-x:auto;margin:16px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="border-bottom:1px solid var(--border);">
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Stage</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Timeframe</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Order completed &amp; confirmed by buyer</td>
              <td style="padding:10px 12px;color:var(--text-2);">Day 0</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Security hold period</td>
              <td style="padding:10px 12px;color:var(--text-2);">3 days</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;">Funds available in 60YR account</td>
              <td style="padding:10px 12px;color:var(--text-2);">Day 3</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">PayPal transfer</td>
              <td style="padding:10px 12px;color:var(--text-2);">1–3 business days</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;">Bank transfer</td>
              <td style="padding:10px 12px;color:var(--text-2);">3–7 business days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why is There a 3-Day Hold?</h2>
      <p>The 3-day security hold allows time for any final disputes or account reclaim issues to emerge. This protects both buyers and the integrity of the marketplace. Elite Sellers with a long track record may qualify for a reduced hold period.</p>

      <h2>Payout Delays</h2>
      <p>Payouts may be delayed in cases of:</p>
      <ul>
        <li>Ongoing dispute on the order</li>
        <li>AML review triggered by high-value transactions</li>
        <li>Incomplete seller verification</li>
        <li>Bank or payment provider processing delays</li>
      </ul>
    `
  },

  s9: {
    title: 'Supported Withdrawal Methods',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s7','s8','s6'],
    content: `
      <p>60YR supports multiple withdrawal methods to ensure sellers can access their earnings conveniently regardless of their location.</p>

      <h2>PayPal</h2>
      <ul>
        <li>Minimum: $10</li>
        <li>Free for the first $500/month; 1% fee above that</li>
        <li>Processing time: 1–3 business days</li>
        <li>Must link a verified PayPal account to your seller profile</li>
      </ul>

      <h2>Bank Transfer (SWIFT/SEPA/Local)</h2>
      <ul>
        <li>Minimum: $20</li>
        <li>Flat fee: $1.50 per transfer</li>
        <li>Processing time: 3–7 business days</li>
        <li>Requires completed banking details including account number, routing/SWIFT, and bank name</li>
      </ul>

      <h2>Adding a Withdrawal Method</h2>
      <ol>
        <li>Go to <strong>Seller Dashboard → Wallet → Payment Methods</strong></li>
        <li>Click <strong>"Add Method"</strong></li>
        <li>Select the type and enter your details</li>
        <li>Verify ownership (PayPal: micropayment verification; bank: micro-deposit)</li>
      </ol>
    `
  },

  s10: {
    title: 'How to Become a Verified or Featured Seller',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s1','s3','s6'],
    content: `
      <p>Advancing to higher seller tiers unlocks lower commission rates, higher withdrawal limits, and greater visibility on the platform.</p>

      <h2>Seller Tiers Overview</h2>
      <ul>
        <li><strong>New Seller:</strong> Default tier for all new accounts. 10% commission, $2,000 monthly withdrawal limit.</li>
        <li><strong>Trusted Seller:</strong> Auto-upgraded after 10+ sales with 4.5★+ rating. 8% commission.</li>
        <li><strong>Verified Seller:</strong> Requires KYC completion + 50+ sales + 4.7★ rating. 6% commission, gold badge, search boost.</li>
        <li><strong>Elite Seller:</strong> Application-based. Requires 500+ sales, 4.9★ rating, zero dispute rate under 2%. 5% commission, featured placement.</li>
      </ul>

      <h2>How to Apply for Verified Seller</h2>
      <ol>
        <li>Complete KYC identity verification</li>
        <li>Maintain 50+ completed sales with a 4.7★+ average rating</li>
        <li>Go to <strong>Seller Dashboard → Upgrade → Apply for Verified Seller</strong></li>
        <li>Our team reviews your application within 5 business days</li>
      </ol>

      <h2>Elite Seller Application</h2>
      <p>Elite Seller status is invitation-only or by application. Requirements include:</p>
      <ul>
        <li>500+ completed sales</li>
        <li>4.9★+ average rating</li>
        <li>Dispute rate below 2%</li>
        <li>No policy violations in the last 12 months</li>
        <li>Active listings covering multiple popular games</li>
      </ul>

      <h2>Featured Seller Benefits</h2>
      <ul>
        <li>Priority placement in search results</li>
        <li>Featured on the homepage and category pages</li>
        <li>Dedicated account manager</li>
        <li>Access to beta features</li>
        <li>Negotiable commission rates for very high-volume sellers</li>
      </ul>
    `
  },

  s11: {
    title: 'Account Suspension &amp; Reinstatement Process',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['sr2','sd1','s4'],
    content: `
      <p>Account suspension can be stressful. Here's what causes it and how to appeal for reinstatement.</p>

      <h2>Common Reasons for Suspension</h2>
      <ul>
        <li>Delivering an account that was reclaimed by the original owner</li>
        <li>Selling the same account to multiple buyers</li>
        <li>Multiple unresolved disputes or high dispute rate</li>
        <li>Listing prohibited or misrepresented accounts</li>
        <li>AML/fraud policy violations</li>
        <li>Attempting off-platform deals</li>
        <li>Failing to deliver on time repeatedly</li>
      </ul>

      <h2>Types of Suspension</h2>
      <ul>
        <li><strong>Temporary Suspension:</strong> Usually 7–30 days. Your listings are paused but your account is not deleted.</li>
        <li><strong>Indefinite Suspension:</strong> Pending investigation. Lifted once the investigation is resolved.</li>
        <li><strong>Permanent Ban:</strong> For serious or repeat violations. Not eligible for appeal.</li>
      </ul>

      <h2>How to Appeal a Suspension</h2>
      <ol>
        <li>Email <a href="mailto:appeals@60yr.com">appeals@60yr.com</a> with subject: "Seller Account Appeal — [Your Username]"</li>
        <li>Explain the situation clearly and factually</li>
        <li>Provide any evidence supporting your case</li>
        <li>Wait for a response — appeals are typically reviewed within 7 business days</li>
      </ol>

      <div class="article-callout warn">
        <p><strong>Note:</strong> Creating a new account to bypass a suspension is a permanent bannable offense and may result in legal action.</p>
      </div>
    `
  },

  s12: {
    title: 'How to Edit or Delete a Listing',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s2','sl1','s5'],
    content: `
      <p>You can manage your active listings at any time from your Seller Dashboard. Here's how to edit or remove them.</p>

      <h2>Editing a Listing</h2>
      <p>Certain fields can be edited after a listing is approved. Note that significant changes (e.g., changing the account description, removing major items, or changing the game) will trigger a re-review.</p>
      <ol>
        <li>Go to <strong>Seller Dashboard → My Listings</strong></li>
        <li>Find the listing you want to edit and click <strong>"Edit"</strong></li>
        <li>Make your changes</li>
        <li>Save changes — minor edits (price, small description updates) take effect immediately; major changes go back to review</li>
      </ol>

      <h2>Fields You Can Edit Freely</h2>
      <ul>
        <li>Price (within ±20% of approved price; larger changes need re-review)</li>
        <li>Minor description corrections (typo fixes, clarifications)</li>
        <li>Adding additional screenshots</li>
      </ul>

      <h2>Fields That Trigger Re-Review</h2>
      <ul>
        <li>Game title or server/region</li>
        <li>Rank, level, or major account content</li>
        <li>Price changes greater than 20%</li>
        <li>Substantial rewrite of description</li>
      </ul>

      <h2>Deleting a Listing</h2>
      <p>To remove a listing, click <strong>"Delete"</strong> on the listing. Note: you cannot delete a listing if there is an active pending order for it. Complete or cancel the order first.</p>
    `
  },

  /* ===== SELLER LISTING POLICY ===== */

  sl1: {
    title: 'Tips for Writing a High-Converting Listing Description',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s2','sl2','s10'],
    content: `
      <p>A compelling listing description is the key to converting browsers into buyers. Here are proven tips to maximize your listing's appeal and approval rate.</p>

      <h2>Be Specific and Honest</h2>
      <p>Buyers want to know exactly what they're getting. Vague descriptions lead to disputes. Include:</p>
      <ul>
        <li>Exact rank/tier and season (e.g., "Diamond 2 - Season 15")</li>
        <li>Account level</li>
        <li>All available characters, skins, or heroes with names</li>
        <li>In-game currency balance</li>
        <li>Server and region</li>
        <li>Whether original email is included and rebindable</li>
        <li>Any flags, bans, or past violations (even minor ones)</li>
      </ul>

      <h2>Use Great Screenshots</h2>
      <ul>
        <li>Show the in-game profile summary page</li>
        <li>Screenshot the character/skin/item inventory</li>
        <li>Capture the in-game currency and balance</li>
        <li>Show the account's rank history if possible</li>
        <li>Ensure screenshots are recent and not edited</li>
      </ul>

      <h2>Price Competitively</h2>
      <p>Research what similar accounts are selling for on 60YR. Overpriced accounts sit unsold; underpriced accounts may be flagged for review. Price within 10–15% of market rate for the fastest sale.</p>

      <h2>Respond to Common Questions Preemptively</h2>
      <p>Address likely questions in your description:</p>
      <ul>
        <li>"Is the original email included?" → Yes/No</li>
        <li>"Has this account ever been banned?" → Confirm status</li>
        <li>"How quickly can you deliver?" → State your typical delivery time</li>
      </ul>
    `
  },

  sl2: {
    title: 'Prohibited Listing Types &amp; Items You Cannot Sell on 60YR',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['sr1','s2','baml1'],
    content: `
      <p>To maintain a safe, legal, and trustworthy marketplace, certain types of listings and items are strictly prohibited on 60YR. All listings are reviewed by our compliance team against these standards.</p>

      <h2>Prohibited Account Types</h2>
      <ul>
        <li><strong>Hacked or Compromised Accounts:</strong> Any account obtained through unauthorized access, phishing, or credential theft</li>
        <li><strong>Permanently Banned Accounts:</strong> Accounts that have received an irrevocable permanent ban from the game developer</li>
        <li><strong>Accounts with Active Suspensions:</strong> Accounts currently serving a temporary ban</li>
        <li><strong>Accounts with Fraudulent In-Game Items:</strong> Items obtained through exploits, bugs, or duplication glitches</li>
        <li><strong>Minors' Accounts:</strong> Accounts belonging to users under 18 years of age</li>
      </ul>

      <h2>Prohibited Content Categories</h2>
      <ul>
        <li><strong>Real-Money Trading (RMT) Tokens:</strong> In-game currencies or items obtained via unauthorized RMT bots</li>
        <li><strong>Accounts from Prohibited Games:</strong> Games that explicitly and aggressively ban account trading in their Terms of Service where enforcement is active (e.g., Blizzard games with active detection)</li>
        <li><strong>Subscription Services or Gift Cards:</strong> Platform subscription codes, gift cards, or vouchers — these are not game accounts</li>
        <li><strong>Software, Hacks, or Cheats:</strong> Any software tools, mods, or cheats are not permitted listings</li>
      </ul>

      <h2>Prohibited Behaviors in Listings</h2>
      <ul>
        <li>Misrepresenting account content, rank, or value</li>
        <li>Listing an account you do not own or have authorization to sell</li>
        <li>Including misleading screenshots or manipulated images</li>
        <li>Setting up "bait" listings with intent to conduct off-platform deals</li>
        <li>Listing multiple copies of the same unique account</li>
      </ul>

      <h2>Safety-Restricted Item Categories</h2>
      <p>In alignment with international product safety standards, 60YR also prohibits listings related to:</p>
      <ul>
        <li>Any accounts or virtual items linked to gambling, real-money casino games, or unlicensed lotteries</li>
        <li>Accounts that facilitate access to illegal or age-restricted content</li>
        <li>Accounts promoting hate speech, terrorist organizations, or extremist content</li>
        <li>Any products that violate the laws of the seller's or buyer's jurisdiction</li>
        <li>Items whose sale would constitute intellectual property infringement</li>
      </ul>

      <h2>What Happens if You List a Prohibited Item?</h2>
      <ul>
        <li>Your listing will be rejected during review</li>
        <li>Repeated violations will result in listing privileges being revoked</li>
        <li>Severe violations (fraud, stolen accounts) will result in immediate permanent suspension and potential law enforcement referral</li>
      </ul>

      <div class="article-callout">
        <p><strong>Not Sure if Your Listing is Allowed?</strong> Contact our compliance team at <a href="mailto:compliance@60yr.com">compliance@60yr.com</a> before submitting. We're happy to advise.</p>
      </div>
    `
  },

  /* ===== SELLER ORDERS / DISPUTES ===== */

  so1: {
    title: 'How to Communicate with Buyers via 60YR Chat',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s5','s4','so2'],
    content: `
      <p>All buyer-seller communication on 60YR must take place through our built-in messaging system. This protects both parties and is required for dispute resolution.</p>

      <h2>Pre-Sale Communication</h2>
      <p>Buyers can message sellers before placing an order. Respond to inquiries promptly — sellers with fast response times appear higher in search results. Use pre-sale chat to:</p>
      <ul>
        <li>Clarify account details</li>
        <li>Confirm availability</li>
        <li>Provide additional screenshots</li>
        <li>Answer questions about delivery time</li>
      </ul>

      <h2>Post-Sale Order Chat</h2>
      <p>Once an order is placed, you communicate through the order-specific chat. This is where you:</p>
      <ul>
        <li>Deliver account credentials (use the secure delivery form, not raw chat)</li>
        <li>Provide guidance on rebinding the account</li>
        <li>Answer buyer questions about the account</li>
        <li>Respond to any concerns before a dispute is opened</li>
      </ul>

      <h2>Chat Rules</h2>
      <ul>
        <li>Never share external contact information (WhatsApp, Telegram, email, etc.) in chat</li>
        <li>Do not solicit buyers to complete transactions outside the platform</li>
        <li>Be professional and courteous at all times</li>
        <li>Chat logs are monitored and may be used as evidence in disputes</li>
      </ul>

      <div class="article-callout warn">
        <p><strong>Rule Violation:</strong> Attempting to move transactions off-platform is a serious violation and will result in immediate account suspension.</p>
      </div>
    `
  },

  so2: {
    title: 'What Happens if I Cancel an Order',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s5','sd1','s4'],
    content: `
      <p>Order cancellations impact your seller metrics and buyer trust. Here's what you need to know about cancelling as a seller.</p>

      <h2>When Can You Cancel an Order?</h2>
      <ul>
        <li>The account was sold or transferred before the order was placed (listing not removed in time)</li>
        <li>You made a pricing error on the listing</li>
        <li>The buyer has not paid after the payment window has expired</li>
        <li>Mutual agreement with the buyer</li>
      </ul>

      <h2>How to Request Cancellation</h2>
      <ol>
        <li>Go to the order in your <strong>Seller Dashboard → Orders</strong></li>
        <li>Click <strong>"Request Cancellation"</strong></li>
        <li>Select the reason from the dropdown</li>
        <li>Submit — the buyer will be notified and asked to confirm</li>
      </ol>

      <h2>Cancellation Impact</h2>
      <ul>
        <li>Each seller-initiated cancellation adds a negative mark to your seller profile</li>
        <li>3 or more cancellations in a 30-day period triggers a review</li>
        <li>5 or more may result in temporary suspension of new order intake</li>
      </ul>

      <h2>If a Buyer Cancels</h2>
      <p>Buyers may cancel an undelivered order within the 24-hour delivery window if credentials haven't been sent yet. This does not impact your seller metrics unless it was due to your non-delivery.</p>
    `
  },

  sd1: {
    title: 'How to Appeal a Dispute Decision',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s4','s11','sr1'],
    content: `
      <p>If you disagree with the outcome of a dispute, you have the right to appeal. Here's how the appeal process works.</p>

      <h2>Appeal Eligibility</h2>
      <ul>
        <li>You must appeal within <strong>7 days</strong> of the dispute decision</li>
        <li>You must have new or previously unconsidered evidence to submit</li>
        <li>Appeals without new evidence will typically not be reopened</li>
      </ul>

      <h2>How to File an Appeal</h2>
      <ol>
        <li>Go to the disputed order in your dashboard</li>
        <li>Click <strong>"Appeal Decision"</strong> (visible for 7 days after the ruling)</li>
        <li>Write a clear explanation of why you believe the decision was incorrect</li>
        <li>Attach any new evidence (video recordings, additional screenshots, system logs)</li>
        <li>Submit</li>
      </ol>

      <h2>Appeal Review</h2>
      <p>Appeals are reviewed by a senior member of the 60YR Trust &amp; Safety team who was not involved in the original decision. Review takes 5–10 business days.</p>

      <h2>Final Decision</h2>
      <p>The appeal decision is final. If your appeal is upheld, any deducted funds are restored and the dispute record updated. If denied, the original ruling stands.</p>

      <div class="article-callout">
        <p><strong>Note:</strong> Filing multiple frivolous appeals negatively impacts your seller standing. Only appeal if you have a genuine case and new evidence.</p>
      </div>
    `
  },

  /* ===== SELLER VERIFICATION / KYC ===== */

  sv1: {
    title: 'Business Account Setup &amp; KYC Process',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s3','skyc1','s7'],
    content: `
      <p>If you are selling on behalf of a registered business, setting up a business account on 60YR gives you higher withdrawal limits, dedicated support, and a business badge on your profile.</p>

      <h2>Business vs Personal Account</h2>
      <div style="overflow-x:auto;margin:16px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="border-bottom:1px solid var(--border);">
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Feature</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Personal</th>
              <th style="text-align:left;padding:10px 12px;color:var(--text-3);font-weight:600;">Business</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Monthly Withdrawal</td>
              <td style="padding:10px 12px;color:var(--text-2);">Up to $10,000</td>
              <td style="padding:10px 12px;color:var(--text-2);">Unlimited*</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Team Members</td>
              <td style="padding:10px 12px;color:var(--text-2);">1 (owner)</td>
              <td style="padding:10px 12px;color:var(--text-2);">Up to 5 authorized users</td>
            </tr>
            <tr style="border-bottom:1px solid var(--border);">
              <td style="padding:10px 12px;">Business Badge</td>
              <td style="padding:10px 12px;color:var(--text-2);">No</td>
              <td style="padding:10px 12px;color:var(--text-2);">Yes</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;">Dedicated Support</td>
              <td style="padding:10px 12px;color:var(--text-2);">Standard queue</td>
              <td style="padding:10px 12px;color:var(--text-2);">Priority support channel</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>*Subject to AML compliance review for transactions above $50,000/month.</p>

      <h2>Business KYC Requirements</h2>
      <ul>
        <li>Certificate of Incorporation or Business Registration</li>
        <li>Proof of business address (utility bill or official correspondence, within 3 months)</li>
        <li>Identity documents for all directors/shareholders owning 25%+ of the business</li>
        <li>Completed Business AML Declaration form</li>
      </ul>

      <h2>How to Apply</h2>
      <ol>
        <li>Go to <strong>Account Settings → Account Type → Upgrade to Business</strong></li>
        <li>Complete the business information form</li>
        <li>Upload all required documents</li>
        <li>Submit — review takes 3–7 business days</li>
      </ol>
    `
  },

  skyc1: {
    title: 'KYC Policy for Sellers — What You Need to Know',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['s3','sv1','saml1'],
    content: `
      <p>Know Your Customer (KYC) verification is mandatory for all active sellers on 60YR. Here's everything you need to know.</p>

      <h2>Why KYC is Required for Sellers</h2>
      <p>As a marketplace handling real-money transactions, 60YR is required by financial regulations to verify the identity of all users who receive payments. KYC helps us:</p>
      <ul>
        <li>Prevent fraud and account takeovers</li>
        <li>Comply with AML (Anti-Money Laundering) regulations</li>
        <li>Protect buyers by ensuring sellers are real, identifiable individuals</li>
        <li>Enable secure, traceable payouts</li>
      </ul>

      <h2>KYC Levels for Sellers</h2>
      <ul>
        <li><strong>Level 1 (Basic):</strong> Email + phone verification. Allows listing application submission.</li>
        <li><strong>Level 2 (Standard KYC):</strong> Government-issued ID + selfie. Required before your first payout and for withdrawals up to $2,000/month.</li>
        <li><strong>Level 3 (Enhanced KYC):</strong> Proof of address + AML questionnaire. Required for monthly withdrawals over $2,000.</li>
        <li><strong>Level 4 (Business KYC):</strong> Full business documentation. Required for business accounts and withdrawals over $10,000/month.</li>
      </ul>

      <h2>How to Complete Seller KYC</h2>
      <ol>
        <li>Go to <strong>Account Settings → Verification → Start KYC</strong></li>
        <li>Select your country and preferred document type</li>
        <li>Upload a clear, unobstructed photo of your document (front and back for ID cards)</li>
        <li>Take a real-time selfie through our camera prompt (not an uploaded photo)</li>
        <li>Submit and wait 1–2 business days for review</li>
      </ol>

      <h2>KYC Rejection and Resubmission</h2>
      <p>If your KYC is rejected, you'll receive a reason code explaining what was wrong. Common reasons:</p>
      <ul>
        <li>Blurry or obscured document photo</li>
        <li>Expired document</li>
        <li>Selfie doesn't match ID photo</li>
        <li>Document type not accepted in your country</li>
      </ul>
      <p>You can resubmit an unlimited number of times. If you believe the rejection was in error, contact <a href="mailto:kyc@60yr.com">kyc@60yr.com</a>.</p>
    `
  },

  saml1: {
    title: 'Anti-Money Laundering (AML) Policy for Sellers',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['skyc1','sv1','sr1'],
    content: `
      <p>60YR, operated by <strong>SEAWORLD TECHNOLOGY LIMITED</strong>, operates in strict compliance with international Anti-Money Laundering (AML) regulations, including the FATF (Financial Action Task Force) recommendations and applicable local laws. All sellers are bound by this policy. To ensure the integrity of our marketplace, we have partnered with <strong>industry-leading third-party compliance providers</strong> — <a href="https://sumsub.com" target="_blank" rel="noopener">Sumsub</a> for identity verification and <a href="https://forter.com" target="_blank" rel="noopener">Forter</a> for real-time transaction risk intelligence.</p>

      <div class="aml-partner-badges">
        <div class="aml-partner-badge">
          <span class="aml-partner-icon">🛡️</span>
          <div class="aml-partner-info">
            <strong>Sumsub</strong>
            <span>Global Identity Verification &amp; Compliance Platform</span>
          </div>
        </div>
        <div class="aml-partner-badge">
          <span class="aml-partner-icon">🔍</span>
          <div class="aml-partner-info">
            <strong>Forter</strong>
            <span>Real-Time Fraud Prevention &amp; Decision Engine</span>
          </div>
        </div>
      </div>

      <h2>What is Money Laundering?</h2>
      <p>Money laundering involves making illegally obtained funds appear legitimate. In a game account marketplace context, this can include receiving payments from stolen credit cards, using the platform to cycle funds, or converting illicit money into withdrawable earnings. 60YR takes a zero-tolerance stance on any form of money laundering and has invested heavily in automated and manual detection systems to identify and prevent such activity.</p>

      <h2>Third-Party Compliance Infrastructure</h2>
      <p>Rather than relying solely on in-house systems, 60YR has integrated <strong>two globally recognized compliance platforms</strong> into our operations. This multi-layered approach ensures that seller identity is rigorously verified before any financial activity, and that every transaction is continuously monitored for risk signals after verification.</p>

      <div class="aml-callout-framework">
        <div class="aml-callout-item">
          <div class="aml-callout-label">Identity Layer</div>
          <div class="aml-callout-desc"><strong>Sumsub</strong> — Every seller must pass Sumsub's multi-stage identity verification before being granted publishing, trading, or payout access. This includes document authentication, biometric liveness checks, and global compliance screening.</div>
        </div>
        <div class="aml-callout-item">
          <div class="aml-callout-label">Transaction Layer</div>
          <div class="aml-callout-desc"><strong>Forter</strong> — After a seller is verified, Forter's decision engine continuously analyzes every order and payout in real time, identifying abnormal patterns, velocity fraud, identity-mismatch signals, and other risk indicators before they result in financial loss.</div>
        </div>
      </div>

      <h2>Seller Identity Verification via Sumsub</h2>
      <p>All sellers on 60YR must complete identity verification through our integrated <strong>Sumsub</strong> verification flow before they can publish listings, complete trades, or receive payouts. This is not optional — it is a mandatory regulatory requirement and a cornerstone of our AML program.</p>

      <p>The verification process is designed to be both thorough and efficient, leveraging Sumsub's globally trusted compliance technology:</p>

      <div class="aml-flow-diagram">
        <div class="aml-flow-step">
          <div class="aml-step-num">1</div>
          <div class="aml-step-body">
            <h3>Seller Starts Verification</h3>
            <p>The seller clicks <strong>"Start Verification"</strong> in the seller portal and enters the identity verification flow. The portal clearly explains the purpose, required materials, and privacy notice before proceeding.</p>
            <div class="aml-step-detail">Required: Government ID or passport, selfie or liveness check, consistent country and personal details, a valid payout account</div>
          </div>
        </div>
        <div class="aml-flow-connector"></div>
        <div class="aml-flow-step">
          <div class="aml-step-num">2</div>
          <div class="aml-step-body">
            <h3>Platform Prepares Verification</h3>
            <p>After the seller initiates verification, the platform creates a verification task linked to this seller account and securely opens the Sumsub verification page. <strong>Sensitive credentials remain on the platform server</strong> — Sumsub never has direct access to seller account data beyond what is needed for identity checks.</p>
            <div class="aml-step-detail">Progress is synced to the seller profile in real time</div>
          </div>
        </div>
        <div class="aml-flow-connector"></div>
        <div class="aml-flow-step">
          <div class="aml-step-num">3</div>
          <div class="aml-step-body">
            <h3>Sumsub Runs Identity Checks</h3>
            <p>The seller completes the following checks directly on the Sumsub platform:</p>
            <ul>
              <li><strong>Document Upload &amp; Authentication:</strong> AI-powered document verification checks for authenticity, expiration, tampering, and consistency with declared identity</li>
              <li><strong>Selfie / Liveness Check:</strong> Real-time biometric verification ensures the person submitting the document is the same individual depicted in the ID photo — not a uploaded photo or deepfake</li>
              <li><strong>Compliance Screening:</strong> AML/KYC database screening against global watchlists, PEP (Politically Exposed Persons) lists, and sanctions databases</li>
            </ul>
            <div class="aml-step-detail">Document details must match the seller identity. Face check must match the ID photo. Results are returned to the platform via secure API.</div>
          </div>
        </div>
        <div class="aml-flow-connector"></div>
        <div class="aml-flow-step">
          <div class="aml-step-num">4</div>
          <div class="aml-step-body">
            <h3>Platform Updates Verification Status</h3>
            <p>After Sumsub returns the verification result, the platform updates the seller's verification status and retains a complete review record:</p>
            <ul>
              <li><strong>Passed:</strong> Verification complete — seller moves to admin review stage</li>
              <li><strong>Needs Update:</strong> Seller is asked to resubmit with corrected documents</li>
            </ul>
            <div class="aml-step-detail">All verification results and timestamps are permanently logged for audit compliance</div>
          </div>
        </div>
        <div class="aml-flow-connector"></div>
        <div class="aml-flow-step">
          <div class="aml-step-num">5</div>
          <div class="aml-step-body">
            <h3>Admin Reviews Seller Details</h3>
            <p>The 60YR admin console brings together the seller profile, verification materials, Sumsub results, payout account details, and review log for <strong>manual human review</strong> by our compliance team. This step ensures that even after automated checks, a trained compliance officer evaluates the seller before granting access.</p>
            <ul>
              <li>Approve / Reject / Request more information</li>
              <li>Record reviewer, time, reason, and notes</li>
              <li>Freeze publishing or payout access for risky sellers</li>
            </ul>
            <div class="aml-step-detail">Verification does not mean instant payout. Payout account must also pass platform risk checks.</div>
          </div>
        </div>
        <div class="aml-flow-connector"></div>
        <div class="aml-flow-step aml-step-final">
          <div class="aml-step-num">6</div>
          <div class="aml-step-body">
            <h3>Verified — Access Enabled</h3>
            <p>After approval, the platform records the verification decision and enables the seller's publishing, trading, and payout-related access according to platform rules. The seller can now list accounts, complete trades, and receive payouts — all of which will continue to be monitored by <strong>Forter</strong> (see below).</p>
          </div>
        </div>
      </div>

      <div class="article-callout">
        <p><strong>Why Sumsub?</strong> Sumsub is a SOC 2 Type II certified, GDPR-compliant identity verification platform used by over 1,000 companies across 220+ countries and territories. Their technology provides 99.8% verification accuracy and covers global AML/KYC screening databases. By using Sumsub, 60YR ensures that seller identity verification meets the highest industry standards — not just our own internal criteria.</p>
      </div>

      <h2>Transaction Risk Detection via Forter</h2>
      <p>While Sumsub ensures that sellers are who they claim to be <em>before</em> they enter the marketplace, <strong>Forter</strong> provides continuous protection <em>after</em> verification — monitoring every transaction in real time to detect money laundering, fraud rings, and suspicious trading patterns.</p>

      <h3>How Forter Protects 60YR's Marketplace</h3>
      <p>Forter's decision engine processes every order and payout event through a multi-dimensional risk model:</p>
      <ul>
        <li><strong>Identity Consistency Analysis:</strong> Cross-references buyer/seller behavioral data against verified identity profiles — detecting mismatches that may indicate account takeover or identity farming</li>
        <li><strong>Velocity &amp; Volume Pattern Detection:</strong> Identifies sudden spikes in transaction frequency, abnormal order-to-payout ratios, and structured transaction patterns designed to circumvent reporting thresholds</li>
        <li><strong>Network &amp; Device Intelligence:</strong> Analyzes device fingerprints, IP geolocation, proxy/VPN usage, and multi-account clustering to identify coordinated fraud rings operating across multiple seller accounts</li>
        <li><strong>Behavioral Profiling:</strong> Tracks seller behavioral patterns over time — deviations from normal activity trigger escalating risk scores and may result in automatic transaction holds</li>
        <li><strong>Cross-Market Intelligence:</strong> Forter processes billions of transactions across its global merchant network, enabling detection of fraud patterns that are invisible in a single platform's data</li>
      </ul>

      <h3>Forter Decision Outputs for 60YR</h3>
      <p>For each transaction, Forter returns a real-time decision to 60YR's platform:</p>
      <div class="aml-decision-table">
        <div class="aml-decision-row aml-decision-approve">
          <div class="aml-decision-label">Approve</div>
          <div class="aml-decision-desc">Transaction is clean — proceeds normally, seller receives payout</div>
        </div>
        <div class="aml-decision-row aml-decision-review">
          <div class="aml-decision-label">Review</div>
          <div class="aml-decision-desc">Risk signals detected — transaction is held for manual compliance team review before proceeding</div>
        </div>
        <div class="aml-decision-row aml-decision-reject">
          <div class="aml-decision-label">Reject</div>
          <div class="aml-decision-desc">High-confidence fraud or AML violation — transaction is blocked, seller account may be suspended or flagged for investigation</div>
        </div>
      </div>

      <div class="article-callout">
        <p><strong>Why Forter?</strong> Forter is the leading real-time fraud prevention platform, trusted by major global companies including Nordstrom, Priceline, and Instacart. Forter processes over $500B in annual transaction volume and provides <strong>instant, fully automated decisions</strong> — not just risk scores. This means suspicious transactions on 60YR are not just flagged, they are <em>actioned</em> immediately, preventing financial loss before it occurs.</p>
      </div>

      <h2>Multi-Layer AML Enforcement Model</h2>
      <p>60YR's AML enforcement operates on three distinct layers, each reinforced by third-party technology:</p>
      <ul>
        <li><strong>Pre-Entry Layer (Sumsub):</strong> No seller can list, trade, or receive payouts without completing Sumsub identity verification and passing admin review. Unverified sellers have zero platform access.</li>
        <li><strong>Transaction Layer (Forter):</strong> Every financial transaction — orders, payouts, refunds — is analyzed by Forter's decision engine in real time. Suspicious transactions are automatically held or rejected before funds move.</li>
        <li><strong>Post-Event Layer (Manual Review):</strong> Our compliance team conducts periodic audits, investigates flagged patterns, and reviews seller accounts with cumulative withdrawal thresholds exceeding $10,000/month (Enhanced Due Diligence). All decisions and evidence are retained for a minimum of 5 years for regulatory audit purposes.</li>
      </ul>

      <h2>Seller AML Obligations</h2>
      <ul>
        <li>Sellers must accurately represent the source of game accounts they list</li>
        <li>Sellers may not list accounts acquired through fraud, theft, or other illegal means</li>
        <li>Sellers must complete KYC via Sumsub <strong>before</strong> receiving any payouts — no exceptions</li>
        <li>Sellers processing over $10,000/month must complete Enhanced AML review (Enhanced Due Diligence)</li>
        <li>Sellers must not structure transactions to avoid reporting thresholds</li>
        <li>Sellers must not facilitate transactions on behalf of sanctioned individuals or entities</li>
        <li>Sellers must maintain consistent identity information across their account, KYC documents, and payout details</li>
      </ul>

      <h2>Suspicious Transaction Monitoring</h2>
      <p>60YR's monitoring operates through both Forter's automated decision engine and internal compliance review:</p>
      <ul>
        <li>Rapid, high-volume sales significantly above market value</li>
        <li>Multiple purchases from the same buyer for the same account type (possible cycling)</li>
        <li>Withdrawal patterns inconsistent with declared selling activity</li>
        <li>Use of multiple accounts to fragment transaction records (structuring)</li>
        <li>Device/IP anomalies suggesting multi-account coordination</li>
        <li>Identity mismatches between verified KYC profile and transaction behavior</li>
      </ul>

      <h2>Consequences of AML Violations</h2>
      <ul>
        <li>Immediate account suspension and fund freeze</li>
        <li>Mandatory AML investigation (up to 90 days)</li>
        <li>Referral to relevant financial intelligence units (FIU) as required by law</li>
        <li>Permanent ban from the platform</li>
        <li>Criminal and civil liability under applicable law</li>
        <li>Reversal of all transactions associated with the flagged activity</li>
      </ul>

      <h2>Good Faith Reporting</h2>
      <p>If you are approached by a buyer or third party attempting to use your seller account for money laundering, report it immediately to <a href="mailto:compliance@60yr.com">compliance@60yr.com</a>. Sellers who report suspicious activity in good faith are protected from liability. 60YR treats all such reports with strict confidentiality and will not penalize sellers for cooperating with compliance investigations.</p>

      <div class="article-callout">
        <p><strong>Regulatory Contact:</strong> 60YR's compliance program is overseen by SEAWORLD TECHNOLOGY LIMITED. For regulatory inquiries, contact <a href="mailto:compliance@60yr.com">compliance@60yr.com</a>. Transaction records and KYC data are retained for a minimum of 5 years in compliance with FATF and applicable jurisdiction requirements.</p>
      </div>
    `
  },

  /* ===== SELLER RULES ===== */

  sr1: {
    title: 'Seller Code of Conduct',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['sr2','sr3','sl2'],
    content: `
      <p>All sellers on 60YR are expected to uphold these standards. Adherence to the code of conduct is mandatory and is enforced by our Trust &amp; Safety team.</p>

      <h2>Core Principles</h2>
      <ul>
        <li><strong>Honesty:</strong> All listings must accurately represent the account being sold. No exaggeration, omission of defects, or misleading descriptions.</li>
        <li><strong>Reliability:</strong> Deliver within the 24-hour window. Consistent late delivery or no-shows will result in sanctions.</li>
        <li><strong>Respect:</strong> Treat buyers and 60YR staff with professionalism and courtesy at all times.</li>
        <li><strong>Compliance:</strong> Follow all 60YR policies, applicable laws, and game developers' Terms of Service.</li>
      </ul>

      <h2>Specific Behavioral Standards</h2>
      <ul>
        <li>Do not reclaim or attempt to recover an account after selling it</li>
        <li>Do not re-list an account that has already been sold</li>
        <li>Do not post fake reviews or ratings on your own or competitors' profiles</li>
        <li>Do not use bots or automation to manipulate the platform</li>
        <li>Do not harass, threaten, or intimidate buyers or platform staff</li>
        <li>Do not engage in price manipulation schemes</li>
      </ul>

      <h2>Reporting Violations</h2>
      <p>If you observe another seller violating these standards, report them via the platform report tool or email <a href="mailto:trust@60yr.com">trust@60yr.com</a>. Responsible reporting strengthens the entire marketplace community.</p>
    `
  },

  sr2: {
    title: 'What Actions Can Get My Seller Account Suspended',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['sr1','s11','saml1'],
    content: `
      <p>Understanding what actions risk your seller account helps you avoid costly mistakes. Here is a clear list of violation tiers and their consequences.</p>

      <h2>Tier 1 — Warning</h2>
      <p>First-time, minor violations may result in a formal warning:</p>
      <ul>
        <li>Minor listing inaccuracy (quickly corrected)</li>
        <li>Single late delivery (first offense)</li>
        <li>Mild unprofessional communication</li>
      </ul>

      <h2>Tier 2 — Temporary Suspension (7–30 days)</h2>
      <ul>
        <li>Repeated late deliveries</li>
        <li>Second occurrence of a Tier 1 violation</li>
        <li>Listing removed by compliance for prohibited content</li>
        <li>Dispute rate above 10% in a 30-day period</li>
      </ul>

      <h2>Tier 3 — Indefinite Suspension (Pending Investigation)</h2>
      <ul>
        <li>Attempting off-platform deals</li>
        <li>Misrepresented account leading to a major dispute</li>
        <li>AML or KYC concern raised by compliance</li>
        <li>Multiple simultaneous disputes</li>
      </ul>

      <h2>Tier 4 — Permanent Ban</h2>
      <ul>
        <li>Selling hacked, stolen, or fraudulently obtained accounts</li>
        <li>Money laundering or financial fraud</li>
        <li>Account reclaim after sale</li>
        <li>Bypassing a suspension with a new account</li>
        <li>Serious harassment or threats to buyers or staff</li>
        <li>Cooperation with organized fraud schemes</li>
      </ul>

      <div class="article-callout warn">
        <p><strong>Zero Tolerance:</strong> Tier 4 violations result in immediate permanent ban, potential law enforcement referral, and civil action for damages.</p>
      </div>
    `
  },

  sr3: {
    title: 'Cross-Platform Trading Rules &amp; Off-Site Deal Policy',
    cat: 'seller',
    catLabel: 'Seller Help',
    catHref: 'seller.html',
    related: ['sr1','sr2','so1'],
    content: `
      <p>60YR strictly prohibits any attempt to conduct transactions outside the platform. Here's what counts as an off-platform deal and why it's banned.</p>

      <h2>What Counts as an Off-Platform Deal?</h2>
      <ul>
        <li>Asking a buyer to pay via PayPal, bank transfer, or any method outside 60YR</li>
        <li>Sharing your external contact details (WhatsApp, Telegram, Line, WeChat, Discord) for transaction purposes</li>
        <li>Linking to external stores, websites, or marketplaces</li>
        <li>Using 60YR chat to build a buyer relationship with intent to transact elsewhere</li>
        <li>Delivering an account and asking the buyer to leave 60YR to "pay later"</li>
      </ul>

      <h2>Why Off-Platform Deals Are Prohibited</h2>
      <ul>
        <li>Buyers lose all protection and recourse if something goes wrong</li>
        <li>Sellers lose dispute arbitration support</li>
        <li>It undermines the platform's AML and KYC compliance</li>
        <li>It creates an unregulated, unsafe environment</li>
      </ul>

      <h2>Consequences</h2>
      <p>Soliciting or conducting off-platform deals will result in:</p>
      <ul>
        <li>Immediate permanent account suspension</li>
        <li>Forfeiture of any funds held in your 60YR account</li>
        <li>Removal of all listings</li>
        <li>Potential AML investigation and law enforcement referral</li>
      </ul>

      <h2>Reporting Off-Platform Solicitation</h2>
      <p>If a seller asks you to pay outside the platform, do not agree. Report it immediately using the in-chat report function or by emailing <a href="mailto:trust@60yr.com">trust@60yr.com</a>. Your report will be investigated and the seller sanctioned.</p>
    `
  },

  /* =====================================================================
     PLATFORM LEGAL — TERMS OF SERVICE
  ===================================================================== */

  tos1: {
    title: 'Terms of Service',
    cat: 'platform',
    catLabel: 'Platform Policies',
    catHref: 'buyer.html#platform',
    related: ['pp1','p1','baml1','saml1'],
    content: `
      <p>Welcome to 60YR. By accessing or using our platform and services, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use our services. These Terms govern your use of the 60YR website, mobile applications, and all related services provided by SEAWORLD TECHNOLOGY LIMITED.</p>

      <div class="article-callout">
        <p><strong>Last Updated:</strong> These Terms are effective as of the date you first access or use the 60YR platform. We may update these Terms from time to time; continued use after changes constitutes acceptance.</p>
      </div>

      <h2>1. Eligibility &amp; Age Requirements</h2>
      <p>You must be of legal age in your jurisdiction and have the legal capacity to enter into binding contracts to use 60YR. Minors must obtain parental or legal guardian consent before using any 60YR services. The parent or legal guardian who provides consent is responsible for:</p>
      <ul>
        <li>The minor's conduct on the platform</li>
        <li>Any fees or charges incurred through the minor's use</li>
        <li>Ensuring the minor complies with these Terms</li>
      </ul>
      <p>If parental consent has not been obtained, the minor must immediately cease using 60YR services.</p>

      <h2>2. Account Registration</h2>
      <p>To access most features of 60YR, you must register for an account. By registering, you agree to:</p>
      <ul>
        <li>Provide accurate, current, and complete information during registration</li>
        <li>Keep your account information updated at all times</li>
        <li>Keep your username and password strictly confidential</li>
        <li>Accept responsibility for all activities occurring under your account</li>
        <li>Notify 60YR immediately if you suspect any unauthorized access to your account</li>
      </ul>
      <p>60YR may, at its discretion, issue or permit you to set your own username and password. We reserve the right to require you to update your account information at any time without providing reasons, and we are not liable for any losses arising from such requests.</p>
      <p>Any use of the platform or services shall be deemed to be:</p>
      <ul>
        <li>An access to or use of the platform by you; and</li>
        <li>A communication or posting validly made by you</li>
      </ul>

      <h2>3. Platform Usage Rules</h2>
      <p>You agree to use 60YR only for lawful purposes and in a lawful manner at all times. You must adhere to all guidelines, notices, operating rules, and policies as issued by 60YR from time to time. When using 60YR, you must NOT:</p>
      <ul>
        <li><strong>Impersonation:</strong> Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with any person or entity</li>
        <li><strong>Illegal purposes:</strong> Use the platform for any unlawful purpose, including activities that violate local, national, or international laws</li>
        <li><strong>Unauthorized access:</strong> Attempt to gain unauthorized access to other computer networks or interfere with another user's ability to access the platform</li>
        <li><strong>Harmful content:</strong> Post, advertise, or transmit any prohibited, unlawful, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable material</li>
        <li><strong>Interference:</strong> Engage in any conduct that restricts or inhibits any other person from using or enjoying the platform</li>
        <li><strong>Malicious code:</strong> Use or upload any program, code, or file containing viruses, worms, Trojan horses, or any other harmful, destructive, or disruptive components</li>
        <li><strong>Off-platform transactions:</strong> Solicit or conduct transactions outside the 60YR platform to circumvent escrow protections and platform fees</li>
      </ul>

      <h2>4. Anti-Money Laundering &amp; Regulatory Compliance</h2>
      <p>By using 60YR, you represent, warrant, and undertake that:</p>
      <ul>
        <li>You will not use the platform or services to engage in, facilitate, or promote money laundering, terrorist financing, fraud, market manipulation, insider trading, or any other illegal activity</li>
        <li>All funds or assets you use on the platform are from legitimate sources and are not the proceeds of criminal or illegal activity</li>
        <li>You will not structure transactions to avoid reporting thresholds or circumvent regulatory scrutiny</li>
        <li>You will provide information and documentation to verify your identity, source of funds, and nature of transactions when requested (including government-issued ID, proof of address, bank statements, and source of wealth declarations)</li>
      </ul>
      <p>60YR has the right to monitor, review, and analyse transaction activity to detect suspicious patterns or market abuse. If suspected violations are identified, 60YR reserves the right to:</p>
      <ul>
        <li>Delay, decline, withhold, intercept, or reverse transactions</li>
        <li>Freeze or restrict access to accounts</li>
        <li>Suspend or terminate services</li>
        <li>Report to regulatory authorities or law enforcement agencies</li>
        <li>Disclose account and transaction details as required by law</li>
      </ul>
      <p>You will not be entitled to any compensation or claims against 60YR for actions taken in good faith under this provision. Continued use of the services constitutes acceptance of any revisions to these AML/CFT obligations.</p>

      <h2>5. Buyer Terms</h2>
      <p>These additional terms apply specifically to buyers on the 60YR marketplace:</p>
      <ul>
        <li><strong>Accurate information:</strong> You are responsible for ensuring that all information or data you submit is accurate. You bear sole responsibility for such information</li>
        <li><strong>Product descriptions:</strong> While 60YR strives to ensure accurate product descriptions, we do not warrant that descriptions are accurate, up-to-date, or error-free. Refer to the individual listing and communicate with sellers for clarifications</li>
        <li><strong>Pricing:</strong> 60YR reserves the right to revise prices at any time without prior notice or reason</li>
        <li><strong>Age verification:</strong> You must be of legal age to purchase game accounts or related items, particularly where age-restricted content is involved</li>
      </ul>

      <h2>6. Seller Terms</h2>
      <p>These additional terms apply specifically to sellers on 60YR:</p>
      <ul>
        <li><strong>Listing approval required:</strong> Sellers may not freely post listings. All listings must be submitted as applications for review and must be approved by the 60YR compliance team before they are visible to buyers</li>
        <li><strong>Accurate listings:</strong> All listing descriptions must be accurate, complete, and not misleading. Sellers bear full responsibility for their listing content</li>
        <li><strong>KYC compliance:</strong> All sellers must complete identity verification (KYC) as required by their seller tier before receiving payouts</li>
        <li><strong>No prohibited items:</strong> Sellers may not list any items on the Prohibited Listings list, including hacked accounts, permanently banned accounts, or accounts with illegal content</li>
        <li><strong>Account handover:</strong> Sellers must deliver account credentials as described in their listing and cooperate fully with the buyer during the handover process</li>
      </ul>

      <h2>7. Platform Availability</h2>
      <p>60YR may, with or without prior notice and for any reason, upgrade, modify, suspend, or discontinue any or all parts of the platform or services. 60YR will not be liable for any modifications, suspension, or discontinuation of the platform or services.</p>

      <h2>8. Monitoring &amp; Moderation</h2>
      <p>60YR reserves the right (but not the obligation) to:</p>
      <ul>
        <li>Monitor, screen, or control any activity, content, or material on the platform; investigate any violation of these Terms and take any action 60YR deems appropriate</li>
        <li>Prevent or restrict the access of any user to the platform</li>
        <li>Report any activity it suspects to be in violation of any applicable law or regulation to the appropriate authorities and to co-operate with such authorities</li>
      </ul>

      <h2>9. Intellectual Property</h2>
      <p>All content on the 60YR platform, including but not limited to text, graphics, logos, icons, images, and software, is the property of SEAWORLD TECHNOLOGY LIMITED or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, display, or create derivative works of any platform content without express written permission.</p>
      <p>By submitting reviews, comments, or other content to 60YR, you grant 60YR a non-exclusive, royalty-free, perpetual, worldwide license to use, display, publish, and distribute such content in connection with the operation of the platform.</p>

      <h2>10. Content You Submit</h2>
      <ul>
        <li>You authorize 60YR to use information you submit (questions, comments, suggestions, reviews, etc.)</li>
        <li>When posting reviews, you grant the right to use your username in association with the review</li>
        <li>You must not use a false email address, impersonate any person, or otherwise mislead 60YR as to the origin of submitted content</li>
        <li>60YR has the right (but not the obligation) to publish, refuse to publish, remove, or edit your submitted content</li>
      </ul>

      <h2>11. Email Communications</h2>
      <p>By registering, you authorize 60YR to collect, process, and use your information (including personal data) to send you informational and promotional emails. You may opt out of promotional emails at any time by clicking the unsubscribe link in any promotional email.</p>

      <h2>12. Disclaimers &amp; Limitation of Liability</h2>
      <p>All data and information contained on the platform is provided for reference only. 60YR makes no representations or warranties of any kind (express, implied, or statutory), including but not limited to non-infringement of third-party rights, title, and merchantability. In particular, 60YR does not warrant:</p>
      <ul>
        <li>The accuracy, timeliness, adequacy, commercial value, or completeness of information on the platform</li>
        <li>That identified defects will be corrected</li>
        <li>That the platform is free of computer viruses, destructive code, or other harmful components</li>
      </ul>
      <p>60YR shall not be liable for any loss or damage arising directly or indirectly from:</p>
      <ul>
        <li>Any access to, use of, or inability to access or use the platform and services</li>
        <li>Any reliance on data or information available through the platform</li>
        <li>Any system, server, or connection failures, or any interruption or error in service</li>
      </ul>
      <p>Any misrepresentation, errors, damages, costs, or losses arising from your use of the platform are entirely at your own risk. 60YR accepts no responsibility or liability in any circumstances.</p>

      <h2>13. Third-Party Links</h2>
      <p>The platform may contain hyperlinks to third-party websites. These links are provided for your convenience only. 60YR has no control over linked sites and is not responsible for any errors, omissions, delays, or objectionable content on those sites. The inclusion of any link does not imply endorsement or verification by 60YR. Accessing any linked sites is entirely at your own risk.</p>

      <h2>14. Termination</h2>
      <p><strong>By 60YR:</strong> 60YR may at its discretion immediately terminate your access or disable your username and password, including where:</p>
      <ul>
        <li>You breach any of these Terms</li>
        <li>Your conduct is inconsistent with these Terms</li>
        <li>It is no longer appropriate to continue providing services to you (including as determined by a regulatory authority)</li>
      </ul>
      <p><strong>By You:</strong> You may terminate your use of the platform by providing 7 days' written notice to 60YR.</p>

      <h2>15. Notices</h2>
      <p>Notices from 60YR to you may be communicated via electronic media on the platform, effective on the date of publication, or by post, deemed received on the next business day. Notices from you to 60YR must be in writing, sent to the official email address, and are deemed received only upon actual receipt by 60YR.</p>

      <h2>16. General Provisions</h2>
      <ul>
        <li><strong>Cumulative rights:</strong> Rights and remedies under these Terms are cumulative and do not limit any other rights or remedies available to 60YR</li>
        <li><strong>No waiver:</strong> Failure by 60YR to enforce any provision does not constitute a waiver of the right to enforce it in the future</li>
        <li><strong>Amendments:</strong> 60YR may change these Terms by posting notice on the platform. Changes take effect from the specified date. Continued use after that date constitutes acceptance of the revised Terms. If you do not accept changes, you must stop using the platform and terminate these Terms</li>
        <li><strong>Typos &amp; errors:</strong> Any typographical, clerical, or other error in any communication from 60YR is subject to correction without liability</li>
        <li><strong>Language:</strong> In the event of conflict between the English version and any foreign-language version of these Terms, the English version shall prevail</li>
        <li><strong>Binding records:</strong> Records relating to the platform and services are binding and conclusive on you and may be used as evidence</li>
      </ul>

      <h2>17. Contact Us</h2>
      <p>For any questions about these Terms of Service, please contact us:</p>
      <ul>
        <li><strong>Company:</strong> SEAWORLD TECHNOLOGY LIMITED</li>
        <li><strong>Address:</strong> Room 232, 2/F Secure House, 68 How Ming Street, Kwun Tong, KL</li>
        <li><strong>Phone:</strong> (+852) 39622601</li>
        <li><strong>Email:</strong> <a href="mailto:support@60yr.com">support@60yr.com</a></li>
      </ul>
    `
  },

  /* =====================================================================
     PLATFORM LEGAL — PRIVACY POLICY
  ===================================================================== */

  pp1: {
    title: 'Privacy Policy',
    cat: 'platform',
    catLabel: 'Platform Policies',
    catHref: 'buyer.html#platform',
    related: ['tos1','bkyc1','skyc1'],
    content: `
      <p>Welcome to 60YR. We deeply understand the importance of your personal information and your trust means everything to us. We strictly comply with laws and regulations and take appropriate security measures to ensure your personal information is safe and under control. SEAWORLD TECHNOLOGY LIMITED (&quot;we&quot; or &quot;60YR&quot;) has formulated this Privacy Policy to help you understand how we collect, use, share, store, and protect your personal information.</p>
      <p>Please carefully read and understand this Policy before using our products and services, and ensure you fully understand and agree before you begin using them. If you have any questions, opinions, or suggestions about this Policy, you can contact us through the methods provided at the end of this document.</p>

      <div class="article-callout">
        <p><strong>Your consent:</strong> By agreeing to this Privacy Policy, you acknowledge that you understand the features provided by our application and have authorized the collection and use of the necessary personal information required for those features. This does not constitute consent to enable additional features or process non-essential personal information — we will seek your separate consent for those as applicable.</p>
      </div>

      <h2>1. Scope of Application</h2>
      <p>This Policy applies to all products and services provided by 60YR. If our affiliated companies have formulated separate privacy policies for their own products or services, the respective privacy policy of those products or services applies.</p>

      <h2>2. Information We Collect &amp; How We Use It</h2>
      <p>When you use our products and services, we collect two types of personal information:</p>
      <ul>
        <li><strong>Necessary information:</strong> Required for basic features. If you refuse to provide this, you will not be able to use our products and services normally</li>
        <li><strong>Optional information:</strong> For additional features. You may choose whether to provide this. Refusal only means you cannot use specific additional features; your access to basic features is unaffected</li>
      </ul>

      <h3>2.1 Registration &amp; Login</h3>
      <p>When registering on 60YR, you can create an account with your email address or mobile number and fill in relevant identity information. When you log in using a third-party account (e.g. social login), you authorize us to obtain the public information registered with that third-party platform.</p>

      <h3>2.2 Customer Support</h3>
      <p>If you choose to send screenshots to our customer service team, you will need to grant permission to access your photos and media. Declining this permission means you will not be able to send images to support, but it does not affect your use of core 60YR services.</p>

      <h3>2.3 Displaying Products &amp; Services</h3>
      <p>To display relevant products and services to you — including your browsing history and search footprint — we collect your browsing and search activity when you visit or use the 60YR website. We may combine this with lawfully collected device information, service logs, and other authorized information to predict your region and display appropriate currency. We may also push advertisements for products you may be interested in to third-party applications, or send you commercial SMS messages.</p>

      <h3>2.4 Helping You Complete Payments</h3>
      <p>To complete order payments, you need to bind a payment method (e.g. Alipay, internet banking, or other third-party payment). We share necessary information (including account name, order payment details, and order security-related device information required under anti-money laundering laws) with payment processors in a secure manner. If you choose financial institution payment services, we will share your bank card payment information (including card number and expiration date) with the relevant financial institution.</p>

      <h3>2.5 Customer Service &amp; Dispute Handling</h3>
      <p>When you contact us or apply for after-sales service or dispute resolution, we require necessary personal information to verify your identity. To help resolve your issues and keep records of solutions and outcomes, we may retain your communication records (including account information, order information, and contact details you provide). We use your account and order information if you have queries, complaints, or suggestions about specific orders.</p>

      <h3>2.6 Public Information Publishing</h3>
      <p>You may choose to publicly post reviews and other content through features we provide. Please be cautious about sharing personal information publicly, as your public posts may involve personal information about yourself or others. If your public posts involve another person's personal information, you need to obtain their consent first.</p>

      <h3>2.7 Security Assurance</h3>
      <p>To fulfil our legal obligations to ensure e-commerce transaction security and better prevent phishing, fraud, network vulnerabilities, viruses, and attacks, we embed security SDKs to collect device information and service logs. We may use or integrate your member information, transaction information, and device information to assess account and transaction risk, perform identity verification, detect and prevent security incidents, and take necessary audit and analysis measures.</p>

      <h3>2.8 Cookies &amp; Similar Technologies</h3>
      <p>When you use our services, we may send one or more cookies or anonymous identifiers to your device to collect and store information about your access and usage. We use cookies primarily to:</p>
      <ul>
        <li>Ensure our products and services run safely and efficiently</li>
        <li>Confirm the security status of your account and transactions</li>
        <li>Help you avoid re-entering information and streamline your search experience</li>
        <li>Display content and optimize advertising you may find interesting</li>
      </ul>
      <p>You can clear cookies via your browser settings or choose to decline cookies. Please note that doing so may affect your ability to use certain services that depend on cookies.</p>

      <h2>3. Sharing Your Information</h2>
      <p>We will not share your personal information with companies, organizations, or individuals outside 60YR service providers, except in the following circumstances:</p>
      <ul>
        <li><strong>Legal obligations:</strong> We may share your information as required by laws, regulations, litigation, dispute resolution, or lawful requests from administrative or judicial authorities</li>
        <li><strong>With your consent:</strong> After obtaining your explicit consent, we will share your personal information with other parties</li>
        <li><strong>Contractual necessity:</strong> If you purchase goods or services on 60YR, we share necessary transaction-related information with relevant suppliers to fulfill your transaction and after-sales service needs</li>
        <li><strong>Affiliated companies:</strong> To facilitate joint services, recommend information you may be interested in, and protect the safety of affiliated companies or other users, your personal information may be shared with our affiliated companies and/or their designated service providers. We only share necessary personal information, bound by the purposes stated in this Policy. We will seek your consent again if sensitive personal information is shared or if affiliated companies change the purpose of processing</li>
      </ul>
      <p>Please note that information you voluntarily or publicly share may involve your personal information or that of others. Please exercise caution in making decisions about sharing.</p>

      <h2>4. Data Storage</h2>

      <h3>4.1 Retention Period</h3>
      <p>We only retain your personal information for the period necessary to achieve the purposes described in this Policy, unless there are mandatory legal retention requirements. For example, the <em>Electronic Commerce Law of the People's Republic of China</em> requires information about goods, services, and transactions to be retained for no less than three years from the date of transaction completion. After the retention period expires, we will delete or anonymize your personal information as required by applicable law.</p>

      <h3>4.2 Storage Location</h3>
      <p>Personal information collected and generated during our operations in the People's Republic of China is stored in China.</p>

      <h3>4.3 Storage Security</h3>
      <p>We have implemented reasonable and feasible security measures in line with industry standards to protect your information from unauthorized access, public disclosure, use, modification, damage, or loss. Our security measures include:</p>
      <ul>
        <li>Encryption technologies to enhance the security of personal information</li>
        <li>SSL protocol encryption for data exchange between your browser and our servers</li>
        <li>HTTPS protocol for secure browsing</li>
        <li>Trusted protection mechanisms to prevent malicious attacks on personal information</li>
        <li>Access control mechanisms to ensure only authorized personnel can access personal information</li>
      </ul>
      <p>Our key information systems have passed China's Cybersecurity Classified Protection Level 3 or above certification.</p>

      <h2>5. Minors</h2>
      <p>In e-commerce activities, we assume you have the appropriate civil capacity. If you are a minor, we require you to ask your parents or other legal guardians to carefully read this Policy, and to use our services or provide information to us only with the consent of your parents or legal guardians.</p>

      <h2>6. Policy Updates &amp; Notification</h2>
      <p>To bring you a better product and service experience, we continuously improve our products, services, and technology. As our services and business processes evolve, we may update our Privacy Policy to inform you of specific changes. Without your explicit consent, we will not restrict your rights under this Policy. We will publish any changes to this Policy on a dedicated page. For significant changes, we will also provide more prominent notifications (including announcements or pop-up notices on 60YR).</p>

      <h2>7. Your Rights</h2>
      <p>In accordance with applicable laws, you have the following rights regarding your personal information:</p>
      <ul>
        <li><strong>Access:</strong> You have the right to access the personal information we hold about you</li>
        <li><strong>Correction:</strong> You have the right to request correction of inaccurate or incomplete personal information</li>
        <li><strong>Deletion:</strong> You have the right to request deletion of your personal information, subject to applicable legal requirements</li>
        <li><strong>Withdrawal of consent:</strong> You may withdraw previously given consent to certain processing activities, without affecting the lawfulness of processing prior to withdrawal</li>
        <li><strong>Account deletion:</strong> You may delete your 60YR account via the account settings page; see our <a href="article.html?id=a4">account deletion guide</a> for details</li>
      </ul>

      <h2>8. Contact Us</h2>
      <p>If you have any questions, opinions, or suggestions about this Privacy Policy, please contact us. We will respond within 15 days:</p>
      <ul>
        <li><strong>Company:</strong> SEAWORLD TECHNOLOGY LIMITED</li>
        <li><strong>Address:</strong> Room 232, 2/F Secure House, 68 How Ming Street, Kwun Tong, KL</li>
        <li><strong>Phone:</strong> (+852) 39622601</li>
        <li><strong>Email:</strong> <a href="mailto:support@60yr.com">support@60yr.com</a></li>
      </ul>
    `
  },

  /* =====================================================================
     DMCA POLICY
  ===================================================================== */

  dmca1: {
    title: 'DMCA Policy',
    cat: 'platform',
    catLabel: 'Platform Policies',
    catHref: 'index.html',
    related: ['tos1','pp1','p3'],
    content: `
      <h2>SEAWORLD TECHNOLOGY LIMITED DMCA Policy</h2>

      <h3>Introduction</h3>
      <p>SEAWORLD TECHNOLOGY LIMITED (&ldquo;Company&rdquo;) respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998 (&ldquo;DMCA&rdquo;), we will respond expeditiously to claims of copyright infringement.</p>

      <h3>Designated Agent</h3>
      <p>If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our Designated Copyright Agent with the following information:</p>
      <ul>
        <li><strong>Name:</strong> XIAKEJU</li>
        <li><strong>Address:</strong> ROOM 232 2/F SECURE HOUSE 68 HOW MING STREET KWUN TONG KL</li>
        <li><strong>Email:</strong> <a href="mailto:support@60yr.com">support@60yr.com</a></li>
        <li><strong>Phone:</strong> (+852) 39622601</li>
      </ul>

      <h3>Takedown Notice Requirements</h3>
      <p>To be effective, the notification must include:</p>
      <ol>
        <li>A physical or electronic signature of the copyright owner or agent.</li>
        <li>Identification of the copyrighted work claimed to have been infringed.</li>
        <li>Identification of the material that is claimed to be infringing and its location (URL).</li>
        <li>Contact information of the complaining party.</li>
        <li>A statement that the complaining party has a good faith belief that use of the material is not authorized.</li>
        <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner.</li>
      </ol>

      <h3>Counter-Notification</h3>
      <p>If you believe your material was removed by mistake or misidentification, you may submit a counter-notification to our Designated Agent. The counter-notification must include the following:</p>
      <ol>
        <li>Your physical or electronic signature.</li>
        <li>Identification of the material that has been removed or to which access has been disabled, and the location at which the material appeared before it was removed or access to it was disabled (e.g., the URL or listing ID of the affected game account listing).</li>
        <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled.</li>
        <li>Your name, address, and telephone number.</li>
        <li>A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside of the United States, for any judicial district in which the Company may be found, and that you will accept service of process from the person who provided the original takedown notification or an agent of such person.</li>
      </ol>
      <p>Upon receipt of a valid counter-notification, we will promptly provide a copy to the original complainant and inform them that we will restore the removed material or cease disabling access to it within 10 to 14 business days, unless our Designated Agent first receives notice that the original complainant has filed an action seeking a court order to restrain you from engaging in infringing activity relating to the material on our platform.</p>

      <h3>Repeat Infringer Policy</h3>
      <p>We reserve the right to terminate users who are deemed to be repeat infringers.</p>
    `
  }

};

/* ============================================================
   ARTICLE LOOKUP + PAGE INIT
============================================================ */

function getArticle(id) {
  if (ARTICLE_DB[id]) return ARTICLE_DB[id];
  return null;
}

function initArticlePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) {
    document.getElementById('articleTitle').textContent = 'Article Not Found';
    document.getElementById('articleContent').innerHTML = '<p>The article you requested could not be found. Please <a href="index.html">return to the Help Center</a>.</p>';
    return;
  }

  const art = getArticle(id);
  if (!art) {
    document.getElementById('articleTitle').textContent = 'Article Not Found';
    document.getElementById('articleContent').innerHTML = `<p>This article has not been published yet. Please check back soon or <a href="mailto:support@60yr.com">contact our support team</a>.</p>`;
    return;
  }

  // Page title
  document.title = art.title + ' \u2014 60YR Support Hub';
  document.getElementById('articleTitle').textContent = art.title;

  // Meta tag
  const catEl = document.getElementById('articleCategory');
  if (catEl) catEl.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
    <a href="${art.catHref}" style="color:inherit">${art.catLabel}</a>`;

  // Breadcrumb
  const parentLink = document.getElementById('breadcrumbParent');
  const breadTitle  = document.getElementById('breadcrumbTitle');
  if (parentLink) { parentLink.textContent = art.catLabel; parentLink.href = art.catHref; }
  if (breadTitle)  breadTitle.textContent = art.title.length > 50 ? art.title.slice(0,50)+'\u2026' : art.title;

  // Content
  document.getElementById('articleContent').innerHTML = art.content;

  // Related articles
  const relatedEl = document.getElementById('relatedArticles');
  if (relatedEl && art.related && art.related.length) {
    relatedEl.innerHTML = art.related.map(rid => {
      const r = getArticle(rid);
      if (!r) return '';
      return `<a href="article.html?id=${rid}" class="related-link">${r.title}</a>`;
    }).join('');
  } else if (relatedEl) {
    relatedEl.innerHTML = '<a href="buyer.html" class="related-link">Back to Buyer Help</a><a href="seller.html" class="related-link">Back to Seller Help</a>';
  }
}

document.addEventListener('DOMContentLoaded', initArticlePage);
