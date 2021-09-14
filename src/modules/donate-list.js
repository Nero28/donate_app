import { Settings as Set } from "../core/constants/settings";
import * as formattingFunctions from "../core/utils/index";

export class DonateList {
  constructor(donates) {
    this.donates = donates;
    this.donatesContainer = document.createElement("div");
    this.donatesContainer.className = "donates-container";
    this.donatesList = document.createElement("div");
    this.donatesList.className = "donates-container__donates";
  }

  updateDonates(updatedDonates) {
    this.donatesList.textContent = "";
    this.donatesContainer.append(this.#createDonatesList(updatedDonates));
    return this.donatesContainer;
  }

  #createDonatesList(donates) {
    donates.map((donate) => {
      const donateItem = document.createElement("div");
      donateItem.className = "donate-item";
      donateItem.textContent = `${formattingFunctions.getFormattedTime(
        donate.date
      )}  -   `;
      const amountDonateItem = document.createElement("b");
      amountDonateItem.textContent = `${donate.amount}${Set.currency}`;
      donateItem.append(amountDonateItem);
      this.donatesList.append(donateItem);
    });
    return this.donatesList;
  }

  render() {
    const donatesTitle = document.createElement("h2");
    donatesTitle.className = "donates-container__title";
    donatesTitle.textContent = "Список донатов";
    this.donatesContainer.append(
      donatesTitle,
      this.#createDonatesList(this.donates)
    );

    return this.donatesContainer;
  }
}
