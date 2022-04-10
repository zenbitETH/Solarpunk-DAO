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
          <div className="grid grid-cols-2 mt-36">
          <img
            src="https://punkcities.mypinata.cloud/ipfs/QmS3ouRXq55MZ6LU8gCHfmwGCFgNS257pdnm83CTsePuns"
            className="-mt-20 p-20"
          />
          <div className="justify-items-center text-center mt-40">
            <div className=" text-6xl mx-10 font-exo items-center items-center text-white">
            DAO Governance for IRL NFTs minted on
            <span className="text-solar-100 hover:text-cyber-100 cursor-pointer"> Punk Cities</span>
            </div>
            <div>
            
            </div>
            
            <div className="text-2xl mx-10 font-exo text-center mt-20 text-white">Developed @</div>
            <img className="text-white -mt-16 font-black hover:animate-pulse" src="https://dao.ethglobal.com/static/img/daohacks-logo.svg"/>
            <div >
              
              <Link className="" href={"https://showcase.ethglobal.com/lfgrow/solarpunks-86vjx"}> </Link>
            </div>
          </div>
          </div>
          <div className="h-screen mt-20">
          <div className="text-6xl mx-10 text-solar-100 font-black hover:animate-pulse">How to join?</div>
          <div className="grid grid-cols-4 gap-5 mt-20 text-white text-2xl font-exo">
            <div className="bg-glass-100 rounded-lg p-5">1.  Start a new game
              <img src="https://punkcities.mypinata.cloud/ipfs/QmPoSnaj68Lcbs8TiAT1Lg9aodWcXE27t94kjhAw8xYZwn" className=" p-5"/>
            </div>
            <div className="bg-glass-100 rounded-lg p-5">2. Mint Places NFTs
              <img src="https://punkcities.mypinata.cloud/ipfs/bafybeidufeb4xfrzwgzcx3iaabbyu7ck7p2tij3c2w2azixolxmlyouqii/8-Kids-Playground.png" className=" p-5"/>
            </div>
            <div className="bg-glass-100 rounded-lg p-5">3. Get Energy and Chips
              <div className="text-8xl pt-20 animate-pulse">
                <div className="pb-10">⚡</div>
                <div>💽</div>
              </div>
            </div>
            <div className="bg-glass-100 rounded-lg p-5">4. Deposit to the treasury
              <div className="text-9xl pt-28 animate-pulse">🏦</div>
            </div>
          </div>
          {/*
          <div className="text-8xl mx-10 text-solar-100 font-black hover:animate-pulse mt-20">Team</div>
          <div className="grid grid-cols-3 gap-5 mt-20 text-white text-2xl font-exo justify-items-center">
            <div className="p-5 text-solar-100"><img src="https://avatars.githubusercontent.com/u/7686266?v=4" className="bg-solar-100 rounded-full h-60 w-60 mb-5"></img>
            <Link href={"https://github.com/rtang03"}>rtang03</Link>
            </div>
            <div className="p-5 text-solar-100"><img src="https://avatars.githubusercontent.com/u/57845110?s=400&u=5460231e3addfd30b2f4f35650c81206e3d7552f&v=4" className="bg-solar-100 rounded-full h-60 w-60 mb-5"></img>
            <Link href={"https://github.com/HabacucMX"}>habacuc.eth</Link>
            </div>
            <div className="p-5 text-solar-100"><img src="https://avatars.githubusercontent.com/u/36043359?v=4" className="bg-solar-100 rounded-full h-60 w-60 mb-5"></img>
            <Link href={"https://github.com/alessandromaci"}>alessandromaci</Link></div>
          </div>
          */}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
