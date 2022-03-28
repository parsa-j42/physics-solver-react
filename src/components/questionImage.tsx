import * as React from "react";

interface Props {
    question;
};

  export const Image: React.FC<Props> = (props) => {
    if (props.question == "Question1") {
        return (<img style={{ float:"left" }} alt="Qries" src="http://hyperphysics.phy-astr.gsu.edu/hbase/imgmec/hpul2.gif" />);
    } else if (props.question == "Question2") {
        return (<img style={{ float:"left" }} alt="Qries" src="http://hyperphysics.phy-astr.gsu.edu/hbase/imgmec/atwd.gif" />);
    }
};