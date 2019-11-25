import React from "react";
import Content from "../Content";
import Description from "../Description";
import Footer from "../Footer";

export default props => {
  return (
    <React.Fragment>
      <Content>
        <Description
          title={"Vicente Júnior"}
          actionLabel={"Eventos"}
          subtitle={"Brazilian Jiu-jítsu"}
          text={[...new Array(4)]
            .map(() => `Cras mattis consectetur purus sit amet fermentum.`)
            .join("\n")}
          //action={action}
        />
      </Content>
      <Footer />
    </React.Fragment>
  );
};
