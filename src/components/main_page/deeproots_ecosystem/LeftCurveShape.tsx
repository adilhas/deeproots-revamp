type CurvedShapeProps = {
  color?: string;
  width?: string;
  height?: string;
};

export default function LeftCurvedShape({
  color = '#ef4444',
  width = '100%',
  height = '100%',
}: CurvedShapeProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path d="M0,0 C20,80 60,80 100,100 L0,100 Z" fill={color} />
    </svg>
  );
}
