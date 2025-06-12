type CurvedTriangleRightProps = {
  color?: string;
  width?: string;
  height?: string;
};

export default function RightCurveShape({
  color = '#ef4444',
  width = '100%',
  height = '100%',
}: CurvedTriangleRightProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path d="M100,0 C80,80 40,80 0,100 L100,100 Z" fill={color} />
    </svg>
  );
}
