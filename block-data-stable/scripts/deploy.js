const hre = require("hardhat");
// const { ethers, run, network } = require("hardhat")

async function main() {
  
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log(
    `Greeter was deployed to: ${greeter.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




// async function main() {

//   const Greeter = await hre.ethers.getContractFactory("Greeter");
//   console.log("Deploying contract...")
//   const greeter = await Greeter.deploy("Hello, Hardhat!");
//   await greeter.deployed()
//   console.log(`Deployed contract to: ${greeter.address}`)
//   // what happens when we deploy to our hardhat network?
//   if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
//     console.log("Waiting for 5 block confirmations...")
//     await greeter.deployTransaction.wait(5)
//     await verify(greeter.address, [])
//   }
// }

// // async function verify(contractAddress, args) {
// const verify = async (contractAddress, args) => {
//   console.log("Verifying contract...")
//   try {
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguments: args,
//     })
//   } catch (e) {
//     if (e.message.toLowerCase().includes("already verified")) {
//       console.log("Already Verified!")
//     } else {
//       console.log(e)
//     }
//   }
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
