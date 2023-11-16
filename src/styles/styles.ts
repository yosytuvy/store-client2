
export const boxStyles = {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 2,
      width: 200, 
      height: 200,
      borderRadius: 4
    }
}

export const innerBoxStyles = {
    height: "80%",
    width: 200,
    borderRadius: 4,
}

export const boxHome = {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: 0,
}

export const innerBoxHome = {
    textAlign: "center",
    padding: 2,
    display: "flex",
    flexDirection: "column ",
}