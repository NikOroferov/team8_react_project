import { useState, useEffect, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@mui/material/LinearProgress';
import styles from './Loader.module.css';

export default function Loader({handlerLoading}) {
  const [progress, setProgress] = useState(0);
  const StyledLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#F5F6FB',
    },
    barColorPrimary: {
      backgroundColor: '#52555F',
    },
  })(LinearProgress);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 2;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

    useLayoutEffect(
    () => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.loaderContainer}>
          {/* <button type="button" width='200px' heigth="200px" onClick={() => handlerLoading()}>ssssss</button> */}
          <div className={styles.cabbageIcon}>
            <svg
              width="89"
              height="83"
              viewBox="0 0 89 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M89 41.3468C89.0004 45.3208 88.1401 49.2206 86.4209 53.0172C84.4381 57.3957 82.0027 61.6013 79.1828 65.5166C79.0595 65.6878 78.9287 65.8491 78.7903 66.0016L82.1807 70.2134C82.4166 70.5055 82.4429 70.9144 82.2462 71.2345C82.1567 71.3803 80.016 74.8435 76.5925 77.7756C73.1575 80.7179 69.7839 82.0074 69.6424 82.0607C69.3335 82.1772 68.9851 82.1132 68.7385 81.8949L65.8104 79.3065C65.7388 79.2429 65.68 79.1709 65.6342 79.0936C63.0577 80.4169 58.2639 82.1932 50.3707 82.8338C43.381 83.4005 37.6495 82.5164 33.335 80.2062C33.104 80.0826 32.7262 79.8999 32.3181 79.7021C31.6193 79.3634 30.8961 79.0136 30.5013 78.7722C30.1123 78.5344 29.6642 78.2757 29.1675 77.9885C25.311 75.7606 18.1335 71.6141 12.6636 62.1401C8.02829 54.1107 7.54628 50.1154 7.1208 46.5908C6.86801 44.494 6.64903 42.6839 5.55774 40.247C2.78232 34.0469 0.511164 32.8085 0.488466 32.7965C0.262374 32.6782 0.0896894 32.4649 0.0282706 32.2173C-0.0340382 31.971 0.00646253 31.7043 0.151553 31.4945C0.601067 30.845 2.95812 27.6027 5.23596 27.5676C6.34016 27.5502 7.09588 27.933 7.64687 28.2126C8.21254 28.4993 8.22589 28.4891 8.38745 28.3682C8.56014 28.2384 8.65538 28.0019 8.79646 27.6267C9.13338 26.7314 9.64164 25.3788 12.2568 25.3161C14.3397 25.2659 15.5027 26.3643 16.3461 27.2582C17.2282 25.4912 19.6351 20.9602 22.7879 17.3663C24.8245 15.0446 27.2056 13.2238 28.8435 12.1045C30.0932 11.2511 30.9174 10.7367 31.4818 10.4429C30.8609 9.29784 30.5943 8.51948 30.3869 7.9145C30.1439 7.2046 30.0095 6.81342 29.4394 6.1991C27.543 4.15564 29.0335 0.816855 29.313 0.41323C29.4705 0.185195 29.7189 0.0371691 29.9935 0.00694144C30.5035 -0.0495161 30.8191 0.241644 31.3919 0.770629C32.3443 1.65033 34.3262 3.47997 37.6891 4.35879C40.7026 5.14603 44.2048 4.98156 47.294 4.83664C49.2447 4.74507 51.0868 4.65883 52.5431 4.83442C57.3035 5.40829 67.2101 6.60271 75.3535 13.9048C79.2478 17.3965 82.6494 21.7786 85.034 26.3114C85.0941 26.3905 85.1391 26.4785 85.1698 26.5714C85.7479 27.6898 86.2633 28.8158 86.7088 29.9391C88.2367 33.7908 89 37.6022 89 41.3468ZM86.7195 46.2289C87.9648 39.5865 86.4729 33.1192 83.6214 27.4822C82.8252 27.0915 80.161 25.9606 76.1328 26.0451C71.3857 26.1438 69.8863 26.9657 69.8721 26.9741C69.4515 27.2128 68.9081 27.0773 68.6597 26.6625C68.4109 26.2478 68.532 25.7153 68.9414 25.4583C69.1172 25.3481 70.8103 24.3773 76.0954 24.267C78.7173 24.2128 80.8135 24.6231 82.2893 25.068C80.0004 21.2421 77.1266 17.8842 74.1652 15.2282C72.6279 13.8497 71.0199 12.7002 69.3932 11.7387C68.597 12.0641 66.2964 12.7966 62.4337 12.3988C57.935 11.9356 55.4818 11.7654 55.4578 11.7636C54.9673 11.7302 54.6019 11.2986 54.6309 10.8159C54.6643 10.3256 55.0893 9.95572 55.5797 9.98996C55.6047 9.99173 58.0832 10.1638 62.6166 10.6301C64.5981 10.8337 66.1019 10.7114 67.1376 10.5247C61.3184 7.68245 55.5789 6.99078 52.3303 6.59916C51.0223 6.4418 49.2523 6.52448 47.3786 6.61205C44.1612 6.76319 40.5152 6.93433 37.2396 6.07818C33.7374 5.16292 31.5908 3.35995 30.4488 2.31888C30.2329 3.14702 30.1186 4.31522 30.7457 4.99C31.5726 5.88126 31.804 6.55649 32.0719 7.33839C32.3247 8.07763 32.6398 8.99689 33.6301 10.5967C34.5443 12.0734 35.7424 12.1085 37.6223 12.0436C38.8658 12.0001 40.2754 11.9516 41.5211 12.6771C43.6997 13.9457 43.199 15.4904 42.8701 16.5119C42.6912 17.0649 42.5354 17.5459 42.652 18.0473C43.0365 18.0944 44.1145 17.7659 44.9156 17.5219C46.7568 16.9609 49.2781 16.1932 51.823 16.6088C53.2445 16.8413 54.1142 17.2672 54.5597 17.9495C55.0804 18.7456 54.8627 19.5933 54.6865 20.2739C54.456 21.1687 54.4769 21.343 54.8503 21.5999C56.2754 22.5836 57.5763 22.8583 59.3766 23.2388C60.1354 23.3993 60.9957 23.5816 61.9633 23.8403C63.4747 24.2443 64.5318 25.02 65.105 26.1464C65.9764 27.8578 65.7365 30.3227 64.3502 33.9015C63.1819 36.918 62.913 39.6638 62.8939 41.4357C62.8939 41.445 62.8939 41.4544 62.8939 41.4637C62.8939 42.2363 63.2553 42.9337 63.8196 43.701C68.7447 48.8334 71.5237 54.4854 71.776 60.0553C71.8246 61.1314 71.7845 62.265 71.6786 63.4127C71.9932 64.664 72.9617 65.4184 73.887 65.7256C75.0388 66.1083 76.6553 65.982 77.7377 64.4782C80.4891 60.658 82.8652 56.5556 84.799 52.2842C85.3834 50.9933 85.8507 49.7011 86.2103 48.4138C85.7813 47.8461 83.6953 45.2194 80.0965 42.7968C79.6719 42.9839 77.1026 44.0779 74.827 44.2104C73.692 44.2762 72.2327 44.3144 71.7249 44.1241L72.3515 42.4599C72.3515 42.4599 72.3315 42.4488 72.2781 42.4363C72.2986 42.4412 72.8019 42.547 74.7233 42.435C75.9178 42.3656 77.2623 41.9647 78.2054 41.6291C73.5149 38.9264 71.8437 38.529 71.8268 38.5254C71.3515 38.4183 71.047 37.9467 71.1485 37.471C71.2504 36.9949 71.7128 36.6882 72.1904 36.7851C72.384 36.8242 74.2319 37.2554 79.4761 40.3097C83.0326 42.3812 85.4546 44.7891 86.7195 46.2289ZM69.4991 80.1924C70.5161 79.7404 72.9799 78.5273 75.434 76.4251C77.8868 74.3248 79.6755 71.8724 80.388 70.8233L77.7092 67.4961C76.7728 68.7145 75.2502 70.6699 74.1763 71.9177C71.3399 75.2169 68.0745 77.5933 67.9365 77.6929C67.88 77.7338 67.8203 77.7667 67.7594 77.7929C67.6232 77.8956 67.4434 78.025 67.2168 78.1748L69.4991 80.1924ZM69.3162 74.2772C70.3799 73.3402 71.6514 72.1257 72.826 70.7597C73.5447 69.924 74.4918 68.7345 75.3143 67.6814C74.6609 67.7197 73.9885 67.6334 73.324 67.4125C72.5407 67.1525 71.8606 66.7342 71.3118 66.1994C70.7978 69.2626 69.9718 72.2062 69.3162 74.2772ZM66.7353 76.3345C67.1812 75.1169 69.3175 69.0648 69.8792 63.4963C69.8155 63.1491 69.7871 62.7877 69.7933 62.4201C69.8244 60.7025 69.7025 59.06 69.4252 57.5428C68.4051 51.9681 65.3498 48.3355 63.5241 46.1654C63.2019 45.7831 62.9144 45.4399 62.6745 45.1345C62.5988 45.0381 62.5236 44.9403 62.4493 44.8416C60.9655 43.3067 59.2764 41.8162 57.3934 40.3893C49.9488 34.7483 46.3887 35.0991 44.6784 35.2675L44.4296 35.2915C43.9872 35.3311 43.1856 35.5791 42.3378 35.8419C40.1329 36.5246 37.1136 37.4595 34.8856 36.5762C32.8294 35.761 32.6443 33.6846 32.4654 31.6772C32.3372 30.2374 32.2041 28.7482 31.4337 27.5876C29.7821 25.1005 25.5326 26.354 23.2828 27.4862C22.3936 27.9339 21.7247 28.4855 21.135 28.9723C20.1242 29.8066 19.0788 30.669 17.5023 30.2743C16.4952 30.0222 15.8445 29.3252 15.2152 28.6518C14.4167 27.7974 13.7269 27.0591 12.3004 27.0933C10.8865 27.1275 10.7365 27.5271 10.4637 28.2517C10.2812 28.7376 10.0538 29.3421 9.45738 29.7893C8.39635 30.5859 7.49821 30.1307 6.84219 29.7986C6.3722 29.5604 5.92803 29.3354 5.26444 29.3457C4.43084 29.3581 3.07962 30.6463 2.14188 31.8065C3.20113 32.7098 5.07974 34.8217 7.18356 39.5207C8.38434 42.2034 8.62912 44.2308 8.88815 46.3774C9.29316 49.7335 9.75202 53.5373 14.2058 61.2519C19.4375 70.3139 26.0858 74.1545 30.0589 76.4491C30.5694 76.7443 31.0305 77.011 31.4306 77.2551C31.7515 77.4511 32.4965 77.812 33.0947 78.1014C33.5291 78.3121 33.9305 78.5068 34.1767 78.6384C37.8912 80.6281 42.802 81.4731 48.7903 81.1566C44.3036 79.8257 37.6326 77.1079 31.4333 71.7283C21.0406 62.7104 15.3696 45.1897 15.1333 44.4482C14.9855 43.9788 15.2437 43.48 15.7119 43.3316C16.1801 43.1827 16.6808 43.4409 16.8299 43.9085C16.8837 44.077 22.0407 60.0037 31.1516 69.0386C31.7288 67.2876 32.8855 63.2216 32.238 60.3944C31.9723 59.2316 31.7199 58.2265 31.4969 57.3401C30.945 55.146 30.5463 53.5608 30.4737 51.6952C30.4728 51.6836 30.4728 51.6712 30.4728 51.6601C30.4728 51.1849 30.8489 50.7906 31.3282 50.7724C31.8196 50.7533 32.2335 51.1351 32.2522 51.6258C32.315 53.227 32.6621 54.6721 33.1486 56.6102L34.8131 54.878C35.154 54.5237 35.717 54.5121 36.0717 54.8517C36.4264 55.1927 36.438 55.7545 36.098 56.1088L33.6559 58.6501C33.7587 59.0747 33.8655 59.5236 33.9741 59.9997C34.8563 63.8679 32.9639 69.3155 32.5766 70.365C32.5847 70.3721 32.5931 70.3792 32.6011 70.3863C35.928 73.273 39.4288 75.3663 42.624 76.875C41.3328 74.5048 39.6665 70.6348 40.8976 68.1717C41.7147 66.5359 43.1852 65.2913 44.6072 64.0866C46.1618 62.7704 47.63 61.5271 48.1819 59.8979C48.3395 59.4329 48.8446 59.1836 49.3106 59.3409C49.7761 59.4983 50.0262 60.0019 49.8682 60.4682C49.1579 62.5641 47.4298 64.0275 45.7585 65.4428C45.1515 65.9567 44.5595 66.4581 44.0321 66.9742C45.1884 67.3472 47.3759 67.969 49.1619 67.989C51.705 68.0175 55.306 66.7493 55.3421 66.7368C55.8054 66.5724 56.3145 66.8137 56.4792 67.276C56.6448 67.7383 56.4027 68.2473 55.9394 68.4118C55.7805 68.4687 52.0054 69.7996 49.1424 69.7676C46.6286 69.7396 43.5964 68.7198 42.7962 68.4345C42.6836 68.6078 42.5817 68.7843 42.4909 68.9652C41.3836 71.1843 44.2248 76.2798 45.3081 77.8903C45.3491 77.9512 45.3816 78.0152 45.4056 78.0814C50.4718 80.0893 54.2285 80.5774 54.2944 80.5854C54.3029 80.5867 54.3109 80.5876 54.3193 80.5889C62.3763 79.363 65.9804 76.9114 66.7353 76.3345ZM61.1181 41.1276C61.1648 39.2064 61.4866 36.3655 62.6892 33.2601C63.8477 30.2698 64.1259 28.1468 63.517 26.9519C63.1783 26.2856 62.5192 25.83 61.5022 25.5575C60.5809 25.3112 59.7811 25.1418 59.0081 24.9787C57.1566 24.5871 55.5575 24.2492 53.8387 23.0628C52.3869 22.0613 52.7474 20.6646 52.9628 19.8307C53.0553 19.4698 53.1613 19.0613 53.0687 18.9212C53.0313 18.8639 52.7812 18.5674 51.535 18.3634C49.4 18.0144 47.2014 18.6843 45.435 19.2226C43.7958 19.7218 42.6115 20.0828 41.7271 19.5902C41.4548 19.4382 41.0969 19.1342 40.9421 18.5461C40.6728 17.5232 40.9514 16.6595 41.1757 15.9652C41.489 14.993 41.5656 14.761 40.6238 14.2124C39.8227 13.7461 38.7839 13.7817 37.6842 13.8199C35.9916 13.8786 33.9123 13.9511 32.4204 11.9765C31.249 12.6228 27.2555 14.973 24.1271 18.5381C20.8354 22.2898 18.319 27.2702 17.7307 28.4788C17.7974 28.5082 17.8655 28.5322 17.935 28.5495C18.5834 28.7118 18.9706 28.4508 20.0005 27.6014C20.6298 27.0817 21.4136 26.4354 22.4808 25.898C25.927 24.1639 30.7279 23.3082 32.9171 26.6043C33.9372 28.141 34.097 29.9355 34.2385 31.5189C34.409 33.4308 34.5536 34.531 35.5426 34.923C37.1866 35.5751 39.8592 34.7475 41.8108 34.1434C42.7922 33.8393 43.64 33.577 44.2698 33.5201L44.503 33.4979C46.4399 33.3068 50.4691 32.9103 58.4695 38.9722C59.3971 39.6758 60.2805 40.3951 61.1181 41.1276Z"
                fill="#DFE2EB"
              />
            </svg>
          </div>

          <Box sx={{ width: '180px' }}>
            <StyledLinearProgress variant="determinate" value={progress} />
          </Box>
        </div>
      </div>
    </>
  );
}