export interface ButtonsInterface {
    startTimer: () => void,
    stopTimer: () => void,
    resetTimer: () => void,
    disableStop: boolean,
    disableStart: boolean,
    disableReset: boolean
}

export interface LayoutInterface {
    seconds: string,
    minutes: string,
    milliseconds: string
}