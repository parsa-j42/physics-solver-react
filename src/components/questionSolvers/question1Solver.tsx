import * as React from "react";
import { Question1Data } from "../../model";
var Latex = require('react-latex');

interface Props {
}; 

export const Question1: React.FC<Props> = (props) => {
  const [questionData, setQuestionData] = React.useState<Question1Data>({
    mass1: 0,
    mass2: 0,
    frictionCoefficient: 0
  });
  const updateQuestionData = (questionDataId: keyof Question1Data) => (value: any) => {
    setQuestionData({
      ...questionData, // this creates a clone of the current questionData object...
      [questionDataId]: value, // ... which gets one of its properties (questionDataId) immediately replaced by a new value.
    });
  };
  function ifNaN(data) {if (isNaN(data) == true) {return "Incalculable"} else {return data}};
  const gravity = 9.8;
  let acceleration = ((questionData.mass2 * gravity) - (questionData.mass1 * gravity * questionData.frictionCoefficient)) / (questionData.mass1 + questionData.mass2);
  let tension = (questionData.mass2 * gravity)-(questionData.mass2 * acceleration);
  let weightMass2 = questionData.mass2 * gravity;
  return (<p>Given a mass of <Latex>$ m_1= $</Latex> <ValueInputComponent value={questionData.mass1} onValueUpdated={updateQuestionData("mass1")}/> on a horizontal table attached by a rope over a pulley to a mass of <Latex>$ m_2= $ </Latex> <ValueInputComponent value={questionData.mass2} onValueUpdated={updateQuestionData("mass2")}/> kg which hangs vertically. <br/>
  The friction between the mass and the surface is represented by a friction coefficient <Latex>$ mu= $</Latex> <ValueInputComponent value={questionData.frictionCoefficient} onValueUpdated={updateQuestionData("frictionCoefficient")}/> <br/>
  Taking downward as the positive direction for the hanging mass, the acceleration will be <Latex>$ a=$</Latex> <input value={ifNaN(acceleration)} style={{ width:"102px",  }}></input> <Latex>$m \over s^2 $</Latex> <br/>
  With this acceleration, the tension in the rope will be <Latex>$ T=  $</Latex> <input value={ifNaN(tension)} style={{ width:"102px",  }}></input> N compared to the weight <Latex>$ W =$</Latex> <input value={ifNaN(weightMass2)} style={{ width:"102px",  }}></input> N for the hanging mass. <br/>
  If the weight of the hanging mass is less than the frictional resistance force acting on the mass on the table, then the acceleration will be zero. </p>);

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
