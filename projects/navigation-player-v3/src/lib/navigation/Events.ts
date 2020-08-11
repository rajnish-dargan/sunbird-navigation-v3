export interface NavigationComponentInput {
        showNavigations: boolean;
        isPreviousEnable: boolean;
        isNextEnable: boolean;
        currentIndex: number;
        totalIndex: number;
        showDownload: boolean;
        downloadImageUrl: string;
        message: string;
        showMessage: boolean;
 }
 export type navigationEvent = 'next' | 'previous' | 'download' | 'navigate';

