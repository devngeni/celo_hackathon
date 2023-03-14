import multichainWallet from 'multichain-crypto-wallet';

export const createMultiChainWallet = async () => {
    const wallet  = multichainWallet.createWallet({
        network: 'ethereum',
    })
    console.log(wallet);
    
    return wallet
};