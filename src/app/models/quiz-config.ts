export class QuizConfig {
    duration: number;  // indicates the time in which quiz needs to be completed.

    constructor(data: any) {
        data = data || {};
        this.duration = data.duration;

    }
}