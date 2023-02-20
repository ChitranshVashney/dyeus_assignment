import React, { useMemo, useState } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useBombStats from '../../hooks/useBombStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import useModal from '../../hooks/useModal';
import useZap from '../../hooks/useZap';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
// import { Bomb as bombTesting } from '../../bomb-finance/deployments/deployments.testing.json';
//import { Bomb as bombProd } from '../../bomb-finance/deployments/deployments.mainnet.json';
import { roundAndFormatNumber } from '../../0x';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Paper,Typography ,TableRow,TableCell,TableBody,Table,CardHeader} from '@material-ui/core';
import ZapModal from '../Bank/components/ZapModal';
import { Alert } from '@material-ui/lab';
import { IoCloseOutline } from 'react-icons/io5';
import { BiLoaderAlt } from 'react-icons/bi';
import { makeStyles } from '@material-ui/core/styles';
import useBombFinance from '../../hooks/useBombFinance';
//import { ReactComponent as IconTelegram } from '../../assets/img/telegram.svg';
import { Helmet } from 'react-helmet';
import BombImage from '../../assets/img/bomb.png';
//import useBombMaxiStats from '../../hooks/useBombMaxiStats';

import HomeImage from '../../assets/img/background.jpg';
import BombFinanceSummary from '../../newcomponents/BombFinanceSummary';
const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;
const TITLE = 'bomb.money | BTC pegged algocoin';

// const BackgroundImage = createGlobalStyle`
//   body {
//     background-color: grey;
//     background-size: cover !important;
//   }
// `;

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      // marginTop: '10px'
    },
  },

  SummaryCard: {
  Width: '100%',
  },
}));

