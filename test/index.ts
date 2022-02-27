import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter__factory } from "../typechain";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    // const Greeter = await ethers.getContractFactory("Greeter");
    // const greeter = await Greeter.deploy("Hello, world!");
    // await greeter.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");

    const signers = await ethers.getSigners();

    const greeter = await new Greeter__factory(signers[0]).deploy("Hello World!");

    expect(await greeter.greet()).to.eq("Hello World!");

    await greeter.setGreeting("Hola mundo!");

    expect(await greeter.greet()).to.eq("Hola mundo!");
  });
});