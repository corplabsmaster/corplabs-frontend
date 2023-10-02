import React from "react";
import img from "../../images/promotion/img2222.jpg";
import "../../styles/modalp.css";
function modal() {
  return (
    <div className="body-dark">
      <div className="promo-detail">
        <div className="detail-banner">
          <img
            className="promotion_banner"
            style={{ minHeight: "100px", objectFit: "contain" }}
            src={img}
          />
          <a className="btn-close close-modal">&#10005;</a>
        </div>
        <div className="title-wrap">
          <h3 className="promotion_title">50% Sport Refund </h3>
          <a className="btn-default-radius" href="#!">
            Sign Up Now{" "}
          </a>
        </div>
        <div className="pop-inner">
          <div className="promotion_note article">
            <div className="how-tos">
              <h4>How to participate:</h4>
              <ul
                style={{
                  listStylePosition: "inside",
                  paddingLeft: "0",
                  listStyleType: "none",
                }}
              >
                <li>- Register as a JeetBuzz member.</li>
                <li>
                  - Select this offer on the deposit page while making your
                  first deposit.
                </li>
                <li>- Make your first deposit with a minimum of 500 BDT.</li>
                <li>
                  - Place bets on any sports market on the same day as you make
                  the deposit.
                </li>
              </ul>
            </div>
            <div className="prom-details">
              <h4>Promotion Details:</h4>
              <table>
                <tr>
                  <th>Product</th>
                  <th>Refund Percentage</th>
                </tr>
                <tr>
                  <td>Sports</td>
                  <td>50%</td>
                </tr>
              </table>
            </div>
            <div className="tncs">
              <h4>Terms and Conditions:</h4>
              <ul
                style={{
                  listStylePosition: "inside",
                  paddingLeft: "0",
                  listStyleType: "none",
                }}
              >
                <li>
                  - This promotion is available to all new signed up members who
                  have not made their first deposit on Jeetbuzz.
                </li>
                <li>- Promotion starts from 00:00 (GMT+6) on 6th June 2022.</li>
                <li>
                  - The refund bonus amount shall be equal to 50% of your total
                  losses on any sports market you bet within the next 24 hours
                  after you opted in to this promotion.
                </li>
                <li>
                  - Bonus will be credited into your account by 12:30 (GMT+6) on
                  the day after tomorrow.
                </li>
                <li>- Bonus can be used on any sports market.</li>
                <li>
                  - Bonus needed to complete 10x wagering requirements prior to
                  withdrawal.
                </li>
                <li>
                  - Bets placed on any sports markets with odds lower than 1.5
                  and higher than 5.0 will not count as bonus wagering
                  requirements.
                </li>
                <li>
                  - The minimum refund bonus payout is 50 BDT, maximum payout is
                  1,000 BDT.
                </li>
                <li>
                  - Your deposit, bonus, and winnings will be locked from
                  withdrawal until the wagering has been completed.
                </li>
                <li>
                  - Each member is only entitled to receive either one of the
                  welcome gifts.
                </li>
                <li>
                  - Only the next qualifying deposit made after opted in to the
                  promotion will qualify, any subsequent deposits will not be
                  eligible.
                </li>
                <li>
                  - Bets placed before opting in to this promotion will not be
                  counted towards refund calculation.
                </li>
                <li>
                  - This promotion cannot be used in conjunction with any other
                  promotions on the website.
                </li>
                <li>
                  - JeetBuzz reserves the right to withdraw the members bonus if
                  the account is suspected of abuse and/or does not comply with
                  the benefits received.
                </li>
                <li>
                  - JeetBuzz reserves the right to exclude any member from this
                  promotion at any time and to vary, amend, change and /or
                  withdraw any bonus offers or promotions without providing any
                  explanation whatsoever.
                </li>
                <li>
                  - JeetBuzzs General{" "}
                  <a
                    href="https://jeetbuzzhelp.com/terms-and-conditions/"
                    style={{ color: "#0000ff", textDecoration: "none" }}
                  >
                    Terms and Conditions
                  </a>{" "}
                  apply.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default modal;