const Home = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const bombFtmLpStats = useLpStatsBTC('BOMB-BTCB-LP');
  const bShareFtmLpStats = useLpStats('BSHARE-BNB-LP');
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bombFinance = useBombFinance();
  // const bombmaxi = useBombMaxiStats('0xd6f52e8ab206e59a1e13b3d6c5b7f31e90ef46ef000200000000000000000028');

  // console.log(bombmaxi);
  // let bomb;
  // if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  //   bomb = bombTesting;
  // } else {
  //   bomb = bombProd;
  // }

  const buyBombAddress = //'https://app.1inch.io/#/56/swap/BTCB/BOMB';
    //  'https://pancakeswap.finance/swap?inputCurrency=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c&outputCurrency=' +
    'https://app.bogged.finance/bsc/swap?tokenIn=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c&tokenOut=0x522348779DCb2911539e76A1042aA922F9C47Ee3';
  //https://pancakeswap.finance/swap?outputCurrency=0x531780FAcE85306877D7e1F05d713D1B50a37F7A';
  const buyBShareAddress = //'https://app.1inch.io/#/56/swap/BNB/BSHARE';
    'https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0x531780FAcE85306877D7e1F05d713D1B50a37F7A';
  const buyBusmAddress =
    'https://app.bogged.finance/bsc/swap?tokenIn=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&tokenOut=0x6216B17f696B14701E17BCB24Ec14430261Be94A';
  const bombLPStats = useMemo(() => (bombFtmLpStats ? bombFtmLpStats : null), [bombFtmLpStats]);
  const bshareLPStats = useMemo(() => (bShareFtmLpStats ? bShareFtmLpStats : null), [bShareFtmLpStats]);
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const bombLpZap = useZap({ depositTokenName: 'BOMB-BTCB-LP' });
  const bshareLpZap = useZap({ depositTokenName: 'BSHARE-BNB-LP' });

  const [onPresentBombZap, onDissmissBombZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bombLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBombZap();
      }}
      tokenName={'BOMB-BTCB-LP'}
    />,
  );

  const [onPresentBshareZap, onDissmissBshareZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bshareLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBshareZap();
      }}
      tokenName={'BSHARE-BNB-LP'}
    />,
  );

  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  // const [onPresentIntroVid] = useModal(
  //   <grid>
  //     <Paper>
  //       <div>
  //         <iframe
  //           width="560"
  //           height="315"
  //           src="https://www.youtube.com/embed/nhCWmmRNNhc"
  //           title="YouTube video player"
  //           frameborder="0"
  //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //           allowfullscreen
  //         ></iframe>
  //       </div>
  //     </Paper>
  //   </grid>,
  // );

  return (
    <Page>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <BackgroundImage />
      <Grid container spacing={3}>
        {/* Logo */}
        <Grid
          item
          xs={12}
          sm={4}
          style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden' }}
        >
          <img src={BombImage} alt="Bomb.money" style={{ maxHeight: '240px' }} />
        </Grid>
        {/* Explanation text */}
        <Grid item xs={12} sm={8}>
       <Paper>
       <Box p={4} style={{ textAlign: 'center' }}>
              <h1>BOMB: BITCOIN SAFETY + DEFI YIELDS</h1>
              <p>
                <strong>BOMB is pegged via algorithm to a 10,000:1 ratio to BTC. $100k BTC = $10 BOMB PEG</strong>
              </p>
              <p>
                <h2>Best Algocoin | 0.5%+ DAILY | Audited | Doxxed team</h2>
                {/* Stake your BOMB-BTC LP in the Farm to earn BSHARE rewards. Then stake your earned BSHARE in the
                Boardroom to earn more BOMB! */}
              </p>
              <p>
                {/* <IconTelegram alt="telegram" style={{ fill: '#dddfee', height: '15px' }} /> */}
                Join our{' '}
                <a
                  href="https://t.me/bombmoneybsc"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: '#dddfee' }}
                >
                  Telegram
                </a>{' '}
                or{' '}
                <a
                  href="https://discord.bomb.money"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ color: '#dddfee' }}
                >
                  Discord
                </a>{' '}
                to find out more!
              </p>

              <button onClick={openModal} className="shinyButtonSecondary">
                Learn about BOMB
                {modal ? (
                  <section className="modal__bg">
                    <div className="modal__align">
                      <div className="modal__content" modal={modal}>
                        <IoCloseOutline className="modal__close" arial-label="Close modal" onClick={setModal} />
                        <div className="modal__video-align">
                          {videoLoading ? (
                            <div className="modal__spinner">
                              {' '}
                              <BiLoaderAlt className="modal__spinner-style" fadeIn="none" />
                            </div>
                          ) : null}
                          <iframe
                            className="modal__video-style"
                            onLoad={spinner}
                            loading="lazy"
                            width="800"
                            height="500"
                            src="https://www.youtube.com/embed/nhCWmmRNNhc"
                            title="BOMB Intro Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullscreen
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : null}
              </button>
            </Box>
       </Paper>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} justify="center" style={{ margin: '12px', display: 'flex' }}>
            <Alert variant="filled" severity="info">
              <h2>BOMB Cycle: Guide to Indefinite Printing</h2>
              <b>How to maximize earnings while keeping BOMB printing!</b>{' '}
              <Button
                href="https://bombbshare.medium.com/the-bomb-cycle-how-to-print-forever-e89dc82c12e5"
                target={'_blank'}
                className="shinyButton"
                style={{ margin: '10px' }}
              >
                READ ARTICLE
              </Button>
            </Alert>
          </Grid>
        </Grid>
       {/* New Bomb Finance Summary */}
       {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={12}  >
          <Box >
              <h1>Bom Finance Summary</h1>
              </Box>
          </Grid>
        </Grid> */}
        {/* TVL */}
        <Grid item xs={12} sm={4}>
          <Card style={{'paddingTop': '10px'}}>
          <CardContent align="center">
              <h2>Total Value Locked</h2>
              <CountUp style={{ fontSize: '25px' }} end={TVL} separator="," prefix="$" />
            </CardContent>
          </Card>
        </Grid>

        {/* Wallet */}
        <Grid item xs={12} sm={8}>
          <Card style={{ height: '100%' }}>
            <CardContent align="center" style={{ marginTop: '2.5'}}>
              {/* <h2 style={{ marginBottom: '20px' }}>Wallet Balance</h2> */}
              <Button href="https://bomb.farm/" className="shinyButtonGreen" style={{ margin: '5px' }}>
                Autovaults
              </Button>
              <Button
                href={buyBombAddress}
                style={{ margin: '5px' }}
                target="_blank"
                className={'shinyButton ' + classes.button}
              >
                Buy BOMB
              </Button>
              <Button
                href={buyBShareAddress}
                className={'shinyButton ' + classes.button}
                target="_blank"
                style={{ margin: '5px' }}
              >
                Buy BSHARE
              </Button>
              <Button
                href={buyBusmAddress}
                className={'shinyButton ' + classes.button}
                target="_blank"
                style={{ margin: '5px' }}
              >
                Buy BUSM
              </Button>
              <Button
                target="_blank"
                href="https://dexscreener.com/bsc/0x84392649eb0bc1c1532f2180e58bae4e1dabd8d6"
                className="shinyButton"
                style={{ margin: '5px' }}
              >
                BOMB Chart
              </Button>
              <Button
                target="_blank"
                href="https://dexscreener.com/bsc/0x1303246855b5b5ebc71f049fdb607494e97218f8"
                className="shinyButton"
                style={{ margin: '5px' }}
              >
                BSHARE Chart
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* <BombFinanceSummary/> */}
     <Grid item xs={12} sm={12}>
     <Paper>
      <Grid container spacing={3}>
          <Grid item sm={12} xs={12} style={{'textAlign':"center"}}><h1>Bomb Finance Summary</h1></Grid>
          <Grid item xs={12} sm={10}>
          <Table >
              <TableBody>
                <TableRow>
                  <TableCell>Current Supply</TableCell>
                  <TableCell align="right">100</TableCell>
                  <TableCell align="right">1000</TableCell>
                  <TableCell align="right">$10</TableCell>
                  <TableCell>
                    <img src="https://via.placeholder.com/50x50" alt="Logo" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={12} sm={2}>
          <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography>Current Epoch</Typography>
                <Typography>Value</Typography>
              </Grid>
              <Grid item>
                <Typography>Next Epoch</Typography>
                <Typography>Value</Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <Typography>Element 1</Typography>
                    <Typography>Value</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Element 2</Typography>
                    <Typography>Value</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>Element 3</Typography>
                    <Typography>Value</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      
       <Grid item xs={12} sm={12}>
       {/* <Card className={classes.SummaryCard}>
      <CardHeader title="Bomb Finance Summary" />
      
    </Card> */}

       </Grid>
      </Grid>
      </Paper>
     </Grid>
     {/* section2 */}
  <Grid item xs={12} sm={12}>
  <Grid container spacing={3}>
    <Grid item xs={12} sm = {8}>
         <Grid container spacing={2}>
          <Grid item xs={12} sm={12} style={{justifyContent:"flex-end"}}> <p>Read Investment Strategy</p></Grid>
         <Grid item xs={6}><Button className="shinyButtonSecondary" style={{width:"100%"}}>Chat on Discord</Button></Grid>
         <Grid item xs={6} > 
         <Button  className="shinyButtonSecondary" style={{width:"100%"}}>
         Read Docs
                </Button></Grid>
         <Grid item xs={12} >
          <Card>
            <CardContent align="center" style={{ position: 'relative' }}>
               
                    <Grid container spacing={0} >
                <Grid item style={{display:'flex'}}>
              <TokenSymbol symbol="BOMB" />
                </Grid>
                <Grid item >
                   <p><strong>Boardroom</strong> <span style={{backgroundColor:"green"}}>Recommended</span> </p>
                  <p>Stake BSHARE and earn BOMB every epoch</p>
                   <hr/>
                </Grid>
                <Grid item ></Grid>
              </Grid>
            
            <Grid item xs={12} >
              <p style={{textAlign:"end",paddingRight:"30px"}}>Total Staked: $7250</p>
            </Grid>
          <Grid container  direction={"row"} justifyContent={"space-evenly"}>
                  <Grid item >
                    <p>Daily Returns</p>
                    <p>2%</p>
                  </Grid>
                  <Grid item >
                    <p>Your Stake:</p>
                    <p>6.0000</p>
                    <p>=$117.12</p>
                  </Grid>
                  <Grid item >
                    <p>Earned:</p>
                    <p>1660.0000</p>
                    <p>=$298.12</p>
                  </Grid>
                 <Grid item  >
                 <Grid container  alignItems="flex-end"  >
                   <Grid item><Button style={{borderRadius:"20px",border:"2px solid white"}}>Deposit</Button></Grid>
                   <Grid item ><Button style={{borderRadius:"20px",border:"2px solid white"}}>WithDrawl</Button></Grid>
                   <Grid item ><Button style={{borderRadius:"20px",border:"2px solid white"}}>Claim Rewards</Button></Grid>
                  </Grid>
                 </Grid>
          </Grid>
            </CardContent>
          </Card>

         </Grid>
    </Grid>
    </Grid>
     {/* Latest News */}
     <Grid item xs={12} sm = {4} >
      <Paper style={{height:"100%"}}>
        <p>Latest News</p>
      </Paper>
