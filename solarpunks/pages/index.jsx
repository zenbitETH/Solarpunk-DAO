import Layout from "../components/Layout";
import Dashboard from "./dashboard";
import { useMoralis } from "react-moralis";
import Link from "next/link";

const Home = () => {
  const { account, isAuthenticated } = useMoralis();

  return (
    <Layout home={true}>
      <div className="flex min-h-screen flex-col items-center justify-center">

        {/*<div className="mt-32">
          <Link href="/new-place">
            <a>NewPost</a>
          </Link>
          </div> */}
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <div className="grid xl:grid-cols-2 mt-36">
          <img
            src="https://punkcities.mypinata.cloud/ipfs/QmS3ouRXq55MZ6LU8gCHfmwGCFgNS257pdnm83CTsePuns"
            className="xl:-mt-20 xl:p-20"
          />
          <div className="justify-items-center text-center mt-40">
            <div className=" xl:text-6xl text-4xl xl:mx-10 font-exo items-center items-center text-white">
            DAO Governance for IRL NFTs minted on
            <span className="text-solar-100 hover:text-cyber-100 cursor-pointer"> Punk Cities</span>
            </div>            
            <div className="text-2xl mx-10 font-exo text-center mt-20 text-white">Developed @</div>
            <img className="text-white -mt-16 font-black hover:animate-pulse" src="https://dao.ethglobal.com/static/img/daohacks-logo.svg"/>
            <div >
              
              <Link className="" href={"https://showcase.ethglobal.com/lfgrow/solarpunks-86vjx"}> </Link>
            </div>
          </div>
          </div>
          <div className="h-screen mt-20 pb-64">
            <div className="text-6xl mx-10 text-solar-100 font-black hover:animate-pulse">How to join?</div>
            <div className="grid xl:grid-cols-3 gap-5 mt-20 text-white text-2xl font-exo">
              <a href={"https://punkcity.surge.sh"}>
              <div className="joinBG">1.  Start a new game
                <img src="https://punkcities.mypinata.cloud/ipfs/QmPoSnaj68Lcbs8TiAT1Lg9aodWcXE27t94kjhAw8xYZwn" className="p-5 w-3/4 mx-auto"/>
              </div>
              </a>
              <div className="joinBG cursor-default">2. Mint Places NFTs and get ⚡ and 💽
                <img src="https://punkcities.mypinata.cloud/ipfs/bafybeidufeb4xfrzwgzcx3iaabbyu7ck7p2tij3c2w2azixolxmlyouqii/8-Kids-Playground.png" className="w-3/4 mx-auto"/>
              </div>
              <div className="joinBG cursor-default">3. Connect to DAO w/Lens
                <div className="text-9xl p-10 "><div className="mb-10">🌞</div>🌿</div>
              </div>
              <div className="joinBG cursor-default">4. Deposit ⚡ and 💽 to the treasury
                <div className="text-[15rem] p-20 pt-44 pb-44">🏦</div>
              </div>
              <div className="joinBG cursor-default">5. Create proposals for your places NFTs
                <div className="text-[15rem] p-20 pt-40 ">💡</div>
              </div>
              <div className="joinBG cursor-default">6. Vote and fund proposals w/⚡and 💽  
                <div className="text-[15rem] p-20 pt-40">🗳️</div>
              </div>
            </div>
            <div className="text-6xl mt-20 mx-10 text-white font-black hover:animate-pulse">Built with:</div>
            <div className="grid grid-cols-5 gap-5 mt-20 text-white text-2xl font-exo">
              <a href="https://mumbai.polygonscan.com/address/0x092BBe9022D421940B6D74799179267e5c822895" className="bg-glass-100 hover:bg-solar-100 hover:text-night-100 rounded-lg p-5">1. Punk Cities rewards</a>
              <a href="https://testnets.opensea.io/collection/punk-cities" className="bg-glass-100 hover:bg-solar-100 hover:text-night-100 rounded-lg p-5">2. Punk Cities collection</a>
              <a href="https://github.com/LearnWeb3DAO/DAOHacks-Workshop" className="bg-glass-100 hover:bg-solar-100 hover:text-night-100 rounded-lg p-5">3. LearnWeb3 DAO</a>
              <a href="https://github.com/rtang03/solarpunks" className="bg-glass-100 hover:bg-solar-100 hover:text-night-100 rounded-lg p-5">4. Lens API w/Solarpunks</a>
              <a href="https://nft.storage/" className="bg-glass-100  hover:bg-solar-100 hover:text-night-100 rounded-lg p-5">5. IPFS w/NFT Storage</a>
            </div>

            <div className="text-6xl mt-20 mx-10 text-white font-black hover:animate-pulse">Future work:</div>
            <div className="grid grid-cols-3 gap-5 mt-20 text-white text-2xl font-exo">
              <div className="Future cursor-default">1. Add trees and nature 
                <div className="text-[15rem] p-20 py-40 ">🌳</div>
              </div>
              <div className="Future cursor-default">2. Fund proposals
                <div className="text-[15rem] p-20 py-40 ">⛲</div>
              </div>
              <div className="Future cursor-default">3. Pilot test in Queretaro México
                <div className="text-[15rem] p-20 py-40 ">🧪</div>
              </div>
            </div>
            
            <div className="text-6xl mx-10 text-white font-black hover:animate-pulse my-20">Team:</div>
            <div className="grid grid-cols-3 gap-5 mt-20 text-white text-2xl font-exo justify-items-center">
            <a href={"https://github.com/HabacucMX"}>
              <div className="teamMB"><img src="https://avatars.githubusercontent.com/u/57845110?s=400&u=5460231e3addfd30b2f4f35650c81206e3d7552f&v=4" className="bg-solar-100 rounded-full h-60 w-60 mb-5"></img>
              habacuc.eth</div></a>
              <a href={"https://github.com/Riki0923"}>
              <div className="teamMB"><img src="https://punkcities.mypinata.cloud/ipfs/QmWn7tUAon4n5BECnQmLZ4TjjWBas5eafELwYXHzJLs6MM" className="bg-solar-100 rounded-full h-60 w-60 mb-5"></img>
              Riki0923</div></a>
              <a href={"https://github.com/clocigno"}>
              <div className="teamMB"><img src="https://punkcities.mypinata.cloud/ipfs/QmRfsCPtygfqsHChiTdBUcv6A2Gpm9VKSbf3zR5jbvyNT9" className="bg-solar-100 rounded-full h-60 w-60 mb-5"></img>
              clocigno</div></a>
            </div>
        
          </div>
          
        </main>
      </div>
    </Layout>
  );
};

export default Home;
