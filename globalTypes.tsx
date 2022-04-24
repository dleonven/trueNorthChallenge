import { StackNavigationProp } from '@react-navigation/stack';


export type item = {
    id:                 string,
    rank:               string,
    symbol:             string,
    name:               string,
    supply:             string,
    maxSupply:          string,
    marketCapUsd:       string,
    volumeUsd24Hr:      string,
    priceUsd:           string,
    changePercent24Hr:  string,
    vwap24Hr:           string,
} | null


export type stackScreenList = {
    ToDo:   undefined;
    Home:   undefined;
    List:   undefined;
    Detail: { id: string | undefined };
    Wallet: undefined;
};

export type appScreens = StackNavigationProp<stackScreenList>;
