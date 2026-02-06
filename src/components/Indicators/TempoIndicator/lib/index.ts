export function getNeedSize(size: string): number {
    switch (size) {
        case 's':
            return 56;
        case 'l':
            return 95;
        case 'xl':
            return 131;
        default:
            return 56;
    }
}

export function percentToAngle(percent: number): number {
    return (56 / 100) * percent;
}
