const ContainerButtons = () => {
  return (
    <div
      style={{
        position: "absolute",
        height: "11.64%",
        width: "57.17%",
        top: "44.44%",
        right: "28.98%",
        bottom: "43.92%",
        left: "13.85%",
        textAlign: "left",
        fontSize: "64px",
        color: "#fff",
        fontFamily: "'DM Sans'",
      }}
    >
      <b
        style={{
          position: "absolute",
          top: "76px",
          left: "0px",
          letterSpacing: "-0.04em",
          lineHeight: "85px",
          display: "inline-block",
          width: "601px",
          height: "168px",
        }}
      >
        <span>{`Lorem ipsum `}</span>
        <span style={{ color: "#356dff" }}>dolor</span>
        <span>{` sit amet, `}</span>
        <span style={{ color: "#356dff" }}>consetetur</span>
        <span>.</span>
      </b>
      <p
        style={{
          margin: "0",
          position: "absolute",
          top: "286px",
          left: "0px",
          fontSize: "20px",
          lineHeight: "35px",
          display: "inline-block",
          width: "601px",
          height: "178px",
          opacity: "0.6",
        }}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum.
      </p>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          padding: "0",
          backgroundColor: "transparent",
          position: "absolute",
          top: "521px",
          left: "0px",
          width: "207px",
          height: "70px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
            borderRadius: "43px 43px 12px 43px",
            backgroundColor: "#356dff",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "22px",
            left: "44px",
            fontSize: "20px",
            fontWeight: "500",
            fontFamily: "'DM Sans'",
            color: "#fff",
            textAlign: "left",
          }}
        >
          Another CTA
        </div>
      </button>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "693px",
          width: "727px",
          height: "658px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "38px",
            left: "0px",
            borderRadius: "40px",
            backgroundColor: "#1a1c46",
            width: "727px",
            height: "620px",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "727px",
            height: "619px",
            objectFit: "cover",
          }}
          alt=""
          src="/cloud9@2x.png"
        />
      </div>
    </div>
  );
};

export default ContainerButtons;
