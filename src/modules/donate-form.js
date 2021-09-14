import { Settings as Set } from "../core/constants/settings";

export class DonateForm {
  #donateForm;
  constructor(createNewDonate, totalAmount) {
    this.createNewDonate = createNewDonate;
    this.#donateForm = document.createElement("form");
    this.#donateForm.className = "donate-form";
    this.totalAmount = totalAmount;
    this.#donateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const { target } = event;
      const donateAmount = target.querySelector("input");
      if (donateAmount.value === "") {
        alert("Пожалуйста, введите сумму доната!");
      } else {
        const newDonate = { date: new Date(), amount: donateAmount.value };
        this.createNewDonate(newDonate);
        donateAmount.value = "";
      }
    });
    this.totalAmountElement = document.createElement("h1");
    this.totalAmountElement.id = "total-amount";
    this.totalAmountElement.textContent = `${this.totalAmount}${Set.currency}`;
  }

  updateTotalAmount(newAmount) {
    this.totalAmountElement.textContent = `${newAmount}${Set.currency}`;
    return this.totalAmountElement;
  }

  #getTotalAmount() {
    return this.totalAmountElement;
  }

  #getDonateForm() {
    const donateFormLabel = document.createElement("label");
    donateFormLabel.className = "donate-form__input-label";

    const donateFormInput = document.createElement("input");
    donateFormInput.className = "donate-form__donate-input";
    donateFormInput.name = "amount";
    donateFormInput.type = "number";
    donateFormInput.max = 100;
    donateFormInput.min = 0;
    donateFormInput.required = "";

    donateFormLabel.append(donateFormInput);
    return donateFormLabel;
  }
  #createButtonDonate() {
    const donateButton = document.createElement("button");
    donateButton.className = "donate-form__submit-button";
    donateButton.type = "submit";
    donateButton.textContent = "Задонатить";
    return donateButton;
  }

  render() {
    this.#donateForm.append(
      this.#getTotalAmount(),
      this.#getDonateForm(),
      this.#createButtonDonate()
    );
    return this.#donateForm;
  }
}
