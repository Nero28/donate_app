import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import * as  formattingFunctions  from "../core/utils/index";

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];
const amountsMockDonates = [];
mockDonates.map((element) => {
  amountsMockDonates.push(element.amount);
});

export default class App {
  #donateBlock;
  #donateList;
  constructor() {
    this.state = {
      donates: [...mockDonates],
      totalAmount: formattingFunctions.calculateSumOfNumbers(amountsMockDonates),
    };

    this.#donateBlock = new DonateForm(
      this.createNewDonate.bind(this),
      this.state.totalAmount
    );
    this.#donateList = new DonateList(this.state.donates);
  }

  createNewDonate(newDonate) {
    this.state.donates.push(newDonate);
    this.state.totalAmount += Number(newDonate.amount);
    this.#donateList.updateDonates(this.state.donates);
    this.#donateBlock.updateTotalAmount(this.state.totalAmount);
  }

  run() {
    const donateBlockHTML = this.#donateBlock.render();
    const donateListHTML = this.#donateList.render();

    return document.body.append(donateBlockHTML, donateListHTML);
  }
}
