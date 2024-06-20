"use client";

const HowItWorks = () => {
  const sectionStyle = {
    padding: "230px 0",
    backgroundColor: "#f9f9f9",
  };

  const containerStyle = {
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
  };

  const headerStyle = {
    fontSize: "2.5em",
    marginBottom: "30px",
  };

  const stepsContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const stepStyle = {
    flex: "1",
    margin: "10px",
    maxWidth: "300px",
  };

  const iconStyle = {
    fontSize: "3em",
    marginBottom: "10px",
  };

  const stepHeaderStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
  };

  const stepTextStyle = {
    fontSize: "1em",
    color: "#666",
  };

  return (
    <section id="how-it-works" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headerStyle}>How It Works</h2>
        <div style={stepsContainerStyle}>
          <div style={stepStyle}>
            <div style={iconStyle}>1️⃣</div>
            <h3 style={stepHeaderStyle}>Sign Up</h3>
            <p style={stepTextStyle}>Create your account in minutes.</p>
          </div>
          <div style={stepStyle}>
            <div style={iconStyle}>2️⃣</div>
            <h3 style={stepHeaderStyle}>Set Up</h3>
            <p style={stepTextStyle}>Configure your clinic’s preferences.</p>
          </div>
          <div style={stepStyle}>
            <div style={iconStyle}>3️⃣</div>
            <h3 style={stepHeaderStyle}>Manage</h3>
            <p style={stepTextStyle}>
              Start managing appointments, records, and billing seamlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
