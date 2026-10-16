export default function ImageFilters() {
  return (
    <svg
      aria-hidden="true"
      width="0"
      height="0"
      style={{ position: "absolute", overflow: "hidden" }}
    >
      <defs>
        <filter id="tht-duotone" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" result="gray" />
          <feComponentTransfer in="gray" result="contrast">
            <feFuncR type="gamma" amplitude="1.15" exponent="1.1" offset="0" />
            <feFuncG type="gamma" amplitude="1.15" exponent="1.1" offset="0" />
            <feFuncB type="gamma" amplitude="1.15" exponent="1.1" offset="0" />
          </feComponentTransfer>
          <feComponentTransfer in="contrast" result="mapped">
            <feFuncR type="table" tableValues="0.0588 0.9608" />
            <feFuncG type="table" tableValues="0.2392 0.8549" />
            <feFuncB type="table" tableValues="0.2275 0.7490" />
          </feComponentTransfer>
          <feBlend in="mapped" in2="SourceGraphic" mode="multiply" />
        </filter>
      </defs>
    </svg>
  );
}