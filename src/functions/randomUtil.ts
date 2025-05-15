export function pickRandom(list: any[]): any {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}