</Grid>
    </Grid>
  </Grid>
  {/* section 3 */}
  <Grid item xs={12}>
  <Card>
            <CardContent style={{ position: 'relative' }}>
               <Grid container justifyContent="space-between">
              <Grid item>
              <p style={{fontSize:"1.5rem",marginLeft:"0px"}}><strong>Bomb Farms</strong></p>
                <p style={{fontSize:"0.8rem"}}>Stake your LP tokens in our farms to start earning $BSHARE</p>
              </Grid>
              <Grid item><Button style={{borderRadius:"20px",border:"2px solid white"}}>Claim All</Button></Grid>
               </Grid>
               <hr style={{height:"0.1px"}}/>
                    <Grid container spacing={0} >
                <Grid item style={{display:'flex'}}>
              <TokenSymbol symbol="BOMB" />
                </Grid>
                <Grid item >
                   <p><strong>BOMB-BTCB</strong> <span style={{backgroundColor:"green"}}>Recommended</span> </p>
                   <hr/>
                </Grid>
                <Grid item ></Grid>
              </Grid>
            
            <Grid item xs={12} >
              <p style={{textAlign:"end",paddingRight:"30px"}}>Total Staked: $7250</p>
            </Grid>
          <Grid container  direction={"row"} justifyContent={"space-evenly"}>
                  <Grid item >
                    <p>Daily Returns</p>
                    <p>2%</p>
                  </Grid>
                  <Grid item >
                    <p>Your Stake:</p>
                    <p>6.0000</p>
                    <p>=$117.12</p>
                  </Grid>
                  <Grid item >
                    <p>Earned:</p>
                    <p>1660.0000</p>
                    <p>=$298.12</p>
                  </Grid>
                 <Grid item  >
                 <Grid container  alignItems="flex-end"  >
                   <Grid item><Button style={{borderRadius:"20px",border:"2px solid white"}}>Deposit</Button></Grid>
                   <Grid item ><Button style={{borderRadius:"20px",border:"2px solid white"}}>WithDrawl</Button></Grid>
                   <Grid item ><Button style={{borderRadius:"20px",border:"2px solid white"}}>Claim Rewards</Button></Grid>
                  </Grid>
                 </Grid>
          </Grid>
          <hr style={{color:"skyblue"}}/>
          <Grid container spacing={0} >
                <Grid item style={{display:'flex'}}>
              <TokenSymbol symbol="BOMB" />
                </Grid>
                <Grid item >
                   <p><strong>BSHARE-BNB</strong> <span style={{backgroundColor:"green"}}>Recommended</span> </p>
                   <hr/>
                </Grid>
                <Grid item ></Grid>
              </Grid>
            
            <Grid item xs={12} >
              <p style={{textAlign:"end",paddingRight:"30px"}}>Total Staked: $7250</p>
            </Grid>
          <Grid container  direction={"row"} justifyContent={"space-evenly"}>
                  <Grid item >
                    <p>Daily Returns</p>
                    <p>2%</p>
                  </Grid>
                  <Grid item >
                    <p>Your Stake:</p>
                    <p>6.0000</p>
                    <p>=$117.12</p>
                  </Grid>
                  <Grid item >
                    <p>Earned:</p>
                    <p>1660.0000</p>
                    <p>=$298.12</p>
                  </Grid>
                 <Grid item  >
                 <Grid container  alignItems="flex-end"  >
                   <Grid item><Button style={{borderRadius:"20px",border:"2px solid white"}}>Deposit</Button></Grid>
                   <Grid item ><Button style={{borderRadius:"20px",border:"2px solid white"}}>WithDrawl</Button></Grid>
                   <Grid item ><Button style={{borderRadius:"20px",border:"2px solid white"}}>Claim Rewards</Button></Grid>
                  </Grid>
                 </Grid>
          </Grid>
            </CardContent>

          </Card>
  </Grid>
  {/* section 4 */}
  <Grid item xs={12}>
  <Card>
            <CardContent style={{ position: 'relative' }}>
               <Grid container justifyContent="space-between">
            {/* <Grid item style={{display:'flex',marginLeft:"0px",marginRight:"0px"}}>
              <TokenSymbol symbol="BOMB" />
                </Grid>
                 */}
              <Grid item>
              <p style={{fontSize:"1.5rem",marginLeft:"0px"}}><TokenSymbol symbol="BOMB" /><strong>Bonds</strong></p>
                <p style={{fontSize:"0.8rem"}}>BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1</p>
              </Grid>
                 </Grid>
               
          {/* <Grid container spacing={0} >
                <Grid item style={{display:'flex'}}>
              <TokenSymbol symbol="BOMB" />
                </Grid>
                <Grid item >
                   <p><strong>BSHARE-BNB</strong> <span style={{backgroundColor:"green"}}>Recommended</span> </p>
                   <hr/>
                </Grid>
                <Grid item ></Grid>
              </Grid> */}
            
     
          <Grid container  direction={"row"} justifyContent={"space-evenly"}>
                  <Grid item >
                    <p>Current price: (Bomb)^2</p>
                    <p><strong>BBond = 6.2872 BTCB</strong></p>
                  </Grid>
                  <Grid item >
                    <p>Available to redeem</p>
                    <p style={{fontSize:"1.5rem"}}><strong>$ 456</strong></p>
                  </Grid>
                  <Grid item >
                    <p>Your Stake:</p>
                    <p>6.0000</p>
                    <p>=$117.12</p>
                  </Grid>
                  
          </Grid>
            </CardContent>

          </Card>
  </Grid>
    {/*  */}
      </Grid>
    </Page>
  );
};

export default Home;
