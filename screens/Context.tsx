import { createContext } from 'react';

interface IContext {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
}

let Context = createContext<IContext>({
    name: '',
    setName: () => {}
});


export { Context };
