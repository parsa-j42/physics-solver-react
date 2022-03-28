import * as React from "react";
import { ColorPicker, Solver, NavMenu,Image  } from "./components";
import { Color, Question1Data } from "./model";
var Latex = require('react-latex');

export const App = () => {
  const [color, setColor] = React.useState<Color>({
    red: 216,
    green: 222,
    blue: 233
  });
  document.body.style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})` 
  const [question, setQuestion] = React.useState("Question1")
  return (
    <>
    <NavMenu question={question} onQuestionUpdated={setQuestion}/>
    <div>
    <table data-width="2000" data-height="2000" data-cellspacing="2" data-cellpadding="2" data-border="1" style={{ border: "1px solid black"}} >
    <tbody>
      <tr>
        <td style={{ border: "1px solid black"}}>
          <Image question={question}/>
          <div style={{ float:"left" }}><Latex></Latex> </div>
        </td>
        <td style={{verticalAlign: "text-top", border: "1px solid black"}}>
          <div style ={{marginTop:"20px"}} >
          </div>
        </td>
      </tr>
      <tr>
        <td style={{ border: "1px solid black", width:"1200px"}}>
          <div>
            <Solver questionNumber={question}></Solver>
          </div>
        </td>
        <td><ColorPicker color={color} onColorUpdated={setColor}/> </td>
      </tr>
    </tbody>
    </table>
    </div>
    </>
  );
};
