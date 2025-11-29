interface SpacerProps {
  height?: string | number;
  width?: string | number;
}

export default function Spacer({
  height = 0,
  width = 0
}: SpacerProps) {
  /** RENDER **/
  return <div style={{height, width}}></div>;
}