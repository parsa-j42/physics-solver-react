import * as React from "react";
import { Question1, Question2 } from "../components";

var Latex = require('react-latex');

interface Props {
    questionNumber;
};

export const Solver: React.FC<Props> = (props: Props) => {
    if (props.questionNumber == "Question1") {
        return <Question1></Question1> 
    } else if (props.questionNumber == "Question2") {
        return <Question2></Question2> };
    };