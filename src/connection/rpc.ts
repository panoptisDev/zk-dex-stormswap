export enum SupportedChainId {
	MAINNET = 1,
	ROPSTEN = 3,
	RINKEBY = 4,
	GOERLI = 5,
	KOVAN = 42,
	ZKERA = 324,
	TZKERA = 280,

	BSC = 56,
	BSC_TESTNET = 97,

	ARBITRUM_ONE = 42161,
	ARBITRUM_RINKEBY = 421611,

	OPTIMISM = 10,
	OPTIMISTIC_KOVAN = 69,

	POLYGON = 137,
	POLYGON_MUMBAI = 80001,
}

export const CHAIN_IDS_TO_NAMES = {
	[SupportedChainId.MAINNET]: "mainnet",
	[SupportedChainId.ROPSTEN]: "ropsten",
	[SupportedChainId.RINKEBY]: "rinkeby",
	[SupportedChainId.GOERLI]: "goerli",
	[SupportedChainId.KOVAN]: "kovan",
	[SupportedChainId.BSC]: "bsc",
	[SupportedChainId.BSC_TESTNET]: "bsc_testnet",
	[SupportedChainId.ARBITRUM_ONE]: "arbitrum_one",
	[SupportedChainId.ARBITRUM_RINKEBY]: "arbitrum_rinkeby",
	[SupportedChainId.OPTIMISM]: "optimism",
	[SupportedChainId.OPTIMISTIC_KOVAN]: "optimistic_kovan",
	[SupportedChainId.POLYGON]: "polygon",
	[SupportedChainId.POLYGON_MUMBAI]: "polygon_mumbai",
	[SupportedChainId.ZKERA]: "zksync_era",
	[SupportedChainId.TZKERA]: "testnet_zksync_era",
};

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
	SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];

export const MULTICALL_ADDRESS: { [index: string]: string } = {
	// 1: "0x3a2Bd96Da4B14C30918aE0fC0E784E2F56120F1d",
	// 4: "0x6c4f9282bBD29992bF4F064F0165e805336Eef59",
	// 5: "0xD64c0FBEe803AfB35ed721a3E67261e1a41f86c5",
	// 97: "0x688EC8C059592104fC713E0dA9276e649302C4Ab",
	// 56: "0x6e568FcE995F5c7ddaFB8C0b74B3241328498F8A",
	// 137: "0xbfB508313126cf61CFb3BD7e570cC79C67998A53",
	// 80001: "0xd85620D66D32952b97764dF14302498006Cf90fB"
	324: "0x7082C0A96921669fCbc73c1C072e205f991e1383",
	280: "0x7082C0A96921669fCbc73c1C072e205f991e1383",
};

export const NATIVE_TOKEN: { [index: number]: string } = {
	1: "ETH",
	4: "ETH",
	5: "ETH",
	97: "BNB",
	56: "BNB",
	137: "WMATIC",
	80001: "WMATIC",
	324: "WETH",
	280: "WETH",
	// 324: "ETH",
	1666600000: "ONE",
	1666700000: "ONE",
};

export const BSC_TESTNET_NODES = ["https://rpc.ankr.com/bsc_testnet_chapel"];

export const BSC_NODES = [
	"https://bsc-dataseed.binance.org/",
	"https://bsc-dataseed1.defibit.io/",
	"https://bsc-dataseed1.ninicoin.io/",
	"https://bsc-dataseed2.defibit.io/",
];

export const NETWORK_DETAILS = {
	MAINNET: {
		chainId: `0x${SupportedChainId.MAINNET.toString(16)}`,
		chainName: CHAIN_IDS_TO_NAMES[SupportedChainId.MAINNET],
		chainRaw: SupportedChainId.MAINNET,
	},
	ZKERA: {
		chainId: `0x${SupportedChainId.ZKERA.toString(16)}`,
		chainName: CHAIN_IDS_TO_NAMES[SupportedChainId.ZKERA],
		chainRaw: SupportedChainId.ZKERA,
	},
	TZKERA: {
		chainId: `0x${SupportedChainId.TZKERA.toString(16)}`,
		chainName: CHAIN_IDS_TO_NAMES[SupportedChainId.TZKERA],
		chainRaw: SupportedChainId.TZKERA,
	},
	POLYGON_MUMBAI: {
		chainId: `0x${SupportedChainId.POLYGON_MUMBAI.toString(16)}`,
		chainName: CHAIN_IDS_TO_NAMES[SupportedChainId.POLYGON_MUMBAI],
		chainRaw: SupportedChainId.POLYGON_MUMBAI,
	},
	RINKEBY: {
		chainId: `0x${SupportedChainId.RINKEBY.toString(16)}`,
		chainName: CHAIN_IDS_TO_NAMES[SupportedChainId.RINKEBY],
		chainRaw: SupportedChainId.RINKEBY,
	},
	GOERLI: {
		chainId: `0x${SupportedChainId.GOERLI.toString(16)}`,
		chainName: CHAIN_IDS_TO_NAMES[SupportedChainId.GOERLI],
		// chainRaw: SupportedChainId.GOERLI,
	},
	BSC_TESTNET: {
		chainId: `0x${SupportedChainId.BSC_TESTNET.toString(16)}`,
		chainName: CHAIN_IDS_TO_NAMES[SupportedChainId.BSC_TESTNET],
		nativeCurrency: {
			name: "BNB",
			symbol: "bnb",
			decimals: 18,
		},
		rpcUrls: BSC_TESTNET_NODES,
		blockExplorerUrls: [`https://testnet.bscscan.com`],
	},
	BSC: {
		chainId: `0x${SupportedChainId.BSC.toString(16)}`,
		chainName: CHAIN_IDS_TO_NAMES[SupportedChainId.BSC],
		nativeCurrency: {
			name: "BNB",
			symbol: "bnb",
			decimals: 18,
		},
		rpcUrls: BSC_NODES,
		blockExplorerUrls: [`https://bscscan.com`],
	},
};

