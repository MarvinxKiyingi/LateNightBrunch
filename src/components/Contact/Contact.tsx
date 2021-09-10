import GoogleMap from "./ChildComponents/GoogleMap";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contactWrapper">
      <Link to="/">
        <svg className="contactLogo" width="163" height="66" viewBox="0 0 163 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.74805 18H0.576172L3.18359 3H4.35547L1.74805 18ZM9.0918 18.1953C8.24544 18.1823 7.51302 17.9479 6.89453 17.4922C6.27604 17.0299 5.82031 16.4049 5.52734 15.6172C5.24089 14.8229 5.13997 13.9668 5.22461 13.0488L5.25391 12.7168C5.34505 11.7402 5.63477 10.8125 6.12305 9.93359C6.61133 9.04818 7.22982 8.37435 7.97852 7.91211C8.72721 7.44336 9.52799 7.21875 10.3809 7.23828C11.1686 7.2513 11.8327 7.46615 12.373 7.88281C12.9199 8.29948 13.3171 8.87891 13.5645 9.62109C13.8118 10.3633 13.89 11.1836 13.7988 12.082L13.7207 12.7949H6.40625L6.37695 13.0293C6.2793 13.7389 6.33138 14.4193 6.5332 15.0703C6.73503 15.7148 7.0638 16.2292 7.51953 16.6133C7.98177 16.9909 8.53516 17.1862 9.17969 17.1992C9.80469 17.2188 10.3678 17.0983 10.8691 16.8379C11.3704 16.5775 11.8327 16.2292 12.2559 15.793L12.9395 16.3496C12.4642 16.9616 11.8978 17.4271 11.2402 17.7461C10.5892 18.0586 9.87305 18.2083 9.0918 18.1953ZM10.3223 8.23438C9.47591 8.20182 8.71745 8.5013 8.04688 9.13281C7.3763 9.76432 6.87174 10.653 6.5332 11.7988L12.666 11.8086L12.6953 11.6621C12.8125 10.7376 12.6497 9.94336 12.207 9.2793C11.7643 8.60872 11.1361 8.26042 10.3223 8.23438ZM19.1113 4.72852L18.6426 7.43359H20.7617L20.5957 8.39062H18.4766L17.3047 15.4414L17.2852 16.0469C17.2852 16.7565 17.6107 17.1211 18.2617 17.1406C18.4635 17.1471 18.7793 17.1243 19.209 17.0723L19.1602 18.0293C18.776 18.14 18.3854 18.1888 17.9883 18.1758C17.3047 18.1628 16.8066 17.9251 16.4941 17.4629C16.1816 16.9941 16.0677 16.3171 16.1523 15.4316L17.3145 8.39062H15.4199L15.5957 7.43359H17.4707L17.9492 4.72852H19.1113ZM23.1152 7.28711L22.4219 6.74023C23.112 5.93294 23.5417 5.1224 23.7109 4.30859L23.9453 3H25.0879L24.9121 4.11328C24.7103 5.38932 24.1113 6.44727 23.1152 7.28711ZM30.4883 15.2461C30.5924 14.3477 30.0456 13.6966 28.8477 13.293L27.168 12.7949C25.625 12.2741 24.8958 11.4049 24.9805 10.1875C25.026 9.30859 25.4297 8.5957 26.1914 8.04883C26.9596 7.49544 27.8711 7.22526 28.9258 7.23828C29.9609 7.2513 30.8008 7.54427 31.4453 8.11719C32.0898 8.68359 32.3893 9.44206 32.3438 10.3926H31.1914C31.2305 9.76107 31.0319 9.24674 30.5957 8.84961C30.166 8.45247 29.5931 8.2474 28.877 8.23438C28.1348 8.23438 27.5098 8.41016 27.002 8.76172C26.4941 9.10677 26.2077 9.56576 26.1426 10.1387C26.0449 10.9785 26.5592 11.5677 27.6855 11.9062L28.9062 12.2578L29.5605 12.4824C31.0319 13.0358 31.7253 13.9375 31.6406 15.1875C31.5885 16.0339 31.2207 16.7305 30.5371 17.2773C29.86 17.8177 28.9844 18.1204 27.9102 18.1855L27.5098 18.1953C26.8001 18.1823 26.1589 18.0456 25.5859 17.7852C25.013 17.5182 24.5736 17.1471 24.2676 16.6719C23.9616 16.1966 23.8281 15.6497 23.8672 15.0312L25.0293 15.041C25.0293 15.7051 25.2539 16.2292 25.7031 16.6133C26.1523 16.9974 26.7708 17.196 27.5586 17.209C28.3398 17.209 29.0039 17.0332 29.5508 16.6816C30.0977 16.3236 30.4102 15.8451 30.4883 15.2461ZM43.8184 7.22852C44.4499 7.24805 45.026 7.39779 45.5469 7.67773C46.0677 7.95768 46.4779 8.38411 46.7773 8.95703L47.1387 7.43359H48.2227L46.4453 17.8145C46.3216 18.6999 46.0417 19.4811 45.6055 20.1582C45.1693 20.8353 44.6094 21.3529 43.9258 21.7109C43.2487 22.0755 42.4935 22.2448 41.6602 22.2188C40.9961 22.2057 40.3613 22.0397 39.7559 21.7207C39.1439 21.3952 38.6523 20.9427 38.2812 20.3633L39.0039 19.6797C39.6745 20.6888 40.5501 21.2064 41.6309 21.2324C42.5944 21.2585 43.3984 20.9655 44.043 20.3535C44.694 19.748 45.1042 18.9212 45.2734 17.873L45.5273 16.6426C44.5898 17.7168 43.4603 18.2344 42.1387 18.1953C41.1491 18.1693 40.3776 17.7917 39.8242 17.0625C39.2773 16.3268 38.9909 15.3275 38.9648 14.0645C38.9258 12.8991 39.1211 11.7467 39.5508 10.6074C39.9805 9.4681 40.5632 8.61523 41.2988 8.04883C42.041 7.47591 42.8809 7.20247 43.8184 7.22852ZM40.1855 12.8926L40.127 13.8008C40.1074 14.8685 40.293 15.6953 40.6836 16.2812C41.0742 16.8607 41.6504 17.1634 42.4121 17.1895C43.0632 17.2155 43.6719 17.0625 44.2383 16.7305C44.8047 16.3984 45.293 15.9069 45.7031 15.2559L46.5332 10.3242C46.3574 9.69271 46.0514 9.19466 45.6152 8.83008C45.1855 8.45898 44.6322 8.26367 43.9551 8.24414C42.959 8.21159 42.1322 8.5957 41.4746 9.39648C40.8236 10.1973 40.3939 11.3626 40.1855 12.8926ZM53.6035 18.1953C52.7572 18.1823 52.0247 17.9479 51.4062 17.4922C50.7878 17.0299 50.332 16.4049 50.0391 15.6172C49.7526 14.8229 49.6517 13.9668 49.7363 13.0488L49.7656 12.7168C49.8568 11.7402 50.1465 10.8125 50.6348 9.93359C51.123 9.04818 51.7415 8.37435 52.4902 7.91211C53.2389 7.44336 54.0397 7.21875 54.8926 7.23828C55.6803 7.2513 56.3444 7.46615 56.8848 7.88281C57.4316 8.29948 57.8288 8.87891 58.0762 9.62109C58.3236 10.3633 58.4017 11.1836 58.3105 12.082L58.2324 12.7949H50.918L50.8887 13.0293C50.791 13.7389 50.8431 14.4193 51.0449 15.0703C51.2467 15.7148 51.5755 16.2292 52.0312 16.6133C52.4935 16.9909 53.0469 17.1862 53.6914 17.1992C54.3164 17.2188 54.8796 17.0983 55.3809 16.8379C55.8822 16.5775 56.3444 16.2292 56.7676 15.793L57.4512 16.3496C56.9759 16.9616 56.4095 17.4271 55.752 17.7461C55.1009 18.0586 54.3848 18.2083 53.6035 18.1953ZM54.834 8.23438C53.9876 8.20182 53.2292 8.5013 52.5586 9.13281C51.888 9.76432 51.3835 10.653 51.0449 11.7988L57.1777 11.8086L57.207 11.6621C57.3242 10.7376 57.1615 9.94336 56.7188 9.2793C56.276 8.60872 55.6478 8.26042 54.834 8.23438ZM63.623 4.72852L63.1543 7.43359H65.2734L65.1074 8.39062H62.9883L61.8164 15.4414L61.7969 16.0469C61.7969 16.7565 62.1224 17.1211 62.7734 17.1406C62.9753 17.1471 63.291 17.1243 63.7207 17.0723L63.6719 18.0293C63.2878 18.14 62.8971 18.1888 62.5 18.1758C61.8164 18.1628 61.3184 17.9251 61.0059 17.4629C60.6934 16.9941 60.5794 16.3171 60.6641 15.4316L61.8262 8.39062H59.9316L60.1074 7.43359H61.9824L62.4609 4.72852H63.623ZM71.9824 18H70.8105L72.6562 7.43359H73.8184L71.9824 18ZM72.9785 4.37695C73.0111 3.95378 73.291 3.68685 73.8184 3.57617C74.0723 3.62174 74.2513 3.70312 74.3555 3.82031C74.4661 3.93099 74.5378 4.11654 74.5703 4.37695C74.5052 4.62435 74.4108 4.80664 74.2871 4.92383C74.1634 5.03451 73.9779 5.11589 73.7305 5.16797C73.2031 5.08984 72.9525 4.82617 72.9785 4.37695ZM78.0859 7.43359L77.7344 9.24023C78.2031 8.58919 78.7435 8.09115 79.3555 7.74609C79.974 7.39453 80.6348 7.22526 81.3379 7.23828C82.3535 7.26432 83.0924 7.61914 83.5547 8.30273C84.0169 8.98633 84.1797 9.92708 84.043 11.125L82.8906 18H81.7383L82.8906 11.1055C82.9297 10.7344 82.9362 10.3763 82.9102 10.0312C82.7995 8.8724 82.168 8.27669 81.0156 8.24414C80.332 8.23112 79.694 8.4362 79.1016 8.85938C78.5091 9.27604 77.9883 9.90755 77.5391 10.7539L76.2891 18H75.1367L76.9727 7.43359H78.0859Z" fill="#FF7B51" />
          <path d="M20.6445 43.6943C20.4508 45.4147 19.8641 46.9414 18.8843 48.2744C17.9045 49.596 16.6284 50.6157 15.0562 51.3335C13.4839 52.0399 11.7863 52.376 9.96338 52.3418C8.32275 52.3076 6.8929 51.9316 5.67383 51.2139C4.45475 50.4847 3.49202 49.4365 2.78564 48.0693C2.09066 46.6908 1.69759 45.1071 1.60645 43.3184C1.52669 41.917 1.66911 40.1738 2.03369 38.0889C2.40967 36.0039 3.07048 34.1525 4.01611 32.5347C4.97314 30.9168 6.10677 29.6351 7.41699 28.6895C9.2627 27.3678 11.3704 26.7298 13.7402 26.7754C16.3151 26.821 18.3545 27.6185 19.8584 29.168C21.3737 30.7061 22.2054 32.848 22.3535 35.5938L17.3633 35.5767C17.3633 34.0044 17.05 32.8537 16.4233 32.1245C15.7967 31.3953 14.8226 31.008 13.501 30.9624C11.792 30.9054 10.3849 31.515 9.27979 32.791C8.18604 34.0671 7.45117 35.9299 7.0752 38.3794C6.71061 40.7606 6.55111 42.5436 6.59668 43.7285C6.65365 45.2324 6.98975 46.3433 7.60498 47.061C8.22021 47.7674 9.0804 48.1377 10.1855 48.1719C11.7122 48.2288 12.9313 47.87 13.8428 47.0952C14.7656 46.3091 15.3752 45.1868 15.6714 43.7285L20.6445 43.6943ZM32.7441 52.3418C31.0921 52.3076 29.6338 51.9202 28.3691 51.1797C27.1159 50.4277 26.119 49.3511 25.3784 47.9497C24.6493 46.5369 24.2277 44.9191 24.1138 43.0962C23.9884 41.2277 24.1878 39.2339 24.7119 37.1147C25.236 34.9956 26.0791 33.1328 27.2412 31.5264C28.4033 29.9199 29.7648 28.7179 31.3257 27.9204C32.8979 27.1229 34.5955 26.7412 36.4185 26.7754C38.0933 26.8096 39.5573 27.2083 40.8105 27.9717C42.0638 28.7236 43.0493 29.8117 43.7671 31.2358C44.4849 32.6486 44.895 34.255 44.9976 36.0552C45.1115 38.0604 44.895 40.1226 44.3481 42.2417C43.8013 44.3608 42.9525 46.1951 41.8018 47.7446C40.651 49.2941 39.3009 50.4562 37.7515 51.231C36.2134 52.0057 34.5443 52.376 32.7441 52.3418ZM39.8364 38.875L39.9731 37.2515C40.0871 35.2235 39.8136 33.6854 39.1528 32.6372C38.5034 31.589 37.5122 31.0422 36.1792 30.9966C34.0942 30.9282 32.4365 31.8511 31.2061 33.7651C29.987 35.6792 29.2977 38.3566 29.1382 41.7974C29.0243 43.814 29.292 45.3691 29.9414 46.4629C30.5908 47.5452 31.5991 48.1092 32.9663 48.1548C34.755 48.2345 36.2362 47.5396 37.4097 46.0698C38.5832 44.5887 39.3522 42.498 39.7168 39.7979L39.8364 38.875ZM66.0352 52H61.1816L54.2603 35.4058L51.3721 52H46.3647L50.6885 27.1172H55.5249L62.4634 43.7456L65.3516 27.1172H70.3418L66.0352 52ZM91.8066 31.27H84.4238L80.835 52H75.8276L79.4165 31.27H72.1191L72.854 27.1172H92.5415L91.8066 31.27ZM103.787 46.873H95.105L92.5415 52H87.0215L100.317 27.1172H104.949L109.683 52H104.573L103.787 46.873ZM97.1558 42.7202H103.154L101.753 33.4575L97.1558 42.7202ZM132.104 43.6943C131.911 45.4147 131.324 46.9414 130.344 48.2744C129.364 49.596 128.088 50.6157 126.516 51.3335C124.944 52.0399 123.246 52.376 121.423 52.3418C119.783 52.3076 118.353 51.9316 117.134 51.2139C115.915 50.4847 114.952 49.4365 114.246 48.0693C113.551 46.6908 113.158 45.1071 113.066 43.3184C112.987 41.917 113.129 40.1738 113.494 38.0889C113.87 36.0039 114.53 34.1525 115.476 32.5347C116.433 30.9168 117.567 29.6351 118.877 28.6895C120.723 27.3678 122.83 26.7298 125.2 26.7754C127.775 26.821 129.814 27.6185 131.318 29.168C132.834 30.7061 133.665 32.848 133.813 35.5938L128.823 35.5767C128.823 34.0044 128.51 32.8537 127.883 32.1245C127.257 31.3953 126.283 31.008 124.961 30.9624C123.252 30.9054 121.845 31.515 120.74 32.791C119.646 34.0671 118.911 35.9299 118.535 38.3794C118.171 40.7606 118.011 42.5436 118.057 43.7285C118.114 45.2324 118.45 46.3433 119.065 47.061C119.68 47.7674 120.54 48.1377 121.646 48.1719C123.172 48.2288 124.391 47.87 125.303 47.0952C126.226 46.3091 126.835 45.1868 127.131 43.7285L132.104 43.6943ZM155.483 31.27H148.101L144.512 52H139.504L143.093 31.27H135.796L136.531 27.1172H156.218L155.483 31.27Z" fill="#FF7B51" />
          <path d="M0 55.418H154.509V57.127H0V55.418Z" fill="#FF7B51" />
        </svg>

      </Link>

      <div className="infoSection">
        <div className="mapWrapper">
          <GoogleMap></GoogleMap>
        </div>
        <div className="infoWrapper">
          <div className="openingHours">
            <div className="inforHeadersWrapper">
              <svg
                width="100"
                height="53"
                viewBox="0 0 100 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 27.9768C100 53 77.8285 53 50.1381 53C22.4476 53 0 53 0 25.0232C0 0 22.1715 0 49.8619 0C77.5524 0 100 0 100 27.9768Z"
                  fill="#FFAF75"
                />
                <path
                  d="M28.4551 33.0439H25.5938L26.6484 26.9501H21.1309L20.0664 33.0439H17.2051L19.6758 18.8251H22.5371L21.5312 24.5869H27.0586L28.0547 18.8251H30.916L28.4551 33.0439ZM36.7266 33.2392C35.7826 33.2197 34.9492 32.9983 34.2266 32.5751C33.5104 32.1454 32.9408 31.5302 32.5176 30.7294C32.1009 29.9221 31.86 28.9977 31.7949 27.956C31.7233 26.8883 31.8372 25.749 32.1367 24.538C32.4362 23.3271 32.918 22.2626 33.582 21.3447C34.2461 20.4267 35.0241 19.7398 35.916 19.2841C36.8145 18.8284 37.7845 18.6103 38.8262 18.6298C39.7832 18.6494 40.6198 18.8772 41.3359 19.3134C42.0521 19.7431 42.6152 20.3648 43.0254 21.1786C43.4355 21.9859 43.6699 22.9039 43.7285 23.9326C43.7936 25.0784 43.6699 26.2568 43.3574 27.4677C43.0449 28.6786 42.5599 29.7268 41.9023 30.6122C41.2448 31.4977 40.4733 32.1617 39.5879 32.6044C38.709 33.0471 37.7552 33.2587 36.7266 33.2392ZM40.7793 25.5439L40.8574 24.6161C40.9225 23.4573 40.7663 22.5784 40.3887 21.9794C40.0176 21.3805 39.4512 21.068 38.6895 21.0419C37.498 21.0029 36.5508 21.5302 35.8477 22.624C35.151 23.7177 34.7572 25.2477 34.666 27.2138C34.6009 28.3661 34.7539 29.2548 35.125 29.8798C35.4961 30.4983 36.0723 30.8206 36.8535 30.8466C37.8757 30.8922 38.722 30.4951 39.3926 29.6552C40.0632 28.8089 40.5026 27.6142 40.7109 26.0712L40.7793 25.5439ZM57.4785 18.8251L55.877 28.2001C55.6556 29.7691 55.0046 31.0094 53.9238 31.9208C52.8431 32.8323 51.502 33.275 49.9004 33.249C48.8978 33.2294 48.0254 33.0113 47.2832 32.5947C46.5475 32.1715 46.0039 31.579 45.6523 30.8173C45.3008 30.0491 45.1803 29.18 45.291 28.2099L46.8828 18.8251H49.7441L48.1523 28.2197C48.1068 28.5842 48.1035 28.926 48.1426 29.2451C48.2728 30.2997 48.901 30.8466 50.0273 30.8857C50.8346 30.9117 51.4954 30.6904 52.0098 30.2216C52.5241 29.7529 52.8561 29.0823 53.0059 28.2099L54.6074 18.8251H57.4785ZM63.4746 27.8388H61.1504L60.2422 33.0439H57.3809L59.8516 18.8251L64.5586 18.8349C66.1341 18.8349 67.3451 19.206 68.1914 19.9482C69.0443 20.6904 69.4219 21.7223 69.3242 23.0439C69.1875 24.997 68.1458 26.3544 66.1992 27.1161L68.2012 32.8876V33.0439H65.1543L63.4746 27.8388ZM61.5605 25.4658L63.6895 25.4853C64.4447 25.4723 65.0664 25.2704 65.5547 24.8798C66.0495 24.4827 66.3457 23.9456 66.4434 23.2685C66.5345 22.637 66.4336 22.1422 66.1406 21.7841C65.8477 21.426 65.3822 21.234 64.7441 21.2079L62.3027 21.1982L61.5605 25.4658ZM77.6836 29.2451C77.8203 28.4703 77.4395 27.8779 76.541 27.4677L74.6562 26.7158C72.4688 25.7392 71.4303 24.3948 71.541 22.6826C71.5866 21.8883 71.847 21.1852 72.3223 20.5732C72.7975 19.9612 73.4648 19.4827 74.3242 19.1376C75.1836 18.7861 76.1113 18.6168 77.1074 18.6298C78.4811 18.6559 79.5911 19.066 80.4375 19.8603C81.2839 20.6481 81.7005 21.706 81.6875 23.0341H78.8359C78.8685 22.3896 78.7253 21.8883 78.4062 21.5302C78.0938 21.1721 77.6055 20.9866 76.9414 20.9736C76.2904 20.9606 75.724 21.1103 75.2422 21.4228C74.7604 21.7288 74.474 22.152 74.3828 22.6923C74.2591 23.402 74.7344 23.9651 75.8086 24.3818L77.0977 24.8701L77.8398 25.2119C79.7604 26.1624 80.6589 27.497 80.5352 29.2158C80.4766 30.0556 80.2064 30.7815 79.7246 31.3935C79.2493 31.999 78.5983 32.4645 77.7715 32.79C76.9512 33.1155 76.0462 33.2685 75.0566 33.249C74.0475 33.2294 73.1491 33.0178 72.3613 32.6142C71.5736 32.2106 70.9746 31.6409 70.5645 30.9052C70.1803 30.2216 70.0013 29.4404 70.0273 28.5615L72.8887 28.5712C72.7975 30.1142 73.556 30.8987 75.1641 30.9247C75.8607 30.9247 76.4336 30.7717 76.8828 30.4658C77.332 30.1598 77.599 29.7529 77.6836 29.2451Z"
                  fill="#333300"
                />
              </svg>
            </div>

            <div className="openingHours-col">
              <p>Mon-Fri</p>
              <hr className="dots" />
              <p>12-00</p>
            </div>
            <div className="openingHours-col">
              <p>Sat-Sun</p>
              <hr className="dots" />
              <p>09-00</p>
            </div>
          </div>
          <div className="loaction">
            <div className="locationInfo">
              <div className="inforHeadersWrapper">
                <svg
                  width="202"
                  height="53"
                  viewBox="0 0 202 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M202 27.9768C202 53 157.214 53 101.279 53C45.3441 53 0 53 0 25.0232C0 0 44.7864 0 100.721 0C156.656 0 202 0 202 27.9768Z"
                    fill="#FFAF75"
                  />
                  <path
                    d="M28.6699 28.9131L32.0977 18.8252H35.0176L29.7344 33.0439H26.8535L26.1016 23.5713L22.3809 33.0439H19.5L18.6602 18.8252H21.4531L21.7363 28.8643L25.5645 18.8252H27.9961L28.6699 28.9131ZM45.5254 33.0439H42.6641L43.7188 26.9502H38.2012L37.1367 33.0439H34.2754L36.7461 18.8252H39.6074L38.6016 24.5869H44.1289L45.125 18.8252H47.9863L45.5254 33.0439ZM57.4688 26.8818H52.0195L51.3555 30.6904H57.7617L57.3516 33.0439H48.084L50.5547 18.8252H59.8027L59.3828 21.1982H53.0059L52.4102 24.5869H57.8789L57.4688 26.8818ZM65.1934 27.8389H62.8691L61.9609 33.0439H59.0996L61.5703 18.8252L66.2773 18.835C67.8529 18.835 69.0638 19.2061 69.9102 19.9482C70.763 20.6904 71.1406 21.7223 71.043 23.0439C70.9062 24.9971 69.8646 26.3545 67.918 27.1162L69.9199 32.8877V33.0439H66.873L65.1934 27.8389ZM63.2793 25.4658L65.4082 25.4854C66.1634 25.4723 66.7852 25.2705 67.2734 24.8799C67.7682 24.4827 68.0645 23.9456 68.1621 23.2686C68.2533 22.637 68.1523 22.1423 67.8594 21.7842C67.5664 21.4261 67.1009 21.234 66.4629 21.208L64.0215 21.1982L63.2793 25.4658ZM80.9648 26.8818H75.5156L74.8516 30.6904H81.2578L80.8477 33.0439H71.5801L74.0508 18.8252H83.2988L82.8789 21.1982H76.502L75.9062 24.5869H81.375L80.9648 26.8818ZM99.4023 21.1982H95.1836L93.1328 33.0439H90.2715L92.3223 21.1982H88.1523L88.5723 18.8252H99.8223L99.4023 21.1982ZM104.5 33.2393C103.556 33.2197 102.723 32.9984 102 32.5752C101.284 32.1455 100.714 31.5303 100.291 30.7295C99.8743 29.9222 99.6335 28.9977 99.5684 27.9561C99.4967 26.8883 99.6107 25.749 99.9102 24.5381C100.21 23.3271 100.691 22.2627 101.355 21.3447C102.02 20.4268 102.798 19.7399 103.689 19.2842C104.588 18.8285 105.558 18.6104 106.6 18.6299C107.557 18.6494 108.393 18.8773 109.109 19.3135C109.826 19.7432 110.389 20.3649 110.799 21.1787C111.209 21.986 111.443 22.904 111.502 23.9326C111.567 25.0785 111.443 26.2568 111.131 27.4678C110.818 28.6787 110.333 29.7269 109.676 30.6123C109.018 31.4977 108.247 32.1618 107.361 32.6045C106.482 33.0472 105.529 33.2588 104.5 33.2393ZM108.553 25.5439L108.631 24.6162C108.696 23.4574 108.54 22.5785 108.162 21.9795C107.791 21.3805 107.225 21.068 106.463 21.042C105.271 21.0029 104.324 21.5303 103.621 22.624C102.924 23.7178 102.531 25.2477 102.439 27.2139C102.374 28.3662 102.527 29.2549 102.898 29.8799C103.27 30.4984 103.846 30.8206 104.627 30.8467C105.649 30.8923 106.495 30.4951 107.166 29.6553C107.837 28.8089 108.276 27.6143 108.484 26.0713L108.553 25.5439ZM126.551 27.2334H121.102L120.086 33.0439H117.225L119.695 18.8252H128.699L128.279 21.1982H122.146L121.502 24.8701H126.971L126.551 27.2334ZM130.994 33.0439H128.133L130.594 18.8252H133.455L130.994 33.0439ZM144.949 33.0439H142.176L138.221 23.5615L136.57 33.0439H133.709L136.18 18.8252H138.943L142.908 28.3271L144.559 18.8252H147.41L144.949 33.0439ZM147.518 33.0439L149.988 18.8252L154.07 18.835C155.027 18.8545 155.887 19.0726 156.648 19.4893C157.417 19.8994 158.038 20.4919 158.514 21.2666C158.989 22.0413 159.275 22.9137 159.373 23.8838C159.425 24.4502 159.419 25.0296 159.354 25.6221L159.285 26.1396C158.999 28.223 158.178 29.8962 156.824 31.1592C155.477 32.4157 153.839 33.0439 151.912 33.0439H147.518ZM152.439 21.1982L150.789 30.6904L151.98 30.7002C153.296 30.7002 154.35 30.2184 155.145 29.2549C155.945 28.2913 156.404 26.8363 156.521 24.8896L156.541 24.5771C156.561 23.5029 156.355 22.6794 155.926 22.1064C155.496 21.5335 154.855 21.234 154.002 21.208L152.439 21.1982ZM178.143 18.8252L176.541 28.2002C176.32 29.7692 175.669 31.0094 174.588 31.9209C173.507 32.8324 172.166 33.2751 170.564 33.249C169.562 33.2295 168.689 33.0114 167.947 32.5947C167.212 32.1715 166.668 31.5791 166.316 30.8174C165.965 30.0492 165.844 29.18 165.955 28.21L167.547 18.8252H170.408L168.816 28.2197C168.771 28.5843 168.768 28.9261 168.807 29.2451C168.937 30.2998 169.565 30.8467 170.691 30.8857C171.499 30.9118 172.16 30.6904 172.674 30.2217C173.188 29.7529 173.52 29.0824 173.67 28.21L175.271 18.8252H178.143ZM185.867 29.2451C186.004 28.4704 185.623 27.8779 184.725 27.4678L182.84 26.7158C180.652 25.7393 179.614 24.3949 179.725 22.6826C179.77 21.8883 180.031 21.1852 180.506 20.5732C180.981 19.9613 181.648 19.4827 182.508 19.1377C183.367 18.7861 184.295 18.6169 185.291 18.6299C186.665 18.6559 187.775 19.0661 188.621 19.8604C189.467 20.6481 189.884 21.7061 189.871 23.0342H187.02C187.052 22.3896 186.909 21.8883 186.59 21.5303C186.277 21.1722 185.789 20.9867 185.125 20.9736C184.474 20.9606 183.908 21.1104 183.426 21.4229C182.944 21.7288 182.658 22.152 182.566 22.6924C182.443 23.402 182.918 23.9652 183.992 24.3818L185.281 24.8701L186.023 25.2119C187.944 26.1624 188.842 27.4971 188.719 29.2158C188.66 30.0557 188.39 30.7816 187.908 31.3936C187.433 31.999 186.782 32.4645 185.955 32.79C185.135 33.1156 184.23 33.2686 183.24 33.249C182.231 33.2295 181.333 33.0179 180.545 32.6143C179.757 32.2106 179.158 31.641 178.748 30.9053C178.364 30.2217 178.185 29.4404 178.211 28.5615L181.072 28.5713C180.981 30.1143 181.74 30.8988 183.348 30.9248C184.044 30.9248 184.617 30.7718 185.066 30.4658C185.516 30.1598 185.783 29.7529 185.867 29.2451Z"
                    fill="#333300"
                  />
                </svg>
              </div>

              <address>
                <a className="address" href="">
                  Åsögatan 175
                </a>
                <a className="email" href="mailto:latenightbrunch@contact.com">
                  latenightbrunch@contact.com
                </a>
                <a className="phoneNumber" href="tel:08-1234567">
                  08-123 45 67
                </a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
