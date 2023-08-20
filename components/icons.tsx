import {
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  x: (props: LucideProps) => (
    <svg
      {...props}
      aria-label="X formerly known as Twitter"
      fill="currentColor"
      height="16"
      viewBox="0 0 22 20"
    >
      <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"></path>
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  cosmic: (props: LucideProps) => (
    <svg
      id="cosmic-logo"
      width="120"
      height="28"
      viewBox="0 0 135 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto max-w-full fill-gray-700 dark:fill-white"
      aria-label="Cosmic logo"
    >
      <path
        d="M11.0494 9.71143C11.7149 9.11524 12.3291 8.51905 12.9946 7.97705C12.4827 7.59766 12.022 7.27246 11.5613 6.94727C10.9982 7.43506 10.4352 7.97706 9.87208 8.51905C10.4352 8.73585 10.8447 9.16944 11.0494 9.71143Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M9.41432 12.4816C10.6461 12.485 11.6473 11.4565 11.6505 10.1843C11.6537 8.91213 10.6578 7.8781 9.42602 7.87472C8.19424 7.87135 7.19307 8.89991 7.18983 10.1721C7.1866 11.4442 8.18254 12.4783 9.41432 12.4816Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M11.386 23.0143C8.22254 24.8011 5.48801 25.2477 4.25479 24.0194C2.539 22.2885 4.09393 17.7659 7.84722 13.1874C7.25741 13.0199 6.77485 12.5732 6.50676 12.0149C1.03769 18.38 -1.42876 24.8011 0.984067 27.202C2.96795 29.212 7.73998 27.872 12.9946 24.2985C12.4584 23.9077 11.9222 23.461 11.386 23.0143Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M14.9943 7.75792C15.1547 7.14542 15.5824 6.64428 16.1171 6.36587C9.80853 0.964741 3.39308 -1.42958 0.987291 0.964741C-0.990805 2.96929 0.292284 7.70224 3.87424 12.9363C4.30194 12.3795 4.72963 11.8784 5.15733 11.3216C3.39308 8.14769 2.91193 5.41928 4.14155 4.1386C5.9058 2.41247 10.3966 4.02724 14.9943 7.75792Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M19.5443 9.25072C19.3362 9.80913 18.8678 10.2559 18.3474 10.4792C19.128 11.3169 19.8566 12.0986 20.4811 12.9363C20.8454 12.4337 21.2097 11.9311 21.4699 11.4285C20.8974 10.7026 20.2209 9.97666 19.5443 9.25072Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M17.9013 11.5542C19.1461 11.5542 20.1316 10.5429 20.1316 9.25074C20.1316 7.95855 19.1461 6.94727 17.9013 6.94727C16.6564 6.94727 15.6709 7.95855 15.6709 9.25074C15.6709 10.4867 16.6564 11.5542 17.9013 11.5542Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M24.0004 4.17002C25.7232 5.89898 24.162 10.4166 20.3933 14.9899C20.9855 15.1572 21.4701 15.6034 21.7393 16.1612C27.1769 9.80307 29.6534 3.33343 27.2307 0.935207C25.2387 -1.01684 20.4472 0.321707 15.2249 3.89116C15.7633 4.28157 16.3017 4.72775 16.8401 5.17393C20.0165 3.38921 22.7622 2.94302 24.0004 4.17002Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M17.57 18.004C16.8053 18.7824 15.9896 19.5052 15.2249 20.1724C15.7347 20.5616 16.1935 20.8952 16.7033 21.2288C17.417 20.6172 18.0798 19.95 18.7935 19.2272C18.2327 19.0048 17.8249 18.56 17.57 18.004Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M19.2518 15.6941C18.02 15.6905 17.0187 16.719 17.0153 17.9912C17.0119 19.2633 18.0078 20.2975 19.2395 20.301C20.4713 20.3045 21.4726 19.2761 21.476 18.0039C21.4794 16.7317 20.4835 15.6976 19.2518 15.6941Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M9.87209 17.6968C9.09147 16.8592 8.36289 16.0774 7.7384 15.2398C7.37411 15.7423 7.00982 16.2449 6.74961 16.7475C7.37411 17.4734 7.9986 18.1994 8.67514 18.9253C8.8833 18.3669 9.29964 17.9202 9.87209 17.6968Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M24.3579 15.2398C23.9316 15.7946 23.5053 16.2939 23.079 16.8488C24.8374 20.0113 25.317 22.6745 24.0382 23.9506C22.2798 25.6706 17.8039 24.0616 13.2214 20.3997C13.0615 21.01 12.6352 21.5093 12.1024 21.7868C18.4433 27.1686 24.8374 29.6098 27.2352 27.2241C29.2068 25.1712 27.9279 20.3997 24.3579 15.2398Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path
        d="M12.5543 18.9375C12.5575 17.6653 11.5616 16.6313 10.3298 16.6279C9.09803 16.6246 8.09687 17.6531 8.09365 18.9253C8.09044 20.1975 9.08639 21.2315 10.3182 21.2348C11.5499 21.2382 12.5511 20.2096 12.5543 18.9375Z"
        className="fill-cosmic-blue-lighter"
      ></path>
      <path d="M43.739 23.7834C49.0785 23.7834 52.7599 20.9732 52.7599 16.4487V16.0834H49.4157V16.4487C49.4157 19.3433 47.589 20.8608 43.7671 20.8608C39.3551 20.8608 37.2193 18.7812 37.2193 14.0881C37.2193 9.39503 39.3551 7.28736 43.7671 7.28736C47.589 7.28736 49.4157 8.83299 49.4157 11.6994V12.0929H52.7599V11.6994C52.7599 7.20305 49.0504 4.39282 43.739 4.39282C37.8937 4.39282 34.0156 8.21474 34.0156 14.0881C34.0156 19.9615 37.8937 23.7834 43.739 23.7834Z"></path>
      <path d="M62.1338 23.7834C66.7987 23.7834 69.9181 20.8327 69.9181 16.533C69.9181 12.1772 66.7987 9.25452 62.1338 9.25452C57.4969 9.25452 54.3775 12.1772 54.3775 16.533C54.3775 20.8327 57.4969 23.7834 62.1338 23.7834ZM62.1338 21.0856C58.7615 21.0856 57.3564 19.4838 57.3564 16.533C57.3564 13.5542 58.7615 11.9242 62.1338 11.9242C65.5341 11.9242 66.9393 13.5542 66.9393 16.533C66.9393 19.4838 65.5341 21.0856 62.1338 21.0856Z"></path>
      <path d="M78.7247 23.7834C82.659 23.7834 85.2444 22.2378 85.2444 19.6243C85.2444 17.3199 83.7269 16.1958 80.4108 15.7743L77.179 15.3246C75.0714 15.0436 74.5093 14.6502 74.5093 13.5542C74.5093 12.2334 75.4086 11.6713 77.9659 11.6713C81.0572 11.6713 81.9002 12.5425 81.9002 14.2005V14.3691H84.9072V14.2848C84.9072 10.9688 82.3218 9.25452 78.0502 9.25452C73.7506 9.25452 71.5305 10.9969 71.5305 13.4418C71.5305 15.7743 73.1323 16.8984 75.7739 17.2356L79.5958 17.7414C81.5911 18.0224 82.2656 18.3878 82.2656 19.54C82.2656 20.7765 81.4506 21.3385 78.7247 21.3385C75.802 21.3385 74.706 20.7484 74.706 18.9217V18.6969H71.671V18.7812C71.671 22.013 74.2283 23.7834 78.7247 23.7834Z"></path>
      <path d="M90.4692 23.5024V16.5892C90.4692 13.498 91.509 11.9804 94.516 11.9804C97.2138 11.9804 98.2817 13.1607 98.2817 15.9148V23.5024H101.289V16.5892C101.289 13.498 102.357 11.9804 105.335 11.9804C108.033 11.9804 109.129 13.1607 109.129 15.9148V23.5024H112.136V15.0998C112.136 11.7275 110.309 9.25452 106.684 9.25452C103.143 9.25452 101.57 11.4746 101.204 13.8633H101.036C100.642 11.1936 98.928 9.25452 95.7525 9.25452C92.2678 9.25452 90.7503 11.4184 90.3849 13.7509H90.2163V9.53555H87.4342V23.5024H90.4692Z"></path>
      <path d="M117.885 7.90561V4.67385H114.85V7.90561H117.885ZM117.885 23.5024V9.53555H114.85V23.5024H117.885Z"></path>
      <path d="M127.75 23.7834C131.937 23.7834 135 21.4228 135 17.9381V17.629H131.993V17.8257C131.993 19.9896 130.419 21.0575 127.693 21.0575C124.546 21.0575 123.141 19.54 123.141 16.533C123.141 13.4699 124.546 11.9804 127.693 11.9804C130.419 11.9804 131.993 13.0483 131.993 15.2122V15.3808H135V15.0998C135 11.6151 131.937 9.25452 127.75 9.25452C123.141 9.25452 120.134 12.1772 120.134 16.533C120.134 20.8327 123.141 23.7834 127.75 23.7834Z"></path>
    </svg>
  ),
  unsplash: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 457.19 104.19"
      {...props}
    >
      <path
        fill="currentColor"
        d="M59.88 38.66h27.53v48.75H0V38.66h27.53v24.37h32.35zm93 25c0 8.25-5.45 13.13-12.9 13.13-7.28 0-12.81-4.88-12.81-13.13V24.41h-12.22v39.13c0 15.45 11 25.21 25.06 25.21s25.15-9.76 25.15-25.21V24.41h-12.25zm43.7-21.13c-4.7 0-9.94 2-12.6 6.57v-5.41h-11.45v43.64h11.81v-25.1c0-5 3-9 8.16-9 5.68 0 8.08 3.82 8.08 8.7v25.4h11.8V59.82c.03-9.59-4.94-17.31-15.77-17.31zm43.31 18.37l-6.48-1.33c-2.47-.5-4-1.77-4-3.9 0-2.49 2.23-4.35 5.33-4.35 4.36 0 6.09 2.25 6.51 4.88h10.18c-.08-6-4.83-13.84-16.51-13.84-9.41 0-16.33 6.47-16.33 14.28 0 6.13 3.81 11.19 12.24 13l6.05 1.33c3.37.71 4.7 2.31 4.7 4.26 0 2.31-2.14 4.35-6 4.35-4.71 0-7.27-2.68-7.87-5.79h-10.5c.59 6.53 5.32 14.84 18.46 14.84 11.45 0 17.22-7.28 17.22-14.38-.01-6.36-4.36-11.59-12.97-13.37zm63.19 4.53c0 13.22-8.26 23-20.59 23-6 0-10.48-2.4-12.61-5.33v21.13h-11.8V43.67h11.45v5.41c2-3.37 6.83-6.39 13.4-6.39 12.81 0 20.18 9.76 20.18 22.72zm-11.63.09c0-7.72-4.79-12.25-10.83-12.25s-10.91 4.53-10.91 12.25 4.88 12.33 10.91 12.33 10.91-4.54 10.91-12.35zm68-21.83h11.45v43.64h-11.8v-5.31c-2 3.5-6.57 6.38-12.61 6.38-12.33 0-20.59-9.77-20.59-23 0-13 7.37-22.72 20.15-22.72 6.57 0 11.32 3.05 13.4 6.39zm-.18 21.83c0-7.72-4.88-12.25-10.91-12.25s-10.83 4.51-10.83 12.23 4.79 12.33 10.83 12.33 10.92-4.6 10.92-12.33zm-50.66 21.81h11.8V24.41h-11.8zm132.35-44.81c-4.17 0-9 1.41-11.81 4.78V24.41h-11.8v62.91h11.8V61.68c.27-4.8 3.2-8.52 8.17-8.52 5.68 0 8.08 3.83 8.07 8.71v25.47h11.81V59.82c-.01-9.59-5.15-17.3-16.24-17.3zm-42 18.36l-6.43-1.33c-2.47-.5-4-1.77-4-3.9 0-2.49 2.22-4.35 5.33-4.35 4.35 0 6.08 2.25 6.5 4.88h10.17c-.08-6-4.83-13.84-16.51-13.84-9.41 0-16.33 6.47-16.33 14.28 0 6.13 3.82 11.19 12.25 13l6 1.33c3.37.71 4.7 2.31 4.7 4.26 0 2.31-2.14 4.35-6 4.35-4.71 0-7.27-2.68-7.87-5.79h-10.49c.58 6.53 5.31 14.84 18.45 14.84 11.45 0 17.22-7.28 17.22-14.38 0-6.34-4.35-11.57-12.95-13.35zM59.88 0H27.53v24.37h32.35z"
      />
    </svg>
  ),
  pexels: (props: LucideProps) => (
    <svg {...props} width="130" height="50" viewBox="0 0 130.318 50">
      <g transform="translate(-3894 2762)">
        <rect
          width="50"
          height="50"
          rx="8"
          transform="translate(3894 -2762)"
          fill="#07a081"
        ></rect>
        <path
          d="M32.671,44.73h7.091V37.935H41.9a5.657,5.657,0,1,0,0-11.314H32.671Zm10.763,3.622H29V23H41.9a9.271,9.271,0,0,1,1.53,18.435Z"
          transform="translate(3880 -2773)"
          fill="#ffffff"
        ></path>
        <path
          d="M1.694,0h2.6V-6.16H7.656a6.579,6.579,0,0,0,2.915-.616,4.639,4.639,0,0,0,1.969-1.76,5.1,5.1,0,0,0,.7-2.728,5.146,5.146,0,0,0-.7-2.75,4.639,4.639,0,0,0-1.969-1.76,6.579,6.579,0,0,0-2.915-.616H1.694Zm2.6-8.47v-5.61H7.722a3.03,3.03,0,0,1,2.134.748,2.641,2.641,0,0,1,.814,2.046A2.684,2.684,0,0,1,9.856-9.24a2.978,2.978,0,0,1-2.134.77ZM20.372.264a5.925,5.925,0,0,0,3.179-.836,4.64,4.64,0,0,0,1.9-2.112l-2.024-.99a3.73,3.73,0,0,1-1.2,1.243,3.29,3.29,0,0,1-1.837.5A3.458,3.458,0,0,1,18-2.827a3.433,3.433,0,0,1-1.1-2.409H25.74a3.34,3.34,0,0,0,.088-.572q.022-.308.022-.594a6.154,6.154,0,0,0-.671-2.849,5.361,5.361,0,0,0-1.936-2.112,5.61,5.61,0,0,0-3.069-.8,5.7,5.7,0,0,0-3,.8,5.773,5.773,0,0,0-2.1,2.2,6.476,6.476,0,0,0-.77,3.179A6.482,6.482,0,0,0,15.081-2.8,5.9,5.9,0,0,0,17.226-.561,5.958,5.958,0,0,0,20.372.264Zm-.2-10.34a3,3,0,0,1,2.112.792,2.9,2.9,0,0,1,.924,2.068H16.94a3.313,3.313,0,0,1,1.122-2.112A3.208,3.208,0,0,1,20.174-10.076ZM26.422,0h2.926l2.706-3.982L34.738,0h2.926L33.506-5.962l4.18-5.94H34.76L32.054-7.964,29.348-11.9H26.422l4.158,5.94ZM44.088.264a5.925,5.925,0,0,0,3.179-.836,4.64,4.64,0,0,0,1.9-2.112l-2.024-.99a3.73,3.73,0,0,1-1.2,1.243,3.29,3.29,0,0,1-1.837.5,3.458,3.458,0,0,1-2.4-.891,3.433,3.433,0,0,1-1.1-2.409h8.844a3.34,3.34,0,0,0,.088-.572q.022-.308.022-.594A6.154,6.154,0,0,0,48.9-9.251a5.361,5.361,0,0,0-1.936-2.112,5.61,5.61,0,0,0-3.069-.8,5.7,5.7,0,0,0-3,.8,5.773,5.773,0,0,0-2.1,2.2,6.476,6.476,0,0,0-.77,3.179A6.482,6.482,0,0,0,38.8-2.8,5.9,5.9,0,0,0,40.942-.561,5.958,5.958,0,0,0,44.088.264Zm-.2-10.34A3,3,0,0,1,46-9.284a2.9,2.9,0,0,1,.924,2.068h-6.27a3.313,3.313,0,0,1,1.122-2.112A3.208,3.208,0,0,1,43.89-10.076ZM51.546,0h2.486V-16.654H51.546ZM60.9.264a5.6,5.6,0,0,0,2.321-.451,3.635,3.635,0,0,0,1.551-1.254,3.21,3.21,0,0,0,.55-1.859,3.088,3.088,0,0,0-.792-2.123A4.635,4.635,0,0,0,62.26-6.732L60.324-7.3a4.436,4.436,0,0,1-1.034-.484,1.023,1.023,0,0,1-.484-.924,1.212,1.212,0,0,1,.484-1.012,2.068,2.068,0,0,1,1.3-.374,3.005,3.005,0,0,1,1.705.506A2.944,2.944,0,0,1,63.4-8.228l1.914-.9a4.344,4.344,0,0,0-1.8-2.233,5.337,5.337,0,0,0-2.9-.8,5.1,5.1,0,0,0-2.178.451,3.7,3.7,0,0,0-1.518,1.243,3.2,3.2,0,0,0-.55,1.87,3.1,3.1,0,0,0,.759,2.09,4.624,4.624,0,0,0,2.3,1.32l1.87.528a3.923,3.923,0,0,1,1.078.473,1.057,1.057,0,0,1,.506.957,1.259,1.259,0,0,1-.55,1.078,2.391,2.391,0,0,1-1.43.4,3.2,3.2,0,0,1-1.881-.594A4.049,4.049,0,0,1,57.684-3.96l-1.914.9a4.774,4.774,0,0,0,1.925,2.42A5.7,5.7,0,0,0,60.9.264Z"
          transform="translate(3959 -2728)"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  ),
  pixabay: (props: LucideProps) => (
    <svg
      viewBox="0 0 120 33"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      {...props}
    >
      <path
        d="M9.059 7.279c4.417-.1 8.564 3.492 9.03 7.897.56 3.872-1.72 7.893-5.287 9.464-2.163 1.073-4.604.743-6.93.798H3.599v7.28H.002c.007-5.617-.014-11.234.01-16.85.12-4.186 3.545-7.932 7.682-8.49.45-.066.91-.1 1.365-.1v.001zm0 14.56c2.596.064 5.03-1.96 5.42-4.533.517-2.588-1.135-5.37-3.66-6.146-2.438-.866-5.372.272-6.564 2.575-.922 1.576-.594 3.434-.656 5.167v2.938h5.46v-.001zM19.826 7.191h3.557v18.16h-3.556V7.19l-.001.001zm14.25 11.42h.13l5.057 6.745h4.41l-6.874-9.34L42.895 7.2h-4.41l-4.28 6.225h-.128l-4.28-6.224h-4.41l6.095 8.818-6.873 9.336h4.41l5.057-6.744z"
        fill="currentColor"
        fillRule="nonzero"
      ></path>
      <path
        d="M51.735 7.191c3.603-.07 7.06 2.29 8.394 5.624.694 1.55.683 3.264.66 4.926v7.61c-3.21-.01-6.422.022-9.636-.018-3.688-.18-7.065-2.87-8.12-6.404-.97-3.07-.166-6.635 2.116-8.932 1.703-1.763 4.123-2.827 6.583-2.803l.003-.003zm5.46 14.56c-.015-2.02.033-4.04-.028-6.058-.212-2.705-2.718-4.972-5.432-4.9-2.582-.064-5.015 1.937-5.42 4.492-.472 2.454.937 5.126 3.276 6.04 1.442.628 3.035.367 4.56.423h3.045l-.001.003zM71.628 7.279c4.262-.104 8.245 3.25 8.924 7.445.77 3.98-1.476 8.278-5.182 9.916-3.62 1.71-8.275.607-10.764-2.523-1.542-1.817-2.208-4.235-2.077-6.59V0h3.6v7.28h5.5l-.001-.001zm0 14.56c2.733.073 5.23-2.223 5.433-4.942.34-2.702-1.662-5.42-4.337-5.912-1.48-.204-2.982-.065-4.472-.11h-2.124c.022 2.054-.05 4.11.042 6.158.286 2.71 2.735 4.856 5.46 4.8l-.002.006zM91.13 7.191c3.604-.07 7.06 2.29 8.394 5.624.696 1.55.686 3.264.664 4.926v7.61c-3.21-.01-6.424.022-9.636-.018-3.69-.18-7.067-2.87-8.124-6.404-.97-3.07-.165-6.635 2.117-8.932 1.702-1.762 4.122-2.826 6.582-2.803l.003-.003zm5.46 14.56c-.016-2.02.032-4.04-.027-6.058-.208-2.705-2.715-4.972-5.43-4.9-2.58-.064-5.014 1.937-5.417 4.492-.474 2.454.936 5.126 3.274 6.04 1.44.628 3.033.367 4.556.423h3.045l-.001.003zm23.407-14.517c-.007 5.605.015 11.208-.01 16.81-.13 4.41-3.922 8.374-8.345 8.604-.84.044-1.682.016-2.523.022v-3.598c1.536-.007 3.178.15 4.537-.72 1.7-.955 2.78-2.878 2.743-4.822-3.19 2.574-8.136 2.44-11.238-.214-2.262-1.825-3.497-4.76-3.323-7.65v-8.43h3.6c.016 3.205-.034 6.413.026 9.617.195 2.587 2.46 4.797 5.055 4.926 2.674.276 5.306-1.74 5.77-4.383.203-1.48.067-2.984.108-4.476V7.239h3.6v-.005z"
        fill="currentColor"
        fillRule="nonzero"
      ></path>
    </svg>
  ),
  giphy: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164 35" {...props}>
      <g fillRule="evenodd" clip-rule="evenodd">
        <path fill="#00ff99" d="M0 3h4v29H0z"></path>
        <path fill="#9933ff" d="M24 11h4v21h-4z"></path>
        <path fill="#00ccff" d="M0 31h28v4H0z"></path>
        <path fill="#fff35c" d="M0 0h16v4H0z"></path>
        <path fill="#ff6666" d="M24 8V4h-4V0h-4v12h12V8"></path>
        <path fill="#121212" opacity="0.4" d="M24 16v-4h4M16 0v4h-4"></path>
      </g>
      <g fill="currentColor">
        <path d="M59.1 12c-2-1.9-4.4-2.4-6.2-2.4-4.4 0-7.3 2.6-7.3 8 0 3.5 1.8 7.8 7.3 7.8 1.4 0 3.7-.3 5.2-1.4v-3.5h-6.9v-6h13.3v12.1c-1.7 3.5-6.4 5.3-11.7 5.3-10.7 0-14.8-7.2-14.8-14.3 0-7.1 4.7-14.4 14.9-14.4 3.8 0 7.1.8 10.7 4.4L59.1 12zM68.2 31.2V4h7.6v27.2h-7.6zM88.3 23.8v7.3h-7.7V4h13.2c7.3 0 10.9 4.6 10.9 9.9 0 5.6-3.6 9.9-10.9 9.9h-5.5zm0-6.5h5.5c2.1 0 3.2-1.6 3.2-3.3 0-1.8-1.1-3.4-3.2-3.4h-5.5v6.7zM125 31.2V20.9h-9.8v10.3h-7.7V4h7.7v10.3h9.8V4h7.6v27.2H125zM149.2 13.3l5.9-9.3h8.7v.3l-10.8 16v10.8h-7.7V20.3L135 4.3V4h8.7l5.5 9.3z"></path>
      </g>
    </svg>
  ),
  openai: (props: LucideProps) => (
    <svg viewBox="0 0 1180 320" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="m367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z"
      />
      <path
        fill="currentColor"
        d="m614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84v-13.44h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z"
      />
      <path
        fill="currentColor"
        d="m747.65 242.64c25.2 0 45.12-13.2 54-35.28l-24.72-9.36c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z"
      />
      <path
        fill="currentColor"
        d="m823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88v74.64h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84v-13.44h-28.8z"
      />
      <path
        fill="currentColor"
        d="m1014.17 67.68-65.28 172.32h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32zm16.8 34.08 27.36 72h-54.24z"
      />
      <path fill="currentColor" d="m1163.69 68.18h-30.72v172.32h30.72z" />
      <path
        fill="currentColor"
        d="m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"
      />
    </svg>
  ),
}
