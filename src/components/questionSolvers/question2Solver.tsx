import * as React from "react";
import { Question2Data } from "../../model";
var Latex = require('react-latex');

interface Props {
};

export const Question2: React.FC<Props> = (props) => {
  const [questionData, setQuestionData] = React.useState<Question2Data>({
    mass1: 0,
    mass2: 0,
  });

  const updateQuestionData = (questionDataId: keyof Question2Data) => (value: any) => {
    setQuestionData({
      ...questionData, // this creates a clone of the current questionData object...
      [questionDataId]: value, // ... which gets one of its properties (questionDataId) immediately replaced by a new value.
    });
  };

  function ifNaN(data) {if (isNaN(data) == true) {return "Incalculable"} else {return data}};
  const gravity = 9.8;
  let weightMass1 = questionData.mass1 * gravity;
  let weightMass2 = questionData.mass2 * gravity;
  let acceleration = ((questionData.mass2 - questionData.mass1) * gravity)/(questionData.mass1 + questionData.mass2);
  let tension = (weightMass1) + (questionData.mass1 * acceleration) 

  return (<p>For hanging masses: <br/>
    <Latex>$ m_1= $</Latex> <ValueInputComponent value={questionData.mass1} onValueUpdated={updateQuestionData("mass1")}/> kg <br/>
    <Latex>$ m_2= $</Latex> <ValueInputComponent value={questionData.mass2} onValueUpdated={updateQuestionData("mass2")}/> kg <br/>
    
    the weights are <br/>
    <Latex>$ m_1 g= $</Latex> <input value={ifNaN(weightMass1)} style={{ width:"102px",  }}></input> N <br/>
    <Latex>$ m_2 g= $</Latex> <input value={ifNaN(weightMass2)} style={{ width:"102px",  }}></input> N <br/>
    
    The acceleration is a = <input value={ifNaN(acceleration)} style={{ width:"102px",  }}></input> <Latex>$m \over s^2 $</Latex> <br/>
    
    and the tension is T = <input value={ifNaN(tension)} style={{ width:"102px",  }}></input> N.</p>);

};

interface PropsValueInput {
  value: number;
  onValueUpdated: (newValue: number) => void;
};

const ValueInputComponent: React.FC<PropsValueInput> = (props: PropsValueInput) => {
  return (
    <div style={{ display:'inline-block', verticalAlign:"middle"}}> 
      <input
        type="number"
        min="0"
        max="99999"
        value={props.value}
        onChange={(event) => props.onValueUpdated(+event.target.value)}
        style={{ width:"102px",  }}
      />
    </div>
  );
};
