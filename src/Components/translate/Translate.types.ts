type MessageType = 'error' | 'notif' | 'res';
type Lang = 'fa' | 'en' | 'es';

export type AllTypes = {
    res: `${MessageType}-${Lang}`;
};
