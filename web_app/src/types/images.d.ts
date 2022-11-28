declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

declare let io : {
    connect(url: string): Socket;
};

interface Socket {
    on(event: string, callback: (data: any) => void );
    emit(event: string, data: any);
}