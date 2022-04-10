# Solarpunk-DAO
Developed at [DAO Hacks 2022](https://showcase.ethglobal.com/daohacks/solarpunk-dao-y0mjq)  
[Live Demo](https://solarpunkdao.vercel.app//)

## About
This project let Punk Cities' players have governance interactions based on the in-real-life places minted as NFTs on the game. Punk Cities' players can join Solapunk DAO and create proposals on their NFTs and get Energy on Chips deposited by the treasury to upgrade other places. 

This project uses Punk Cities ERC1155 contract to mint automatically energy and chips once a proposal is approved on the Solapunk Governance contract, it uses Punk Cities NFTs to match proposals to IRL places, we have used LearnWeb3 DAO contract as a template, we used Lens API components on Solarpunks repo for the frontend, we used IPFS to upload the profile and proposal image into IPFS and we have deployed the governance contract on Polygon Mumbai Testnet  

## Contracts

[📚 Solarpunk DAO](https://mumbai.polygonscan.com/address/0x74215784157f79CFce433BaC808caE8E3195fD37)  
[📚 Punk Cities](https://mumbai.polygonscan.com/address/0x092BBe9022D421940B6D74799179267e5c822895)

### Pre-requisite

- Lens-API latest
- NodeJs >= 14.x
- NextJs 12.x
- Tailwindcss v3.x
- Solidity latest
- Moralis SDK
- EthersJs v5.x
- Apollo client v3.x
- Metamask

### Backend service

- [Moralis](https://moralis.io)
- [NFT.storage](https://nft.storage)


### Dev Environemnt

Working with Polygon Mumbai testnet contracts (further update to deploy your own contracts)

0. Install [Metamask](https://metamask.io)

1. Register accounts in [Moralis](https://moralis.io) and [NFT.storage](https://nft.storage)

2. Make `.env.local`

```shell
touch .env.local
```

add environment variable

```text
NEXT_PUBLIC_NFT_TOKEN="eyJhbGciOi........"
```

3. Install dependencies

```bash
yarn install
```

4. Start developmment

```bash
yarn dev
```

5. 📱 Open http://localhost:3000 to see the app

### Production

Live deployment is made via Github / Vercel integration, as a vercel.app; from master branch.

Open [solarpunks.vercel.app](https://solarpunks.vercel.app)


### Related to LensAPI integration

1. Apollo Client

We adapt the Apollo provider to call LensAPI, [source](https://github.com/rtang03/solarpunks/blob/master/lib/apolloClient.js).

2. React hooks

We develop 2 react hooks for orchreshration, when submitting transaction.

- [useSendTransWithSig](https://github.com/rtang03/solarpunks/blob/master/hooks/useSendTransWithSig.js)
- [useQueryTxIndexed](https://github.com/rtang03/solarpunks/blob/master/hooks/useQueryTxIndexed.js)

