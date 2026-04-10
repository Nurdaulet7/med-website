export default function Logo({ size = 32, color = '#2563EB' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Circle background */}
      <circle cx="16" cy="16" r="16" fill={color} />
      {/* Medical cross */}
      <rect x="13" y="8" width="6" height="16" rx="2" fill="white" />
      <rect x="8" y="13" width="16" height="6" rx="2" fill="white" />
    </svg>
  )
}
