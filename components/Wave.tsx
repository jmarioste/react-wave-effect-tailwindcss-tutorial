import { CSSProperties, SVGProps } from "react";

type Props = {
  color: CSSProperties["color"];
  animationDuration: CSSProperties["animationDuration"];
  animationDirection?: CSSProperties["animationDirection"];
  opacity: CSSProperties["opacity"];
};

const Wave: React.FC<Props> = (props) => {
  const waveUrl = encodeURIComponent(
    `<svg viewBox="0 0 1278 131" xmlns="http://www.w3.org/2000/svg">
        <path fill="${props.color}" stroke="${props.color}" d="M639 46.4995C407 -6.88809 259.113 -21.8807 0.5 46.4995V130H1277.5V46.4995C1028.98 121.492 861.695 92.5099 639 46.4995Z"/>
    </svg>`
  );

  return (
    <div
      className="absolute bottom-0 w-full animate-wave h-[131px]"
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,${waveUrl}')`,
        backgroundSize: "1278px 131px",
        animationDuration: props.animationDuration,
        animationDirection: props.animationDirection,
        opacity: props.opacity,
      }}
    ></div>
  );
};
export default Wave;
