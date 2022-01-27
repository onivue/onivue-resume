function LogoIcon({ className, ...props }) {
  return (
    // <svg
    //     className={className || 'w-5 h-5'}
    //     viewBox="0 0 33 33"
    //     fill="currentColor"
    //     xmlns="http://www.w3.org/2000/svg"
    //     {...props}
    // >
    //     <path
    //         d="M0.950116 22.0183C-0.301817 18.4904 -0.316949 14.6418 0.907204 11.1042C2.13136 7.56664 4.52203 4.55048 7.68666 2.55098C10.8513 0.551489 14.6018 -0.312484 18.3223 0.100933C22.0427 0.51435 25.5121 2.18058 28.1605 4.82602C30.809 7.47147 32.4793 10.9389 32.897 14.6589C33.3147 18.3789 32.455 22.1303 30.4592 25.2973C28.4633 28.4642 25.4499 30.8583 21.9138 32.0866C18.3776 33.3148 14.5289 33.3041 10.9997 32.0562L11.7725 29.8705C14.8059 30.943 18.1138 30.9522 21.1531 29.8966C24.1924 28.8409 26.7824 26.7832 28.4978 24.0612C30.2132 21.3392 30.9521 18.1149 30.5931 14.9176C30.2341 11.7202 28.7985 8.74003 26.5222 6.46628C24.2458 4.19254 21.2639 2.76042 18.0662 2.40509C14.8685 2.04977 11.645 2.79234 8.92499 4.5109C6.205 6.22945 4.15023 8.82182 3.09808 11.8623C2.04593 14.9028 2.05893 18.2108 3.13496 21.2429L0.950116 22.0183Z"
    //         className="text-gray-800"
    //     />
    //     <path
    //         d="M10 26C10 27.6569 8.6568 29 7 29C5.3432 29 4 27.6569 4 26C4 24.3431 5.3432 23 7 23C8.6568 23 10 24.3431 10 26Z"
    //         className="text-amber-400"
    //     />
    // </svg>
    <svg
      className={className || 'w-5 h-5'}
      viewBox="0 0 42 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={21} cy={21} r={21} fill="black" />
      <g filter="url(#filter0_d_816_6)">
        <path
          d="M11 14C11 12.3431 12.3431 11 14 11H31C32.6569 11 34 12.3431 34 14V17C34 18.6569 32.6569 20 31 20H14C12.3431 20 11 18.6569 11 17V14Z"
          fill="#FFFBEB"
        />
      </g>
      <g filter="url(#filter1_d_816_6)">
        <path
          d="M14 34C12.3431 34 11 32.6569 11 31V14C11 12.3431 12.3431 11 14 11H17C18.6569 11 20 12.3431 20 14V31C20 32.6569 18.6569 34 17 34H14Z"
          fill="#FFF1B9"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_816_6"
          x={7}
          y={11}
          width={31}
          height={17}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
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
          x={4}
          y={8}
          width={23}
          height={37}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
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
