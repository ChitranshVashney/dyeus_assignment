
        // {/* BOMB */}
        // <Grid item xs={12} sm={4}>
        //   <Card>
        //     <CardContent align="center" style={{ position: 'relative' }}>
        //       <Box mt={2}>
        //         <CardIcon>
        //           <TokenSymbol symbol="BOMB" />
        //         </CardIcon>
        //       </Box>
        //       <Button
        //         onClick={() => {
        //           bombFinance.watchAssetInMetamask('BOMB');
        //         }}
        //         style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
        //       >
        //         {' '}
        //         <b>+</b>&nbsp;&nbsp;
        //         <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(100%)' }} src={MetamaskFox} />
        //       </Button>
        //       <h2 style={{ marginBottom: '10px' }}>BOMB</h2>
        //       10,000 BOMB (1.0 Peg) =
        //       <Box>
        //         <span style={{ fontSize: '30px', color: 'white' }}>
        //           {bombPriceInBNB ? bombPriceInBNB : '-.----'} BTC
        //         </span>
        //       </Box>
        //       <Box>
        //         <span style={{ fontSize: '16px', alignContent: 'flex-start' }}>
        //           ${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'} / BOMB
        //         </span>
        //       </Box>
        //       <span style={{ fontSize: '12px' }}>
        //         Market Cap: ${roundAndFormatNumber(bombCirculatingSupply * bombPriceInDollars, 2)} <br />
        //         Circulating Supply: {roundAndFormatNumber(bombCirculatingSupply, 2)} <br />
        //         Total Supply: {roundAndFormatNumber(bombTotalSupply, 2)}
        //       </span>
        //     </CardContent>
        //   </Card>
        // </Grid>

        // {/* BSHARE */}
        // <Grid item xs={12} sm={4}>
        //   <Card>
        //     <CardContent align="center" style={{ position: 'relative' }}>
        //       <Button
        //         onClick={() => {
        //           bombFinance.watchAssetInMetamask('BSHARE');
        //         }}
        //         style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
        //       >
        //         {' '}
        //         <b>+</b>&nbsp;&nbsp;
        //         <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(100%)' }} src={MetamaskFox} />
        //       </Button>
        //       <Box mt={2}>
        //         <CardIcon>
        //           <TokenSymbol symbol="BSHARE" />
        //         </CardIcon>
        //       </Box>
        //       <h2 style={{ marginBottom: '10px' }}>BSHARE</h2>
        //       Current Price
        //       <Box>
        //         <span style={{ fontSize: '30px', color: 'white' }}>
        //           {bSharePriceInBNB ? bSharePriceInBNB : '-.----'} BNB
        //         </span>
        //       </Box>
        //       <Box>
        //         <span style={{ fontSize: '16px' }}>
        //           ${bSharePriceInDollars ? bSharePriceInDollars : '-.--'} / BSHARE
        //         </span>
        //       </Box>
        //       <span style={{ fontSize: '12px' }}>
        //         Market Cap: ${roundAndFormatNumber((bShareCirculatingSupply * bSharePriceInDollars).toFixed(2), 2)}{' '}
        //         <br />
        //         Circulating Supply: {roundAndFormatNumber(bShareCirculatingSupply, 2)} <br />
        //         Total Supply: {roundAndFormatNumber(bShareTotalSupply, 2)}
        //       </span>
        //     </CardContent>
        //   </Card>
        // </Grid>

        // {/* BBOND */}
        // <Grid item xs={12} sm={4}>
        //   <Card>
        //     <CardContent align="center" style={{ position: 'relative' }}>
        //       <Button
        //         onClick={() => {
        //           bombFinance.watchAssetInMetamask('BBOND');
        //         }}
        //         style={{ position: 'absolute', top: '10px', right: '10px', border: '1px grey solid' }}
        //       >
        //         {' '}
        //         <b>+</b>&nbsp;&nbsp;
        //         <img alt="metamask fox" style={{ width: '20px', filter: 'grayscale(100%)' }} src={MetamaskFox} />
        //       </Button>
        //       <Box mt={2}>
        //         <CardIcon>
        //           <TokenSymbol symbol="BBOND" />
        //         </CardIcon>
        //       </Box>
        //       <h2 style={{ marginBottom: '10px' }}>BBOND</h2>
        //       10,000 BBOND
        //       <Box>
        //         <span style={{ fontSize: '30px', color: 'white' }}>
        //           {tBondPriceInBNB ? tBondPriceInBNB : '-.----'} BTC
        //         </span>
        //       </Box>
        //       <Box>
        //         <span style={{ fontSize: '16px' }}>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'} / BBOND</span>
        //       </Box>
        //       <span style={{ fontSize: '12px' }}>
        //         Market Cap: ${roundAndFormatNumber((tBondCirculatingSupply * tBondPriceInDollars).toFixed(2), 2)} <br />
        //         Circulating Supply: {roundAndFormatNumber(tBondCirculatingSupply, 2)} <br />
        //         Total Supply: {roundAndFormatNumber(tBondTotalSupply, 2)}
        //       </span>
        //     </CardContent>
        //   </Card>
        // </Grid>
        // <Grid item xs={12} sm={6}>
        //   <Card>
        //     <CardContent align="center">
        //       <Box mt={2}>
        //         <CardIcon>
        //           <TokenSymbol symbol="BOMB-BTCB-LP" />
        //         </CardIcon>
        //       </Box>
        //       <h2>BOMB-BTCB PancakeSwap LP</h2>
        //       <Box mt={2}>
        //         <Button disabled onClick={onPresentBombZap} className="shinyButtonDisabledSecondary">
        //           Zap In
        //         </Button>
        //       </Box>
        //       <Box mt={2}>
        //         <span style={{ fontSize: '26px' }}>
        //           {bombLPStats?.tokenAmount ? bombLPStats?.tokenAmount : '-.--'} BOMB /{' '}
        //           {bombLPStats?.ftmAmount ? bombLPStats?.ftmAmount : '-.--'} BTCB
        //         </span>
        //       </Box>
        //       <Box>${bombLPStats?.priceOfOne ? bombLPStats.priceOfOne : '-.--'}</Box>
        //       <span style={{ fontSize: '12px' }}>
        //         Liquidity: ${bombLPStats?.totalLiquidity ? roundAndFormatNumber(bombLPStats.totalLiquidity, 2) : '-.--'}{' '}
        //         <br />
        //         Total Supply: {bombLPStats?.totalSupply ? roundAndFormatNumber(bombLPStats.totalSupply, 2) : '-.--'}
        //       </span>
        //     </CardContent>
        //   </Card>
        // </Grid>
        // <Grid item xs={12} sm={6}>
        //   <Card>
        //     <CardContent align="center">
        //       <Box mt={2}>
        //         <CardIcon>
        //           <TokenSymbol symbol="BSHARE-BNB-LP" />
        //         </CardIcon>
        //       </Box>
        //       <h2>BSHARE-BNB PancakeSwap LP</h2>
        //       <Box mt={2}>
        //         <Button onClick={onPresentBshareZap} className="shinyButtonSecondary">
        //           Zap In
        //         </Button>
        //       </Box>
        //       <Box mt={2}>
        //         <span style={{ fontSize: '26px' }}>
        //           {bshareLPStats?.tokenAmount ? bshareLPStats?.tokenAmount : '-.--'} BSHARE /{' '}
        //           {bshareLPStats?.ftmAmount ? bshareLPStats?.ftmAmount : '-.--'} BNB
        //         </span>
        //       </Box>
        //       <Box>${bshareLPStats?.priceOfOne ? bshareLPStats.priceOfOne : '-.--'}</Box>
        //       <span style={{ fontSize: '12px' }}>
        //         Liquidity: $
        //         {bshareLPStats?.totalLiquidity ? roundAndFormatNumber(bshareLPStats.totalLiquidity, 2) : '-.--'}
        //         <br />
        //         Total Supply: {bshareLPStats?.totalSupply ? roundAndFormatNumber(bshareLPStats.totalSupply, 2) : '-.--'}
        //       </span>
        //     </CardContent>
        //   </Card>
        // </Grid>