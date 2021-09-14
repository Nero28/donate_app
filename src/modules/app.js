import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";

export default class App {
  #donateBlock;
  #donateList;
  constructor() {
    this.state = {
      donates: [],
      totalAmount: 0,
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
