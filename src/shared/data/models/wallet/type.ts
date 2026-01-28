
export type IBlockchainType = 'Ton' | 'BSC';


export type IWallet = {
  id: string;
  address: string;
  blockchain: IBlockchainType;
  type: 'forwarder' | 'payout';
  merchant_address: string;
  developer_address: string;
};


export interface IGeneralWallet {
  id: string;
  address: string;
  blockchain: IBlockchainType;
  type: 'forwarder' | 'payout';
}

export interface ISecureWallet extends IGeneralWallet {
  merchant_address: string;
  developer_address: string;
}