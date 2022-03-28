import * as React from "react";
import {NavMenu,ColorPicker  } from "./components";
import { Color  } from "./model";

export const AboutUs = () => {
    const [question, setQuestion] = React.useState("Question1")
    const [color, setColor] = React.useState<Color>({
        red: 216,
        green: 222,
        blue: 233
      });
    document.body.style.backgroundColor = `rgb(${color.red},${color.green},${color.blue})`
    return (
        <>
        <NavMenu question={question} onQuestionUpdated={setQuestion}/>
        <div>
        <table data-width="2000" data-height="2000" data-cellspacing="2" data-cellpadding="2" data-border="1" style={{ border: "1px solid black"}} >
        <tbody>
          <tr>
            <td style={{ border: "1px solid black"}}>
                <h1>About This Project</h1>
            </td>
            <td style={{verticalAlign: "text-top", border: "1px solid black"}}>
              <div style ={{marginTop:"20px"}} >
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", width:"1200px"}}>
              <div>
                  <p>In this project I used <em style={{color:"gray"}}>React + TypeScript</em> for the first time, I tried to learn React by making a random website. <br/>
                  Meanwhile, I was using  <a href="http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html">HyperPhysics</a> website to learn physics, and I thought maybe It actually is a good idea to remake a part of this website for my React learning journey;
                  And now, here it is.</p>
              </div>
            </td>
            <td><ColorPicker color={color} onColorUpdated={setColor}/> </td>
          </tr>
        </tbody>
        </table>
        </div>
        </>)

};