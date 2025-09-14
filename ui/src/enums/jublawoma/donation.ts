export enum DonationProductUnit {
  KILOGRAM = "KILOGRAM",
  LITER = "LITER",
  PIECE = "PIECE",
  TUBE = "TUBE",
  JAR = "JAR",
  BOX = "BOX",
  FRANCS = "FRANCS"
}

export namespace DonationProductUnit {
  export const translate = (value: DonationProductUnit, quantity: number) => {
    switch (value) {
      case DonationProductUnit.KILOGRAM:
        return "Kilogram";
      case DonationProductUnit.LITER:
        return "Liter";
      case DonationProductUnit.PIECE:
        return "Stück";
      case DonationProductUnit.TUBE:
        return quantity === 1 ? "Tube" : "Tuben";
      case DonationProductUnit.JAR:
        return quantity === 1 ? "Glas" : "Gläser";
      case DonationProductUnit.BOX:
        return quantity === 1 ? "Packung" : "Packungen";
      case DonationProductUnit.FRANCS:
        return "Franken";
    }
  }
}
