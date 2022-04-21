import { createContext } from 'react';

interface IContext {
    amountFormatter: Intl.NumberFormat
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
}

let Context = createContext<IContext>({
    amountFormatter: new Intl.NumberFormat,
    name: '',
    setName: () => {}
});


export { Context };
