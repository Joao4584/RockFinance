import path from 'path';

export const renderRouterElement = (nameElement: string) => {
    return path.join(__dirname, '../../public', `${nameElement}`);
}