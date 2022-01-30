function LogoIcon({ className, ...props }) {
  return (
    //   <svg
    //   className={className || 'w-5 h-5'}
    //   viewBox="0 0 42 45"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >

    <svg
      className={className || 'w-5 h-5'}
      viewBox="0 0 42 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21" cy="21" r="21" fill="black" />
      <g filter="url(#filter0_d_816_6)">
        <path
          d="M11 14C11 12.3431 12.3431 11 14 11H31C32.6569 11 34 12.3431 34 14V17C34 18.6569 32.6569 20 31 20H14C12.3431 20 11 18.6569 11 17V14Z"
          fill="#FEF3C7"
        />
      </g>
      <g filter="url(#filter1_d_816_6)">
        <path
          d="M14 34C12.3431 34 11 32.6569 11 31V14C11 12.3431 12.3431 11 14 11H17C18.6569 11 20 12.3431 20 14V31C20 32.6569 18.6569 34 17 34H14Z"
          fill="#F9E288"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_816_6"
          x="7"
          y="11"
          width="31"
          height="17"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_816_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_816_6"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_816_6"
          x="4"
          y="8"
          width="23"
          height="37"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_816_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_816_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default LogoIcon