export enum NetworkType {
	L1,
	L2,
}

const CHAIN_INFO: any = {
	[SupportedChainId.MAINNET]: {
		networkType: NetworkType.L1,
		// docs: 'https://docs.uniswap.org/',
		explorer: "https://etherscan.io/",
		// infoLink: 'https://info.uniswap.org/#/',
		label: "Ethereum",
		// logoUrl: ethereumLogoUrl,
		nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
		// color: darkTheme.chain_1,
	},
	[SupportedChainId.ZKERA]: {
		networkType: NetworkType.L1,
		// docs: 'https://docs.uniswap.org/',
		explorer: "https://explorer.zksync.io/",
		// infoLink: 'https://info.uniswap.org/#/',
		label: "Zksync",
		// logoUrl: ethereumLogoUrl,
		nativeCurrency: { name: "ZkEther", symbol: "ETH", decimals: 18 },
		// color: darkTheme.chain_1,
	},
	[SupportedChainId.TZKERA]: {
		networkType: NetworkType.L1,
		// docs: 'https://docs.uniswap.org/',
		explorer: "https://explorer.zksync.io/",
		// infoLink: 'https://info.uniswap.org/#/',
		label: "Zksync",
		// logoUrl: ethereumLogoUrl,
		nativeCurrency: { name: "ZkEther", symbol: "ETH", decimals: 18 },
		// color: darkTheme.chain_1,
	},
	[SupportedChainId.POLYGON_MUMBAI]: {
		networkType: NetworkType.L1,
		// docs: 'https://docs.uniswap.org/',
		explorer: "https://etherscan.io/",
		// infoLink: 'https://info.uniswap.org/#/',
		label: "Mumbai",
		// logoUrl: ethereumLogoUrl,
		nativeCurrency: { name: "Mumbai", symbol: "WMATIC", decimals: 18 },
		// color: darkTheme.chain_1,
	},
	[SupportedChainId.GOERLI]: {
		networkType: NetworkType.L1,
		// docs: 'https://docs.uniswap.org/',
		explorer: "https://goerli.etherscan.io/",
		// infoLink: 'https://info.uniswap.org/#/',
		label: "Görli",
		// logoUrl: ethereumLogoUrl,
		nativeCurrency: { name: "Görli Ether", symbol: "görETH", decimals: 18 },
		// color: darkTheme.chain_5,
	},
	[SupportedChainId.BSC]: {
		networkType: NetworkType.L1,
		// blockWaitMsBeforeWarning: ms`10m`,
		// bridge: 'https://wallet.polygon.technology/bridge',
		// docs: 'https://polygon.io/',
		explorer: "`https://testnet.bscscan.com`",
		// infoLink: 'https://info.uniswap.org/#/polygon/',
		label: "BSC Testnet",
		// logoUrl: polygonWMATICLogo,
		nativeCurrency: { name: "BNB", symbol: "bnb", decimals: 18 },
	},
	[SupportedChainId.BSC_TESTNET]: {
		networkType: NetworkType.L1,
		// blockWaitMsBeforeWarning: ms`10m`,
		// bridge: 'https://wallet.polygon.technology/bridge',
		// docs: 'https://polygon.io/',
		explorer: "`https://testnet.bscscan.com`",
		// infoLink: 'https://info.uniswap.org/#/polygon/',
		label: "BSC Testnet",
		// logoUrl: polygonWMATICLogo,
		nativeCurrency: { name: "BNB", symbol: "bnb", decimals: 18 },
	},
};

export function getChainInfo(chainId: any): any {
	if (chainId) {
		return CHAIN_INFO[chainId] ?? undefined;
	}
	return undefined;
}

export function isSupportedChain(
	chainId: number | null | undefined
): chainId is SupportedChainId {
	return !!chainId && !!SupportedChainId[chainId];
}
