import styles from "./BombFinanceSummary.module.css";
import React from "react";
const BombFinanceSummary = () => {
  return (
    <section className={styles.bombfinancesummary}>
      <div className={styles.currentEpoch258Container}>
        <p className={styles.currentEpoch}>
          <span className={styles.currentEpoch1}>Current Epoch</span>
        </p>
        <p className={styles.p}>
          <b className={styles.b}>258</b>
        </p>
      </div>
      <div className={styles.nextEpochInContainer}>
        <p className={styles.currentEpoch}>
          <b className={styles.b1}>03:38:36</b>
        </p>
        <p className={styles.nextEpochIn}>
          <span className={styles.currentEpoch1}>Next Epoch in</span>
        </p>
      </div>
      <img
        className={styles.bombfinancesummaryChild}
        alt=""
        src="../line-75.svg"
      />
      <img
        className={styles.bombfinancesummaryItem}
        alt=""
        src="../line-81.svg"
      />
      <img
        className={styles.bombfinancesummaryInner}
        alt=""
        src="../line-85.svg"
      />
      <img className={styles.lineIcon} alt="" src="../line-85.svg" />
      <img
        className={styles.bombfinancesummaryChild1}
        alt=""
        src="../line-87.svg"
      />
      <img
        className={styles.bombfinancesummaryChild2}
        alt=""
        src="../line-87.svg"
      />
      <img
        className={styles.bombfinancesummaryChild3}
        alt=""
        src="../line-761.svg"
      />
      <div className={styles.unity}>$BOMB</div>
      <div className={styles.ellipseParent}>
        <img className={styles.groupChild} alt="" src="../ellipse-2874.svg" />
        <img className={styles.bsharesIcon} alt="" src="../bshares5@2x.png" />
      </div>
      <div className={styles.unity1}>$BSHARE</div>
      <div className={styles.unityParent}>
        <div className={styles.unity2}>11.43K</div>
        <div className={styles.unity3}>8.49m</div>
        <div className={styles.unity4}>
          <p className={styles.currentEpoch}>$300</p>
          <p className={styles.btcb}>13000 BTCB</p>
        </div>
        <img
          className={styles.wmetamaskIcon}
          alt=""
          src="../wmetamask@2x.png"
        />
      </div>
      <div className={styles.unity5}>$BBOND</div>
      <div className={styles.unityGroup}>
        <div className={styles.unity6}>20.00K</div>
        <div className={styles.unity7}>175k</div>
        <div className={styles.unity8}>
          <p className={styles.currentEpoch}>$0.28</p>
          <p className={styles.btcb}>1.15 BTCB</p>
        </div>
        <img
          className={styles.wmetamaskIcon}
          alt=""
          src="../wmetamask1@2x.png"
        />
      </div>
      <div className={styles.lastEpochTwapContainer}>
        <span>
          <span className={styles.lastEpochTwap}>Last Epoch TWAP:</span>
          <span className={styles.span}>{` `}</span>
        </span>
        <span className={styles.span1}>1.22</span>
      </div>
      <div className={styles.unitePricetwap}>
        <span>
          <span className={styles.lastEpochTwap}>Live TWAP:</span>
          <span className={styles.span}>{` `}</span>
        </span>
        <span className={styles.span1}>1.17</span>
      </div>
      <div className={styles.tvl5002412}>
        <span>
          <span className={styles.lastEpochTwap}>TVL:</span>
          <span className={styles.span}>{` `}</span>
        </span>
        <b className={styles.b2}>$5,002,412</b>
      </div>
      <div className={styles.wmetamaskParent}>
        <img
          className={styles.wmetamaskIcon2}
          alt=""
          src="../wmetamask2@2x.png"
        />
        <div className={styles.unity9}>
          <p className={styles.currentEpoch}>{`$0.24 `}</p>
          <p className={styles.btcb}>1.05 BTCB</p>
        </div>
        <div className={styles.unity10}>8.66M</div>
        <div className={styles.unity11}> 60.9k</div>
      </div>
      <div className={styles.bombFinanceSummary}>Bomb Finance Summary</div>
      <div className={styles.unity12}>Price</div>
      <div className={styles.unity13}>Current Supply</div>
      <div className={styles.unity14}>Total Supply</div>
      <div className={styles.rectangleDiv} />
      <img className={styles.bombIcon} alt="" src="../bomb@2x.png" />
    </section>
  );
};

export default BombFinanceSummary;
