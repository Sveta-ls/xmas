import Link from "next/link";

const InfoLeft = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data.bk})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "70%",
        marginTop: 130,
        padding: 0,
      }}
    >
      <h1 className="info_l_h">{data.h}</h1>
      <p className="info_l_p">{data.text}</p>
    </div>
  );
};

export default InfoLeft;
