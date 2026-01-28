import { TonCryptoWallet } from "./block/_ton";
import { BscCryptoWallet } from "./block/_bsc";
import { SandBoxCryptoWallet } from "./block/_sandbox";

export class CryptoRepository {
  isListenerActive: boolean;
  constructor() {
    this.isListenerActive = false;
  }

  get getBlock(){
    return {
      BSC: BscCryptoWallet,
      Ton: TonCryptoWallet,
    }
  }
  get getSandboxBlock(){
    return {
      BSC: SandBoxCryptoWallet,
      Ton: SandBoxCryptoWallet,
    }
  }
}
