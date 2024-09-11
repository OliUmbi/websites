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
  export const translate = (value: DonationProductUnit) => {
    switch (value) {
      case DonationProductUnit.KILOGRAM:
        return "Kilogram";
      case DonationProductUnit.LITER:
        return "Liter";
      case DonationProductUnit.PIECE:
        return "Stück";
      case DonationProductUnit.TUBE:
        return "Tube";
      case DonationProductUnit.JAR:
        return "Glass";
      case DonationProductUnit.BOX:
        return "Packung";
      case DonationProductUnit.FRANCS:
        return "Franken";
    }
  }
}
