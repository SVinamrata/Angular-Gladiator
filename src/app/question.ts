import { Subject } from "./subject";
export class Question{
    questionId:any;
    level:any;
    question:any;
    choiceOne:any;
    choiceTwo:any;
    choiceThree:any;
    choiceFour:any;
    correctAns:any;
    questionSubject:Subject=new Subject();
    
}
