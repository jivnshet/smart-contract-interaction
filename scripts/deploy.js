const hre=require('hardhat')

async function main(){
    const CounterContract=await hre.ethers.getContractFactory("Counter");
    const counterContract=await CounterContract.deploy(10)
    await counterContract.deployed()
    console.log(`Contract deployed at address ${counterContract.address}`)

    let count=await counterContract.functions.getCounter()
    console.log(`Currently the counter is at ${count}`)

    const increment=await counterContract.functions.increment(1)
    await increment.wait()
    count=await counterContract.functions.getCounter()
    console.log(`Incremented by 1. The counter is now at ${count}`)
}

main().then(()=>process.exit(0)).catch(err=>{console.error(err); process.exit(1)})